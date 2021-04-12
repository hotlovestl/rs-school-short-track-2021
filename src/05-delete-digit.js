/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const str = String(n);
  const arr = str.split('');
  let i = 1;
  while (arr[i - 1] >= arr[i]) i++;
  arr.splice(i - 1, 1);
  return +arr.join('');
}

module.exports = deleteDigit;
