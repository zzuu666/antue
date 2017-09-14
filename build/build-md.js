const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const to = require('./to')

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

const mkdirPromise = (path) => {
  return new Promise((resolve, reject) => {
    fs.mkdir(path, err => err ? reject(err) : resolve('done'))
  })
}

const generateCode = async () => {
  const parseCode = content => {
    const startPos = content.indexOf('```` html')
    const endPos = content.indexOf('````', startPos + 1)
    return content.slice(startPos + 10, endPos)
  }

  const ignoreDir = ['style', '_util']
  let err, componentsDir
  ;[err, componentsDir] = await to(readDirPromise(resolve('components')))
  err && failLog('读取components目录失败。')
  const componentsDemoPaths = componentsDir
    .filter(dir => ignoreDir.indexOf(dir) === -1)
    .map(dir => {
      return {
        path: path.join(resolve('components'), dir, 'demo'),
        name: dir
      }
    })
  componentsDemoPaths.forEach(async componentsDemoPath => {
    let compDemoMdPaths
    try {
      compDemoMdPaths = await readDirPromise(componentsDemoPath.path)
    } catch (error) {
      generalLog(`${componentsDemoPath.path}路径不存在,正在创建。`)
      await mkdirPromise(componentsDemoPath.path)
    }
    compDemoMdPaths && compDemoMdPaths.forEach(async compDemoMdItem => {
      const compDemoMdPath = path.join(componentsDemoPath.path, compDemoMdItem)
      generalLog(`正在解析 ${compDemoMdPath} 路径下文件`)
      let compDemoMdContentErr, compDemoMdContent
      ;[compDemoMdContentErr, compDemoMdContent] = await to(readUTF8FilePromise(compDemoMdPath))
      if (compDemoMdContentErr) {
        generalLog(`读取文件${compDemoMdPath}失败。`)
        return
      }
      const compDemoMdCode = parseCode(compDemoMdContent)
      const examplesRoutePath = path.join(resolve('examples'), 'routers', componentsDemoPath.name, 'demo')
      const examplesRoutefilename = compDemoMdItem.replace('.md', '.vue')
      try {
        await writeUTF8FilePromise(examplesRoutePath, examplesRoutefilename, compDemoMdCode)
      } catch (error) {
        generalLog(`${examplesRoutePath}路径不存在,正在创建。`)
        await mkdirPromise(examplesRoutePath)
        await writeUTF8FilePromise(examplesRoutePath, examplesRoutefilename, compDemoMdCode)
      }
      successLog(`${examplesRoutePath}下创建${examplesRoutefilename}`)
    })
  })
}

generateCode()
