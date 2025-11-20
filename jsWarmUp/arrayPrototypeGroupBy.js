// 2631. Group By
// Medium
// premium lock icon
// Companies
// Hint
// Write code that enhances all arrays such that you can call the array.groupBy(fn) method on any array and it will return a grouped version of the array.

// A grouped array is an object where each key is the output of fn(arr[i]) and each value is an array containing all items in the original array which generate that key.

// The provided callback fn will accept an item in the array and return a string key.

// The order of each value list should be the order the items appear in the array. Any order of keys is acceptable.

// Please solve it without lodash's _.groupBy function.

/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    let obj = {}
    let arr = this //[{"id":"1"},{"id":"1"},{"id":"2"}]
    for(let i = 0; i < arr.length; i++){
        
    }
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */

/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    let map = new Map()
    let arr = this //[{"id":"1"},{"id":"1"},{"id":"2"}]
    for(let i = 0; i < arr.length; i++){
        const key = fn(arr[i])

        if(!map.has(key)){
            map.set(key, [])
        }

        map.get(key).push(arr[i])
    }
    return Object.fromEntries(map)
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */