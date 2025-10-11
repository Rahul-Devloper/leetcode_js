// The maximum sum of a subarray: Given an array of integers, find the subarray with the maximum sum.

// example usage
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const num = 3;
// const maxSum = maxSubarraySum(arr, num);
// console.log(maxSum); // output: 24

function maxSubarraySum(arr, num) {

    let maxSum = 0
    let tempSum = 0

    // initializeing the window

    for(let i = 0; i < num; i++) {
        maxSum+= arr[i]
     }

    //  sliding the window

    tempSum = maxSum

    for(let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i]
        maxSum = Math.max(maxSum, tempSum)
    }
    return maxSum
}