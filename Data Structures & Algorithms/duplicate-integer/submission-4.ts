class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        /**
         * Let's catch all the number in the memory using empty Set object - it will store the unique values of any type
         * loop inside the array one by one
         * if the value of the of the nums[i] is inside the new Set it will automatically return true
         * otherwise it will add to the memory Set
         * Until it finds that value in the memory it will return true
         * But is you can't find any of the same value in the memory and the loop finish it will return false
         */
        const newNumsSet = new Set();
        for (let i = 0; i<nums.length; i++){
          
            if (newNumsSet.has(nums[i])) {return true;}
              newNumsSet.add(nums[i]);
        }
return false;
 
    }
}
