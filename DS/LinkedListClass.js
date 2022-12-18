class LNode {
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
		let temp = this.head
		while (temp != null) {
			temp = temp.next
			++length
		}
	}
	insertNode(val) {
		let newNode = new LNode(val)
		if (this.head == null) {
			this.head = newNode
			return
		}
	}
	deleteNode(nodeOffset) {
		let temp1 = this.head
		let temp2 = null
		let listLen = 0

		//if linked list is empty
		if (this.head == null) {
			console.log("List is empty")
			return
		}
	}
}
const addTwoNumbers = (l1, l2) => {}

let arr1 = [2, 4, 3] //342
let arr2 = [5, 6, 4] //465
//output [7,0,8]
