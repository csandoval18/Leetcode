const detectCapitalUse = (word) => {
	if (word.toUpperCase() === word) return true
	if (word.toLowerCase() === word) return true
	if (
		word[0] === word[0].toUpperCase() &&
		word.substring(1).toLowerCase() === word.substring(1)
	)
		return true
	else return false
}

// word = "USA"
// output: true

// word = "penguin"
// output: true

//word = "Google"
// output: true

// word = "FlaG"
// output: false
