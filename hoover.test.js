const hoover = require('./hoover')
const input2 = [
  [5, 5],
  [2, 1],
  [1, 1],
  [1, 2],
  [2, 3],
  ['N', 'E', 'E', 'E', 'E', 'W', 'S', 'S']
]

const input1 = [
  [5, 5],
  [1, 2],
  [1, 0],
  [2, 2],
  [2, 3],
  ['N', 'N', 'E', 'S', 'E', 'E', 'W', 'W', 'W']
]

test('adds 1 + 2 to equal 3', () => {
  expect(hoover(input2)).toBe([1, 3], 1)
})
