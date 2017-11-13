const semver = require('semver')
const logger = require('./logger')
const requiredNodeVersion = require('../package.json').engines.node

module.exports = () => {
  // Ensure minimum supported node version is used
  if (!semver.satisfies(process.version, requiredNodeVersion)) {
    logger.fatal('Incorrect Node Version', `  You are running Node ${process.versions.node}.\n  Pillow requires Node ${requiredNodeVersion}.\n  Please update your version of Node.`)
  }
}
