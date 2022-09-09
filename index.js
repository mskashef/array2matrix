const array2matrix = function (array, rowsLength) {
  const rowsCount = Math.floor(array.length / rowsLength)
  if (rowsLength <= 0) {
    throw new RangeError(`rows length can not be <= 0. but found: ${rowsLength}`)
  }
  if (rowsCount === 0) return [array]
  let rowIdx = -1
  const matrix = []
  for (let i = 0; i < array.length; i++) {
    if (i % rowsCount === 0) {
      rowIdx++
      matrix.push([])
    }
    matrix[rowIdx].push(array[i])
  }
  return matrix
}

module.exports = array2matrix;
