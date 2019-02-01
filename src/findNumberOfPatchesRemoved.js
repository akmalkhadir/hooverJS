// Find patch removed by hoover by comparing positions of dirt patches vs. points passed by hoover
const findNumberOfPatchesRemoved = state => {
  // Remove duplicate points from points passed by hoover, by filtering only the first occurence of that point (use findIndex)
  let uniquePointsPassedByHoover = [...state.pointsPassedByHoover].filter(
    (point, index, self) =>
      index === self.findIndex(
        visitedPoint => visitedPoint.x === point.x && visitedPoint.y === point.y
      )
  )

  uniquePointsPassedByHoover.forEach(point => {
    state.dirtPositions.forEach(dirt => {
      if (dirt.x === point.x && dirt.y === point.y) {
        state.matchCount++
      }
    })
  })
  return state.matchCount
}

module.exports = findNumberOfPatchesRemoved
