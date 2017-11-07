#!/usr/bin/env node

const download = require('download-git-repo')
const program = require('commander')
const path = require('path')
const ora = require('ora')
const chalk = require('chalk')
const home = require('user-home')
const fs = require('fs-extra')

const packageJson = require('../package.json')
const checkNodeVersion = require('../lib/check-node-version')
const logger = require('../lib/logger')

let projectName

program
  .version(packageJson.version)
  .arguments('<project-directory>')
  .usage(`${chalk.green('<project-directory>')}`)
  .action(name => {
    projectName = name
  })
  .allowUnknownOption()
  .on('--help', () => {
    console.log()
    console.log(`    Only ${chalk.green('<project-directory>')} is required.`)
    console.log(`    For example:`)
    console.log(`      ${chalk.cyan('pillow')} ${chalk.green('my-angularjs-app')}`)
    console.log()
    console.log(
      `    If you have any problems, do not hesitate to file an issue:`
    )
    console.log(
      `      ${chalk.cyan(
        'https://github.com/HaitianLiu/pillow-cli/issues/new'
      )}`
    );
    console.log()
  })
  .parse(process.argv)

/**
 * Show Help message if only run 'pillow'
 */
if (program.args.length < 1) return program.help()

/**
 * Create new project
 */
createProject(projectName)

function createProject(name) {
  const root = path.resolve(name);
  const appName = path.basename(root);
  checkNodeVersion()
  const spinner = ora(`Creating a new AngularJS project in ${chalk.green(root)}.`)
  spinner.start()
  download('HaitianLiu/pillow-template', root, err => {
    spinner.stop()
    if (err) logger.fatal('Failed to : ' + err.message.trim())
    console.log();
    console.log(`Success! Created ${chalk.green(`${appName}`)} at ${chalk.green(`${root}`)}`)
    console.log()
    console.log(chalk.yellow(`Before you start, you need to install dependencies by running this:`))
    console.log()
    console.log(chalk.cyan(`  cd ${appName}`))
    console.log(chalk.cyan(`  npm install`))
    console.log()
    console.log('After the installation is complete, you can run several commands:')
    console.log()
    console.log(chalk.cyan(`  npm start`))
    console.log('    Starts the development server.')
    console.log()
    console.log(
      chalk.cyan(`  npm run build`)
    )
    console.log('    Bundles the app into static files for production.')
    console.log()
    console.log(
      chalk.cyan(`  npm run build --report`)
    )
    console.log('    Bundles the app into static files for production and view the bundle analyzer report.')
    console.log()
    console.log('We suggest that you begin by typing:')
    console.log()
    console.log(chalk.cyan(`  npm start`))
    console.log()
    console.log('Happy hacking!')
  })
}
