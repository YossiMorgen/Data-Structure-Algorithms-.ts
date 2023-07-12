import DSA101_BST from "./07-binary-search-tree.ts/BTS";

const bts = new DSA101_BST();
const date = new Date().getTime()

bts.add(4);
bts.add(8);
bts.add(5);
bts.add(7);
bts.add(9);
bts.add(11);
bts.add(10);
bts.add(6);
bts.add(1);
bts.add(2);
bts.add(3);
bts.add(20);
bts.add(12);
bts.add(15);
bts.add(13);
bts.add(18);
console.log(bts.quickPrint());
  
bts.remove(9)

console.log(bts.quickPrint());
console.log(new Date().getTime() - date);
