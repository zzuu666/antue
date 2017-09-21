const fs = require('fs')
const path = require('path')
const to = require('./to')
const { generalLog, successLog } = require('./log')

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

const mkdirRecursionPromise = async (route) => {
  const parentDir = path.dirname(route)
  let existErr
  ;[existErr] = await to(readDirPromise(parentDir))
  if (existErr) {
    await mkdirRecursionPromise(parentDir)
    try {
      await mkdirPromise(route)
    } catch (err) {
      generalLog(`${route} 已存在`)
    }
  } else {
    try {
      await mkdirPromise(route)
    } catch (err) {
      generalLog(`${route} 已存在`)
    }
  }
}

const stableWriteFile = async (dir, name, data) => {
  try {
    await writeUTF8FilePromise(dir, name, data)
  } catch (err) {
    generalLog(`${dir}不存在，尝试创建。`)
    await mkdirRecursionPromise(dir)
    generalLog(`${dir}已创建，正在写入。${name}`)
    await writeUTF8FilePromise(dir, name, data)
  }
  successLog(`文件${dir} ${name}创建成功。`)
}

module.exports = {
  readDirPromise,
  readUTF8FilePromise,
  writeUTF8FilePromise,
  mkdirRecursionPromise,
  stableWriteFile
}
