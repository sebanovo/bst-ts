import { AVLTree } from "utilities-library";

const t1 = new AVLTree<number>();
t1.insert({ key: 10, value: 10 })
  .insert({ key: 20, value: 20 })
  .insert({ key: 5, value: 5 })
  .insert({ key: 4, value: 4 })
  .insert({ key: 15, value: 15 })
  .insert({ key: 25, value: 25 })
  .insert({ key: 30, value: 30 })
  .insert({ key: 3, value: 3 })
  .insert({ key: 17, value: 17 });
// 10,20,5,4,15,25,30,3,17

console.log(t1.toString());
t1.delete(15) //
  .delete(17)
  .delete(25);
console.log(t1.toString());
