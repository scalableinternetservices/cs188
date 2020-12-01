test('Math.random() returns value between 0 and 1', () => {
  expect(Math.random()).toBeGreaterThanOrEqual(0)
  expect(Math.random()).toBeLessThan(1)
})
