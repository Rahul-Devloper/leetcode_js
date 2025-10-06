/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

let map = new Map()

if(s.length !== t.length) return false
    // no index required. so, no need for i = 0....
    for(let char of s ){
        map.set(char, (map.get(char) || 0) + 1)
    }
    for(let char of t){
        if(!map.has(char)) return false
            map.set(char, (map.get(char) - 1))
        if(map.get(char) === 0){
            map.delete(char)
        }
    }
    if(map.size === 0) return true
}