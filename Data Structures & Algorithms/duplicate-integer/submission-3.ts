class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        /**
         * Let's catch all the number in the memory using Set object - it will store the unique values of any type
         * loop inside the array one by one
         * assign the  to the 
         */
        const newNumsSet = new Set();
        for (let i = 0; i<nums.length; i++){
          
            if (newNumsSet.has(nums[i])) {return true;}
              newNumsSet.add(nums[i]);
        }
return false;
 
    }
}
