/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let values = [];

    // Step 1: Extract all node values into array
    for (let list of lists) {
        while (list !== null) {
            values.push(list.val);
            list = list.next;
        }
    }

    // Step 2: Sort the values
    values.sort((a, b) => a - b);

    // Step 3: Convert back to linked list
    let dummy = new ListNode(0);
    let current = dummy;

    for (let val of values) {
        current.next = new ListNode(val);
        current = current.next;
    }

    return dummy.next;
};