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
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

const map = new Map()
   
for(let i = 0; i < nums.length; i++){
    let newValue = target - nums[i]
    if(map.has(newValue)){
       return [map.get(newValue),i]
    }
    map.set(nums[i], i)
  }
};