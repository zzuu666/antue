const chalk = require('chalk')

const generateConsole = (color, tip) => text => console.log(chalk[color](tip), text)
const successLog = generateConsole('green', '[OK]')
const failLog = generateConsole('red', '[ERROR]')
const generalLog = generateConsole('yellow', '[TIP]')

module.exports = {
  successLog,
  failLog,
  generalLog
}
