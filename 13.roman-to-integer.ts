/*
 * @lc app=leetcode id=13 lang=typescript
 *
 * [13] Roman to Integer
 */

// @lc code=start
function romanToInt(s: string): number {
    let int = 0;
    s = s.toUpperCase();
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) == 'I') {
            int += 1;
            if (s.charAt(i + 1) == 'V') {
                int -= 2;
            } else if (s.charAt(i + 1) == 'X') {
                int -= 2;
            }

        }
        if (s.charAt(i) == 'V') {
            int += 5;
        }
        if (s.charAt(i) == 'X') {
            int += 10;
            if (s.charAt(i + 1) == 'L') {
                int -= 20;
            }
            if (s.charAt(i + 1) == 'C') {
                int -= 20;
            }
        }
        if (s.charAt(i) == 'L') {
            int += 50;
        }
        if (s.charAt(i) == 'C') {
            int += 100;
            if (s.charAt(i + 1) == 'D') {
                int -= 200;
            }
            if (s.charAt(i + 1) == 'M') {
                int -= 200;
            }
        }
        if (s.charAt(i) == 'D') {
            int += 500;
        }
        if (s.charAt(i) == 'M') {
            int += 1000;
        }
    }
    return int;
};
// @lc code=end

