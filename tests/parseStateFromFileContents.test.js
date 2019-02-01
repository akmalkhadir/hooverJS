const parseStateFromFileContents = require('../src/parseStateFromFileContents')

describe('Find End Position', () => {
  test('Calculate end position correctly given sample input', () => {
    let initialState = {
      roomSize: {},
      startPosition: {},
      endPosition: {},
      dirtPositions: [],
      drivingDirections: [],
      pointsPassedByHoover: [],
      matchCount: 0
    }

    let parsedState = {
      roomSize: { x: 5, y: 5 },
      startPosition: { x: 1, y: 2 },
      endPosition: { x: 1, y: 2 },
      dirtPositions: [{ x: 1, y: 0 }, { x: 2, y: 2 }, { x: 2, y: 3 }],
      drivingDirections: ['N', 'N', 'E', 'S', 'E', 'E', 'S', 'W', 'N', 'W', 'W'],
      pointsPassedByHoover: [],
      matchCount: 0
    }

    let fileContent = `5 5\n1 2\n1 0\n2 2\n2 3\nNNESEESWNWW`

    expect(parseStateFromFileContents(initialState, fileContent)).toEqual(parsedState)
  })
})
