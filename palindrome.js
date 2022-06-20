const palindrome = (x) => {
	if (x < 0) {
		return false
	} else if (x < 10) {
		return true
	}

	//turn x into array
	let arr = Array.from(String(x), Number)
	let len = arr.length
	let r = len - 1

	for (let l = 0; l < len / 2; ++l) {
		if (arr[l] == arr[r]) {
			--r
		} else {
			return false
		}
	}
	return true
}

// let x = 1001
// console.log(palindrome(x))
// console.log('hello world')
