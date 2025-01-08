/** Contains Duplicate **
 * 
 * Given an array of integers, return true if any integer appears
 * at least twice in the array, otherwise return false.
 * 
 * @example
 * containsDuplicate([1, 2, 3, 4]) -> false
 * containsDuplicate([1, 2, 2, 5]) -> true
 * containsDuplicate([1, 2, 9, 5, 9]) -> true
 * 
 */

const containsDuplicate = (nums) => {
    // Optimal solution 
    // O(n) time and space
    const set = new Set()

    for (let i = 0; i < nums.length; i++) {
        if (set.has(nums[i])) {
            return true;
        }
        set.add(nums[i])
    }
    return false;
}

module.exports = containsDuplicate;


/*  solution I deduced
const containsDuplicate = (nums) => {
    let reduceSet = [...new Set(nums)];

    return nums.length !== reduceSet.length
}

*/

/*
const containsDuplicate = (nums) => {
    // sorted solution 
    const sortArr = nums.sort((a, b) => a - b); // O(n) space | O(nlog(n)) time

    for (let i = 0; i < sortArr.length - 1; i++) {
        if (sortArr[i] === sortArr[i + 1] ) {
            return true;
        }
    }
    return false;
}
*/
/*
// Brute force way 
    // O(n^2) time (explain due to using double for loop) | O(1) space complexity  no addition memeory used to store anything
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            console.log(nums[i], nums[j])
            if (nums[i] === nums[j]) {                
                return true
            }
        }
    }
    return false
*/