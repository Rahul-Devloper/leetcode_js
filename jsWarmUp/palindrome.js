/**
 * Check if a string is a palindrome considering only alphanumeric characters
 * and ignoring cases.
 *
 * @param {string} s - Input string to check
 * @return {boolean} - true if s is a palindrome (after formatting), false otherwise
 */
var isPalindrome = function(s) {
    // Remove all non-alphanumeric characters and convert to lowercase.
    // Regex breakdown: [^a-z0-9] -> any character that is NOT a lowercase letter or digit.
    // The 'i' flag makes the match case-insensitive (so A-Z covered), 'g' is global.
    // Example: "A man, a plan, a canal: Panama" -> "amanaplanacanalpanama"
    let formattedS = s.replace(/[^a-z0-9]/gi, '').toLowerCase()

    // Optional: debug output to inspect the normalized string (can be removed in production)
    console.log(formattedS)

    // Two-pointer setup: compare characters from both ends moving inward
    let left = 0
    let right = formattedS.length - 1

    // Loop until pointers meet or cross
    while (left < right) {
        // If characters at pointers differ, it's not a palindrome
        if (formattedS[left] !== formattedS[right]) {
            return false
        } else {
            // Move pointers inward when characters match
            left++
            right--
        }
    }

    // If we completed the loop without mismatches, it's a palindrome
    return true
};