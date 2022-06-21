/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    let string = []
    let array = s.split('')
    let max = 0
    let tempmax = 0
    if (s.length === 1) return 1
    for (let i = 0; i < array.length; i++){
    if (string.includes(array[i])){
        //if the substring is already complete
        
        //if a substring has already existed
      
        //reset string array
        string.shift()
        string.push(array[i])
        max = string.length

    }else {
 //push char, increment max substring size
 string.push(array[i])
    }


   
    }
    if (tempmax > max) max = tempmax
    return max
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = lengthOfLongestSubstring;
// @after-stub-for-debug-end