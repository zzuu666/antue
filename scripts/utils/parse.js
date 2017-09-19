const { failLog, generalLog } = require('./log')

/**
 * 解析 markdown 文件头部信息
 * @param {*} md md文件内容
 * @param {*} mark md所在路径
 * @return {Object} 文件头部信息
 */
const parseMarkdownHeader = (md, mark) => {
  const start = md.indexOf('---')
  const end = md.indexOf('---', start + 1)
  ;(start < -1 || end < -1) && failLog(`${mark}文档头部说明不规范缺少'---'`)
  const header = md.slice(start + 4, end - 1)
  let json = {}
  json.start = start
  json.end = end
  header.split('\n').forEach(el => {
    const array = el.split(':')
    json[array[0].trim()] = array[1] && array[1].trim()
  })
  return json
}

const parseDeomMarkdown = (md, component, name) => {
  let json = {}
  const mark = `${component}/${name}`
  json.header = parseMarkdownHeader(md, mark)
  if (typeof json.header.order === 'undefined') {
    generalLog(`需要为文件${mark}指定头部order`)
  }
  json.header.order = parseInt(json.order, 10)
  const vueHtml = `<${component}-${name}></${component}-${name}>\n`
  json.display = vueHtml
  const zhCNStart = md.indexOf('## zh-CN')
  const enUSStart = md.indexOf('## en-US')
  const codeStart = md.indexOf('```` html')
  const codeEnd = md.indexOf('````', codeStart + 1)
  json.zhCN = md.slice(zhCNStart + 10, enUSStart)
  json.enUS = md.slice(enUSStart + 10, codeStart)
  json.codeMd = md.slice(codeStart, codeEnd + 4)
  json.code = md.slice(codeStart + 10, codeEnd)
  json.name = name
  json.component = component
  return json
}

const parseComponentMarkdown = (md, lang) => {
  let json = {}
  json.header = parseMarkdownHeader(md)
  const APIStart = md.indexOf('## API')
  json.beforeCode = md.slice(json.header.end + 4, APIStart)
  json.afterCode = md.slice(APIStart, md.length - 1)
  json.lang = lang
  json.header.cols = json.header.cols || 0
  return json
}

const parseDocMarkdown = (md) => {
  let json = {}
  json.header = parseMarkdownHeader(md)
  json.content = md.slice(json.header.end, md.length - 1)
  return json
}

module.exports = {
  parseDeomMarkdown,
  parseComponentMarkdown,
  parseDocMarkdown
}
