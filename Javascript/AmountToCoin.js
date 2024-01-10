function amountToCoins(amount, coinsList) {
    let remainingAmount = amount;
    const result = [];

    for (let coin of coinsList) {
        while (remainingAmount >= coin) {
            result.push(coin);
            remainingAmount -= coin;
        }
    }

    return result.join(', ');
}
const inputAmount = parseInt(prompt("Enter the amount:"));
const inputCoins = prompt("Enter space-separated coin values:").split(' ').map(Number);

const resultCoins = amountToCoins(inputAmount, inputCoins);
console.log(resultCoins);
