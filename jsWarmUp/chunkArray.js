// 2677. Chunk Array
// Easy
// premium lock icon
// Companies
// Given an array arr and a chunk size size, return a chunked array.

// A chunked array contains the original elements in arr, but consists of subarrays each of length size. The length of the last subarray may be less than size if arr.length is not evenly divisible by size.

// Please solve it without using lodash's _.chunk function.

// ====================================Example 1:====================================
var chunk = function (arr, size) {
    let result = []
    for(let i = 0; i < arr.length; i+= size){
        result.push(arr.slice(i, i + size))
    }
    return result
};


// ====================================Example 2:====================================
var chunk = function(arr, size) {
    const result = [];
    let subArr = [];

    for (let i = 0; i < arr.length; i++) {
        subArr.push(arr[i]);
        
        if (subArr.length === size) {
            result.push(subArr);
            subArr = [];
        }
    }

    // leftover
    if (subArr.length > 0) {
        result.push(subArr);
    }

    return result;
};
