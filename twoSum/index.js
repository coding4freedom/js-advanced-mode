/** Two Sum **
 * 
 * Find two numbers in the given array that add up to `target`
 * and return the indices of those two numbers in the array
 * 
 * @example
 * twoSum([1, 2, 4, 9], 13) -> [2, 3]
 * twoSum([10, 20], 30) -> [0, 1]
 * twoSum([3, 2, 4], 6) -> [1, 2]
 * 
 */

const twoSum = (nums, target) => {
   // O(n) time | O(n) space;
    const mapDifferIndex = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (mapDifferIndex.has(nums[i])) {
            return [mapDifferIndex.get(nums[i]), i];
        }
        const differ = target - nums[i];
        mapDifferIndex.set(differ, i);

    }
 
}

module.exports = twoSum;

/*   O(n^2) time | O(1)  space
This is the brute force way reducing same numbers being checked against one another.
This is done by - 1 from the first loops nums.length and
so we dont go backwards make j = i in the second loop and + 1 to alway start from the next index over
const result = [];

   for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++){
            if (nums[i] +  nums[j] === target) {
                result.push(i);
                result.push(j)
            }
        } 
   }
   return result;

*/