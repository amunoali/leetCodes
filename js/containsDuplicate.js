// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true
 

// Constraints:

// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109



var containsDuplicate = function(nums) {
    for (let i = 0; i < nums.length; i++){
        for (let j = i + 1; j <nums.length; j++){
            if(nums.sort((a,b)=> a-b))
            if (nums[i] === nums[j] ){
                return true
            }else{
                //if nums only has one input return false
                return false
            }
        }
    }
};
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]), true)
console.log(containsDuplicate([1,2,3,4]), false)
console.log(containsDuplicate([1,2,3,1]), true)
console.log(containsDuplicate([1,5,1,4,8,4,1,5,8,3,1]), true)
console.log(containsDuplicate([2,0,8,7,9,3]), false)
console.log(containsDuplicate([8]), false)
