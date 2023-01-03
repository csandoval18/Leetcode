const beasts = ["ant", "bison", "camel", "duck", "bison"]
console.log(beasts.indexOf("bison"))
// output: 1

// Start from index 2
console.log(beasts.indexOf("bison", 2))
// output: 4

// Not in string beasts
console.log(beasts.indexOf("giraffe"))
// output: -1
