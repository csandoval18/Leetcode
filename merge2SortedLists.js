function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

const mergeTwoLists = (headA, headB) => {
  console.log('start')
	let dummyNode = new ListNode(0)
  console.log(dummyNode)
	let tail = dummyNode
  console.log("tail",tail)
	while (true) {
		if (headA === null) {
			tail.next = headB
			break
		}
		if (headB === null) {
			tail.next = headA
			break
		}

		if (headA.val <= headB.val) {
			tail.next = headA
			headA = headA.next
		} else {
			tail.next = headB
			headB = headB.next
		}

		tail = tail.next
	}
	return dummyNode.next
}

console.log(mergeTwoLists(list1, list2))