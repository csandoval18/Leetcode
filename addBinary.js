const addBinary2 = (a, b) => {
	let carry = 0,
		lenA = a.length,
		lenB = b.length,
		max = Math.max(lenA, lenB),
		num = 0,
		ans = ""
	for (let i = 0; i < max; ++i) {
		num =
			Number(a[lenA - 1 - i] || 0) +
			Number(b[lenB - 1 - i] || 0) +
			carry
		// determines if carry is 1 or 0
		carry = Math.floor(num / 2)
		// 0 & 2 will add 0 to res and 1 and 3 will add a 1
		ans = (num % 2) + ans
	}
	// if carry stays at one at end of loop a 1 has to be added at end of res str
	if (carry) ans = "1" + ans
	return ans
}

let x = "abcd"
//ending range is not iinclusive so it returns indexes 0 and 1
console.log(x.slice(0, 2))
