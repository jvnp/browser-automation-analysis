const timetest = require('../src/timetest')

test('time test', async () => {
  const execTime = await timetest.timeTestHtml()

  expect(typeof execTime).toBe('object')
})
