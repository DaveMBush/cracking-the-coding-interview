import { LinkedList } from './linked-list';
import { Node } from './node';

function returnKthToLast<T>(k: number, ll: LinkedList<T>): Node<T> {
  if(!ll.head) {
    return null;
  }
  let leadingNode: Node<T> = ll.head;
  for(let i: number = 0; i < k; i++) {
    if(!leadingNode.next) {
      return null;
    }
    leadingNode = leadingNode.next;
  }
  let trailingNode: Node<T> = ll.head;
  while(leadingNode) {
    leadingNode = leadingNode.next;
    trailingNode = trailingNode.next;
  }
  return trailingNode;
}
