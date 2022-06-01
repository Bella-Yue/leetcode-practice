/*


Category	Difficulty	Likes	Dislikes
algorithms	Easy (45.90%)	1022	-
Tags
array

Companies
google

给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。

最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。

你可以假设除了整数 0 之外，这个整数不会以零开头。

 

示例 1：

输入：digits = [1,2,3]
输出：[1,2,4]
解释：输入数组表示数字 123。
示例 2：

输入：digits = [4,3,2,1]
输出：[4,3,2,2]
解释：输入数组表示数字 4321。
示例 3：

输入：digits = [0]
输出：[1]
 

提示：

1 <= digits.length <= 100
0 <= digits[i] <= 9
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 * 
 * 解法一：找出最长的后缀 99
 * 
时间复杂度：O(n))，其中 n 是数组 digits 的长度。
空间复杂度：O(1)。返回值不计入空间复杂度。

思路

当我们对数组  digits 加一时，我们只需要关注  digits 的末尾出现了多少个 9 即可。我们可以考虑如下的三种情况：

如果  digits 的末尾没有 9，例如 [1, 2, 3]，那么我们直接将末尾的数加一，得到 [1, 2, 4] 并返回；

如果  digits 的末尾有若干个 9，例如 [1, 2, 3, 9, 9]，那么我们只需要找出从末尾开始的第一个不为 9 的元素，即 3，将该元素加一，得到 [1, 2, 4, 9, 9]。随后将末尾的 9 全部置零，得到 [1, 2, 4, 0, 0] 并返回。

如果  digits 的所有元素都是 9，例如 [9, 9, 9, 9, 9]，那么答案为 [1, 0, 0, 0, 0, 0]。我们只需要构造一个长度比  digits 多 1 的新数组，将首元素置为 1，其余元素置为 0 即可。

算法

们只需要对数组  digits 进行一次逆序遍历，找出第一个不为 9 的元素，将其加一并将后续所有元素置零即可。如果  digits 中所有的元素均为 9，那么对应着「思路」部分的第三种情况，我们需要返回一个新的数组
var plusOne = function (digits) {
  const n = digits.length;
  for (let i = n - 1; i >= 0; --i) {
    if (digits[i] !== 9) {
      ++digits[i];
      for (let j = i + 1; j < n; ++j) {
        digits[j] = 0;
      }
      return digits;
    }
  }
  // 如果到这里说明digits中所有元素都是9
  const ans = new Array(n + 1).fill(0);
  ans[0] = 1;
  return ans;
};



解法二：代码简洁版
倒序依次+1，然后整除10，如果余数0则继续遍历，然后构建1开头的新数组返回；余数不为0则返回
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  const len = digits.length;
  for (let i = len - 1; i >= 0; i--) {
    digits[i]++;
    digits[i] %= 10;
    if (digits[i] != 0) {
      return digits;
    }
  }
  return [1, ...digits];
};
// @lc code=end
