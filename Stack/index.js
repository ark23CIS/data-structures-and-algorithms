// peek() similar as a pop but does not remove an item
// pop() removes last added item
//push(value) adds value and returns size
//size() returns size

var Stack = function() {
    this.storage = {};
    this.count = 0;
}

Stack.prototype.push = function(value) {
    this.storage[this.count++] = value;
    return this.size();
}

Stack.prototype.size = function() {
    return this.count;
}

Stack.prototype.peek = function() {
    return this.storage[this.count - 1];
}

Stack.prototype.pop = function() {
    if (this.size() == 0) 
        return 'It is not possible to delete element when Stack is empty';
    var value = this.storage[this.count - 1]
    delete this.storage[--this.count];
    return value;
}

Stack.prototype.contains = function (value) {
    return Object.values(this.storage).includes(value);
}

// returns a number to Leave with that value
Stack.prototype.positionToLeave = function(value) {
    return this.count - Object.values(this.storage).indexOf(value);
}

module.exports = Stack;