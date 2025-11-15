import { MWayTree } from "utilities-library";

const m = new MWayTree<number>(4);
console.log("----------------------");
m.insertR({ key: 80, value: 120 });
m.insertR({ key: 120, value: 2 });
m.insertR({ key: 200, value: 3 });
m.insertR({ key: 50, value: 4 });
m.insertR({ key: 70, value: -1 });
m.insertR({ key: 75, value: 5 });
m.insertR({ key: 98, value: 5 });
m.insertR({ key: 110, value: 5 });
m.insertR({ key: 130, value: 5 });
m.insertR({ key: 140, value: 5 });
m.insertR({ key: 150, value: 5 });
m.insertR({ key: 400, value: 5 });
m.insertR({ key: 500, value: 5 });
m.insertR({ key: 560, value: 5 });
m.insertR({ key: 72, value: 5 });
m.insertR({ key: 134, value: 5 });
m.insertR({ key: 160, value: 5 });
m.insertR({ key: 170, value: 5 });
m.insertR({ key: 190, value: 5 });
m.insertR({ key: 158, value: 5 });

const s = m.levelOrderR().reduce((acck, value) => {
  return acck + value.key + ",";
}, "");
const s1 = m.levelOrder().reduce((acck, value) => {
  return acck + value.key + ",";
}, "");
console.log(s);
console.log(s1);
// console.log(m.countNodesInLevel(3));
// console.log(m.countLeftChildren());
// console.log(m.countRightChildren());
// console.log(m.toString());
// for (let i = 0; i < m.height(m.getRoot()); i++) {
//   console.log(m.isFullNodeinLevel(i));
// }
// console.log(m.toString());
// console.log(m.inOrderR().length);
// m.delete(80);
// m.delete(120);
// m.delete(200);
// m.delete(50);
// m.delete(70);
// m.delete(75);
// m.delete(98);
// m.delete(110);
// m.delete(130);
// m.delete(130);
// m.delete(140);
// m.delete(150);
// m.delete(400);
// m.delete(500);
// m.delete(560);
// m.delete(72);
// m.delete(134);
// m.delete(160);
// m.delete(170);
// m.delete(190);
// m.delete(158);

// console.log(m.levelOrder());
// let s = "";
// const nose = m.levelOrder();
// console.log(nose.length);
// nose.forEach((value) => {
//   s += value.key + ",";
// });
// console.log(s);
// // levelOrder
// // 80,120,200,50,70,75,98,110,130,140,150,400,500,560,72,134,160,170,190,158,
// // postOrder
// // 50,72,70,75,98,110,80,134,130,140,158,160,170,190,150,120,400,500,560,200
// // preOrder
// // 80,50,70,75,72,120,98,110,200,130,140,134,150,160,158,170,190,400,500,560,
// // inorder
// // 50,70,72,75,80,98,110,120,130,134,140,150,158,160,170,190,200,400,500,560,

// // console.log(m.size(m.getRoot()));
// // console.log(m.sizeR(m.getRoot()));
// // console.log(m.heightR(m.getRoot()));
// // console.log(m.height(m.getRoot()));
// // console.log(m.min(m.getRoot()));
// // console.log(m.minR(m.getRoot()));
// // console.log(m.max(m.getRoot()));
// // console.log(m.maxR(m.getRoot()));
// // console.log(m.cardinality(m.getRoot()));

// // console.log(m.preOrderR());
// // console.log(m.inOrderR());
// // console.log(m.postOrderR());

// /*
// └── [80, 120, 200]
//     ├── [50, 70, 75]
//     │   ├── null
//     │   ├── null
//     │   ├── [72,  ,  ]
//     │   │   ├── null
//     │   │   └── null
//     │   └── null
//     ├── [98, 110,  ]
//     │   ├── null
//     │   ├── null
//     │   └── null
//     ├── [130, 140, 150]
//     │   ├── null
//     │   ├── [134,  ,  ]
//     │   │   ├── null
//     │   │   └── null
//     │   ├── null
//     │   └── [160, 170, 190]
//     │       ├── [158,  ,  ]
//     │       │   ├── null
//     │       │   └── null
//     │       ├── null
//     │       ├── null
//     │       └── null
//     └── [400, 500, 560]
//         ├── null
//         ├── null
//         ├── null
//         └── null
// */
