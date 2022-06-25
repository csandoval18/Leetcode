const isValid = (s) => {
	let stack = []
	let map = new Map([
		['(', ')'],
		['[', ']'],
		['{', '}'],
	])

	for (let i = 0; i < s.length; ++i) {
		if (map.has(s[i])) {
			stack.push(map.get(s[i]))
			console.log(stack)
		} else if (s[i] !== stack.pop()) return false
	}
	return stack.length === 0
}

let s = '()'
console.log(isValid(s))
