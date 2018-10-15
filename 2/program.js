const getNumbers = process.argv.slice(2);
const numbers = getNumbers.map(Number)
const sum = numbers.reduce((a, b) => a + b)

console.log(sum)