// https://msdn.microsoft.com/en-us/library/aa289150(v=vs.71).aspx
/* #### Binary Search Tree

  * Should have the methods: `insert`, `contains`, and `depthFirstForEach`.
  * `insert(value)` inserts the new value at the correct location in the tree.
  * `contains(value)` searches the tree and returns `true` if the the tree contains the specified value.
  * `depthFirstForEach(cb)` should iterate over the tree using DFS and passes each node of the tree to the given callback function.
*/
class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.container = [value];
  }
  insert(value) {
    this.container.push(value);
    const node = new BinarySearchTree(value);
    if (value <= this.value) {
      if (!this.left) this.left = node;
      else this.left.insert(value);
    } else if (value > this.value) {
      if (!this.right) this.right = node;
      else this.right.insert(value);
    }
  }
  contains(value) {
    if (this.value === value) {
      return true;
    } else if (value > this.value) {
      if (this.right) {
        return this.right.contains(value);
      }
      return false;
    }
  }
  depthFirstForEach(cb) {
    return this.container.forEach((i) => {
      cb(i);
    });
  }
}

module.exports = BinarySearchTree;
