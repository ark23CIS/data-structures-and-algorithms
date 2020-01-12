var Queue = function() {
    this.storage = {};
    this.head = 0;
    this.tail = 0;
}

// adding element 
Queue.prototype.enqueue = function(value) {
    this.storage[this.tail++] = value;
    return this.size();
}

// element leaving the queue and returns value of the element
Queue.prototype.dequeue = function() {
    if (this.count == 0) 
        return 'it is not possible to delete element from empty Queue';
    var value = this.storage[this.head];
    delete this.storage[this.head++];
    return value;
}

// size of queue
Queue.prototype.size = function() {
    return this.tail - this.head;
}

// returns value of element which is first candidate to leave from queue
Queue.prototype.peek = function() {
    return this.storage[this.head];
}

// returns bool which answers the question does contain queue the value or not
Queue.prototype.contains = function (value) {
    return Object.values(this.storage).includes(value);
}

// returns a number of first element with this value in queue
Queue.prototype.positionInQueue = function(value) {
    return Object.values(this.storage).indexOf(value) + 1;
}

module.exports = Queue;