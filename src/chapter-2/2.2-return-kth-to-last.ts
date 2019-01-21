import { LinkedList } from './linked-list';
import { Node } from './node';

export function returnKthToLast<T>(k: number, ll: LinkedList<T>): Node<T> {
  if (!ll.head) {
    return null;
  }
  let leadingNode: Node<T> = ll.head;
  let i: number = 0;
  for (; i < k && leadingNode; i++) {
    leadingNode = leadingNode.next;
  }
  if(i < k) {
    return null;
  }
  let trailingNode: Node<T> = ll.head;
  while (leadingNode) {
    leadingNode = leadingNode.next;
    trailingNode = trailingNode.next;
  }
  return trailingNode;
}
