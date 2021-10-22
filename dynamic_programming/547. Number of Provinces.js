///Union Find:

var findCircleNum = function(M) {
    let res = 0;
    const dsu = new DSU(M.length);
    for(let row = 0; row < M.length; row++) {
        for(let col = 0; col < M[0].length; col++) {
            if(M[row][col] === 1) {
                dsu.union(row, col);
            }
        }
    }
    return new Set(M.map((m, i) => dsu.find(i))).size;
};

class DSU {
    constructor(N) {
        this.parent = [...new Array(N).keys()];
    }
    find(x) {
        if(this.parent[x] !== x) this.parent[x] = this.find(this.parent[x]);
        return this.parent[x];
    }
    union(x, y) {
        this.parent[this.find(x)] = this.find(y);
    }
}

///DFS:

var findCircleNum = function(M) {
    const seen = new Set();
    let res = 0;
    const dfs = (i) => {
        for(let j = 0; j < M[0].length; j++) {
            if(M[i][j] === 1 && !seen.has(j)) {
                seen.add(j);
                dfs(j);
            }
        }
    }
    for(let i = 0; i < M.length; i++) {
        if(!seen.has(i)) {
            dfs(i);
            res++;
        }
    }

    return res;
};


////BFS:

var findCircleNum = function(M) {
    const seen = new Set();
    let res = 0;
    let stack = [];
    for(let i = 0; i < M.length; i++) {
        if(!seen.has(i)) {
            stack.push(i);
            while(stack.length) {
                const curr = stack.pop();
                seen.add(curr);
                for(let j = 0; j < M[0].length; j++) {
                    if(M[curr][j] === 1 && !seen.has(j)) {
                        stack.push(j);
                    }
                }
            }
            res++;
        }
    }
    return res;
};
