var change = function(amount, coins) {
    const n = coins.length;
    const dp = Array(amount+1).fill(0);
    
    dp[0] = 1;
    
    for (const coin of coins) {
        for (let i = coin; i <= amount; i++) {
            dp[i] += dp[i-coin];
        }
    }
    
    return dp[amount];
};
