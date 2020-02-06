// Binary Search Tree implementation

function BinarySearchTree() {
    this.root = null;
}

function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

BinarySearchTree.prototype.insert = function (value) {
    var node = new Node(value);
    if (!this.root) {
        this.root = node;
        return this;
    }
    var current = this.root;
    while (true) {
        if (current.value === value)
            return undefined;
        else if (value < current.value) {
            if (!current.left) {
                current.left = node;
                return this;
            }
            else {
                current = current.left;
            }
        }
        else {
            if (!current.right) {
                current.right = node;
                return this;
            }
            else {
                current = current.right;
            }
        }
    }
}

BinarySearchTree.prototype.find = function(value) {
    var current = this.root;
    while (current.value != value) {
        if (value < current.value)
            current = current.left;
        else {
            current = current.right;
        }
        if (!current)
            return undefined;
    }
    return current;
} 

BinarySearchTree.prototype.breadthFirstSearch = function() {
    var node = this.root;
    var nodes = []
    var temp = [];
    temp.push(node);
    while (temp.length != 0) {
        node = temp.shift();
        nodes.push(node.value);
        if (node.left) temp.push(node.left);
        if (node.right) temp.push(node.right);
    }
    return nodes;
}

BinarySearchTree.prototype.DFSPreOrder = function () {
    var nodes = [], node = this.root;
    function traverse(el) {
        nodes.push(el.value);
        if (el.left) traverse(el.left);
        if (el.right) traverse(el.right);
    }
    nodes.push(node.value);
    traverse(node.left);
    traverse(node.right);
    return nodes;
}

BinarySearchTree.prototype.DFSInOrder = function () {
    var nodes = [], node = this.root;
    function traverse(el) {
        nodes.push(el.value);
        if (el.left) traverse(el.left);
        if (el.right) traverse(el.right);
    }
    traverse(node.left);
    nodes.push(node.value);
    traverse(node.right);
    return nodes;
}

BinarySearchTree.prototype.DFSPostOrder = function () {
    var nodes = [], node = this.root;
    function traverse(el) {
        nodes.push(el.value);
        if (el.left) traverse(el.left);
        if (el.right) traverse(el.right);
    }
    traverse(node.left);
    traverse(node.right);
    nodes.push(node.value);
    return nodes;
}

module.exports = BinarySearchTree;