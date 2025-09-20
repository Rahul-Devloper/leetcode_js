// Given a pattern and a string s, find if s follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s. Specifically:

// Each letter in pattern maps to exactly one unique word in s.
// Each unique word in s maps to exactly one letter in pattern.
// No two letters map to the same word, and no two words map to the same letter.
 

// Example 1:

// Input: pattern = "abba", s = "dog cat cat dog"

// Output: true

// Explanation:

// The bijection can be established as:

// 'a' maps to "dog".
// 'b' maps to "cat".
// Example 2:

// Input: pattern = "abba", s = "dog cat cat fish"

// Output: false

// Example 3:

// Input: pattern = "aaaa", s = "dog cat cat dog"

// Output: false

 

// Constraints:

// 1 <= pattern.length <= 300
// pattern contains only lower-case English letters.
// 1 <= s.length <= 3000
// s contains only lowercase English letters and spaces ' '.
// s does not contain any leading or trailing spaces.
// All the words in s are separated by a single space.

/**
 * Function to check if a string follows a given pattern
 * Similar to isomorphic strings, but works with words instead of characters
 * 
 * @param {string} pattern - The pattern string (e.g., "abba")
 * @param {string} s - Space-separated words to check against pattern
 * @return {boolean} - Returns true if string follows pattern, false otherwise
 */
var wordPattern = function (pattern, s) {
    // Create two maps to track pattern and word positions
    const patternMap = new Map()  // Maps pattern chars to their last position
    const sMap = new Map()        // Maps words to their last position

    // Split input string into array of words
    const splitS = s.split(" ")
    
    // First check: pattern length must match number of words
    if (pattern.length !== splitS.length) return false

    // Iterate through pattern and words simultaneously
    for (let i = 0; i < pattern.length; i++) {
        // If we haven't seen this pattern character before,
        // map it to current position
        if (!patternMap.has(pattern[i])) {
            patternMap.set(pattern[i], i)
        }

        // If we haven't seen this word before,
        // map it to current position
        if (!sMap.has(splitS[i])) {
            sMap.set(splitS[i], i)
        }

        // Compare positions - they must match for valid pattern
        // This ensures one-to-one mapping between patterns and words
        if (patternMap.get(pattern[i]) !== sMap.get(splitS[i])) {
            return false
        }
    }

    // If we've made it through the entire pattern without returning false,
    // the string follows the pattern
    return true
};