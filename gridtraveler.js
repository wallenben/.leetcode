let var1 = 67
let var2 = 23
//2x3 grid
//3 ways to do this


let gridTraveler = (m, n, memo={}) => {
    const key = m + ',' + n;
    if ( (n+','+m) in memo ) return memo[(n+','+m)]
    if (key in memo) return memo[key];
    if (m === 1 || n === 1) return 1;
    if (m === 0 || n === 0) return 0;
    memo[key] = (gridTraveler(m- 1, n, memo) + gridTraveler(m, n- 1, memo));
    return memo[key];
}

console.log(gridTraveler(var1, var2))