const binarySearch = (arr, target) => {
	let l = 0
	let r = arr.length - 1
	let m = l + Math.floor((r + l) / 2)

	if (target > m) {
		l = m
	} else if (target < m) {
		r = m
	}
}
