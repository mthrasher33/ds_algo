// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, node = null) {
    this.data = data;
    this.next = node;
  }
}

class LinkedList {
  constuctor() {
    this.head = null;
  }

  clear() {
    this.head = null;
  }

  getAt(index) {
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }
    return null;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let tail = this.head;
    while (tail?.next) {
      tail = tail.next;
    }
    return tail;
  }

  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const previous = this.getAt(index - 1) || this.getLast();
    const node = new Node(data, previous.next);
    previous.next = node;
  }

  insertFirst(data) {
    const node = new Node(data, this.head);
    this.head = node;
  }

  insertLast(data) {
    const last = this.getLast();
    const node = new Node(data);
    if (last) {
      last.next = node;
    } else {
      this.head = node;
    }
  }

  removeAt(index) {
    if (!this.head) {
      return;
    }
    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    const previous = this.getAt(index - 1);
    if (!previous || !previous.next) {
      return;
    }
    previous.next = previous.next.next;
  }

  removeFirst() {
    this.head = this.head?.next;
  }

  removeLast() {
    let penNode = this.head;
    let tailNode = this.head?.next;

    if (!tailNode) {
      this.head = null;
      return;
    }

    while (tailNode.next) {
      penNode = tailNode;
      tailNode = tailNode.next;
    }

    penNode.next = null;
  }

  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }
    return counter;
  }
}

module.exports = { Node, LinkedList };
