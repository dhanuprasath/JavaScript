function generateCombinations(str) {
    let result = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            result.push(str.slice(i, j));
        }
    }
    return result.join(',');
}

const inputString = prompt("Enter a string:");
const resultCombinations = generateCombinations(inputString);
console.log(resultCombinations);
