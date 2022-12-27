const plusOne = (digits) => {
	let re = 1,
		i = digits.length - 1
	while (true) {
		if (i >= 0) {
			if (digits[i] === 9) {
				digits[i] = 0
			} else {
				digits[i] += 1
				break
			}
		} else {
			digits.unshift(1)
			re = 0
			break
		}
		--i
	}
	return digits
}

let a = [9, 9, 9]
console.log(plusOne(a))
