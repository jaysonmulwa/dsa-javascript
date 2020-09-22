/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 
var isAnagram = (s, t) => s.split('').sort().join('') === t.split('').sort().join('');


var isAnagram = function(s, t) {
  const a = s.split('').sort(),
        b = t.split('').sort();
    while (a.length && b.length) {
        if (a.pop() !== b.pop()) {
            return false;
        }
    }
    return a.length || b.length ? false : true;
};
