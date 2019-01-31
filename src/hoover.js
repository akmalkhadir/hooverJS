const fs = require('fs')
const parseStateFromContents = require('./parseStateFromContents')
const findEndPosition = require('./findEndPosition')
const findNumberOfPatchesRemoved = require('./findNumberOfPatchesRemoved')

// Read input from file
let contents
try {
  contents = fs.readFileSync('./input.txt', 'utf8')
} catch (error) {
  if (error.code === 'ENOENT') {
    console.log('input.txt not found!')
  } else {
    throw error
  }
}

// Run hoover
const hoover = () => {
  // Define state
  let state = {
    roomSize: {},
    startPosition: {},
    endPosition: {},
    dirtPositions: [],
    drivingDirections: [],
    pointsPassedByHoover: [],
    matchCount: 0
  }

  // Run procedures
  parseStateFromContents(state, contents)
  findEndPosition(state)
  findNumberOfPatchesRemoved(state)

  // Get final output from state & log to console.
  console.log(
    `The final position of the hoover is [${state.endPosition.x}, ${
      state.endPosition.y
    }].`
  )
  console.log(`The amount of dirty patches cleaned up: ${state.matchCount}.`)
}

module.exports = hoover
