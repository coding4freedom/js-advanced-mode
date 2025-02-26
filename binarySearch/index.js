/** Binary Search **
 * 
 * Given a sorted array 'nums' and an integer 'target', return
 * the index of the target. 
 * 
 * Note: Your solutions' time complexity must be faster than O(n). 
 * 
 * @example
 * binarySearch([1, 2, 4, 9, 12], 9) -> 3
 * binarySearch([-2, -1, 4, 5, 7], -1) -> 1
 * binarySearch([-1, 4, 18, 20], 18) -> 2
 * 
 */

const binarySearch = (nums, target) => {
    // binary search works by splitting the array in half and moving pointer left or right of the mid pointer
    // this binary search has a time complexity of O(log n)
    let l = 0;
    let r = nums.length - 1;

    while (l <= r) {
        let mid = Math.floor((l + r) / 2);

        if (nums[mid] > target) {
            r = mid - 1;
        }
        else if (nums[mid] < target) {
            l = mid + 1;
        }else {
            return mid;
        }
        
    }
}

module.exports = binarySearch;