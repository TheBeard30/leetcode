/**
 * 给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，
 * 要求也按 非递减顺序 排序。
 * 977. 有序数组的平方
 */
/**
 * 数组其实是有序的， 只不过负数平方之后可能成为最大数了。
 *
 * 那么数组平方的最大值就在数组的两端，不是最左边就是最右边，不可能是中间。
 *
 * 此时可以考虑双指针法了，i指向起始位置，j指向终止位置。
 *
 * 定义一个新数组result，和nums数组一样的大小，让k指向result数组终止位置。
 * @param {Array} nums
 */
function sortedSquares(nums) {
  const result = [];
  let k = nums.length - 1;
  let j = nums.length - 1;
  for(let i = 0; i <= j;){
    if(nums[i] * nums[i] < nums[j] * nums[j]){
      result[k] = nums[j] * nums[j];
      k--;
      j--;
    }else{
      result[k] = nums[i] * nums[i];
      k--;
      i++;
    }
  }
  return result;
}