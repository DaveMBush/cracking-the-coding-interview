import { deleteNode } from '../../src/chapter-2/2.3-delete-middle-node';
import { LinkedList } from '../../src/chapter-2/linked-list';
import { Node } from '../../src/chapter-2/node';

let linkedList: LinkedList<number> = null;
let node: Node<number> = null;
let returnString: string = null;
describe('2.3 delete middle node', () => {
  beforeEach(() => {
    linkedList = new LinkedList();
    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);
    linkedList.add(4);
    linkedList.add(5);
  });
  describe('delete node 2', () => {
    beforeEach(() => {
      node = linkedList.head;
      node = node.next;
      deleteNode(node);
      node = linkedList.head;
      returnString = '';
      while(node) {
        returnString += '' + node.data;
        node = node.next;
      }
    });
    it('should return 1345', () => {
      expect(returnString).toBe('1345');
    });
  });
  describe('delete node 4', () => {
    beforeEach(() => {
      node = linkedList.head;
      node = node.next;
      node = node.next;
      node = node.next;
      deleteNode(node);
      node = linkedList.head;
      returnString = '';
      while (node) {
        returnString += '' + node.data;
        node = node.next;
      }
    });
    it('should return 1235', () => {
      expect(returnString).toBe('1235');
    });
  });

});
