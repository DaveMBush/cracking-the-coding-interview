export class Node<T> {
  next: Node<T> = null;

  constructor(public data: T) {
  }

  appendToTail(d: T): void {
    const end: Node<T> = new Node(d);
    let n: Node<T> = this;
    while (n.next !== null) {
      n = n.next;
    }
    n.next = end;
  }
}
