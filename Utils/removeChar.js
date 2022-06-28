//removes char in passed string at given index
const removeChar = (s, index) => {
	console.log(s.slice(0, index) + s.slice(index + 1, s.length))
}
