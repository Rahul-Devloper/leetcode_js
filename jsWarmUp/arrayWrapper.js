/**
 *
 */
var ArrayWrapper = function(nums) {
    this.nums = nums
   this.result = 0
       console.log(nums,"nums")

   for(let i = 0; i < nums.length; i++){
    // console.log(nums[i],"n")
    this.result += nums[i]
   }
   console.log(this.result)
   
   return this.result
};

/**
 */
ArrayWrapper.prototype.valueOf = function() {
    return this.result
}

/**
 */
ArrayWrapper.prototype.toString = function() {
    return `[${this.nums}]`
}

 const obj1 = new ArrayWrapper([1,2]);
 const obj2 = new ArrayWrapper([3,4]);
 console.log(obj1)
 console.log(obj1 + obj2); // 10
 console.log(String(obj1)); // "[1,2]"
 console.log(String(obj2)); // "[3,4]"