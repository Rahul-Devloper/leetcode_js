// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.


// Example 1:

// Input: nums = [1,2,3,1], k = 3
// Output: true
// Example 2:

// Input: nums = [1,0,1,1], k = 1
// Output: true
// Example 3:

// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false

// Constraints:

// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109
// 0 <= k <= 105

/**
 * Function to check if array contains duplicates within distance k
 * @param {number[]} nums - Array of integers to check
 * @param {number} k - Maximum allowed distance between duplicates
 * @return {boolean} - Returns true if nearby duplicates exist, false otherwise
 */
var containsNearbyDuplicate = function(nums, k) {
    // Create a Map to store number->index pairs
    const map = new Map()

    // Iterate through the array
    for(let i = 0 ; i < nums.length; i++){
        // Check if current number already exists in map
        if(map.has(nums[i])){
            // If number exists, check if distance between current index
            // and previous index is less than or equal to k
            if( i - map.get(nums[i]) <= k)
                return true  // Found nearby duplicates
        }
        // Store or update the latest index for current number
        map.set(nums[i], i)
    }
    // No nearby duplicates found
    return false
};