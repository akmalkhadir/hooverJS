// Find patch removed by hoover by comparing positions of dirt patches vs. points passed by hoover
const findNumberOfPatchesRemoved = state => {
  // Remove recurring points from points passed by hoover
  let uniquePointsPassedByHoover = [...state.pointsPassedByHoover].filter(
    (point, index, self) => {
      // self refers to state.pointsPassedByHoover
      console.log(self)

      return (
        index ===
        self.findIndex(
          visitedPoint =>
            visitedPoint.x === point.x && visitedPoint.y === point.y
        )
      )
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

module.exports = findNumberOfPatchesRemoved
