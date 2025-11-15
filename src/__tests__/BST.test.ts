import { BinarySearchTree } from "utilities-library";

const t1 = new BinarySearchTree<number>();
t1.insertR({ key: 4, value: 1 })
  .insertR({ key: 2, value: 2 })
  .insertR({ key: 6, value: 3 })
  .insertR({ key: 1, value: 4 });
console.log(t1.toString());
console.log(t1.levelOrder());
console.log(t1.levelOrderR());
console.log(t1.countNodesInLevel(1));
/*
            keys:
              4
            /   \
          2      6
         / \   /   \
        1  3  5     7
 */

/*
└──(#) 4
   |--(L) 2
   |  |--(L) 1
   |  |  |--(L) null
   |  |  └──(R) null
   |  └──(R) null
   └─-(R) 6
      |--(L) null
      └──(R) null
 */
