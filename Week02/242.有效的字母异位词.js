/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 *
 * https://leetcode-cn.com/problems/valid-anagram/description/
 *
 * algorithms
 * Easy (60.15%)
 * Likes:    205
 * Dislikes: 0
 * Total Accepted:    108.9K
 * Total Submissions: 180.7K
 * Testcase Example:  '"anagram"\n"nagaram"'
 *
 * 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
 *
 * 示例 1:
 *
 * 输入: s = "anagram", t = "nagaram"
 * 输出: true
 *
 *
 * 示例 2:
 *
 * 输入: s = "rat", t = "car"
 * 输出: false
 *
 * 说明:
 * 你可以假设字符串只包含小写字母。
 *
 * 进阶:
 * 如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    // 对于length不等的s/t，先处理掉
    return false;
  }

  // 解法一：排序后比较
  // const sorted_s = s.split("").sort().join("");
  // const sorted_t = t.split("").sort().join("");
  // return sorted_s === sorted_t;

  // 解法二：使用hash表，对于s就存，对于t就取
  let obj = {};
  for (var i = 0; i < s.length; i++) {
    if (!obj[s[i]]) {
      obj[s[i]] = 0;
    }
    obj[s[i]]++;
  }
  for (var j = 0; j < t.length; j++) {
    obj[t[j]]--;
    if (obj[t[j]] === 0) {
      // 删除这个k-v
      delete obj[t[j]];
    }
  }
  return !Object.keys(obj).length;
};

isAnagram("anagram", "nagaram");
// @lc code=end
