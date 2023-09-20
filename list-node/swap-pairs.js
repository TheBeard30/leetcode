/**
 * 24. 两两交换链表中的节点
 * 使用虚拟头结点
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function swapPairs(head){
    const dummyHead = new ListNode(0,head);
    let current = dummyHead;
    while(current.next !== null && current.next.next !== null){
        let temp1 = current.next;
        let temp2 = current.next.next.next;
        current.next = current.next.next;
        current.next.next = temp1;
        temp1.next = temp2;
        current = current.next.next;
    }
    return dummyHead.next;

}