const ListNode = (val, next) => {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

export const createLinkedList = (arr) => {
  let linkedlist = ListNode(arr.length-1)
  let next = linkedlist
  for (let i=1; i<arr.length; ++i) {
    let tmp = ListNode(arr[(arr.length-1) - i], next)
    next = tmp
  }
}

const arr = [1,2,4]
console.log(createLinkedList(arr))
