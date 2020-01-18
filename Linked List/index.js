function Node(value) {
    this.next = null;
    this.value = value;
  }
  
  function LinkedList(headValue) {
    if (headValue === undefined) console.log('Must provide value for first node');
    this.head = new Node(headValue);
    this.tail = this.head;
  }
  
  LinkedList.prototype.forEach = function(callback) {
    var node = this.head;
    while (node) {
      callback(node.value);
      node = node.next;
    }
  };
  
  LinkedList.prototype.size = function() {
    var result = [];
    this.forEach(function(value) {
      result.push(value);
    });
    return result.length;
  };
  
  LinkedList.prototype.print = function() {
    var result = [];
    this.forEach(function(value) {
      result.push(value);
    });
    return result.join(', ');
  };
  
  LinkedList.prototype.insertAfter = function(node, value) {
    if (!this.hasNode) return "The node does not exist";
    var oldNext = node.next;
    var newNext = new Node(value);
    node.next = newNext;
    newNext.next = oldNext;
    if (this.tail === node) this.tail = newNext;
    return newNext;
  };
  
  LinkedList.prototype.removeAfter = function(node) {
    if (!this.hasNode) return "The node does not exist";
    var removedNode = node.next;
    if (!removedNode) return 'Nothing to remove';
    var newNext = removedNode.next;
    node.next = newNext;
    removedNode.next = null;
    if (removedNode === this.tail) this.tail = node;
    return removedNode;
  };

  LinkedList.prototype.hasNode = function (inode) {
    var node = this.head;
    while(node) {
        if (node == inode) 
            return true;
        node = node.next;
    }
    return false;
  }
  
  LinkedList.prototype.insertHead = function(value) {
    var newHead = new Node(value);
    var oldHead = this.head;
    if (!oldHead) this.tail = newHead;
    this.head = newHead;
    newHead.next = oldHead;
    return this.head;
  };
  
  LinkedList.prototype.removeHead = function() {
    var oldHead = this.head;
    var newHead = oldHead.next;
    this.head = newHead;
    oldHead.next = null;
    return oldHead;
  }
  
  LinkedList.prototype.findNode = function(value) {
    var node = this.head;
    while (node) {
      if (node.value === value) return node;
      node = node.next;
    }
    return 'No node with value: ' + value + ' found.';
  };
  
  LinkedList.prototype.removeFromTail = function() {
    var node = this.head;
    switch (this.size()) {
      case 0:
        return;
      case 1:
        this.head = null;
        this.tail = null;
        break;
      default:
        for (let i = 1; i < this.size() - 1; i++) {
          node = node.next;
        }
        node.next = null;
    }
    return node;
  }
  
  LinkedList.prototype.appendToTail = function(value) {
    var newTail = new Node(value);
    switch (this.size()) {
      case 0:
        this.tail = newTail;
        this.head = newTail;
        break;
      default:
        this.tail.next = newTail;
        this.tail = newTail;
        break;
    }
    return newTail;
  };

  module.exports = LinkedList;