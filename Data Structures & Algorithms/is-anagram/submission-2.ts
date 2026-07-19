class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        /**
         * We have 2 strings, the s and t
         * we have to return boolean true if the 2 params are anagram 2 each other
         * - meaning they have extract the same characters to each other regardless 
         *   of the order
         * 
         * example: 
         *  - racecar == carrace
         *  - post == stop
         *  - act == cat
         * 
       
         * 
         * check if the new strings are equals 
         *  then if it is equal return true
         */

        //  Check the string if they are both the same length
        //  - if it's not return false
        if (s.length !== t.length) return false;

        //  - if yes, sort them into new strings
        const newS: string = [...s].sort().join('');
        const newT: string = [...t].sort().join('');

        // check if the new strings are equal
        if (newS === newT) {
            return true;
        }
        return false;
    }
}
