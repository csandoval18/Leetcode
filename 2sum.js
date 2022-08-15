const tsum = (nums, target) => {
	const hm = new Map()
	for (let i = 0; i < nums.length; ++i) {
		const goal = target - nums[i]
		if (!hm.has(goal)) {
			hm.set(nums[i], i)
		} else {
			return [hm.get(goal), i]
		}
	}
}

const nums = [3, 2, 4]
const target = 6
console.log(tsum(nums, target))
