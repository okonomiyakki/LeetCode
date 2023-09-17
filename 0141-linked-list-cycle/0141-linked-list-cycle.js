/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let a = head
    let b = head

    while(b && b.next && b.next.next){
        a = a.next
        b = b.next.next

        if(a === b) return true
    }

    return false
};