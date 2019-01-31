const findEndPosition = require('./findEndPosition')

describe('Find End Position', () => {
  test('Calculate end position correctly given sample input', () => {
    let initialState = {
      roomSize: { x: 5, y: 5 },
      startPosition: { x: 1, y: 2 },
      endPosition: { x: 1, y: 2 },
      dirtPositions: [{ x: 1, y: 0 }, { x: 2, y: 2 }, { x: 2, y: 3 }],
      drivingDirections: [
        'N',
        'N',
        'E',
        'S',
        'E',
        'E',
        'S',
        'W',
        'N',
        'W',
        'W'
      ],
      pointsPassedByHoover: [],
      matchCount: 0
    }
    let expectedOutput = { x: 1, y: 3 }
    expect(findEndPosition(initialState)).toEqual(expectedOutput)
  })

  test('Hoover does not cross boundary on the negative side', () => {
    let initialState = {
      roomSize: { x: 5, y: 5 },
      startPosition: { x: 1, y: 2 },
      endPosition: { x: 1, y: 2 },
      dirtPositions: [{ x: 1, y: 0 }, { x: 2, y: 2 }, { x: 2, y: 3 }],
      drivingDirections: ['W', 'W', 'W', 'W', 'S', 'S', 'S', 'S'],
      pointsPassedByHoover: [],
      matchCount: 0
    }
    let expectedOutput = { x: 0, y: 0 }
    expect(findEndPosition(initialState)).toEqual(expectedOutput)
  })
})
