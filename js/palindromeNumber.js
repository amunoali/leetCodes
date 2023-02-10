// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward.

// For example, 121 is a palindrome while 123 is not.
 

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

//condiiton if x negative return false
//create reversed variable
//create current variable = x
//run while loop for current doesnt equal 0
//set reversed = reversed * 10 + current mod 10
//divde current by 10 and return if x = current

// var isPalindrome = function(x) {
//     if(x < 0){
//         return false
//     }
//     let reversed = 0
//     let current = x
//     while(current != 0){
//         reversed = reversed * 10 + current % 10
//         current = Math.floor(current/10)
//     }
//     return x === reversed
// }

var isPalindrome = function(x) {
    if(x < 0){
        return false
    }
    return x === reversedInteger(x)
}

var reversedInteger = function(x){
    let reversed = 0
    while(x > 0){
        reversed = (reversed * 10) + (x % 10)
        x = Math.floor(x/10)
    }
    return reversed
}
