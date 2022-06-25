// function ListNode(val, next) {
// 	this.val = val === undefined ? 0 : val
// 	this.next = next === undefined ? null : next
// }

//prev should be moved to the leftmost position of new linked list
// since it will be there that curr.next points to
const revertList = (head) => {
	let prev = null
	let curr = head
	let next = null
	while (curr != null) {
		next = curr.next
		curr.next = prev
		prev = curr
		curr = next
	}
	return prev
}
