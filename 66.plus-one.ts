/*
 * @lc app=leetcode id=66 lang=typescript
 *
 * [66] Plus One
 */

// @lc code=start
function plusOne(digits: number[]): number[] {
    let z: string;
    for (let i = 0; i < digits.length; i++){
        z+= digits[i];
        console.log(parseInt(z));
    }
    return digits;
};
// @lc code=end

