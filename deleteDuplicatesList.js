const deleteDuplicates = (head) => {
	if (!head) return head
	let a = head,
		b = head.next,
		tmp = head
	while (b !== null) {
		if (a.val === b.val) {
			a.next = b.next
			b = a.next
		} else {
			a = a.next
			b = b.next
		}
	}
	return tmp
}
