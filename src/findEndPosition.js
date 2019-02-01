// Convert cardinal navigation to coordinates
const convertDirectionsToCoordinates = state => {
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

// Boundary check and correct
const restrictToBoundary = (currentPosition, state, axis) => {
  if (currentPosition < 0) {
    return 0
  } else if (currentPosition > state.roomSize[axis]) {
    return state.roomSize[axis]
  } else {
    return currentPosition
  }
}

// Find final position of hoover
const findEndPosition = state => {
  let convertedDirections = convertDirectionsToCoordinates(state)

  convertedDirections.forEach(turn => {
    let currentXPosition = state.endPosition.x + turn.x
    let currentYPosition = state.endPosition.y + turn.y

    let xEndPosition = restrictToBoundary(currentXPosition, state, 'x')
    let yEndPosition = restrictToBoundary(currentYPosition, state, 'y')

    state.endPosition = {
      x: xEndPosition,
      y: yEndPosition
    }
    state.pointsPassedByHoover.push(state.endPosition)
  })
  return state.endPosition
}

module.exports = findEndPosition
