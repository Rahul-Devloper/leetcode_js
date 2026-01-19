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

// 0 <= s.length <= 5 * 10^4
// s consists of English letters, digits, symbols and spaces

/**
 * @param {string} s
 * @return {number}
 * 
 * Approach: Sliding Window
 * - Use two pointers (left and right) to maintain a window of characters
 * - Use a Set to track characters in the current window
 * - Expand the window by moving right pointer when no duplicate is found
 * - Shrink the window by moving left pointer when a duplicate is encountered
 * - Track the maximum length seen so far
 * Time Complexity: O(n) - each character is visited at most twice
 * Space Complexity: O(min(n, m)) - where m is the character set size
 */
var lengthOfLongestSubstring = function(s) {
    // Left pointer of the sliding window
    let l = 0
    // Right pointer of the sliding window
    let r = 0
    // Track the maximum length found so far
    let maxLength = 0
    // Set to store unique characters in current window
    let set = new Set()
    // Length of the string
    let n = s.length

    // Expand the window by moving right pointer
    while(r < n){
        // If character at right pointer is not in the set
        if(!set.has(s[r])){
            // Add the character to the set
            set.add(s[r])
            // Update maxLength with current window size (r - l + 1)
            maxLength = Math.max(maxLength, r - l + 1)
            // Expand window by moving right pointer
            r++
        }
        else{
            // Character is a duplicate, remove left character from set
            set.delete(s[l])
            // Shrink window by moving left pointer
            l++
        }
    }
    // Return the length of the longest substring without repeating characters
    return maxLength

    
};