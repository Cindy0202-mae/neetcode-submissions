class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        // we have Params -> an array of strings
        // we need to Return -> a group of strings in an array form
        // examples:
            // strs = ["act","pots","tops","cat","stop","hat"]
            // return = [["hat"],["act", "cat"],["stop", "pots", "tops"]]

       // pseudocode:

       // 1. create an empty map
       const newStrsMap = new Map()

       // 2. for every word, we need to finds it's signature
            for (const word of strs) {
                const arrKey = word.split("").sort().join("");
                // if the signature doesn't exist, 
                if (!newStrsMap.has(arrKey)) {
                    // we create a new array
                    newStrsMap.set(arrKey, []);
                }
               
                // 3. put the word/string into that array
                newStrsMap.get(arrKey).push(word);
            }
           
          
        // 4. return every array n the map
        const newStrs = newStrsMap.values();
        return Array.from(newStrs);
    }
}
