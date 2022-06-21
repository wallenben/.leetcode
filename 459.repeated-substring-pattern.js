/*
 * @lc app=leetcode id=459 lang=javascript
 *
 * [459] Repeated Substring Pattern
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
 var repeatedSubstringPattern = function(s) {
    let map = new Map();
    for (let i = 0; i < s.length; i ++){
        map.set(s.charAt(i), (map.get(s.charAt(i)) || 0) + 1)
    }
    let keys = map.keys();
    for (let j = 0; j < keys.length - 1; j++){
        if (map.get(keys[j]) != map.get(keys[j + 1])){
            return false
    }
}
return true
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = repeatedSubstringPattern;
// @after-stub-for-debug-end