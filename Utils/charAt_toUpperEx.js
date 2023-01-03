const capEveryOtherLetter = (str) => {
	for (let i = 0; i < str.length; i += 2) {
		str.charAt(i).toUpperCase()
	}
	return str
}

let x = "hello world"
console.log(capEveryOtherLetter(x))
