function evenNumberOfDigits(arr) {
    const result = arr.filter(num => String(num).length % 2 === 0);
    return result.join(' ');
}

const numsInput = prompt("Enter space-separated numbers:");
const inputNums = numsInput.split(' ').map(Number);

const resultEvenDigits = evenNumberOfDigits(inputNums);
console.log(resultEvenDigits);
