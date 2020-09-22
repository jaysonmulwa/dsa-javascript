/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    var reg = /[^0-9a-z]/g;
    s = s.toLowerCase();
    s = s.replace(reg, "");
    console.log(s);
    var i = 0;
    var j = s.length - 1;
    while (i < j) {
        if(s[i] === s[j]) {
            i++;
            j--;
        }
        else {
            return false;
        } 
    }
    return true;
};
