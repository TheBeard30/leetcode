/**
 * Definition for singly-linked list.
 * 设置一个虚拟头结点在进行移除节点操作
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
function removeElements(head, val) {
    const dynamicNode = new ListNode(0,head);
    let currentNode = dynamicNode;
    while(currentNode.next){
        if(currentNode.next.val === val){
            currentNode.next = currentNode.next.next;
            continue;
        }
        currentNode = currentNode.next;
    }
    return dynamicNode.next;
};