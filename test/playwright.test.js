const playwright = require('../src/playwright')

test('html', async () => {
  const { html } = await playwright.getSiteData('https://bolster.ai')

  expect(typeof html).toBe('string')
})
