// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {
  let slow = list.getFirst();
  let fast = list.getFirst();

  // move the fast one n indices
  while (n > 0) {
    fast = fast.next;
    n--;
  }

  // move fast to the end
  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }

  return slow;
}

module.exports = fromLast;
