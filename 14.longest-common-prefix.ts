/*
 * @lc app=leetcode id=14 lang=typescript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
    //O(n^2)
    let prefix = "";
    let prefixFinal = "";
    console.log(strs[0].charAt(0));
    for (let j = 0; j < strs.length; j++) {
         prefix += strs[0].charAt(j);
        for (let i = 1; i < strs[0].length; i++) {
            console.log(strs[j].slice(0, j + 1));
            if (prefix != strs[j].slice(0, j -1)){
                prefixFinal = prefixFinal.substring(0, prefixFinal.length);
            }
            if (prefix == strs[j].slice(0, j -1)){
               prefixFinal += prefix;
               prefix = "";
            }
        }
    }
    return prefix;


};
// @lc code=end

