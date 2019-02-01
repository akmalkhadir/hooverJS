const hoover = require('../src/hoover')

describe('Hoover Run', () => {
  test('Given sample input, produce sample output', () => {
    expect(hoover()).toEqual({ x: 1, y: 3, count: 1 })
  })
})
