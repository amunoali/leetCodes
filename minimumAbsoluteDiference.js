// Given an array of distinct integers arr, find all pairs of elements with the minimum absolute difference of any two elements.

// Return a list of pairs in ascending order(with respect to pairs), each pair [a, b] follows

// a, b are from arr
// a < b
// b - a equals to the minimum absolute difference of any two elements in arr
 

// Example 1:

// Input: arr = [4,2,1,3]
// Output: [[1,2],[2,3],[3,4]]
// Explanation: The minimum absolute difference is 1. List all pairs with difference equal to 1 in ascending order.
// Example 2:

// Input: arr = [1,3,6,10,15]
// Output: [[1,3]]

var minimumAbsDifference = function(arr) {
    
    let minDistance = Infinity;
    let result = [];
    
    // sort O(nlgn)
    arr.sort(function (a, b) { return a - b;});
    
    // use two pointer calculate min distance O(n)
    for (let i = 1; i < arr.length; i++) {
        
        let thisDistance = arr[i] - arr[i-1];
        
        if (thisDistance < minDistance) {
            minDistance = thisDistance;
        }
    }
    
    // use two pointer to test if within min distance, if so add pair to result O(n)
    for (let i = 1; i < arr.length; i++) {
        
        let thisDistance = arr[i] - arr[i-1];
        
        if (thisDistance === minDistance) {
            result.push([arr[i-1], arr[i]]);
        }
    }
    
    return result;
};