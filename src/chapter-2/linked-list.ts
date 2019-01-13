import { Node } from './node';
export class LinkedList<T> {
  head: Node<T> = null;
  add(data: T): Node<T> {
    if (!this.head) {
      this.head = new Node<T>(data);
      return this.head;
    }
    this.head.appendToTail(data);

  }
}
