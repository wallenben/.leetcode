import java.util.Stack;

/*
 * @lc app=leetcode id=20 lang=java
 *
 * [20] Valid Parentheses
 */

// @lc code=start
class Solution {
    public boolean isValid(String s) {
        Stack<Character>z = new Stack<>();
        char[] x = s.toCharArray();
        for (int i = 0; i < s.length(); i++){
           if (x[i] == '('){
            z.push(')');
           } else if (x[i] == '['){
            z.push(']');
           } else if (x[i] == '{'){
            z.push('}');
           }else if (z.isEmpty() || z.pop() != x[i]) {return false;}
        }
        return z.isEmpty();
    }
}
// @lc code=end

