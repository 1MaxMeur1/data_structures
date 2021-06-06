"use strict"

//Constant Time: O(1)
//Logarithmic Time: O(log(n))
// Linear Time: O(1)
// Linearithmic Time: O(nlog(n))
// Quadric Time: O(n^2)
// Cubic Time: O(n^3)
// Exponential Time: O(b^n), b > 1
// Factorial Time: O(n!)

/*-------------------------------------REALIZATION OF DOUBLY LINKEDLIST-----------------------------------*/

class Node { // Declare Node
	constructor(value) {
		this.value = value
		this.next = null
		this.previous = null
	}
}

class LinkedList {
	constructor() {
		this.head = null
		this.tail = null
		this.length = 0
	}

	size() {
		return this.length
	}

	print() { //Print every node in array

		let result = []
		let current = this.head

		while(current) {
			result.push(current.value)
			current = current.next
		}

		return result
	}

	search(value) { //Search element in the linkedList by its value
		let current = this.head

		while(current) {
			if(current.value == value) {
				return current
			}
			current = current.next
		}

		return null
	}

	addToHead(value) {
		let node = new Node(value)

		if(this.head) { //Connect node and the head. Declare node as this.head
			node.next = this.head
			this.head.previous = node
			this.head = node
		} else {  
			this.head = node
			this.tail = node
		}
		this.length++
	}

	addToTail(value) {
		let node = new Node(value)

		if(this.tail) { //Connect node and the tail. Declare node as this.tail and update pointers
			node.previous = this.tail
			this.tail.next = node
			this.tail = node
			this.tail.next = null
		} else {
			this.head = node
			this.tail = node
		}
		this.length++
	}

	removeFromHead() {
		if(!this.head) {
			return null
		} else { //Declare next node as the this.head and update pointers
			this.head = this.head.next
			this.head.previous = null
		}
		this.length--
	}

	removeFromTail() {
		if(!this.tail) {
			return null
		} else {//Declare previous node as the this.tail and update pointers
			this.tail = this.tail.previous
			this.tail.next = null
		}
		this.length--
	}
}


let ll = new LinkedList() //Declare LInkedList


/*-------------------------------------REALIZATION OF STACK-----------------------------------*/


class Stack {

	constructor() {
		this.items = []
		this.count = 0
	}

	push(value) {
		this.items[this.count] = value
		this.count++
	}

	pop() {

		if(this.count == 0) return null

		let output = this.items[this.count - 1]
		delete this.items[this.count]
		this.count--
		return output
	}

	length() {
		return this.items.length
	}

	peak() {
		return this.items[this.count - 1]
	}
}


let st = new Stack()

/*-------------------------------------REALIZATION OF QUEUE-----------------------------------*/


function Queue() { 

    let collection = [];

    this.print = function() {
        return collection
    };

    this.enqueue = function(element) {
        collection.push(element);
    };

    this.dequeue = function() {
        return collection.shift(); 
    };

    this.front = function() {
        return collection[0];
    };

    this.size = function() {
        return collection.length; 
    };

    this.isEmpty = function() {
        return (collection.length === 0); 
    };

}

/*-------------------------------------REALIZATION OF RING QUEUE-----------------------------------*/

function RingQueue () {

    let list = [];

    this.print = function() {
        return list
    };

    this.enqueue = function(value) {
        list.push(value);
    };

    this.dequeue = function() {
    	let val = list[0]
        list.shift();
        list.push(val)
    };

    this.front = function() {
        return list[0];
    };

    this.size = function() {
        return list.length; 
    };

    this.isEmpty = function() {
        return (list.length === 0); 
    };

}


let ring = new RingQueue()
ring.enqueue(1)
ring.enqueue(2)
ring.enqueue(3)
ring.enqueue(4)
ring.enqueue(5)
console.log(ring.print())
ring.dequeue()
ring.dequeue()
ring.dequeue()
ring.dequeue()
console.log(ring.print())















