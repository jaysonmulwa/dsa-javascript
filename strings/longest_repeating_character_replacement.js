/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    const map = {}
    for(let le of s){
        map[le] = 0
    }
    let l = 0;
    let r = 0;
    let res = 0
    function isRepeatStringMoreThanK(map) {
        const arr = Object.values(map)
        arr.sort((a,b)=>b-a)
        return arr.slice(1).reduce((t,e)=>t+e,0) > k
    }
    while(r<s.length) { // grow
        map[s[r]]++
        r++
        while(isRepeatStringMoreThanK(map)) { //shrink
            map[s[l]]--
            l++
        }
        res = Math.max(res, r-l)
    }
    return res
};
