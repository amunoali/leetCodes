// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

 

// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true
 

// Constraints:

// 1 <= ransomNote.length, magazine.length <= 105
// ransomNote and magazine consist of lowercase English letters.

var canConstruct= function(ransomeNote, magazine){
    const ransomeNoteArray = ransomeNote.split('')

    for (let i = 0; i < ransomeNoteArray.length; i++){
        const index = magazine.search(ransomeNoteArray[i])
        if(index >= 0){
            magazine = magazine.slice(0, index) + magazine.slice(index + 1, magazine.length)
        }else{
            return false
        }
    }
    return true
 
}

var canConstruct = function(ransomNote, magazine) {
    let temporal = magazine.split('')
   
    for (let i = 0; i < ransomNote.length; i ++) {
        const char = ransomNote[i]
        
        const needleIndex = temporal.indexOf(char)

        if (needleIndex === -1) {
            return false
        } else {
            temporal.splice(needleIndex, 1)
        }
    }
    
    return temporal.length >= 0
};