/*

Category	Difficulty	Likes	Dislikes
algorithms	Easy (54.05%)	2652	-
Tags
Companies
给你一个 升序排列 的数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。元素的 相对顺序 应该保持 一致 。

由于在某些语言中不能改变数组的长度，所以必须将结果放在数组nums的第一部分。更规范地说，如果在删除重复项之后有 k 个元素，那么 nums 的前 k 个元素应该保存最终结果。

将最终结果插入 nums 的前 k 个位置后返回 k 。

不要使用额外的空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。

判题标准:

系统会用下面的代码来测试你的题解:

int[] nums = [...]; // 输入数组
int[] expectedNums = [...]; // 长度正确的期望答案

int k = removeDuplicates(nums); // 调用

assert k == expectedNums.length;
for (int i = 0; i < k; i++) {
    assert nums[i] == expectedNums[i];
}
如果所有断言都通过，那么您的题解将被 通过。

 

示例 1：

输入：nums = [1,1,2]
输出：2, nums = [1,2,_]
解释：函数应该返回新的长度 2 ，并且原数组 nums 的前两个元素被修改为 1, 2 。不需要考虑数组中超出新长度后面的元素。
示例 2：

输入：nums = [0,0,1,1,1,2,2,3,3,4]
输出：5, nums = [0,1,2,3,4]
解释：函数应该返回新的长度 5 ， 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4 。不需要考虑数组中超出新长度后面的元素。
 

提示：

0 <= nums.length <= 3 * 104
-104 <= nums[i] <= 104
nums 已按 升序 排列


 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 * 
 * 
 * 
 * 解法一：双指针
 * 
 * 首先注意数组是有序的，那么重复的元素一定会相邻。

要求删除重复元素，实际上就是将不重复的元素移到数组的左侧。

考虑用 2 个指针，一个在前记作 p，一个在后记作 q，算法流程如下：

比较 slow 和 fast 位置的元素是否相等。
  如果相等，fast 后移 1 位
  如果不相等，将 fast 位置的元素复制到 slow+1 位置上，slow 后移一位，fast 后移 1 位
重复上述过程，直到 fast 等于数组长度。
返回 slow + 1，即为新数组长度。

时间复杂度：O(n)，其中 n 是数组的长度。快指针和慢指针最多各移动 n 次。
空间复杂度：O(1)。只需要使用常数的额外空间。
var removeDuplicates = function (nums) {
  const n = nums.length;
  if (n === 0) {
    return 0;
  }
  let slow = 1,
    fast = 1;
  while (fast < n) {
    if (nums[fast] != nums[fast - 1]) {
      nums[slow] = nums[fast];
      ++slow;
    }
    ++fast;
  }
  return slow;
};




解法二：优化
当输入一个没有任何重复项的数组时，可以先比较slow与fast，如果fast-slow>1，不用复制，指针继续后移
 */

// @lc code=start
/** 解法二
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  const n = nums.length;
  if (n === 0) {
    return 0;
  }
  let slow = 1,
    fast = 1;
  while (fast < n) {
    if (nums[fast] != nums[fast - 1]) {
      if (fast - slow > 0) {
        nums[slow] = nums[fast];
      }
      ++slow;
    }
    ++fast;
  }
  return slow;
};
// @lc code=end
