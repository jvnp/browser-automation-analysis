/* eslint semi: "error" */
const chalk = require('chalk');
const timetest = require('./src/timeTest');

const config = require('./configs/app.json');
const url = (process.argv.length === 3) ? process.argv[2] : config.url;

console.log(chalk.red(` URL: ${url} `));

// Time Test for HTML extraction
console.log(chalk.red(' Time Test HTML \n -------------- '));
(async () => {
  const execTime = await timetest.timeTestHtml(url);

  console.log(chalk.blue(` Puppeteer  : ${execTime.puppeteerExecTime} seconds`));
  console.log(chalk.blue(` Playwright : ${execTime.playwrightExecTime} seconds \n`));
})().catch(err => {
  console.error(err);
});
