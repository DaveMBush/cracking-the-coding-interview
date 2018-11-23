import { compressString } from '../src/1.6-string-compression';

describe('1.6 string compression', () => {
  describe('string with no repeating characters', () => {
    it('should return itself', () => {
      expect(compressString('abcde')).toBe('abcde');
    });
  });
  describe('string with two repeating characters at the beginning', () => {
    it('should return string with counts', () => {
      expect(compressString('aabcde')).toBe('a2b1c1d1e1');
    });
  });
  describe('string with 2 repeating in the middle', () => {
    it('should return string with counts', () => {
      expect(compressString('abccdef')).toBe('a1b1c2d1e1f1');
    });
  });
  describe('string with 2 repeating at the end', () => {
    it('should return a string with counts', () => {
      expect(compressString('abcdeff')).toBe('a1b1c1d1e1f2');
    });
  });
});
