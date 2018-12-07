import { zeroMatrix } from '../../src/chapter-1/1.8-zero-matrix';

// tslint:disable-next-line:readonly-array
function countZeros(matrix: Array<Array<number>>): number {
  return matrix.reduce((sum: number, element: Array<number>): number => {
    return element.reduce((sum2: number, n: number): number => {
      if (!n) {
        sum2++;
      }
      return sum2;
    }, sum);
  }, 0);
}

describe('1.8 zero matrix', () => {
  let matrix: Array<Array<number>>;
  describe('simple 2 x 2 with one zero', () => {
    beforeEach(() => {
      matrix = [[1, 2], [3, 0]];
      matrix = zeroMatrix(matrix);
    });
    it('should return 3 zeros', () => {
      expect(countZeros(matrix)).toBe(3);
    });
  });
  describe('3 x 5 matrix with 2 zeros', () => {
    beforeEach(() => {
      matrix = [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 0, 1],
        [2, 0, 4, 5, 6]
      ];
      matrix = zeroMatrix(matrix);
    });
    it('should return 12 zeros', () => {
      expect(countZeros(matrix)).toBe(12);
    });
  });
  describe('5 x 9 matrix with zeros placed so that everything becomes zero', () => {
    beforeEach(() => {
      matrix = [
        [1, 0, 3, 4, 5],
        [2, 3, 0, 5, 6],
        [3, 4, 5, 0, 7],
        [1, 2, 3, 4, 0],
        [0, 3, 4, 5, 6],
        [3, 0, 5, 6, 7],
        [1, 2, 0, 4, 5],
        [2, 3, 4, 0, 6],
        [3, 4, 5, 6, 0]
      ];
      matrix = zeroMatrix(matrix);
    });
    it('should return 45 zeros', () => {
      expect(countZeros(matrix)).toBe(45);
    });
  });
});
