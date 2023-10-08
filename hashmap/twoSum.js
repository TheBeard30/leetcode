/**
 * 1. 两数之和

    给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。

    你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

    你可以按任意顺序返回答案。
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hash = {};
    for (let i = 0; i < nums.length; i++) {  // 遍历当前元素，并在map中寻找是否有匹配的key
      if (hash[target - nums[i]] !== undefined) {
        return [i, hash[target - nums[i]]];
      }
      hash[nums[i]] = i;   // 如果没找到匹配对，就把访问过的元素和下标加入到map中
    }
    return [];
};