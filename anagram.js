// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

 

// Example 1:

// Input: s = "anagram", t = "nagaram"

// Output: true

// Example 2:

// Input: s = "rat", t = "car"

// Output: false

 

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.


/**
 * @param {string} s - First input string
 * @param {string} t - Second input string
 * @return {boolean} - Returns true if strings are anagrams, false otherwise
 */
var isAnagram = function(s, t) {
    // First check: if lengths are different, they can't be anagrams
    if(s.length !== t.length) return false

    // Create a Map to store character frequencies
    const map = new Map()
    
    // First pass: Count frequency of each character in string s
    for(let char of s){
        // If char exists, increment its count, if not set it to 1
        map.set(char, (map.get(char) || 0) + 1 )
    }

    // Second pass: Check string t against our character map
    for(let char of t){
        // If character doesn't exist in map, strings can't be anagrams
        if(!map.has(char)) return false
       
        // Decrease the frequency count for this character
        map.set(char, map.get(char) - 1)

        // If frequency becomes 0, remove the character from map
        if(map.get(char) === 0) map.delete(char)        
    }

    // Final check: if map is empty, all characters matched perfectly
    // Return true if map is empty (meaning strings are anagrams)
    if(map.size === 0) return true

};
