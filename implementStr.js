// console.log('haystack:', haystack[i + j] + ' ' + i)
// console.log('needle:', needle[j] + ' ' + j)
// console.log('')

const strStr = (haystack, needle) => {
	if (needle === '') {
		return 0
	}
	const len = haystack.length + 1 - needle.length
	for (let i = 0; i < len; ++i) {
		for (let j = 0; j < needle.length; ++j) {
			if (haystack[i + j] !== needle[j]) {
				break
			}
			if (j === needle.length - 1) {
				return i
			}
		}
	}
	return -1
}

const hs = 'hevllo'
const n = 'lo'
console.log(strStr(hs, n))
