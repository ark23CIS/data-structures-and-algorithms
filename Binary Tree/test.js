const BinarySearchTree = require('./index');

test('BinarySearchTree is a class', () => {
    expect(typeof BinarySearchTree.prototype.constructor).toEqual('function');
});

test('testing BFS', () => {
    var tree = new BinarySearchTree();
    tree.insert(5);
    tree.insert(8);
    tree.insert(9);
    tree.insert(4);
    tree.insert(3);
    expect(tree.breadthFirstSearch()).toEqual([5,4,8,3,9]);
})

test('testing Pre-order depth search', () => {
    var tree = new BinarySearchTree();
    tree.insert(5);
    tree.insert(8);
    tree.insert(9);
    tree.insert(4);
    tree.insert(3);
    expect(tree.DFSPreOrder()).toEqual([5,4,3,8,9]);
})

test('testing In-order depth search', () => {
    var tree = new BinarySearchTree();
    tree.insert(5);
    tree.insert(8);
    tree.insert(9);
    tree.insert(4);
    tree.insert(3);
    expect(tree.DFSInOrder()).toEqual([4,3,5,8,9]);
})

test('testing post-order depth search', () => {
    var tree = new BinarySearchTree();
    tree.insert(5);
    tree.insert(8);
    tree.insert(9);
    tree.insert(4);
    tree.insert(3);
    expect(tree.DFSPostOrder()).toEqual([4,3,8,9, 5]);
})