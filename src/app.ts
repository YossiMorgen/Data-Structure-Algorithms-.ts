import Queue from "./03-queue/01";
import ChatClient from "./03-queue/02";

const q1 = new Queue(10);
const q2 = new Queue(10);

const user1 = new ChatClient(q1, q2);
const user2 = new ChatClient(q2, q1);

user1.sendMsg("hi");
console.log(user2.readMsg());
