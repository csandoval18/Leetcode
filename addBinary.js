const addBinary = (a, b) => {
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
		carry = Math.floor(num / 2)
		// ans = carry + ans
		ans = (num % 2) + ans
	}
	if (carry) ans = "1" + ans
	return ans
}

let x = "abcd"
//ending range is not iinclusive so it returns indexes 0 and 1
console.log(x.slice(0, 2))
