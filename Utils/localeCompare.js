const string1 = "a"
const string2 = "z"

console.log(string1.localeCompare(string2)) // -1
console.log(string2.localeCompare(string1)) // 1
console.log(string1.localeCompare(string1)) // 0
