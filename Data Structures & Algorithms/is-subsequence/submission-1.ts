class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s: string, t: string): boolean {
        // params are s and t and both strings
            // s string is subsequence of t string
        // return true if theres s is subsequence of t string
            // false if not
        
        // example:
        // 1. t = "america", s (input string) = "arc" ===> it should return true

        let sIndex = 0;
        let tIndex = 0;

        while (tIndex < t.length) {
            // loop over the s string and see if it's in the t string
            // compare s string value == t string value
            if (s[sIndex] == t[tIndex]) {
                // if true s++ and t++
                sIndex++;
                tIndex++;
            } else 
            // if false t++
             tIndex++;
        }
    
        if (sIndex === s.length) {
            return true;
        } else return false;
        // all the value of s string finds the value of the t string without changing the order let's return true
        // but if not return false
    }
}
