const fs = require('fs')

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

// Parse State from Contents
const deriveStateFromContents = () => {
  let lineXYSplit = contents.split('\n').map(line => line.split(' '))

  state.roomSize = {
    x: parseInt(lineXYSplit[0][0]),
    y: parseInt(lineXYSplit[0][1])
  }

  state.startPosition = {
    x: parseInt(lineXYSplit[1][0]),
    y: parseInt(lineXYSplit[1][1])
  }

  state.endPosition = state.startPosition

  let dirtPatchPositions = lineXYSplit.slice(2, -1)
  dirtPatchPositions.forEach(position => {
    state.dirtPositions.push({
      x: parseInt(position[0]),
      y: parseInt(position[1])
    })
  })

  state.drivingDirections = lineXYSplit[lineXYSplit.length - 1][0].split('')
}

// Convert cardinal navigation to coordinates
const convertDirectionsToCoordinates = () => {
  let directionsCoordinates = {
    N: { x: 0, y: 1 },
    S: { x: 0, y: -1 },
    W: { x: -1, y: 0 },
    E: { x: 1, y: 0 }
  }

  return state.drivingDirections.map(
    direction => directionsCoordinates[direction]
  )
}

// Find final position of hoover
const findEndPosition = () => {
  let convertedDirections = convertDirectionsToCoordinates()

  convertedDirections.forEach(turn => {
    let xEndPosition = state.endPosition.x
    let yEndPosition = state.endPosition.y
    state.endPosition = {
      x: xEndPosition + turn.x,
      y: yEndPosition + turn.y
    }
    state.pointsPassedByHoover.push(state.endPosition)
  })
}

// Find patch removed by hoover by comparing positions of dirt patches vs. points passed by hoover
const findPatchRemovedByHoover = () => {
  // Remove recurring points from points passed by hoover
  let uniquePointsPassedByHoover = state.pointsPassedByHoover.filter(
    (point, index, self) => {
      // self refers to state.pointsPassedByHoover
      console.log(self)

      return index === self.findIndex(visitedPoint => visitedPoint.x === point.x && visitedPoint.y === point.y)
    }
  )

  uniquePointsPassedByHoover.forEach(point => {
    state.dirtPositions.forEach(dirt => {
      if (dirt.x === point.x && dirt.y === point.y) {
        state.matchCount++
      }
    })
  })
}

// run hoover
const hoover = () => {
  deriveStateFromContents()
  findEndPosition()
  findPatchRemovedByHoover()

  // Get final output from state & log to console.
  console.log(
    `The final position of the hoover is [${state.endPosition.x}, ${
      state.endPosition.y
    }].`
  )
  console.log(`The amount of dirty patches cleaned up: ${state.matchCount}.`)
}

module.exports = hoover
