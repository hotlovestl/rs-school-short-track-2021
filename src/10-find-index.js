/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let begin = 0;
  let end = array.length - 1;
  while (begin <= end) {
    const middle = Math.floor((begin + end) / 2);
    if (value === array[middle]) return middle;
    if (value < array[middle]) end = middle - 1;
    else begin = middle + 1;
  }
  return 0;
}

module.exports = findIndex;
