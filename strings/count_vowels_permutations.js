const big = Math.pow(10, 9) + 7
let map = {
    a: ['e'],
    e: ['a', 'i'],
    i: ['a', 'e', 'o', 'u'],
    o: ['i', 'u'],
    u: ['a']
}

var countVowelPermutation = function(n) {
    const vowels = Object.keys(map)
    const perms = Array.from({length: n + 1}, () => Array.from({length: vowels.length }, () => 0))
    perms[1].fill(1)
    
    for (let len = 2; len <= n; len++) {
        for (let lastVowel of vowels) {
            for (let follows of map[lastVowel]) {
                perms[len][vowels.indexOf(lastVowel)] += perms[len - 1][vowels.indexOf(follows)] % big
            }
        }
    }

    return perms[n].reduce((acc, val) => acc + val, 0) % big
};
