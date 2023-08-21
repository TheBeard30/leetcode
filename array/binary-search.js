/**
 * @description 要在二分查找的过程中，保持不变量，就是在while寻找中每一次边界的处理都要坚持根据区间的定义来操作，这就是循环不变量规则。
 * 二分查找法
 * @param {Array}  nums
 * @param {number} target
 */
function binarySearch(nums,target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right){
    let middle = left + Math.floor((right - left) / 2);
    if(nums[middle] < target){
      left = middle + 1;
    }else if(nums[middle] > target){
      right = middle - 1;
    }else{
      return middle;
    }
  }
  return -1;
}


const a = [1,4,7,8,11];
const target = 8;
console.log(binarySearch(a,target));