/**
 * For async/await function catch error without try/catch blocks
 * @param {*} promise 
 */
const to = promise => promise.then(data => [null, data]).catch(err => [err])

module.exports = to
