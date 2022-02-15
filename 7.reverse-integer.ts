/*
 * @lc app=leetcode id=7 lang=typescript
 *
 * [7] Reverse Integer
 */

// @lc code=start
function reverse(x: number): number {
    let oldnum = x;
    let z = x.toString().split('').reverse().join('');
    let k: number;
    k = parseInt(z);
    if (oldnum < 0){
        k = -k; 
    }
    if (k > Math.pow(2,31) || k < Math.pow(-2,31)){
        return 0;
    }
    return k;
};
// @lc code=end

