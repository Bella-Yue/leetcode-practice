/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 * 
Category	Difficulty	Likes	Dislikes
algorithms	Easy (52.52%)	14482	-
Tags
array | hash-table

Companies
adobe | airbnb | amazon | apple | bloomberg | dropbox | facebook | linkedin | microsoft | uber | yahoo | yelp

给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

你可以按任意顺序返回答案。

 

示例 1：

输入：nums = [2,7,11,15], target = 9
输出：[0,1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
示例 2：

输入：nums = [3,2,4], target = 6
输出：[1,2]
示例 3：

输入：nums = [3,3], target = 6
输出：[0,1]
 

提示：

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
只会存在一个有效答案
进阶：你可以想出一个时间复杂度小于 O(n2) 的算法吗？
 */

/* 
解法 1 暴力破解 
时间复杂度O(n^2) 空间复杂度O(1）

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const x = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] == target - x) {
        return [i, j];
      }
    }
  }
  return [];
};
*/

/*
解法2 用哈希查找优化上边的线性查找
时间复杂度O(n) 空间复杂度O(n）
var twoSum = function (nums, target) {
  const map = new Map();
  nums.forEach((num, i) => map.set(num, i));

  for (let i = 0; i < nums.length; i++) {
    const x = nums[i];
    if (map.has(target - x)) {
      const index = map.get(target - x);
      if (i != index) return [i, index];
    }
  }

  return [];
};
*/

/* 
解法 3 一边遍历+用哈希表查找
时间复杂度O(n)
1. 算出当前数字和目标数字之差
2. 检查哈希表中是否存在该差，如果存在，返回结果
3. 不存在，当前数字为key；索引为value存入哈希表

var twoSum = function (nums, target) {
  let map = new Map();
  for (let i = 0, len = nums.length; i < len; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i];
    } else {
      map.set(nums[i], i);
    }
  }
  return [];
};
*/
// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = new Map();
  for (let i = 0, len = nums.length; i < len; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i];
    } else {
      map.set(nums[i], i);
    }
  }
  return [];
};
// @lc code=end
