function reverseNumber(num) {
    const reversed = parseFloat(num.toString().split('').reverse().join(''));
    return reversed;
}

const inputNumber = prompt("Enter a number to reverse:");
const resultReverse = reverseNumber(inputNumber);
console.log(resultReverse);
