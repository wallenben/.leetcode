/*
 * @lc app=leetcode id=347 lang=javascript
 *
 * [347] Top K Frequent Elements
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    let map = new Map()
        //traverse array
        for(let i=0;i<nums.length;i++ ){
              map.set(nums[i], map.get(nums[i]) + 1 || 1);
         }
    //no guarantee on which key has the largest value

    const result = [];
    for (let j = 0; j < k; j++) {
        let max = 0;
        let currentKey = null;
        for ([key, values] of map) {
            if (map.get(key) > max) {
                max = values
                currentKey = key
            }
        }
        result.push(currentKey)
        map.delete(currentKey)
    }
    return result;
};
// @lc code=end

