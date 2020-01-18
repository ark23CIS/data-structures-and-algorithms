// engueue(value) adds value to the back and returns size 
// dequeue() removes first value and returns value
// size() returns size of queue
var Queue = function() {
    this.storage = '';
}
Queue.prototype.enqueue = function(value) {
    this.storage = this.storage.concat(value, '***');
    return this.size();
}
Queue.prototype.dequeue = function() {
    var str = this.storage.substring(0, this.storage.indexOf('***'));
    this.storage = this.storage.slice(this.storage.indexOf('***') + 3);
    return str;
}
Queue.prototype.size = function() {
    return this.storage.split('***').length - 1;
}

module.exports = Queue;