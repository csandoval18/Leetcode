const lengthOfLastWord = (s) => {
	let split = s.split(" ").filter((word) => word.length > 0)
	return split[split.length - 1].length
}

console.log(lengthOfLastWord(" fly me to the moon "))
