const timetest = require('../src/timetest')

test('time test', async () => {
  const execTime = await timetest.timeTestHtml('https://bolster.ai')

  expect(typeof execTime).toBe('object')
})
