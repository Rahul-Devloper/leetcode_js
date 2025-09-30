// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

 

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]

// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Explanation:

// There is no string in strs that can be rearranged to form "bat".
// The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
// The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.
// Example 2:

// Input: strs = [""]

// Output: [[""]]

// Example 3:

// Input: strs = ["a"]

// Output: [["a"]]

 

// Constraints:

// 1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] consists of lowercase English letters.


/**
 * Groups strings that are anagrams of each other
 * Two strings are anagrams if they have the same characters in different orders
 * 
 * @param {string[]} strs - Array of strings to group
 * @return {string[][]} - Array of arrays containing grouped anagrams
 */
var groupAnagrams = function (strs) {
    // Create a Map to store sorted strings as keys and their anagrams as values
    const map = new Map()

    // Process each string in the input array
    for (let char of strs) {
        // Create a sorted version of the string to use as key
        // Example: 'eat' becomes 'aet'
        // This ensures all anagrams have the same key
        let sortedChar = char.split('').sort().join('')

        // If we haven't seen this sorted pattern before,
        // initialize an empty array for this group
          if (!map.has(sortedChar)) map.set(sortedChar, [])

        // Add the original string to its anagram group
        map.get(sortedChar).push(char)
    }

    // Convert Map values to array and return
    // Example output: [["bat"],["nat","tan"],["ate","eat","tea"]]
    return Array.from(map.values())
};