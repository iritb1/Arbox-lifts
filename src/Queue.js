export default class Queue{
    constructor(){
        this.calls = [];
    }

    enqueue(call){
        this.calls.push(call);
    }

    dequeue(){
        return this.calls.shift();
    }

    peek(){
        return this.calls[0];
    }

    getSize(){
        return this.calls.length;
    }

    isEmpty(){
        return this.getSize() === 0;
    }

    getItems(){
        return this.calls;
    }
}