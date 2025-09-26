// Write an algorithm to determine if a number n is happy.

// A happy number is a number defined by the following process:

// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.

 

// Example 1:

// Input: n = 19
// Output: true
// Explanation:
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1
// Example 2:

// Input: n = 2
// Output: false
 

// Constraints:

// 1 <= n <= 231 - 1

/**
 * Determines if a number is "happy" - meaning it eventually reaches 1 after repeatedly 
 * summing the squares of its digits
 * 
 * @param {number} n - Input number to check
 * @return {boolean} - Returns true if number is happy, false otherwise
 */
var isHappy = function(n) {
    // Set to keep track of numbers we've seen to detect cycles
    let seen = new Set()

    /**
     * Helper function to calculate sum of squared digits
     * Example: getSum(19)
     * 1. digit = 19 % 10 = 9, sum = 0 + 81 = 81, num = 1
     * 2. digit = 1 % 10 = 1, sum = 81 + 1 = 82, num = 0
     * Returns 82
     * 
     * Example for Math.floor:
     * If num = 68, after digit = num % 10 = 8, num = Math.floor(68 / 10) = 6
     * Math.floor(68 / 10) returns 6 by removing the decimal part.
     * 
     * @param {number} num - Number to process
     * @return {number} - Sum of squared digits
     */
    function getSum(num){
        let sum = 0;
        while (num > 0) {
            // Get rightmost digit using modulo
            let digit = num % 10;
            // Add square of digit to sum
            sum += digit * digit;
            // Remove rightmost digit
            num = Math.floor(num / 10);
        }
        return sum
    }

    // Continue process until either:
    // 1. We reach 1 (happy number)
    // 2. We see a number we've seen before (cycle detected - not happy)
    while(n !== 1 && !seen.has(n)){
        seen.add(n)
        n = getSum(n)
    }

    // If we reached 1, it's happy; if we found a cycle, it's not
    return n == 1
};