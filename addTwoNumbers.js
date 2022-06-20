class ListNode {
	constructor(val, next) {
		this.val = val === undefined ? 0 : val
		this.next = next === undefined ? null : next
	}
}

// const arr2List = (arr) => {
//   arr.reverse().reduce(acc, curr)
// }

let arr1 = [2, 4, 3]

//acc = accumulator
let head = arr1.reverse().reduce((acc, curr) => {
	if (acc == null) {
		acc = new ListNode(curr)
	} else {
		acc = new ListNode(curr, acc)
	}
	console.log(acc)
	return acc
}, null)

const printLinkedList = (head) => {
	temp = head
	while (temp != null) {
		console.log(temp.val)
		temp = temp.next
	}
}

printLinkedList(head)
