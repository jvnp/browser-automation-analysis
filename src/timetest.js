const puppeteer = require('./lib/puppeteer')
const playwright = require('./lib/playwright')

const config = require('../configs/app.json')

async function timeTestHtml () {
  // puppeteer test
  const startPuppeteer = new Date()
  await puppeteer.getSiteData(config.url)
  const stopPuppeteer = new Date()

  // playwright test
  const startPlaywright = new Date()
  await playwright.getSiteData(config.url)
  const stopPlaywright = new Date()

  const puppeteerExecTime = (stopPuppeteer - startPuppeteer) / 1000
  const playwrightExecTime = (stopPlaywright - startPlaywright) / 1000

  // uncomment below line to print execution time
  // console.log(puppeteerExecTime, playwrightExecTime)

  return {
    puppeteerExecTime,
    playwrightExecTime
  }
}

module.exports = { timeTestHtml }
