/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let formattedS = s.replace(/[^a-z0-9]/gi, '').toLowerCase()
    console.log(formattedS)
    let left = 0
        right = formattedS.length - 1
    while(left < right){
        if(formattedS[left] !== formattedS[right]){
            return false
        }
        else{
            left ++
            right --
        }
    }
    return true
};