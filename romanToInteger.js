const romanToInt = (s) => {
	const dic = new Map()
	// Fill the map
	dic.set('I', 1)
	dic.set('V', 5)
	dic.set('X', 10)
	dic.set('L', 50)
	dic.set('C', 100)
	dic.set('D', 500)
	dic.set('M', 1000)
	let count = 0
	let j = 1
	for (let i = 0; i < s.length; ++i) {
		// console.log('dic.get(s[i]) ' + dic.get(s[i]))
		// console.log('dic.get(s[j]) ' + dic.get(s[j]))
		if (dic.get(s[i]) < dic.get(s[j])) {
			// console.log('j: ' + j)
			count += dic.get(s[j]) - dic.get(s[i])
			j += 2
			++i
		} else {
			// console.log('j: ' + j)
			count += dic.get(s[i])
			++j
		}
		// console.log('count: ' + count)
	}
	return count
}

let s = 'MCMXCIV'
console.log(romanToInt(s))
