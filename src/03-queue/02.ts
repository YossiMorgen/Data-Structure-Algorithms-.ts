import Queue from "./01";

export default class ChatClient{
    private inMsgQ: Queue;
    private outMsgQ: Queue;
    
    constructor (inMsgQ: Queue, outMsgQ: Queue){
        this.inMsgQ = inMsgQ;
        this.outMsgQ = outMsgQ;
    }

    public sendMsg(msg: string){
        this.outMsgQ.push(msg);
    }

    public readMsg(){
        return this.inMsgQ.peak();
    }

}