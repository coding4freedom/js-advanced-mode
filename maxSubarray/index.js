/** Maximum Subarray
  *  
  * Given an integer array `nums`, find the subarray which has the 
  * largest sum and return the sum. 
  * 
  * @examples
  * maxSubArray([5, 4, -1, 7, 8]) = 23
  * maxSubArray([-2, 1, -3, 4, -1, 2, -5, 0]) = 5
  * maxSubArray([2, 4, 3, -1, -4, -9]) = 9
  */

const maxSubArray = (nums) => {
  // O(n) time | O(1) space
  let maxSum = nums[0];
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    if ( sum < 0){
      sum = 0;
    }
    sum += nums[i];
    maxSum = Math.max(maxSum, sum)
  }

  return maxSum;
}

//DO NOT EDIT BELOW THIS LINE
module.exports = maxSubArray;


/*
  // O(n^2) time | O(n) space
  let maxSum = nums[0];

  for (let i = 0; i < nums.length; i++) {
    let sum = 0;  
    for (let j = i; j < nums.length; j++) {  
      sum += nums[j];
      maxSum = Math.max(maxSum, sum)
    }
  }
  return maxSum;

-------------------------------------------------
  O(n^3) time | O(n) space
  let maxSum = nums[0];

  for (let i = 0; i < nums.length; i++) {  // O(n) T becomes O(n) * O(n^2) = O(n^3)
    for (let j = i + 1; j <= nums.length; j++) {  // O(n) T becomes O(n) * O(n) = O(n^2)
      const subArr = nums.slice(i, j);  // O(n) T
      const sum = subArr.reduce((acc, curr) => acc + curr);  // O(n) T
      maxSum = Math.max(maxSum, sum)
    }
  }

  return maxSum;

*/