class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr: number[]): number[] {
        // we have an array params which consist of array of numbers
        // we have to return that array of numbers after the logic being implemented
        // - meaning return the newArr -> new array
        // example:
            // arr = [2,4,6,2,3,9] -> input
            // newArr = [9, 9, 9, 9, 9, -1]

        // we are moving and checking from right to left;
        // let's start initializing maximum value at the last element
        let maxValue = -1;

        // initialized new array where you put the new value of the element
        let newArr =[];

        // loop backward since we are checking the arr from right to left
        // the reason is we know that last array element is -1
        for (let i = arr.length - 1; i >= 0; i--) {
            // save the current array into the temporary variable
            let currentVal = arr[i];
            // put the current maxvalue into the newArray at position [i] 
            // unshift -> Insert at the front
            newArr.unshift(maxValue);
            // compare the temporary variable with maxValue
            if (currentVal > maxValue){
                // if temporary varialble is bigger it will become the new maxValue for the next loop
                maxValue = currentVal;
            }
        }
        return newArr;
    }
}
