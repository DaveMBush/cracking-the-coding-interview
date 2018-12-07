import { isRotation } from '../../src/chapter-1/1.9-string-rotation';

describe('1.9 string rotation', () => {
   describe('compare "abcd" to "cdab"', () => {
     it('should return true', () => {
       expect(isRotation('abcd', 'cdab')).toBe(true);
     });
   });
   describe('compare "abcd" to "bcd"', () => {
     it('should return false', () => {
      expect(isRotation('abcd', 'bcd')).toBe(false);
     });
   });
});
