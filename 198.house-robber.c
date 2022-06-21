/*
 * @lc app=leetcode id=198 lang=c
 *
 * [198] House Robber
 */

// @lc code=start


int rob(int* nums, int numsSize){
    int dp[100];
    dp[0] = nums[0];
    dp[1] = nums[0] > nums[1] ? nums[0] : nums[1];
    for (int i = 2; i < numsSize; i++) {
        dp[i] = dp[i - 1] > dp[i - 2] + nums[i] ? dp[i-1] : dp[i-2] + nums[i];
    }
    return dp[numsSize-1];
}
// @lc code=end

