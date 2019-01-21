import { LinkedList } from './linked-list';
import { Node } from './node';

// Write code to partition a linked list such that all nodes
// less than x come before all nodes greater than or equal to x.
// the partition element can appear anywhere in the right partition
// it does not have to appear in the middle of the list.

export function partition(x: number, linkedList: LinkedList<number>): void {
  let node: Node<number> = linkedList.head;
  let prevNode: Node<number> = null;
  while (node) {
    if (node.data < x && linkedList.head !== node) {
      // remove the node from the current position
      prevNode.next = node.next;

      // insert the node at the head position
      node.next = linkedList.head;
      linkedList.head = node;

      // reset node
      node = prevNode.next;
      continue;
    }
    prevNode = node;
    node = node.next;
  }
}
