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
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    if(s.length !== t.length) return false
    const map = new Map()
    
    for(let char of s){
        map.set(char, (map.get(char) || 0) + 1 )
    }

    for(let char of t){
        if(!map.has(char)) return false
       
        map.set(char, map.get(char) - 1)

        if(map.get(char) === 0) map.delete(char)        
    }

    if(map.size === 0) return true

};
 