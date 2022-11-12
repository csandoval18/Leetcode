const removeDuplicates = (nums) => {
	for (let i = 0; i < nums.length; ++i) {
		if (nums[i] === nums[i + 1]) {
			nums.shift()
			--i
		}
	}
	return nums
}

const nums = [1, 1, 2]
console.log(removeDuplicates(nums))

//   1, 2, 2, 2 ,3
//   n  c
