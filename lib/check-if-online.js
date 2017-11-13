const got = require('got')
const pTimeout = require('p-timeout')
const logger = require('./logger')
const ora = require('ora')

const url = 'github.com'

// Ensure the network is available
module.exports = () => new Promise(resolve => {
  const spinner = ora('Check the network status.')
  spinner.start()
  pTimeout(got(url), 3000, () => {
    logger.fatal('Network High Latency', '  Please make sure you can visit github.com normally.\n  Try again later.')
  }).then(response => {
    if (response.redirectUrls[0].indexOf(url) === -1) {
      logger.fatal('Network Unavailable', '  Please login your network.')
    }
    spinner.stop()
    resolve()
  })
  .catch(() => {
    logger.fatal('Network Offline', '  Please connect to the Internet.')
  })
})
