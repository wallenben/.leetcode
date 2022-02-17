/*
 * @lc app=leetcode id=26 lang=typescript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
    let tempnum: number = nums[0];
    let nums2: number[];
    for (let i = 0; i < nums.length; i++){
        if (nums[i+1] != tempnum){
        nums2[i] = tempnum;
        }
        tempnum = nums[i + 1]
    }
    return nums2;
};
// @lc code=end

