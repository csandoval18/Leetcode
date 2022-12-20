const binarySearch = (arr, target) => {
	let l = 0
	let r = arr.length - 1
	let m
	while (r - l > 1) {
		m = Math.floor((r + l) / 2)
		if (arr[m] < target) {
			l = m
		} else {
			r = m
		}
		if (arr[l] === target) return l
		else if (arr[r] === target) return r
		else return "target not in array"
	}
}
