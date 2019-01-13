import { LinkedList } from './linked-list';
import { Node } from './node';

// Write code to remove duplicates from an unsorted linked list
// FOLLOWUP
//   How would you solve this problem if a temporary buffer is not allowed.

export function removeDup<T>(list: LinkedList<T>): void {
  const map: { [p: string]: boolean } = {};
  let next: Node<T> = list.head;
  let prev: Node<T> = null;
  while (next) {
    let innerNext: Node<T> = next.next;
    prev = next;
    while(innerNext) {
      if(innerNext.data === next.data) {
        // remove innerNext
        prev.next = innerNext.next;
        innerNext = innerNext.next;
        continue;
      }
      prev = innerNext;
      innerNext = innerNext.next;
    }
    next = next.next;
  }
}
