/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 *
 * https://leetcode-cn.com/problems/merge-intervals/description/
 *
 * algorithms
 * Medium (42.68%)
 * Likes:    530
 * Dislikes: 0
 * Total Accepted:    124K
 * Total Submissions: 290.2K
 * Testcase Example:  '[[1,3],[2,6],[8,10],[15,18]]'
 *
 * 给出一个区间的集合，请合并所有重叠的区间。
 *
 * 示例 1:
 *
 * 输入: [[1,3],[2,6],[8,10],[15,18]]
 * 输出: [[1,6],[8,10],[15,18]]
 * 解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
 *
 *
 * 示例 2:
 *
 * 输入: [[1,4],[4,5]]
 * 输出: [[1,5]]
 * 解释: 区间 [1,4] 和 [4,5] 可被视为重叠区间。
 *
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  // 先按首个数字排序
  intervals.sort((a, b) => a[0] - b[0]);

  let merged = []; // 合并后数组

  for (let interval of intervals) {
    let len = merged.length;
    if (!len || merged[len - 1][1] < interval[0]) {
      // 若merged为空，或者已合并区间与当前区间不重合，直接添加
      merged.push(interval);
    } else {
      // 否则就进行合并——即将已合并的区间的最后一个数字更换为较大值
      merged[len - 1][1] = Math.max(merged[len - 1][1], interval[1]);
    }
  }
  return merged;
};
// @lc code=end
