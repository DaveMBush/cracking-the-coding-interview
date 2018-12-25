export class Node {
  next: Node = null;

  constructor(private data: number) {
  }

  appendToTail(d: number): void {
    const end: Node = new Node(d);
    let n: Node = this;
    while (n.next !== null) {
      n = n.next;
    }
    n.next = end;
  }
}
