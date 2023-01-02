const mySqrt = (x) => {
	let i = 1
	while (i * i <= x) {
		++i
	}
	return i - 1
}

//49 4 + 9 = 13 + 1 / 2

const sqrt = (x) => {
	let ans = 0
	for (let i = 0; i * i <= x; ++i) {
		ans = i
	}
	return ans
}

let b = 49
console.log(sqrt(b))
