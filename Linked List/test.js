// will be updated soon
const LinkedList = require('./index');

test('Linked List is a class', () => {
    expect(typeof LinkedList.prototype.constructor).toEqual('function');
});

test('Linked List can delete a single element and add an element in empty list', () => {
    const ll = new LinkedList(0);
    expect(ll.print()).toEqual("0");
    ll.removeHead();
    expect(ll.print()).toEqual("");
    expect(ll.size()).toEqual(0);
    ll.appendToTail(3);
    expect(ll.size()).toEqual(1);
    expect(ll.print()).toBe("3");
    ll.removeFromTail();
    expect(ll.print()).toBe("");
})

test('You can find an element in list', () => {
    const ll = new LinkedList(3);
    ll.appendToTail(5);
    ll.insertHead(7);
    ll.appendToTail(9);
    expect(ll.hasNode(ll.findNode(5))).toBe(true);
});

test('You can remove after and inserAfter a node', () => {
    const ll = new LinkedList(3);
    ll.insertAfter(ll.findNode(3), 6);
    expect(ll.print()).toBe('3, 6');
    ll.removeAfter(ll.findNode(3));
    expect(ll.print()).toBe('3');
});