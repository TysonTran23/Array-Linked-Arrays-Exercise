/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length += 1;
    } else {
      newNode.next = this.head;
      this.head = newNode;
      this.length += 1;
    }
  }

  /** pop(): return & remove last item. */

  pop() {
    if (!this.head) {
      throw new Error("List is empty");
    } else {
      let currentNode = this.head;
      let previousNode = null;
      while (currentNode.next) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      this.tail = previousNode;
      if (previousNode) {
        previousNode.next = null;
      } else {
        this.head = null;
      }
      this.length--;
      return currentNode.val;
    }
  }

  /** shift(): return & remove first item. */

  shift() {
    if (!this.head) {
      throw new Error("List is empty");
    }

    let currentHeadNode = this.head;
    this.head = this.head.next;
    this.length--;
    if (!this.head) {
      this.tail = null;
    }
    return currentHeadNode.val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx < 0 || idx >= this.length) {
      throw new Error("Invalid");
    }
    let currentNode = this.head;
    let currentIdx = 0;
    while (currentIdx < idx) {
      currentNode = currentNode.next;
      currentIdx++;
    }
    return currentNode.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx < 0 || idx >= this.length) {
      throw new Error("Invalid");
    }
    let currentNode = this.head;
    let currentIdx = 0;
    while (currentIdx < idx) {
      currentNode = currentNode.next;
      currentIdx++;
    }
    currentNode.val = val;
    return currentNode;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx < 0 || idx > this.length) {
      throw new Error("Invalid");
    }
    if (idx === 0) {
      const newNode = new Node(val);
      newNode.next = this.head;
      this.head = newNode;
      if (!this.tail) {
        this.tail = newNode;
      }
    } else {
      let currentNode = this.head;
      let currentIdx = 0;
      let newNode = new Node(val);

      while (currentIdx < idx - 1) {
        currentNode = currentNode.next;
        currentIdx++;
      }
      newNode.next = currentNode.next;
      currentNode.next = newNode;

      if (!newNode.next) {
        this.tail = newNode;
      }
    }

    this.length++;
    return undefined;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx < 0 || idx >= this.length) {
      throw new Error("Invalid index");
    }

    let currentNode = this.head;
    let currentIdx = 0;
    let prevNode = null; // Add a variable to keep track of the previous node

    while (currentIdx < idx) {
      prevNode = currentNode; // Update the previous node
      currentNode = currentNode.next;
      currentIdx++;
    }

    let removedNode = currentNode.val;

    if (currentNode === this.head) {
      this.head = currentNode.next;
    } else {
      prevNode.next = currentNode.next;
    }

    if (currentNode === this.tail) {
      this.tail = prevNode;
    }

    this.length--;
    return removedNode;
  }

  /** average(): return an average of all values in the list */

  average() {}
}

module.exports = LinkedList;
