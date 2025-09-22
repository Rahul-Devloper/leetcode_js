// Intuition
// We need to find two numbers in the array that sum up to a given target. Instead of using a brute-force approach that checks all pairs (which would be too slow), we can leverage a hash table (dictionary) to store numbers we’ve seen so far and quickly check if their complement exists.

// Approach
// Create a hash table (num_map) to store numbers along with their indices.
// Iterate through the array:
// Compute the complement of the current number (target - num).
// Check if the complement is already in the hash table.
// If it is, return the indices of the complement and the current number.
// Otherwise, store the current number with its index in the hash table.
// Since there is exactly one solution, we are guaranteed to find a valid pair.
// Complexity
// Time complexity: O(n)

// Space complexity: O(n)

/**
 * Function to find two numbers in array that add up to target
 * Returns indices of the two numbers
 * 
 * @param {number[]} nums - Array of integers to search through
 * @param {number} target - Target sum we're looking for
 * @return {number[]} - Returns array containing indices of the two numbers
 */
var twoSum = function(nums, target) {
    // Create a Map to store numbers and their indices
    const map = new Map()
   
    // Iterate through the array once
    for(let i = 0; i < nums.length; i++){
        // Calculate the complement we need to reach target
        let complement = target - nums[i]

        // If complement exists in map, we found our pair
        if(map.has(complement)){
            // Return array with both indices: [complement's index, current index]
            return [map.get(complement), i]
        }

        // Store current number and its index for future lookups
        map.set(nums[i], i)
    }
};