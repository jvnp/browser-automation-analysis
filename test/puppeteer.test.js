const puppeteer = require('../src/puppeteer')

test('html', async () => {

  const { html } = await puppeteer.getSiteData('https://bolster.ai')

  expect(typeof html).toBe("string")
})
