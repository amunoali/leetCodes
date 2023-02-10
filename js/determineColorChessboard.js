// You are given coordinates, a string that represents the coordinates of a square of the chessboard. Below is a chessboard for your reference.
// Return true if the square is white, and false if the square is black.

// The coordinate will always represent a valid chessboard square. The coordinate will always have the letter first, and the number second.

 

// Example 1:

// Input: coordinates = "a1"
// Output: false
// Explanation: From the chessboard above, the square with coordinates "a1" is black, so return false.
// Example 2:

// Input: coordinates = "h3"
// Output: true
// Explanation: From the chessboard above, the square with coordinates "h3" is white, so return true.

var squareIsWhite = function(coordinates) {
 
    const x = coordinates.charAt(0).charCodeAt();
    const y = coordinates.charAt(1).charCodeAt();
    return (x + y) % 2 == 1;
};  


console.log(squareIsWhite('a1'), false)
console.log(squareIsWhite('h3'), true)