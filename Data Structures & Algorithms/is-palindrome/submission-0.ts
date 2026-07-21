class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        // we have a parameter of a string
        // we return a boolean true or false 
        // examples:
        // ==true==
        // - racecar
        // - Was it a car or a cat I saw?
        // otherwise it's false

        // clear the strings blank space and store it to new string
        let newStr = s.trim().toLowerCase().replace(/[^a-z0-9]/g, "");
        // initialize both left and right of the string
        let left = 0;
        let right = newStr.length - 1;

        // Let's loop the string until the left meets the right
        while (left < right) {
            // 1. Check if newStr[left] is NOT EQUAL to newStr[right]
            if (newStr[left] !== newStr[right]) {
                // If they don't match, we return false immediately
                return false;
            }
            // but if is true we continue to the our loop and mve the both pointers
            // Move the left pointer up by 1
            left++;
            // Move the right pointer down by 1
            right--;
        }
        return true;
    }
}
