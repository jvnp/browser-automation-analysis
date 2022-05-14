/* eslint semi: "error" */
const chalk = require('chalk');
const timetest = require('./src/timetest');

// Time Test for HTML extraction
console.log(chalk.red(' Time Test HTML \n -------------- '));
(async () => {
  const execTime = await timetest.timeTestHtml();
  console.log(chalk.blue(` Puppeteer  : ${execTime.puppeteerExecTime} seconds`));
  console.log(chalk.blue(` Playwright : ${execTime.playwrightExecTime} seconds \n`));
})().catch(err => {
  console.error(err);
});
