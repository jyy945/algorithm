function PriorityQueue(){
    this.arr = [];
}

PriorityQueue.prototype.enQueue = function(data){
    this.arr.push(data);
    this.upAdjust();
}
PriorityQueue.prototype.deQueue = function(){
    const data = this.arr.shift();
    if(this.arr.length === 0) return data;
    this.arr.unshift(this.arr.pop());
    this.downAdjust();
    return data;
}
PriorityQueue.prototype.upAdjust = function(){
    let childIndex = this.arr.length - 1;
    let parentIndex = Math.floor((childIndex - 1) / 2);
    let temp = this.arr[childIndex];
    while(childIndex > 0 && temp < this.arr[parentIndex]){
        this.arr[childIndex] = this.arr[parentIndex];
        childIndex = parentIndex;
        parentIndex = Math.floor((parentIndex - 1) / 2);
    }
    this.arr[childIndex] = temp;
}
PriorityQueue.prototype.downAdjust = function(){
    let length = this.arr.length;
    let parentIndex = 0;
    let childIndex = 1;
    let temp = this.arr[parentIndex];
    while(childIndex < length){
        if(childIndex + 1 < length && this.arr[childIndex] > this.arr[childIndex + 1]){
            childIndex++;
        }
        if(temp <= this.arr[childIndex]) break;
        this.arr[parentIndex] = this.arr[childIndex];
        parentIndex = childIndex;
        childIndex = childIndex * 2 + 1;
    }
    this.arr[parentIndex] = temp;
}
const queue = new PriorityQueue();
queue.enQueue(3);
queue.enQueue(5);
queue.enQueue(10);
queue.enQueue(2);
queue.enQueue(7);
console.log(queue.arr);
console.log(queue.deQueue());
console.log(queue.arr);
console.log(queue.deQueue());
console.log(queue.arr);
console.log(queue.deQueue());
console.log(queue.arr);
console.log(queue.deQueue());
console.log(queue.arr);
console.log(queue.deQueue());
console.log(queue.arr);
console.log(queue.deQueue());
console.log(queue.arr);




