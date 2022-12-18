function ListNode(val, next) {
	this.val = val === undefined ? 0 : val
	this.next = next === undefined ? null : next
}

export const createLinkedList = (arr) => {
	let linkedlist = new ListNode(arr[arr.length - 1])
	let next = linkedlist
	for (let i = 1; i < arr.length; ++i) {
		let tmp = new ListNode(arr[arr.length - 1 - i], next)
		next = tmp
	}
	return linkedlist
}

const convertToLinkedList = (arr) => {
	let dummyNode = new ListNode(0)
	for (let i = 0; i < arr.length; ++i) {
		dummyNode.next = new ListNode(arr[i])
		dummyNode = dummyNode.next
	}
	return dummyNode.next
}

export const printLinkedList = (head) => {
	while (head !== null) {
		console.log(head.val)
		head = head.next
	}
}

const arr1 = [1, 2, 3, 4]
let a = convertToLinkedList(arr1)
printLinkedList(a)

const arr = [1, 2, 4]
console.log(createLinkedList(arr))
export function ListNode(val, next) {
	this.val = val === undefined ? 0 : val
	this.next = next === undefined ? null : next
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

const arr1 = [1, 2, 3, 4]
let a = convertToLinkedList(arr1)
printLinkedList(a)

const arr = [1, 2, 4]
console.log(createLinkedList(arr))
