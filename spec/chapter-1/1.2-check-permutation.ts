import * as jsc from 'jsverify';
import { isPermutation } from '../../src/chapter-1/1.2-check-permutation';

describe('1.2 Check Permutations', () => {
  it('should return true for permutations', () => {
    jsc.assertForall(
      jsc.suchthat(jsc.nestring, (s: string) => s.length > 10),
      (s: string) => {
        let permutation: string = '';
        let originalArray: Array<string> = s.split('');
        while(originalArray.length > 0) {
          const position: number = jsc.random(0, originalArray.length - 1);
          permutation += originalArray[position];
          originalArray = [
            ...originalArray.slice(0, position),
            ...originalArray.slice(position + 1)
          ];
        }
        return isPermutation(s, permutation);
      }
    );
  });
  it('should return false for not permutations', () => {
    jsc.assertForall(
      jsc.suchthat(jsc.nestring, (s: string) => s.length > 10),
      (s: string) => {
        let permutation: string = '';
        let originalArray: Array<string> = s.split('');
        while (originalArray.length > 0) {
          const position: number = jsc.random(0, originalArray.length - 1);
          permutation += originalArray[position];
          originalArray = [
            ...originalArray.slice(0, position),
            ...originalArray.slice(position + 1)
          ];
        }
        const permutationArray: Array<string> = permutation.split('');
        const perPosition: number = jsc.random(0, permutationArray.length - 1);
        let newChar: string = 'a';
        if(newChar === permutationArray[perPosition]) {
          newChar = 'b';
        }
        permutationArray[perPosition] = newChar;
        return !isPermutation(s, permutationArray.join(''));
      }
    );
  });
});
