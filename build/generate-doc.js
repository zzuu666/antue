const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const to = require('./to')
const marked = require('marked')

const generateConsole = (color, tip) => text => console.log(chalk[color](tip), text)
const successLog = generateConsole('green', '[OK]')
const failLog = generateConsole('red', '[ERROR]')
const generalLog = generateConsole('yellow', '[TIP]')

const resolve = dir => {
  return path.join(__dirname, '..', dir)
}

const readDirPromise = (path) => {
  return new Promise((resolve, reject) => {
    fs.readdir(path, (err, data) => err ? reject(err) : resolve(data))
  })
}

const readUTF8FilePromise = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => err ? reject(err) : resolve(data))
  })
}

const writeUTF8FilePromise = (dir, name, data) => {
  return new Promise((resolve, reject) => {
    const file = path.join(dir, name)
    fs.writeFile(file, data, 'utf-8', (err) => err ? reject(err) : resolve(data))
  })
}

const mkdirPromise = (route) => {
  return new Promise((resolve, reject) => {
    fs.mkdir(route, err => err ? reject(err) : resolve('done'))
  })
}

const mkdirsPromist = async (route) => {
  const parentDir = path.dirname(route)
  let existErr
  ;[existErr] = await to(readDirPromise(parentDir))
  if (existErr) {
    generalLog(`${parentDir}不存在。即将创建${parentDir}`)
    await mkdirsPromist(parentDir)
    await mkdirPromise(route)
  } else {
    generalLog(`${parentDir}存在。即将创建${route}`)
    try {
      await mkdirPromise(route)
    } catch (err) {
      generalLog(`${route} 已存在。`)
    }
  }
}

const stableWriteFile = async (dir, name, data) => {
  try {
    await writeUTF8FilePromise(dir, name, data)
  } catch (err) {
    generalLog(`${dir}不存在，尝试创建。`)
    await mkdirsPromist(dir)
    generalLog(`${dir}已创建，正在写入。${name}`)
    await writeUTF8FilePromise(dir, name, data)
  }
  successLog(`文件${dir} ${name}创建成功。`)
}

const generateCamelName = (...argv) => {
  const handleFirstLetter = (str) => str.replace(/\b\w+\b/g, word => word.substring(0, 1).toUpperCase() + word.substring(1))
  const res = argv.map((el, index) => index === 0 ? el.toLowerCase() : handleFirstLetter(el))
  return res.join('')
}

marked.setOptions({
  highlight: function (code) {
    return require('highlight.js').highlightAuto(code).value
  }
})

const ignoreDir = ['style', '_util', 'col', 'row']

const parseDemoMd = (md, path, component, name) => {
  const start = md.indexOf('---')
  const end = md.indexOf('---', start + 1)
  ;(start < -1 || end < -1) && failLog(`${path}文档头部说明不规范缺少'---'`)
  const header = md.slice(start + 4, end - 1)
  let json = {}
  header.split('\n').forEach(el => {
    const array = el.split(':')
    json[array[0].trim()] = array[1] && array[1].trim()
  })
  const vueHtml = `<${component}-${name}></${component}-${name}>\n`
  json.display = vueHtml
  const zhCNStart = md.indexOf('## zh-CN', end)
  const enUSStart = md.indexOf('## en-US', zhCNStart)
  const codeStart = md.indexOf('```` html')
  const codeEnd = md.indexOf('````', codeStart + 1)
  if (typeof json.order === 'undefined') {
    generalLog(`需要为文件${path}指定头部order`)
  }
  json.order = parseInt(json.order, 10)
  json.zhCN = md.slice(zhCNStart + 10, enUSStart)
  json.enUS = md.slice(enUSStart + 10, codeStart)
  json.codeMd = md.slice(codeStart, codeEnd + 4)
  json.code = md.slice(codeStart + 10, codeEnd)
  json.name = name
  json.component = component
  return json
}

const parseIndexMd = (md, lang) => {
  const start = md.indexOf('---')
  const end = md.indexOf('---', start + 1)
  ;(start < -1 || end < -1) && failLog(`${path}文档头部说明不规范缺少'---'`)
  const header = md.slice(start + 4, end - 1)
  let json = {}
  header.split('\n').forEach(el => {
    const array = el.split(':')
    json[array[0].trim()] = array[1] && array[1].trim()
  })
  const APIStart = md.indexOf('## API')
  json.beforeCode = md.slice(end + 4, APIStart)
  json.afterCode = md.slice(APIStart, md.length - 1)
  json.lang = lang
  json.cols = json.cols || 0
  return json
}

const readDeomMds = async (route, component, name) => {
  let mdErr, md
  ;[mdErr, md] = await to(readUTF8FilePromise(route))
  return mdErr ? failLog(`读取文件${route}失败`) : parseDemoMd(md, route, component, name)
}

const generateComponents = async (components) => {
  components.forEach(component => generateComponent(component))
}

const generateDomes = (route, demos) => {
  return demos.forEach(async demo => {
    await stableWriteFile(route, `${demo.name}.vue`, demo.code)
  })
}

const generateComponent = async (component) => {
  const componentsPath = resolve('components')
  const componentDemoPath = path.join(componentsPath, component, 'demo')
  let demos = []
  let componentDemoMdErr, componentDemoMdPaths
  ;[componentDemoMdErr, componentDemoMdPaths] = await to(readDirPromise(componentDemoPath))
  if (componentDemoMdErr) {
    failLog(`读取文件${componentDemoMdErr}失败`)
  } else {
    componentDemoMdPaths && await Promise.all(componentDemoMdPaths.map(componentDemoMdPath => {
      const route = path.join(componentDemoPath, componentDemoMdPath)
      const name = componentDemoMdPath.replace('.md', '')
      return readDeomMds(route, component, name)
    })).then(v => {
      demos = v
    })
  }

  let zhIndexErr, zhIndexContent, zhIndexJson
  ;[zhIndexErr, zhIndexContent] = await to(readUTF8FilePromise(path.join(componentsPath, component, 'index.zh-CN.md')))
  if (zhIndexErr) {
    failLog(`读取文件${component} zh-index 失败`)
  } else {
    zhIndexJson = parseIndexMd(zhIndexContent, 'zh-CN')
  }

  let enIndexErr, enIndexContent, enIndexJson
  ;[enIndexErr, enIndexContent] = await to(readUTF8FilePromise(path.join(componentsPath, component, 'index.en-US.md')))
  if (enIndexErr) {
    failLog(`读取文件${component} en-index 失败`)
  } else {
    enIndexJson = parseIndexMd(enIndexContent, 'en-US')
  }

  const zhData = zhIndexJson && generateVueContainer(zhIndexJson, demos)
  const enData = enIndexJson && generateVueContainer(enIndexJson, demos)
  const siteDocPath = path.join(resolve('site'), 'components', component)
  zhIndexJson && await stableWriteFile(siteDocPath, 'index-zh.vue', zhData)
  enIndexJson && await stableWriteFile(siteDocPath, 'index-en.vue', enData)
  generateDomes(path.join(siteDocPath, 'demo'), demos)
  return demos
}

const generateVueContainer = (main, demos) => {
  const lang = main.lang
  const span = main.cols ? 24 : 12
  let importString = ''
  let codeString = ''
  let componentsSting = ''
  const sortDemos = demos.sort((a, b) => a.order - b.order)
  sortDemos.forEach(demo => {
    const desc = lang === 'zh-CN' ? marked(demo.zhCN) : marked(demo.enUS)
    const title = lang === 'zh-CN' ? demo['zh-CN'] : demo['en-US']
    const codeHtml = marked(demo.codeMd)
    const componentName = generateCamelName(demo.component, demo.name)
    const code =
    `
    <atu-col :span="${span}">
      <code-show
        title="${title}"
        desc="${desc}">
        ${demo.display}
        <template slot="code">${codeHtml}</template>
      </code-show>
    </atu-col>
    `
    codeString += code
    importString += `import ${componentName} from './demo/${demo.name}'\n`
    componentsSting += `${componentName},\n`
  })
  const handleMainContent = (content) => {
    return {
      title: content.title,
      subtitle: content.subtitle || '',
      beforeCode: marked(content.beforeCode),
      afterCode: marked(content.afterCode)
    }
  }
  const result = handleMainContent(main)
  const template =
  `<template>
    <container>
      <h1>${result.title} ${result.subtitle}</h1>
      ${result.beforeCode}
      <h2> 代码展示 </h2>
      <atu-row :gutter="12"> 
        ${codeString}
      </atu-row>
      ${result.afterCode}
    </container>
  </template>
  <script>
  import Container from '../../common/layout/container'
  import CodeShow from '../../common/layout/code-show'
  import AtuRow from '@/row'
  import AtuCol from '@/col'
  ${importString}
  export default {
    components: {
      ${componentsSting}
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
const params = process.argv.splice(2)
generateComponents(params)

// const generateRouterConfig = async () => {
//   await to(readDirPromise(path.join(resolve(site), 'docs')))
// }

const generateComponentsRouterConfig = async () => {
  const ignoreDir = ['common']
  let docsErr, docsPaths
  ;[docsErr, docsPaths] = await to(readDirPromise(path.join(resolve('site'), 'docs')))
  let importString = `import Vue from 'vue'
  import Router from 'vue-router'
  `
  let zhRouterConfig = ''
  let enRouterConfig = ''
  docsPaths && docsPaths.forEach(component => {
    if (ignoreDir.indexOf(component) > -1) return
    const zhName = generateCamelName('zh', component)
    const enName = generateCamelName('eh', component)
    importString += `import ${zhName} from './docs/${component}/index-zh'\n`
    importString += `import ${enName} from './docs/${component}/index-en'\n`
    zhRouterConfig += `{
      path: '/component/zh-CN/${component}',
      component: ${zhName},
      name: '${component}-zh'
    },`
    enRouterConfig += `{
      path: '/component/en-US/${component}',
      component: ${enName},
      name: '${component}-en'
    },`
  })
  importString += 'Vue.use(Router)\n'

  const config = `let router = new Router({
  routes: [
    ${zhRouterConfig}
    ${enRouterConfig}
  ]
})

export default router`
  const sitePath = path.join(resolve('site'))
  stableWriteFile(sitePath, 'router.js', importString + config)
}

generateComponentsRouterConfig()
