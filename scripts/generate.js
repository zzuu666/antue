const path = require('path')
const marked = require('marked')
const to = require('./utils/to')
const ignore = require('./config/ignore')
const { failLog, generalLog, successLog } = require('./utils/log')
const { parseComponentMarkdown, parseDocMarkdown, parseDeomMarkdown } = require('./utils/parse')
const { readUTF8FilePromise, readDirPromise, stableWriteFile } = require('./utils/file')
const { getFilesByExtension, generateCamelName } = require('./utils/utils')

const resolve = dir => {
  return path.join(__dirname, '..', dir)
}

marked.setOptions({
  highlight (code) {
    return require('highlight.js').highlightAuto(code).value
  }
})
const generateNormalVue = (oriPath, oriDir, targePath, type = 'doc', demos = []) => {
  const componentMarkdonwFile = getFilesByExtension(oriDir, '.md')
  componentMarkdonwFile.forEach(async file => {
    if (file.indexOf('zh-CN') === -1 && file.indexOf('en-US') === -1) return
    const lang = file.indexOf('zh-CN') > -1 ? 'zh-CN' : 'en-US'
    const route = path.join(oriPath, file)
    let mdErr, mdContent, mdJson
    ;[mdErr, mdContent] = await to(readUTF8FilePromise(route))
    if (mdErr) {
      failLog(`读取文件${route}失败`)
    } else {
      mdJson = type === 'component' ? parseComponentMarkdown(mdContent, lang) : parseDocMarkdown(mdContent, lang)
    }
    const data = generateVueContainer(mdJson, demos)
    stableWriteFile(targePath, file.replace('.md', '.vue'), data)
  })
}

const generateVueContainer = (main, demos = []) => {
  const generateCodeJson = (demos, isOne) => {
    const renderCodeTowCols = (even, odd) => {
      const string = `
        <atu-col :span="12">
          ${even}
        </atu-col>
        <atu-col :span="12">
          ${odd}
        </atu-col>`
      return string
    }

    const renderCodeOneCol = (code) => {
      const string = `
        <atu-col :span="24">
          ${code}
        </atu-col>
      `
      return string
    }

    const renderCodeRow = (isOneCol, code, odd) => {
      const h2 = `<h2> 代码展示 </h2>`
      const col = isOneCol ? renderCodeOneCol(code) : renderCodeTowCols(code, odd)
      const string = `
      ${h2}
      <atu-row :gutter="12">
        ${col}
      </atu-row>
      `
      return string
    }

    const renderCodeShowCode = (title, desc, display, code) => {
      const string = `
        <code-show
          title="${title}">
          <template slot="desc">${desc}</template>
          ${display}
          <template slot="code">${code}</template>
        </code-show>
      `
      return string
    }

    const codeInfoArray = (codes) => {
      return codes
        .sort((a, b) => a.header.order - b.header.order)
        .map((el, index) => {
          const desc = lang === 'zh-CN' ? marked(el.zhCN) : marked(el.enUS)
          const title = lang === 'zh-CN' ? el.header['zh-CN'] : el.header['en-US']
          const codeHtml = marked(el.codeMd)
          const componentName = generateCamelName(el.component, el.name)
          const code = renderCodeShowCode(title, desc, el.display, codeHtml)
          return {
            code,
            index,
            componentName,
            name: el.name
          }
        })
    }

    const renderImortString = (component, file) => {
      return `import ${component} from './demo/${file}'`
    }

    const renderComponentsString = (component) => {
      return `${component},`
    }

    const mergeInfo = (infos, isOne) => {
      const imports = infos.map(el => renderImortString(el.componentName, el.name)).join('\n')
      const components = infos.map(el => renderComponentsString(el.componentName)).join('\n')
      const all = infos.map(el => el.code).join('')
      const odd = infos.filter(el => el.index % 2).map(el => el.code).join('')
      const even = infos.filter(el => !(el.index % 2)).map(el => el.code).join('')
      const code = isOne ? renderCodeRow(isOne, all) : renderCodeRow(isOne, even, odd)
      return {
        imports,
        components,
        code
      }
    }

    return mergeInfo(codeInfoArray(demos), isOne)
  }
  const lang = main.lang
  const isOne = !!main.header.cols

  const handleMainContent = (content) => {
    return {
      title: content.header.title || '',
      subtitle: content.header.subtitle || '',
      beforeCode: content.beforeCode ? marked(content.beforeCode) : '',
      afterCode: content.afterCode ? marked(content.afterCode) : '',
      content: content.content ? marked(content.content) : ''
    }
  }
  const result = handleMainContent(main)
  const code = generateCodeJson(demos, isOne)
  const template =
  `<template>
    <container>
      <h1>${result.title} ${result.subtitle}</h1>
      ${result.beforeCode}
      ${result.content}
      ${code.code}
      ${result.afterCode}
    </container>
  </template>
  <script>
  import Container from '../../common/layout/container'
  import CodeShow from '../../common/layout/code-show'
  import AtuRow from '@/row'
  import AtuCol from '@/col'
  ${code.imports}
  export default {
    components: {
      ${code.components}
      Container,
      CodeShow,
      AtuRow,
      AtuCol
    }
  }
  </script>
  `
  return template
}

const generateComponents = (components) => {
  const readDeomMds = async (route, component, name) => {
    let mdErr, md
    ;[mdErr, md] = await to(readUTF8FilePromise(route))
    return mdErr ? failLog(`读取文件${route}失败`) : parseDeomMarkdown(md, component, name)
  }

  const generateDomes = (route, demos) => {
    demos.forEach(demo => {
      stableWriteFile(route, `${demo.name}.vue`, demo.code)
    })
  }

  const generateComponent = async (component) => {
    const componentsPath = resolve('components')
    const componentsComponentPath = path.join(componentsPath, component)
    let componentsComponentErr, componentsComponentDir
    ;[componentsComponentErr, componentsComponentDir] = await to(readDirPromise(componentsComponentPath))
    if (componentsComponentErr) {
      failLog(`${componentsComponentPath}打开失败。`)
      return
    }
    const componentDemoPath = path.join(componentsPath, component, 'demo')
    let demos = []
    let componentDemoMdErr, componentDemoMdPaths
    ;[componentDemoMdErr, componentDemoMdPaths] = await to(readDirPromise(componentDemoPath))
    if (componentDemoMdErr) {
      generalLog(`${componentDemoPath}不存在，已跳过。`)
    } else {
      const vaildComponentDemoMdPaths = getFilesByExtension(componentDemoMdPaths, '.md')
      vaildComponentDemoMdPaths && await Promise.all(vaildComponentDemoMdPaths.map(componentDemoMdPath => {
        const route = path.join(componentDemoPath, componentDemoMdPath)
        const name = componentDemoMdPath.replace('.md', '')
        return readDeomMds(route, component, name)
      })).then(v => {
        demos = v
      })
    }

    const siteDocPath = path.join(resolve('site'), 'components', component)
    generateDomes(path.join(siteDocPath, 'demo'), demos)
    generateNormalVue(componentsComponentPath, componentsComponentDir, siteDocPath, 'component', demos)
  }

  components.forEach(component => {
    ignore.components.indexOf(component) === -1 && generateComponent(component)
  })
}

const generateDocs = (docs) => {
  const generateDoc = async (doc) => {
    const docsPath = resolve('docs')
    const docsDocPath = path.join(docsPath, doc)
    let docsDocErr, docsDoctDir
    ;[docsDocErr, docsDoctDir] = await to(readDirPromise(docsDocPath))
    if (docsDocErr) {
      generalLog(`${docsDoctDir}不是文件夹，已跳过。`)
      return
    }
    const siteDocPath = path.join(resolve('site'), 'docs', doc)
    generateNormalVue(docsDocPath, docsDoctDir, siteDocPath)
  }

  docs.forEach(doc => {
    ignore.docs.indexOf(doc) === -1 && generateDoc(doc)
  })
}

const generateComponentsRouterConfig = async () => {
  const sitePath = resolve('site')
  let importString = `import Vue from 'vue'
  import Router from 'vue-router'
  `
  let configString = ''
  await Promise.all(['components', 'docs'].map(async dir => {
    let err, components
    ;[err, components] = await to(readDirPromise(path.join(sitePath, dir)))
    await Promise.all(components.map(async component => {
      let err, files
      ;[err, files] = await to(readDirPromise(path.join(sitePath, dir, component)))
      getFilesByExtension(files, '.vue').forEach(file => {
        let lang = file.indexOf('zh-CN') > -1 ? 'zh' : 'en'
        let mdName = file.split('.')[0]
        let dirName = dir.slice(0, 4)
        let name = generateCamelName(dirName, component, mdName, lang)
        importString += `import ${name} from './${dir}/${component}/${file}'\n`
        configString += `{
          path: '/${dir}/${component}/${mdName}/${lang}',
          component: ${name},
          name: '${name}'
        },`
      })
    }))
  }))
  importString += 'Vue.use(Router)\n'
  const config = `let router = new Router({
    routes: [
      ${configString}
    ]
  })
  
  export default router`
  stableWriteFile(sitePath, 'router.js', importString + config)
}

const generate = async (params) => {
  const cDir = await readDirPromise(resolve('components'))
  const dDir = await readDirPromise(resolve('docs'))
  if (params[0] === '-a') {
    generateDocs(dDir)
    generateComponents(cDir)
  } else if (params[0] === '-c') {
    generateComponents(cDir)
  } else if (params[0] === '-d') {
    generateDocs(dDir)
  } else if (params[0] === '-r') {
    generateComponentsRouterConfig()
  }
}

const params = process.argv.splice(2)
generate(params)
