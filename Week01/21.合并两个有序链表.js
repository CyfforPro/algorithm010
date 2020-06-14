/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 *
 * https://leetcode-cn.com/problems/merge-two-sorted-lists/description/
 *
 * algorithms
 * Easy (62.81%)
 * Likes:    1105
 * Dislikes: 0
 * Total Accepted:    288.2K
 * Total Submissions: 458.9K
 * Testcase Example:  '[1,2,4]\n[1,3,4]'
 *
 * 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
 *
 *
 *
 * 示例：
 *
 * 输入：1->2->4, 1->3->4
 * 输出：1->1->2->3->4->4
 *
 *
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  // 哨兵节点——1. 便于最后返回用；2. 记录结果链表
  const headNode = new ListNode(-1);

  let head = headNode; // 结果链表指针
  while (l1 !== null && l2 !== null) {
    if (l1.val <= l2.val) {
      head.next = l1;
      // l1往后挪，用于下一次循环
      l1 = l1.next;
    } else {
      head.next = l2;
      // 同样l2往后挪，用于下一次循环
      l2 = l2.next;
    }
    // 每次循环 head都要往后一步，这样才能形成链表
    head = head.next;
  }
  // 执行到这里，要么l1先空了，要么l2先空了，但其中之一肯定是较大的部分了
  head.next = l1 === null ? l2 : l1;
  return headNode.next;
};
// @lc code=end
