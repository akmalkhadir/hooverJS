// Parse state from contents of input file
const parseStateFromContents = (state, contents) => {
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

module.exports = parseStateFromContents
