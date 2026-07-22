class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums: number[]): number[] {
        // We have nums parameter
        // We have to return the 2 nums concatenate together as ans

        // Example 
        // if nums = [1,2,3]
        // ans = [1,2,3,1,2,3]

        let ans = [];

        // get the value of nums and store it into the new variable
        const nums2 = [...nums];

        // return the ans with 2 arrays concatenated together
        return ans = [...nums,...nums2];
    }
}
