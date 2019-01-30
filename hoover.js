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
  drivingDirections: []
}

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

const input = [
  [5, 5],
  [1, 2],
  [1, 0],
  [2, 2],
  [2, 3],
  ['N', 'N', 'E', 'S', 'E', 'E', 'S', 'W', 'N', 'W', 'W']
]

let roomSize = input[0]
let startPoint = input[1]
let dirtyPatches = input.slice(2, -1)
let visitedPoints = []
let endPoint = startPoint

let directionsCoordinates = {
  N: { x: 0, y: 1 },
  S: { x: 0, y: -1 },
  W: { x: -1, y: 0 },
  E: { x: 1, y: 0 }
}

let directions = {
  N: [0, 1],
  S: [0, -1],
  W: [-1, 0],
  E: [1, 0]
}

let changeCardinalToCoordinates = input[input.length - 1].map(
  step => directions[step]
)

const calculateFinalPosition = () => {
  changeCardinalToCoordinates.forEach(coordinate => {
    let xCoordinate = endPoint[0] + coordinate[0]
    let yCoordinate = endPoint[1] + coordinate[1]

    endPoint = [xCoordinate, yCoordinate]
    visitedPoints.push(endPoint)
  })
}

const compareArray = (array1, array2) => {
  let result

  array1.forEach(item1 =>
    array2.forEach(item2 => {
      if (item1.length > 1 && item2.length) {
        result = compareArray(item1, item2)
      } else if (item1 !== item2) {
        result = false
      } else {
        result = true
      }
    })
  )

  return result
}

const findMatches = () => {
  console.log(dirtyPatches)
  console.log(visitedPoints)
  let hoveredPointsCount = 0

  visitedPoints.forEach(points => {
    dirtyPatches.forEach(patches => {
      if (compareArray(points, patches)) {
        console.log(points)
        console.log(patches)
        console.log(compareArray(points, patches))
        return hoveredPointsCount++
      }
    })
  })
  console.log(hoveredPointsCount)
}

const hoover = () => {
  calculateFinalPosition()
  findMatches()
  console.log(visitedPoints)
  console.log(endPoint)
}

deriveStateFromContents()
module.exports = hoover
