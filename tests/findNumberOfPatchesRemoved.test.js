const findNumberOfPatchesRemoved = require('../src/findNumberOfPatchesRemoved')

describe('Find Number of Patches Removed', () => {
  test('Calculate number of patches correctly given sample input, ignoring duplicates', () => {
    let initialState = {
      roomSize: { x: 5, y: 5 },
      startPosition: { x: 1, y: 2 },
      endPosition: { x: 1, y: 2 },
      dirtPositions: [{ x: 1, y: 0 }, { x: 2, y: 2 }, { x: 2, y: 3 }],
      drivingDirections: [],
      pointsPassedByHoover: [
        { x: 1, y: 3 },
        { x: 1, y: 4 },
        { x: 2, y: 4 },
        { x: 2, y: 3 },
        { x: 3, y: 3 },
        { x: 4, y: 3 },
        { x: 4, y: 2 },
        { x: 3, y: 2 },
        { x: 3, y: 3 },
        { x: 2, y: 3 },
        { x: 1, y: 3 }
      ],
      matchCount: 0
    }
    expect(findNumberOfPatchesRemoved(initialState)).toBe(1)
  })
})
