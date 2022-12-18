export function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

export const arrToLinkedList = (arr) => {
  let tmp = new ListNode(arr[arr.length-1])
  let next = tmp
  for (let i=1; i<arr.length; ++i) {
    tmp = new ListNode(arr[(arr.length-1) - i], next)
    // console.log(tmp, tmp.next)
    next = tmp
  }
  return tmp
}

const arr = [1,2,4]
// arrToLinkedList(arr)

// let ans = arrToLinkedList(arr)
// while(ans != null) {
//   console.log(ans)
//   ans = ans.next
// }
