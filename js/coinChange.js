// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

// Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

// You may assume that you have an infinite number of each kind of coin.

 

// Example 1:

// Input: coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1
// Example 2:

// Input: coins = [2], amount = 3
// Output: -1
// Example 3:

// Input: coins = [1], amount = 0
// Output: 0

const coinChange = function (coin, amount){
    const count = new Array(amount + 1).fill(Infinity)
    count[0] = 0
    for (let i = 0; i < coin.length; i++){
        for (let j = coin[i]; j <= amount; j++){
            count[j] = Math.min(count[j], count[j - coin[i]] + 1)
        }
    }
    return count[amount] === Infinity ? -1 : count[amount]
}

console.log(coinChange([1,2,5], 11), 3)
console.log(coinChange([2],3), -1)