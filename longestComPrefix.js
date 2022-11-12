const longestCommonPrefix = (strs) => {
	let prefix = ''
	if (strs.length === 0) return prefix
	for (let i = 0; i < strs[0].length; ++i) {
		let char = strs[0][i]
		for (let j = 1; j < strs.length; ++j) {
			if (strs[j][i] !== char) return prefix
		}
		prefix += char
	}
	return prefix
}

let strs = ['flower', 'flow', 'flight']
console.log(longestCommonPrefix(strs))

//loop through chars (char, index)
//  loop through all strs (str)
//    if str[index] != char
//      return prefix
//   prefix = prefix + char
//  return prefix
