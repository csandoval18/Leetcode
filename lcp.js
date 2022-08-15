const lcp = (strs) => {
	let prefix = ''
	if (strs.length === 0) return 0
	for (let i = 0; i < strs[0].length; ++i) {
		let char = strs[0][i]
		for (let j = 1; strs.length; ++j) {
			if (strs[j][i] !== char) {
				return prefix
			}
		}
		prefix += char
	}
	return prefix
}
