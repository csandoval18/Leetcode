export function ListNode(val, next) {
	this.val = val === undefined ? 0 : val
	this.next = next === undefined ? null : next
}

const convertToLinkedList = (arr) => {
	let dummyNode = new ListNode(0)
	for (let i = 0; i < arr.length; ++i) {
		dummyNode.next = new ListNode(arr[i])
		dummyNode = dummyNode.next
	}
	return dummyNode.next
}

export const arrToLinkedList = (arr) => {
	let tmp = new ListNode(arr[arr.length - 1])
	let next = tmp
	for (let i = 1; i < arr.length; ++i) {
		tmp = new ListNode(arr[arr.length - 1 - i], next)
		next = tmp
	}
	return tmp
}

export const printLinkedList = (head) => {
	while (head !== null) {
		console.log(head.val)
		head = head.next
	}
}
