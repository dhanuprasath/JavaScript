function rotateArray(arr, n) {
    const len = arr.length;
    const rotated = [...arr.slice(n % len), ...arr.slice(0, n % len)];
    return rotated.join(' ');
}

const arrInput = prompt("Enter space-separated numbers:");
const inputArr = arrInput.split(' ').map(Number);
const rotation = parseInt(prompt("Enter the number of positions to rotate:"));

const resultRotation = rotateArray(inputArr, rotation);
console.log(resultRotation);
