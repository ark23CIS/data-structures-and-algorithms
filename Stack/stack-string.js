// pop() removes value from front and then returns value
//size() returns size of stack
//push(value) adds value to the front and then returns size of stack

var Stack = function() {
    this.storage = "";
};
Stack.prototype.push = function(value) {
    // updating our storage 
    this.storage  = this.storage.concat("***", value);
    //return size of Stack
    return this.size();
}
Stack.prototype.pop = function() {
    // getting the last item to return the value after
    var str = this.storage.slice(this.storage.lastIndexOf("***") + 3);
    // deleting the last item from storage
    this.storage = this.storage.substring(0, this.storage.lastIndexOf('***'));
    // return the last item of Stack
    return str;
}
Stack.prototype.size = function() {
    // return size of Stack
    return this.storage.split('***').length - 1;
}
var st = new Stack();

module.exports = Stack;

