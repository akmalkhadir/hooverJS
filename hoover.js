const input = [
  [5, 5],
  [1, 2],
  [1, 0],
  [2, 2],
  [2, 3],
  ['N', 'N', 'E', 'S', 'E', 'E', 'W', 'W', 'W']
]

let roomSize = input[0]
let startPoint = input[1]
let visitedPoints = []
let endPoint = startPoint


let directions = {
  N: [0, 1],
  S: [0, -1],
  W: [-1, 0],
  E: [1, 0]
}

let changeDirectionToCoord = input[input.length - 1].map(
  step => directions[step]
)

const calculateFinalPosition = () => {
  changeDirectionToCoord.forEach(coordinate => {
    let xCoordinate = endPoint[0] + coordinate[0]
    let yCoordinate = endPoint[1] + coordinate[1]

    endPoint = [xCoordinate, yCoordinate]
    visitedPoints.push(endPoint)
  })
}

const hoover = ()=> {
  calculateFinalPosition()
  console.log(visitedPoints)
  console.log(endPoint)
}

module.exports = hoover

hoover()