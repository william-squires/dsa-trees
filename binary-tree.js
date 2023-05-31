"use strict";

/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }

  /** minDepthToIncompleteNode(): return the minimum depth of the tree to an
   * incomplete node-- that is, the length of the shortest path from the root to
   * a node with less than two children. */
  minDepthToIncompleteNode() {
    const queue = [this];

    if (!this.left && !this.right) {
      return 1;
    }

    let minDepth = 1;

    while (queue.length) {
      let current = queue.shift();

      if (!current.left || !current.right) {
        return minDepth;
      }

      queue.push(this.left);
      queue.push(this.right);
      minDepth += 1;
    }
  }

  /** maxDepth(): return the maximum depth from the invoking node -- that is,
   * the length of the longest path from the invoking node to a leaf. */
  maxDepth() {
    let queue = [this];
    let maxDepth = 0;

    while (queue.length) {
      const tmp = []
      for (const node of queue) {
        if (node.left) tmp.push(node.left)
        if (node.right) tmp.push(node.right)
      }
      queue = tmp
      maxDepth++
    }
    return maxDepth
  }

  /** minDepth(): return the minimum depth from the invoking node -- that is,
   * the length of the shortest path from the invoking node to a leaf. */
  minDepth() {}

  /** nextLarger(lowerBound): return the smallest value from the invoking node
   * that is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {}
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepthToIncompleteNode(): return the minimum depth of the tree to an
   * incomplete node-- that is, the length of the shortest path from the root to
   * a node with less than two children. */

  // this is a stack or recursion problem; we'll use recursion

  minDepthToIncompleteNode() {
    return this.root ? this.root.minDepthToIncompleteNode() : 0;
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  // this is a stack or recursion problem; we'll use recursion

  maxDepth() {
    return this.root ? this.root.maxDepth() : 0;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  // this is a stack or recursion problem; we'll use recursion

  minDepth() {}

  /** nextLarger(lowerBound): return the smallest value in the tree
   * that is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {}

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {}
}

module.exports = { BinaryTree, BinaryTreeNode };
