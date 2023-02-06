// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

 const isAnagram = function(s, t) {
    //check same size
    //can split and sort and comapre
   let sameSize = s.length === t.length
    sSorted = s.split('').sort().join('')
    tSorted = t.split('').sort().join('')
    if(sameSize && sSorted == tSorted){
        return true
    }else{
        return false
    }
    
};


console.log(isAnagram(s = "anagram", t = "nagaram"), true)
console.log(isAnagram(s = "rat", t = "car"), false)