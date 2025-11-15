import { BinarySearchTree } from "utilities-library";

export const tree = new BinarySearchTree<number>();
tree
  .insertR({ key: 4, value: 1 })
  .insertR({ key: 2, value: 2 })
  .insertR({ key: 6, value: 3 })
  .insertR({ key: 1, value: 4 });
// t1.insertR({ key: 4, value: 1 })
//   .insertR({ key: 2, value: 2 })
//   .insertR({ key: 6, value: 3 })
//   .insertR({ key: 1, value: 4 });
// console.log(t1.toString());
// console.log(t1.levelOrder());
// console.log(t1.levelOrderR());
// console.log(t1.countNodesInLevel(1));
