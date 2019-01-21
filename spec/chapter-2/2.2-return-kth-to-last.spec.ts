import { returnKthToLast } from '../../src/chapter-2/2.2-return-kth-to-last';
import { LinkedList } from '../../src/chapter-2/linked-list';

describe('2.2 return kth to last', () => {
  let linkedList: LinkedList<number>;
  beforeEach(() => {
    linkedList = new LinkedList();
    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);
    linkedList.add(4);
    linkedList.add(5);
    linkedList.add(6);
    linkedList.add(7);
    linkedList.add(8);
    linkedList.add(9);
    linkedList.add(10);
  });
  it('should return the last one as 10', () => {
    expect(returnKthToLast(1, linkedList).data).toBe(10);
  });
  it('should find the 2nd to last as 9', () => {
    expect(returnKthToLast(2, linkedList).data).toBe(9);
  });
  it('should find the 9th to last as 2', () => {
    expect(returnKthToLast(9, linkedList).data).toBe(2);
  });
  it('should return the first one as null', () => {
    expect(returnKthToLast(10, linkedList).data).toBe(1);
  });
  it('should return null if out of bounds', () => {
    expect(returnKthToLast(22, linkedList)).toBe(null);
  });
});
