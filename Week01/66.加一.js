/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 *
 * https://leetcode-cn.com/problems/plus-one/description/
 *
 * algorithms
 * Easy (44.32%)
 * Likes:    483
 * Dislikes: 0
 * Total Accepted:    163.5K
 * Total Submissions: 368.8K
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。
 *
 * 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
 *
 * 你可以假设除了整数 0 之外，这个整数不会以零开头。
 *
 * 示例 1:
 *
 * 输入: [1,2,3]
 * 输出: [1,2,4]
 * 解释: 输入数组表示数字 123。
 *
 *
 * 示例 2:
 *
 * 输入: [4,3,2,1]
 * 输出: [4,3,2,2]
 * 解释: 输入数组表示数字 4321。
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  // 法1：转为数字 + 1 后再转为数组
  // NOTE: digits可能很长，转为的数字要使用bigint新特性保存才不容易丢失精度
  /* return String(BigInt(digits.join("")) + 1n).split(""); */

  // 法2：常规末位 + 1，超10，往前进位，直到第一位，若还是超过10，则额外处理下
  const len = digits.length;
  for (let i = len - 1; i > -1; i--) {
    digits[i]++;
    // 取余
    digits[i] %= 10;
    if (digits[i] !== 0) {
      // 直到不需要进位，终止
      return digits;
    }
  }
  // 上面的循环跑完都还没有return，证明需要加一位，其余位也都变0了
  digits = [1].concat(Array(len).fill(0));
  return digits;
};
// @lc code=end
