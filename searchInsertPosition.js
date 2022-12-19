const searchInsert = (nums, target) => {
	let l = 0,
		r = nums.length - 1,
		m
	while (l <= r) {
		m = Math.floor((l + r) / 2)
		console.log("mid:", m)
		if (nums[m] === target) return m
		else if (nums[m] < target) {
			l = ++m
		} else {
			r = --m
		}
	}
	return l
}

const x2 = [1, 3, 5, 6]
console.log(searchInsert(x2, 5))
