/**
 * @param {string} s
 * @return {string}
 */
 
 //Top down dynamic programming
var longestPalindrome = function(s) {
   
    let N = s.length;
    if (!N) return '';
    let ans = s[0];
    let best = (i, j) => {
        if (ans.length < j - i + 1)      // +1 for i..j inclusive
            ans = s.substring(i, j + 1); // +1 for i..j inclusive 🎯
    };
    let go = (i = 0, j = N - 1) => {
        if (j - i < 2) {
            if (s[i] == s[j]) {
                best(i, j);
                return true;
            }
            return false;
        }
        go(i + 1, j);           // case 1: the sub-problem without the character at index i
        go(i, j - 1);           // case 2: the sub-problem without the character at index j
        if (go(i + 1, j - 1)) { // case 3: the sub-problem without the character at index i and j
            if (s[i] == s[j]) {
                best(i, j);
                return true;
            }
        }
        return false;
    };
    go();
    return ans;
};
