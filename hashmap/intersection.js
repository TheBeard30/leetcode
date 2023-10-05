/**
 * 349. 两个数组的交集
 *  给定两个数组 nums1 和 nums2 ，返回 它们的交集 。输出结果中的每个元素一定是 唯一 的。我们可以 不考虑输出结果的顺序 。
 *  示例 1：
 *  输入：nums1 = [1,2,2,1], nums2 = [2,2]
 *  输出：[2]
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const set = new Set();
    for(let i = 0; i < nums1.length; i++){
        const item = nums1[i];
        if(nums2.find(v => v == item) !== undefined){
            set.add(item);
        }
    }
    return Array.from(set);
};