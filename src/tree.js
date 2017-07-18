/*
#### Trees

  * Should have the methods: `addChild`, and `contains`
  * Each node on the tree should have a `value` property and a `children` array.
  * `addChild(value)` should accept a value and add it to that node's `children` array.
  * `contains(value)` should return `true` if the tree or its children the given value.
  * When you add nodes to the `children` array use `new Tree(value)` to create the node.
  * You can instantiate the `Tree` class inside of itself.
*/
class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
  addChild(value) {
    const newNode = new Tree(value);
    return this.children.push(newNode);
  }
  contains(value) {
    if (this.value === value) {
      return true;
    }
    for (let i = 0; i < this.children.length; i++) {
      if (this.children[i].contains(value)) return true;
    }
    return false;
  }
}

module.exports = Tree;
