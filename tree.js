"use strict";

/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }

  /** sumValues(): add up all values of invoking node and its children.
   * Returns sum as an integer. */
  sumValues() {
    const stack = [...this.children]
    let sum = this.val

    while (stack.length) {
      const curr = stack.pop()
      sum += curr.val
      for (let child of curr.children) {
        stack.push(child)
      }
    }
    return sum
  }

  /** countEvens(): starting from the invoking node and moving through its
   * children, count how many nodes have even values. Returns that count as
   * an integer. */
  countEvens() {
    const stack = [this];
    let numEven = 0;

    while (stack.length) {
      const curr = stack.pop();
      if (curr.val % 2 === 0) {
        numEven += 1;
      }
      for (let child of curr.children) {
        stack.push(child);
      }
    }
    return numEven;
  }

  /** numGreater(lowerBound): starting from the invoking node and moving through
   * its children, return a count of the number of nodes whose value is greater
   * than lowerBound. */
  numGreater(lowerBound){
    const stack = [this];
    let numGreater = 0;

    while (stack.length) {
      const curr = stack.pop();
      if (curr.val > lowerBound) {
        numGreater += 1;
      }
      stack.push(...curr.children);
    }
    return numGreater;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all values in the tree. */
  sumValues() {
    return this.root ? this.root.sumValues() : 0
  }

  /** countEvens(): count all nodes in the tree that have even values. */
  countEvens() {
    return this.root ? this.root.countEvens() : 0;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */
  numGreater(lowerBound) {
    return this.root ? this.root.numGreater(lowerBound) : 0;
  }
}

module.exports = { Tree, TreeNode };
