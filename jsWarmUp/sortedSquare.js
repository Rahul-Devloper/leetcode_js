// 977. Squares of a Sorted Array
// Easy
// Topics
// premium lock icon
// Companies
// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

 

// Example 1:

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].
// Example 2:

// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let arr = new Array(nums.length)
        left = 0
        right = nums.length - 1
        posIndex = nums.length - 1
    while(left <= right){
        let leftSquare = nums[left] ** 2
            rightSquare = nums[right] ** 2
        if(leftSquare < rightSquare){
            arr[posIndex] = rightSquare
            right--
        }
        else{
            arr[posIndex] = leftSquare
            left++
        }
        posIndex--
    }
    return arr
};