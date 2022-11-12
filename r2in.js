// @ts-nocheck
const roman2Int = (s) => {
	const hm = new Map([
		['I', 1],
		['V', 5],
		['X', 10],
		['L', 50],
		['C', 100],
		['D', 500],
		['M', 1000],
	])

	let count = 0
	for (let i = 0; i < s.length; ++i) {
		if (hm.get(s[i]) < hm.get(s[i + 1])) {
			count += hm.get(s[i + 1]) - hm.get(s[i])
			++i
		} else {
			count += hm.get(s[i])
		}
	}
	return count
}

let s2 = 'MCMXCIV'
console.log(roman2Int(s2))
