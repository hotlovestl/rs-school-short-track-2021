/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

function removeKFromList(l, k) {
  let list = l;
  while (list.value === k) list = list.next;
  const begin = list;
  let curr = begin;
  while (curr.next !== null) {
    if (curr.next.value === k) {
      while (curr.next.value === k) {
        curr.next = curr.next.next;
      }
    }
    curr = curr.next;
  }
  return begin;
}

module.exports = removeKFromList;
