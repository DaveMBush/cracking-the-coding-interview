import { getUint4, rotateImage, setUint4 } from '../src/1.7-rotate-matrix';

describe('1.7 rotate matrix', () => {
  let byteArray: Uint8Array;
  describe('2 x 2 matrix', () => {
    beforeEach(() => {
      byteArray = new Uint8Array(2);
      setUint4(0, 1, byteArray);
      setUint4(1, 2, byteArray);
      setUint4(2, 3, byteArray);
      setUint4(3, 4, byteArray);
    });
    it('should rotate', () => {
      rotateImage(byteArray);
      expect(getUint4(0, byteArray)).toBe(3);
      expect(getUint4(1, byteArray)).toBe(1);
      expect(getUint4(2, byteArray)).toBe(4);
      expect(getUint4(3, byteArray)).toBe(2);
    });
  });
  describe('3 x 3 matrix', () => {
    beforeEach(() => {
      byteArray = new Uint8Array(5);
      setUint4(0, 1, byteArray);
      setUint4(1, 2, byteArray);
      setUint4(2, 3, byteArray);
      setUint4(3, 4, byteArray);
      setUint4(4, 5, byteArray);
      setUint4(5, 6, byteArray);
      setUint4(6, 7, byteArray);
      setUint4(7, 8, byteArray);
      setUint4(8, 9, byteArray);
    });
    it('should rotate', () => {
      rotateImage(byteArray);
      expect(getUint4(0, byteArray)).toBe(7);
      expect(getUint4(1, byteArray)).toBe(4);
      expect(getUint4(2, byteArray)).toBe(1);
      expect(getUint4(3, byteArray)).toBe(8);
      expect(getUint4(4, byteArray)).toBe(5);
      expect(getUint4(5, byteArray)).toBe(2);
      expect(getUint4(6, byteArray)).toBe(9);
      expect(getUint4(7, byteArray)).toBe(6);
      expect(getUint4(8, byteArray)).toBe(3);
    });
  });
  describe('4 x 4 matrix', () => {
    beforeEach(() => {
      byteArray = new Uint8Array(8);
      setUint4(0, 1, byteArray);    //  1,  2,  3,  4
      setUint4(1, 2, byteArray);    //  5,  6,  7,  8
      setUint4(2, 3, byteArray);    //  9, 10, 11,  12
      setUint4(3, 4, byteArray);    // 13, 14, 15,  0
      setUint4(4, 5, byteArray);
      setUint4(5, 6, byteArray);
      setUint4(6, 7, byteArray);
      setUint4(7, 8, byteArray);
      setUint4(8, 9, byteArray);
      setUint4(9, 10, byteArray);
      setUint4(10, 11, byteArray);
      setUint4(11, 12, byteArray);
      setUint4(12, 13, byteArray);
      setUint4(13, 14, byteArray);
      setUint4(14, 15, byteArray);
      setUint4(15, 0, byteArray);
    });
    it('should rotate', () => {
      rotateImage(byteArray);
      expect(getUint4(0, byteArray)).toBe(13);
      expect(getUint4(1, byteArray)).toBe(9);
      expect(getUint4(2, byteArray)).toBe(5);
      expect(getUint4(3, byteArray)).toBe(1);
      expect(getUint4(4, byteArray)).toBe(14);
      expect(getUint4(5, byteArray)).toBe(10);
      expect(getUint4(6, byteArray)).toBe(6);
      expect(getUint4(7, byteArray)).toBe(2);
      expect(getUint4(8, byteArray)).toBe(15);
      expect(getUint4(9, byteArray)).toBe(11);
      expect(getUint4(10, byteArray)).toBe(7);
      expect(getUint4(11, byteArray)).toBe(3);
      expect(getUint4(12, byteArray)).toBe(0);
      expect(getUint4(13, byteArray)).toBe(12);
      expect(getUint4(14, byteArray)).toBe(8);
      expect(getUint4(15, byteArray)).toBe(4);
    });
  });
  describe('9 x 9 matrix', () => {
    beforeEach(() => {
      byteArray = new Uint8Array(41);
      setUint4(0, 1, byteArray);    //  1,  2,  3,  4,  5,  6,  7,  8,  9
      setUint4(1, 2, byteArray);    // 10, 11, 12, 13, 14, 15,  1,  2,  3
      setUint4(2, 3, byteArray);    //  4,  5,  6,  7,  8,  9, 10, 11, 12
      setUint4(3, 4, byteArray);    // 13, 14, 15,  0,  1,  2,  3,  4,  5
      setUint4(4, 5, byteArray);    //  6,  7,  8,  9, 10, 11, 12, 13, 14
      setUint4(5, 6, byteArray);    // 15,  1,  2,  3,  4,  5,  6,  7,  8
      setUint4(6, 7, byteArray);    //  9, 10, 11, 12, 13, 14, 15,  0,  1
      setUint4(7, 8, byteArray);    //  2,  3,  4,  5,  6,  7,  8,  9, 10
      setUint4(8, 9, byteArray);    // 11, 12, 13, 14, 15,  0,  1,  2,  3

      setUint4(9, 10, byteArray);
      setUint4(10, 11, byteArray);
      setUint4(11, 12, byteArray);
      setUint4(12, 13, byteArray);
      setUint4(13, 14, byteArray);
      setUint4(14, 15, byteArray);
      setUint4(15, 1, byteArray);
      setUint4(16, 2, byteArray);
      setUint4(17, 3, byteArray);

      setUint4(18, 4, byteArray);
      setUint4(19, 5, byteArray);
      setUint4(20, 6, byteArray);
      setUint4(21, 7, byteArray);
      setUint4(22, 8, byteArray);
      setUint4(23, 9, byteArray);
      setUint4(24, 10, byteArray);
      setUint4(25, 11, byteArray);
      setUint4(26, 12, byteArray);

      setUint4(27, 13, byteArray);
      setUint4(28, 14, byteArray);
      setUint4(29, 15, byteArray);
      setUint4(30, 0, byteArray);
      setUint4(31, 1, byteArray);
      setUint4(32, 2, byteArray);
      setUint4(33, 3, byteArray);
      setUint4(34, 4, byteArray);
      setUint4(35, 5, byteArray);

      setUint4(36, 6, byteArray);
      setUint4(37, 7, byteArray);
      setUint4(38, 8, byteArray);
      setUint4(39, 9, byteArray);
      setUint4(40, 10, byteArray);
      setUint4(41, 11, byteArray);
      setUint4(42, 12, byteArray);
      setUint4(43, 13, byteArray);
      setUint4(44, 14, byteArray);

      setUint4(45, 15, byteArray);
      setUint4(46, 1, byteArray);
      setUint4(47, 2, byteArray);
      setUint4(48, 3, byteArray);
      setUint4(49, 4, byteArray);
      setUint4(50, 5, byteArray);
      setUint4(51, 6, byteArray);
      setUint4(52, 7, byteArray);
      setUint4(53, 8, byteArray);

      setUint4(54, 9, byteArray);
      setUint4(55, 10, byteArray);
      setUint4(56, 11, byteArray);
      setUint4(57, 12, byteArray);
      setUint4(58, 13, byteArray);
      setUint4(59, 14, byteArray);
      setUint4(60, 15, byteArray);
      setUint4(61, 0, byteArray);
      setUint4(62, 1, byteArray);

      setUint4(63, 2, byteArray);
      setUint4(64, 3, byteArray);
      setUint4(65, 4, byteArray);
      setUint4(66, 5, byteArray);
      setUint4(67, 6, byteArray);
      setUint4(68, 7, byteArray);
      setUint4(69, 8, byteArray);
      setUint4(70, 9, byteArray);
      setUint4(71, 10, byteArray);

      setUint4(72, 11, byteArray);
      setUint4(73, 12, byteArray);
      setUint4(74, 13, byteArray);
      setUint4(75, 14, byteArray);
      setUint4(76, 15, byteArray);
      setUint4(77, 0, byteArray);
      setUint4(78, 1, byteArray);
      setUint4(79, 2, byteArray);
      setUint4(80, 3, byteArray);
    });
    it('should rotate', () => {
      rotateImage(byteArray);
      // test corners at each level
      expect(getUint4(0, byteArray)).toBe(11);
      expect(getUint4(8, byteArray)).toBe(1);
      expect(getUint4(80, byteArray)).toBe(9);
      expect(getUint4(72, byteArray)).toBe(3);

      expect(getUint4(10, byteArray)).toBe(3);
      expect(getUint4(16, byteArray)).toBe(11);
      expect(getUint4(70, byteArray)).toBe(2);
      expect(getUint4(64, byteArray)).toBe(9);

      expect(getUint4(20, byteArray)).toBe(11);
      expect(getUint4(24, byteArray)).toBe(6);
      expect(getUint4(60, byteArray)).toBe(10);
      expect(getUint4(56, byteArray)).toBe(15);

      expect(getUint4(30, byteArray)).toBe(3);
      expect(getUint4(32, byteArray)).toBe(0);
      expect(getUint4(50, byteArray)).toBe(2);
      expect(getUint4(48, byteArray)).toBe(5);

      // middles
      expect(getUint4(4, byteArray)).toBe(6);
      expect(getUint4(44, byteArray)).toBe(5);
      expect(getUint4(76, byteArray)).toBe(14);
      expect(getUint4(36, byteArray)).toBe(15);

      expect(getUint4(13, byteArray)).toBe(7);
      expect(getUint4(43, byteArray)).toBe(14);
      expect(getUint4(67, byteArray)).toBe(13);
      expect(getUint4(37, byteArray)).toBe(6);

      expect(getUint4(22, byteArray)).toBe(8);
      expect(getUint4(42, byteArray)).toBe(8);
      expect(getUint4(58, byteArray)).toBe(12);
      expect(getUint4(38, byteArray)).toBe(13);

      expect(getUint4(31, byteArray)).toBe(9);
      expect(getUint4(41, byteArray)).toBe(1);
      expect(getUint4(49, byteArray)).toBe(11);
      expect(getUint4(39, byteArray)).toBe(4);

      // center
      expect(getUint4(40, byteArray)).toBe(10);
    });
  });
});
