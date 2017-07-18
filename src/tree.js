class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
  addChild(data) {
    const newNode = new Tree(data);
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


// class Tree {
// 	constructor(value, children) {
// 		this.value = value;
// 		this.children = children;
// 	}
//
// 	addChild(value) {
// 		const newNode = new Tree(value);
//
// 		return this.children.push(newNode);
// //		return tree.children.newNode;
//
// 	}
//
// 	contains(value) {
// //		console.log(this)
// 		return this.children.includes(value);
// 	}
//
// }
//
// const myTree = new Tree(5, [1,2,3,4]);
//
// console.log(myTree);
// myTree.addChild(6);
// console.log(myTree);
// myTree.addChild(7);
// console.log(myTree);
// console.log(myTree.contains(3));
//
