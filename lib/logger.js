const chalk = require('chalk')
const format = require('util').format

/**
 * Prefix.
 */

const prefix = 'pillow-cli'
const sep = chalk.gray('·')

/**
 * Log a `message` to the console.
 *
 * @param {String} message
 */

exports.log = function (...args) {
  const msg = format.apply(format, args)
  console.log(chalk.white(prefix), sep, msg)
}

/**
 * Log an error message to the console and exit.
 *
 * @param {String} head
 * @param {String} [details]
 */

exports.fatal = function (...args) {
  const head = args[0]
  const details = args[1] ? args[1] : ''
  console.error(chalk.red(prefix), sep, head)
  details && console.error(details)
  process.exit(1)
}

/**
 * Log a success `message` to the console and exit.
 *
 * @param {String} message
 */

exports.success = function (...args) {
  const msg = format.apply(format, args)
  console.log(chalk.green(prefix), sep, msg)
}
