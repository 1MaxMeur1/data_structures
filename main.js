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

st.push(12)
st.push(13)
st.push(14)
st.push(15)
st.push(16)
console.log(st.length())
console.log(st.pop())
console.log(st.length())
console.log(st.peak())