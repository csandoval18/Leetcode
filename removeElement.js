const removeElement = (nums, val) => {
	let l = 0
	for (let i = 0; i < nums.length; ++i) {
		if (nums[i] != val) {
			nums[l] = nums[i]
			++l
		}
	}
	return { nums: nums, l: l }
	// return l
}

const x = [3, 2, 2, 3]
let y = removeElement(x, 3)
let result = y.nums.splice(0, y.l)
console.log(result)
