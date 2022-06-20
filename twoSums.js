const twoSum = (nums, target) => {
	let ht = new Map()
	for (let i = 0; i < nums.length; ++i) {
		let searchNum = target - nums[i]
		if (ht.get(searchNum) === undefined) {
			ht.set(nums[i], i)
		} else {
			return [ht.get(searchNum), i]
		}
	}
}

// let nums = [3, 3]
// let target = 6
// console.log(twoSum(nums, target))
