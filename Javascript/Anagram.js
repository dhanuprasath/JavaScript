function checkAnagram(str1, str2) {
  const sortedStr1 = str1.toLowerCase().split('').sort().join('');
  const sortedStr2 = str2.toLowerCase().split('').sort().join('');

  return sortedStr1 === sortedStr2 ? "Anagram" : "Not Anagram";
}
const inputStr1 = prompt("Enter the first string:");
const inputStr2 = prompt("Enter the second string:");

const resultAnagram = checkAnagram(inputStr1, inputStr2);
console.log(resultAnagram);
