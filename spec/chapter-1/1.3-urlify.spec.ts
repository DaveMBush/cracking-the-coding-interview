import * as jsc from 'jsverify';
import { urlify } from '../../src/chapter-1/1.3-urlify';

describe('1.3 Urlify', () => {
  // basic test case
  it('"x y", 5 should return "x%20y"', () => {
    expect(urlify('x y  '.split(''), 5).join('')).toBe('x%20y');
  });
  // test for space at end
  it('"x y ", 8 should return "x%20y%20', () => {
    expect(urlify('x y     '.split(''), 8).join('')).toBe('x%20y%20');
  });
  // test for space at beginning
  it('" x y", 8 should return %20x%20y', () => {
    expect(urlify(' x y    '.split(''), 8).join('')).toBe('%20x%20y');
  });
});
