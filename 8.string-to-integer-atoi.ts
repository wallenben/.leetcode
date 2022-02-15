/*
 * @lc app=leetcode id=8 lang=typescript
 *
 * [8] String to Integer (atoi)
 */

// @lc code=start
function myAtoi(s: string): number {
    let neg = false;
    for (let j = 0; j < s.length; j++){
        if (s.charAt(j) == '-'){
            console.log("found");
            neg = true;
        }
    }

///string
//a-z

    s = s.trim();
    console.log("trim:" +s);
    let num = 0;
    console.log(s.charAt(0));
    console.log(neg);
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) >= '0' && s.charAt(i) <= '9') {
            let tempnum = 0;
            tempnum = Math.pow(10, s.length - (i + 1));
            tempnum = tempnum * parseInt(s.charAt(i));
            console.log(tempnum);
            num += tempnum;
            console.log(-num);
        } else { }
    }
    if (neg == true) {
        console.log("hit");
        return -(num);
    } else {
        return num;
    }
};
// @lc code=end