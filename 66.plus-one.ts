/*
 * @lc app=leetcode id=66 lang=typescript
 *
 * [66] Plus One
 */

// @lc code=start
function plusOne(digits: number[]): number[] {
  let z: string = "";
  for (let i = 0; i < digits.length; i++) {
    z += digits[i].toString();
  }
  let x = BigInt(z);
  x++;
  return Array.from(String(x), Number);
}
// @lc code=end
