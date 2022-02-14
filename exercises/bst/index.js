// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  contains(data) {
    if (this.data === data) {
      return this;
    }

    if (this.data < data && this.right) {
      return this.right.contains(data);
    } else if (this.data > data && this.left) {
      return this.left.contains(data);
    }
    return null;
  }

  insert(data) {
    const node = new Node(data);
    const insertLeft = node.data < this.data;
    if (insertLeft) {
      if (this.left) {
        this.left.insert(data);
      } else {
        this.left = node;
      }
    } else if (!insertLeft) {
      if (this.right) {
        this.right.insert(data);
      } else {
        this.right = node;
      }
    }
  }
}

const rootNode = new Node(0);
rootNode.insert(-1);
rootNode.insert(-2);
rootNode.insert(5);
console.log(rootNode.contains(5));

module.exports = Node;
