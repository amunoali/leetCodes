// Write an algorithm to determine if a number n is happy.

// A happy number is a number defined by the following process:

// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.

 

// Example 1:

// Input: n = 19
// Output: true
// Explanation:
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1


//in order to split to get the sum, need to convert into str and then chnage back using .map()
//to get sum, use reduce,
function isHappy(n, hash={}){
    if (n !== 1){
        if (hash[n]){
            return false 
        }
        hash[n] = 1   
        const a = n.toString().split('')
        const b = a.map(x=> parseInt(x))
        const sum = b.reduce((acc,c)=> acc + c**2, 0)
        return isHappy(sum, hash)
    }
    return true 

}
console.log(isHappy(2), false)
console.log(isHappy(19), true)
console.log(isHappy(8), false)