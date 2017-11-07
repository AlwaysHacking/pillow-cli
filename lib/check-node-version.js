const semver = require('semver')
const chalk = require('chalk')
const requiredNodeVersion = require('../package.json').engines.node

module.exports = () => {
  // Ensure minimum supported node version is used
  if (!semver.satisfies(process.version, requiredNodeVersion)) {
    console.log(chalk.red(
      `  You are running Node ${process.versions.node}.\n  Pillow requires Node ${requiredNodeVersion}.\n  Please update your version of Node.`
    ))
    process.exit(1)
  }
}
