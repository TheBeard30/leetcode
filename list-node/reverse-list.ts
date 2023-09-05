import {ListNode} from "./my-linked-list";

/**
 * 206.反转链表
 * 如果再定义一个新的链表，实现链表元素的反转，其实这是对内存空间的浪费。
 *
 * 其实只需要改变链表的next指针的指向，直接将链表反转 ，而不用重新定义一个新的链表
 * @param {ListNode} head
 */
function reverseList(head: ListNode | null): ListNode | null {
    if(!head || !head.next) return head;
    let temp = null;
    let pre = null;
    let current = head;
    while (current){
        temp = current.next;
        current.next = pre;
        pre = current;
        current = temp;

    }
    return pre;
}