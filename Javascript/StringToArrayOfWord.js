function stringToArray(stringName) {
    return stringName.split(' ');
}

const inputStringToSplit = prompt("Enter a string to split:");
const resultSplitArray = stringToArray(inputStringToSplit);
console.log(resultSplitArray);
