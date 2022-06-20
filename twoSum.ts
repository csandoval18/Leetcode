const twoSums = (nums: number[], target: number): number[] => {
	let hm = new Map()
	for (let i = 0; i < nums.length; ++i) {
		let numSearch = target - nums[i]
		if (hm.get(numSearch) !== undefined) {
			console.log('hello')
			return [hm.get(numSearch), i]
		} else {
			hm.set(nums[i], i)
			console.log(hm)
		}
	}
	return []
}

// let nums = [1, 4, 3]
// let target = 7
// console.log(twoSums(nums, target))
