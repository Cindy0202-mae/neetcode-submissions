class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        // there are 2 params nums and the target
        // it should return the indices of i and j
        // - on if the sum value of those 2 indices is equal to the target

        // Example 1:
        // Input: 
        // nums = [3,4,5,6], target = 7
        // Output: [0,1]
        // Explanation: nums[0] + nums[1] == 7, so we return [0, 1].

        // Example 2:
        // Input: nums = [4,5,6], target = 10
        // Output: [0,2]

        // Example 3:
        // Input: nums = [5,5], target = 10
        // Output: [0,1]

       // Create an empty map
        const j = new Map();

        // Loop in the nums array
        for (let i = 0; i < nums.length; i++) {
            // Calculate the exact difference, where target - the first value of the array
            let difference = target - nums[i];

            // Check the new Map if the difference is there
            if (j.has(difference)) {
                // if Yes, return the index of the difference and current index (i)
                return [j.get(difference), i]
            } else {
                // if NO, write the current number into the new Map
                j.set(nums[i], i)
            }
            // go back to the array
        }
    }
}
