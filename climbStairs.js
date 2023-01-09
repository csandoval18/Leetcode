const climbStairs = (n) => {
	let a = 1,
		b = 1,
		tmp
	for (let i = 0; i < n - 1; ++i) {
		tmp = a
		a = a + b
		b = tmp
	}
	return a
}
