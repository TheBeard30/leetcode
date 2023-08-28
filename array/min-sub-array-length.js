/**
 * 滑动窗口
 * 滑动窗口，就是不断的调节子序列的起始位置和终止位置，从而得出我们要想的结果。
 * 窗口就是 满足其和 ≥ s 的长度最小的 连续 子数组。
 *
 * 窗口的起始位置如何移动：如果当前窗口的值大于s了，窗口就要向前移动了（也就是该缩小了）。
 *
 * 窗口的结束位置如何移动：窗口的结束位置就是遍历数组的指针，也就是for循环里的索引。
 *
 * 209. 长度最小的子数组
 * @param {number}  target
 * @param {Array}   nums
 */
function minSubArrayLength(target,nums) {
  let left = 0;
  let sum = 0;
  let result = Infinity;

  for(let right = 0; right < nums.length; right++){
    sum += nums[right];
    while (sum >= target){
      result = Math.min(result,right - left + 1);
      sum = sum - nums[left];
      left++;
    }
  }
  return result === Infinity ? 0 : result;
}