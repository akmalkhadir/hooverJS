// Convert cardinal navigation to coordinates
const convertDirectionsToCoordinates = (state) => {
  let directionsCoordinates = {
    N: { x: 0, y: 1 },
    S: { x: 0, y: -1 },
    W: { x: -1, y: 0 },
    E: { x: 1, y: 0 }
  }

  return [...state.drivingDirections].map(
    direction => directionsCoordinates[direction]
  )
}

// Find final position of hoover
const findEndPosition = (state) => {
  let convertedDirections = convertDirectionsToCoordinates(state)

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

module.exports = findEndPosition
