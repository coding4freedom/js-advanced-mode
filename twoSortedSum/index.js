/** Two Sorted Sum **
 * 
 * Find two numbers in the given sorted array that add up to `target`
 * and return the indices of those two numbers in the array. 
 * 
 * 
 * @example
 * twoSum([1, 2, 4, 9], 13) -> [2, 3]
 * twoSum([10, 20], 30) -> [0, 1]
 * twoSum([2, 3, 4], 6) -> [0, 2]
 * 
 */
// O(n) time | O(1) space
const twoSortedSum = (nums, target) => {
   let l = 0;
   let r = nums.length - 1;

   while (l < r) {
        const sum = nums[l] + nums[r];

        if (sum > target) {
            r--;
        } else if (sum < target) {
            l++;
        } else {
            return [l, r]
        }
   }
}

module.exports = twoSortedSum;
