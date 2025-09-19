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


/**
 * Function to determine if a ransom note can be constructed from a magazine
 * Each letter from the magazine can only be used once
 * 
 * @param {string} ransomNote - The string we want to construct
 * @param {string} magazine - The source string we can use letters from
 * @return {boolean} - Returns true if ransomNote can be constructed from magazine
 */
var canConstruct = function(ransomNote, magazine) {
    // Create a Map to store character frequencies from magazine
    const map = new Map()

    // First pass: Count frequency of each character in magazine
    for (let char of magazine){
        // If char exists, increment its count, if not set it to 1
        map.set(char, (map.get(char) || 0) + 1)
    }

    // Second pass: Check if we have enough characters for the ransom note
    for (let char of ransomNote){
        // If character doesn't exist in map or its count is 0
        // we can't construct the note
        if(!map.has(char) || map.get(char) === 0) return false

        // Decrease the frequency count as we use this character
        map.set(char, (map.get(char) - 1))

        // Note: This commented line would make the function return true
        // too early, which would be incorrect
        // if(map.get(char) === 0) return true
    }
    
    // If we've made it through the entire ransomNote without returning false,
    // we have all the characters we need
    return true
};