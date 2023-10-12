/**
 * 15. 三数之和
 * 给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。请
 *
 * 你返回所有和为 0 且不重复的三元组。
 *
 * 注意：答案中不可以包含重复的三元组。
 *
 * 首先将数组排序，然后有一层for循环，i从下标0的地方开始，同时定一个下标left 定义在i+1的位置上，定义下标right 在数组结尾的位置上。
 *
 * 依然还是在数组中找到 abc 使得a + b +c =0，我们这里相当于 a = nums[i]，b = nums[left]，c = nums[right]。
 *
 * 接下来如何移动left 和right呢， 如果nums[i] + nums[left] + nums[right] > 0 就说明 此时三数之和大了，因为数组是排序后了，所以right下标就应该向左移动，这样才能让三数之和小一些。
 *
 * 如果 nums[i] + nums[left] + nums[right] < 0 说明 此时 三数之和小了，left 就向右移动，才能让三数之和大一些，直到left与right相遇为止。
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const result = [];
  nums.sort((a, b) => a - b);
  for(let i = 0; i < nums.length; i++){
    if(nums[i] > 0) return result;
    if(i > 0 && nums[i] === nums[i-1]) continue;
    let left = i + 1;
    let right = nums.length - 1;
    while (right > left){
      const v = nums[i] + nums[left] + nums[right];
      if(v > 0){
        right--;
      }else if(v < 0){
        left++;
      }else{
        result.push([nums[i],nums[left],nums[right]]);

        // 去重逻辑应该放在找到一个三元组之后，对b 和 c去重
        while (left < right && nums[left] === nums[left + 1]){
          left++;
        }
        while (left < right && nums[right] === nums[right - 1]){
          right--;
        }
        // 找到答案时，双指针同时收缩
        left++;
        right--;
      }
    }
  }
  return result;
};