import { isPalindromePermutation } from '../../src/chapter-1/1.4-palindrome-permutation';

describe('1.4 Palindrome Permutation', () => {
  it('abcddcba is a palindrome permutation', () => {
    expect(isPalindromePermutation('abcddcba')).toBeTruthy();
  });
  it('abcdcba is a palindrome permutation', () => {
    expect(isPalindromePermutation('abcdcba')).toBeTruthy();
  });
  it('abcdaabcd is a palindrome permutation', () => {
    expect(isPalindromePermutation('abcdaabcd')).toBeTruthy();
  });
  it('acdaabcd is not a palindrome permutation', () => {
    expect(isPalindromePermutation('acdaabcd')).toBeFalsy();
  });
  it('a is a palindrome permutation', () => {
    expect(isPalindromePermutation('a')).toBeTruthy();
  });
  it('aa is a palindrome permutation', () => {
    expect(isPalindromePermutation('aa')).toBeTruthy();
  });
  it('aa[space] is a palindrome permutation', () => {
    expect(isPalindromePermutation('aa ')).toBeTruthy();
  });
  it('aa[space]b is not a palindrome permutation', () => {
    expect(isPalindromePermutation('aa b')).toBeFalsy();
  });
});
