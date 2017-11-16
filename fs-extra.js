const fse = require('fs-extra')
const chalk = require('chalk')
const log = console.log

fse.copy('./chalk.js', './chalknew.js').then(() => {
	log(chalk.red('success'))
}).catch((err) => {
	log(chalk.green.bgRed(err))
})