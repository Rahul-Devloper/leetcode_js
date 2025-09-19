// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

 

// Example 1:

// Input: s = "egg", t = "add"

// Output: true

// Explanation:

// The strings s and t can be made identical by:

// Mapping 'e' to 'a'.
// Mapping 'g' to 'd'.
// Example 2:

// Input: s = "foo", t = "bar"

// Output: false

// Explanation:

// The strings s and t can not be made identical as 'o' needs to be mapped to both 'a' and 'r'.

// Example 3:

// Input: s = "paper", t = "title"

// Output: true

 

// Constraints:

// 1 <= s.length <= 5 * 104
// t.length == s.length
// s and t consist of any valid ascii character.

/**
 * Function to determine if two strings are isomorphic
 * Isomorphic means each character in s can be mapped to a unique character in t
 * while preserving character order
 * 
 * @param {string} s - First input string
 * @param {string} t - Second input string to check isomorphism with
 * @return {boolean} - Returns true if strings are isomorphic, false otherwise
 */
var isIsomorphic = function(s, t) {
    // First check: strings must be same length to be isomorphic
    if(s.length !== t.length) return false

    // Create two maps to track character positions
    // We need two maps to ensure one-to-one mapping in both directions
    const sMap = new Map()  // Maps characters from string s to their last position
    const tMap = new Map()  // Maps characters from string t to their last position

    // Iterate through both strings simultaneously
    for (let i = 0; i < s.length; i++ ){
        // If we haven't seen this character in s before, map it to current position
        if(!sMap.has(s[i])){
            sMap.set(s[i], i)
        }
        // If we haven't seen this character in t before, map it to current position
        if(!tMap.has(t[i])){
            tMap.set(t[i], i)
        }
        // Compare pattern positions - they must match for isomorphic strings
        // This check ensures one-to-one character mapping
        if(sMap.get(s[i]) !== tMap.get(t[i])){
            return false
        }
    }
    // If we've made it through the entire strings without returning false,
    // the strings are isomorphic
    return true
};