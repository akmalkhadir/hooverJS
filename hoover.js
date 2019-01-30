const fs = require('fs')

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

console.log(contents)

// Define state
let state = {
  roomSize: {},
  startPosition: {},
  endPosition: {},
  dirtPositions: [],
  drivingDirections: [],
  pointsPassedByHover: []
}

// Parse State from Contents
const deriveStateFromContents = () => {
  let contentsLineByLine = contents.split('\n')

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

  state.drivingDirections = lineXYSplit[lineXYSplit.length - 1][0].split('')
  console.log(state)
}

// Helper - convert cardinal navigation to coordinates
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

const findEndPosition = () => {
  let convertedDirections = convertDirectionsToCoordinates()

  convertedDirections.forEach(turn => {
    let xEndPosition = state.endPosition.x
    let yEndPosition = state.endPosition.y
    state.endPosition = {
      x: xEndPosition + turn.x,
      y: yEndPosition + turn.y
    }
    state.pointsPassedByHover.push(state.endPosition)
    console.log(state.endPosition)
  })
  console.log(state)
}

const findPatchRemovedByHoover = () => {

}

deriveStateFromContents()
findEndPosition()
module.exports = hoover
