import { isDiffByOne } from '../../src/chapter-1/1.5-one-away';

let s1: string = '';
let s2: string = '';
describe('1.5 one away', () => {
  describe('string length differs by more than 1', () => {
    beforeEach(() => {
      s1 = 'abcd';
      s2 = 'abcdef';
    });
    it('should return false', () => {
      expect(isDiffByOne(s1, s2)).toBeFalsy();
    });
    it('should return false if switched', () => {
      expect(isDiffByOne(s2, s1)).toBeFalsy();
    });
  });

  describe('strings are the same length, longer than 2 characters, and entirely different', () => {
    beforeEach(() => {
      s1 = 'ab';
      s2 = 'cd';
    });
    it('should return false', () => {
      expect(isDiffByOne(s1, s2)).toBeFalsy();
    });
  });

  describe('two one character strings that are the same', () => {
    beforeEach(() => {
      s1 = 'a';
      s2 = 'a';
    });
    it('should return true', () => {
      expect(isDiffByOne(s1, s2)).toBeTruthy();
    });
  });

  describe('two strings with one character different', () => {
    beforeEach(() => {
      s1 = 'abcd';
      s2 = 'abed';
    });
    it('should return true', () => {
      expect(isDiffByOne(s1, s2)).toBeTruthy();
    });
  });

  describe('two strings with two characters different', () => {
    beforeEach(() => {
      s1 = 'abcdefg';
      s2 = 'abedeyg';
    });
    it('should return false', () => {
      expect(isDiffByOne(s1, s2)).toBeFalsy();
    });
  });
});
