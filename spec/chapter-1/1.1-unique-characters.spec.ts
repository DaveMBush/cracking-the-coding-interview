import * as jsc from 'jsverify';
import { isUnique } from '../../src/chapter-1/1.1-unique-characters';

describe('1.1 Unique Characters', () => {
  it('abcdefg is unique', () => {
    expect(isUnique('abcdefg')).toBeTruthy();
  });

  it('abcdefga is unique', () => {
    expect(isUnique('abcdefga')).toBeFalsy();
  });
});

describe('1.1 Unique Characters Property Based Testing', () => {
  it('unique string true', () => {
    jsc.assertForall(jsc.suchthat(jsc.nestring, (s: string) => s.length > 10), (a: string) => {
      let uniqueString: string = '';
      while (a.length) {
        const aArray: Array<string> = a.split('');
        const popChar: string = aArray.shift();
        uniqueString += popChar;
        a = aArray.join('').split(popChar).join('');
      }
      return isUnique(uniqueString);
    });
  });
  it('not unique string false', () => {
    jsc.assertForall(jsc.suchthat(jsc.nestring, (s: string) => s.length > 10), (a: string) => {
      let uniqueString: string = '';
      while (a.length) {
        const aArray: Array<string> = a.split('');
        const popChar: string = aArray.shift();
        uniqueString += popChar;
        a = aArray.join('').split(popChar).join('');
      }
      uniqueString += uniqueString.substr(jsc.random(0, uniqueString.length - 1), 1);
      return !isUnique(uniqueString);
    });
  });

});
