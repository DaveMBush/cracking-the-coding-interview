import { LinkedList } from './linked-list';
import { Node } from './node';

// Write code to remove duplicates from an unsorted linked list
// FOLLOWUP
//   How would you solve this problem if a temporary buffer is not allowed.

export function removeDup<T>(list: LinkedList<T>): void {
  const map: {[p: string]: boolean} = {};
  let next: Node<T> = list.head;
  let prev: Node<T> = null;
  while(next) {
    if(map[next.data.toString()]) {
      // remove node
      prev.next = next.next;
      next = next.next;
      continue;
    }
    // if not a dup, add to map
    // and proceed to the next item;
    map[next.data.toString()] = true;
    prev = next;
    next = next.next;
  }
}
