import { partition } from '../../src/chapter-2/2.4-partition';
import { LinkedList } from '../../src/chapter-2/linked-list';
import { Node } from '../../src/chapter-2/node';

describe('2.4 partition', () => {
  let linkedList: LinkedList<number> = null;
  let count: number = 0;
  let node: Node<number> = null;
  let lessCount: number = 0;
  beforeEach(() => {
    count = 0;
    lessCount = 0;
    linkedList = new LinkedList<number>();
    linkedList.add(100);
    linkedList.add(1);
    linkedList.add(90);
    linkedList.add(10);
    linkedList.add(88);
    linkedList.add(22);
    linkedList.add(73);
    linkedList.add(35);
    linkedList.add(62);
    linkedList.add(42);
    linkedList.add(55);
  });
  describe('parse on 55', () => {
    beforeEach(() => {
      partition(55, linkedList);
      node = linkedList.head;
      while(node) {
        count++;
        node = node.next;
      }
      node = linkedList.head;
      while(node && node.data < 55) {
        lessCount++;
        node = node.next;
      }
    });
    it('should still have 11 items', () => {
      expect(count).toBe(11);
    });
    it('there should be 5 items in the less than partition', () => {
      expect(lessCount).toBe(5);
    });
  });
});
