var lcp = (strs) => {
	var pref = ''
	for (var i = 0; i < strs[0].length; ++i) {
		var char = strs[0][i]
		for (var j = 1; j < strs.length; ++j) {
			if (strs[j][i] !== char) {
				return pref
			}
		}
		pref += char
	}
	return pref
}
var strs = ['flowrs', 'flow', 'flight']
console.log(lcp(strs))
