// 3. Longest Substring Without Repeating Characters
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// Given a string s, find the length of the longest substring without duplicate characters.

 

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let l = 0
    let r = 0
    let maxLength = 0
    let set = new Set()
    let n = s.length

    // moving right side. so, add r < n set [ b, c, ]

    while(r < n){
        if(!set.has(s[r])){
            set.add(s[r])
            maxLength = Math.max(maxLength, r - l + 1)
            r++
        }
        else{
            set.delete(s[l])
            l++
        }
    }
    return maxLength

    
};