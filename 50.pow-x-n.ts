/*
 * @lc app=leetcode id=50 lang=typescript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
function myPow(x: number, n: number): number {
    let z : number = 1;
    for (let i = 0; i < n; i++){
        z = z*x;
        console.log(z);
    }
    if (n < 0){
        return 1/z;
    }
    return z;
};
// @lc code=end

