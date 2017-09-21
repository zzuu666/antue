/**
 * 生成驼峰式变量名
 * @param {*} argv 变量名组成
 * @return {string} 驼峰式变量名 
 */
const generateCamelName = (...argv) => {
  const handleFirstLetter = (str) => str.replace(/\b\w+\b/g, word => word.substring(0, 1).toUpperCase() + word.substring(1))
  const res = argv.map((el, index) => index === 0 ? el.toLowerCase() : handleFirstLetter(el))
  return res.join('')
}

/**
 * 获取一个文件目录下指定拓展名的所有文件集合
 * @param {*} dir 
 * @param {*} ext 
 * @return {Array} 符合意愿的文件
 */
const getFilesByExtension = (dir, ext) => {
  return dir.filter(el => el.slice(-ext.length) === ext)
}

module.exports = {
  generateCamelName,
  getFilesByExtension
}
