class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        // params is the string - which are the brackets
        // return boolean true/false
        // examples:
            // if s = [], return true
            // if s = [{}]}, return false
        // steps:
        // 1. define an empty array that track open brackets.
            let stack =[];
        // 2. map a set defining pairs of the brackets
                            // key:value pair
        const matchingPairs = { ')': '(', ']': '[', '}': '{' };
        
        // define a char
        // 3. loop inside the string
        for (let char of s) {
            if (char in matchingPairs) {
                // if this is true 
                // we need to pop the last opener from the stack
                let lastOpener = stack.pop();
                // check if it matches matchingPairs[char]
                if (lastOpener !== matchingPairs[char]) { return false; }
            } else {
                // if true push it to the stack
                stack.push(char)
            }
        }
        // check if any openers were left unclosed
        return stack.length === 0;
    }
}
