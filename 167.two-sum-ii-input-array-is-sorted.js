/*
 * @lc app=leetcode id=167 lang=javascript
 *
 * [167] Two Sum II - Input Array Is Sorted
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    //o(N) solution: start pointer two at top and work lower as the array is sorted
    
    let pointer1 = 0
    let pointer2 = numbers.length -1
    while (numbers[pointer1] + numbers[pointer2] != target){
        if (numbers[pointer1] + numbers[pointer2] > target){
            //decrease, go lower in total value
            pointer2--
        }//else if (pointer1+ pointer2 < target) //go higher in total value
        else{
            pointer1++
        }

    } return [pointer1+1, pointer2+1]

/**
 * Failed TC solution o(n^2)
 * (should still pass if TC isn't an issue)
 */
    /**for (let i = 0; i < numbers.length; i++) {
        for (let j = numbers.length -1; j > 0; j--) {
            if (!(j === i)){
                if (numbers[j] + numbers[i] === target) {
                    return [i+1, j+1];
                }
            }
            

        }
    }
    return null*/
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = twoSum;
// @after-stub-for-debug-end