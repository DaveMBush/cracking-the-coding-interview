// Implement an algorithm to delete a node in the middle
// (any node but the first or last) of a singly linked list
// given only access to that node.
import { Node } from './node';

export function deleteNode(node: Node<number>): void {
  node.data = node.next.data;
  node.next = node.next.next;
}
