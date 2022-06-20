class Node {
	constructor(val) {
		this.val = val === undefined ? 0 : val
		this.next = null
	}
}

class LinkedList {
	constructor(head = null) {
		this.head = head
		this.tail = null
	}

	getListLength() {
		let length = 0
		let temp = head
		while (temp != null) {
			temp = temp.next
			++length
		}
	}

	insertNode(val) {
		let newNode = new Node(val)

		if (head == null) {
			head = newNode
			return
		}
	}

	deleteNode(nodeOffset) {
		let temp1 = head
		let temp2 = null
		let listLen = 0

		//if linked list is empty
		if (head == null) {
			console.log('List is empty')
			return
		}
	}
}

// const addTwoNumbers = (l1, l2) => {}

// let arr1 = [2, 4, 3] //342
// let arr2 = [5, 6, 4] //465
// //output [7,0,8]

// console.log(arr1.length)

// const printLinkedList = (list) => {
// 	let temp = list
// 	while (temp.next != null) {
// 		console.log(list.val)
// 		temp = temp.next
// 	}
// }

// let ll1 = convert2LinkedList(arr1)
// convert2LinkedList(arr2)

// printLinkedList(ll1)
