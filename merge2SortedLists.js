import { ListNode, arrToLinkedList } from "./DS/LinkedList"

const mergeTwoLists = (headA, headB) => {
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

let list1 = [1,2,4]
let list2 = [1,3,4]
for (let i=0; i<2; ++i) {
  
}
