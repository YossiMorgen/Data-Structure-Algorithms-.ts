import BBST from "./08-balanced-binary-serch-tree/balanced-binary-serch-tree";

const bbts = new BBST(1);

bbts.insert(4)
bbts.insert(5)
bbts.insert(6)
bbts.insert(-7)
bbts.insert(11)
bbts.insert(-2)
bbts.insert(3)
bbts.insert(-8)
bbts.insert(9)
bbts.insert(10)

bbts.insert(12)

console.log(bbts.quickPrint());
