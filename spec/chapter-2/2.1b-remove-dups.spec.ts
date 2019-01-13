import { removeDup } from '../../src/chapter-2/2.1b-remove-dups';
import { LinkedList } from '../../src/chapter-2/linked-list';
import { Node } from '../../src/chapter-2/node';

let linkedList: LinkedList<number>;

describe('2.1b remove dups no buffer', () => {
  describe('2 items with the same data', () => {
    beforeEach(() => {
      linkedList = new LinkedList();
      linkedList.add(1);
      linkedList.add(1);
      removeDup(linkedList);
    });
    it('should only have one item left in the list', () => {
      expect(linkedList.head.next).toBe(null);
    });
  });
  describe('5 items with two pairs of duplicates', () => {
    beforeEach(() => {
      linkedList = new LinkedList();
      linkedList.add(1);
      linkedList.add(2);
      linkedList.add(3);
      linkedList.add(2);
      linkedList.add(1);
      removeDup(linkedList);
    });
    it('should only have 3 items in the list', () => {
      expect(count()).toBe(3);
    });
  });
  describe('10 items with 3 sets of 3 dups', () => {
    beforeEach(() => {
      linkedList = new LinkedList();
      linkedList.add(1);
      linkedList.add(2);
      linkedList.add(3);
      linkedList.add(4);
      linkedList.add(3);
      linkedList.add(2);
      linkedList.add(1);
      linkedList.add(1);
      linkedList.add(2);
      linkedList.add(4);
      removeDup(linkedList);
    });
    it('should only have 4 items', () => {
      expect(count()).toBe(4);
    });
  });
});
function count(): number {
  let n: number = 0;
  let next: Node<number> = linkedList.head;
  while (next) {
    n++;
    next = next.next;
  }
  return n;
}
