export function compressString(s: string): string {
  // aabbbcddd = a2b3c1d3
  // abcde = abcde
  const returnArray: Array<string> = [];
  const noRepeatsArray: Array<string> = [];
  let lastChar: string = '';
  let count: number = 0;
  const stringArray: Array<string> = s.split('');
  stringArray.map((str: string) => {
    if(str !== lastChar) {
      if(count > 0) {
        returnArray.push('' + count);
      }
      if(count === 1) {
        noRepeatsArray.push(lastChar);
      }
      lastChar = str;
      returnArray.push(str);
      count = 1;
    } else {
      count++;
    }
  });
  if(count === 1) {
    noRepeatsArray.push(lastChar)
  }
  returnArray.push('' + count);
  if(noRepeatsArray.length === s.length) {
    return s;
  }
  return returnArray.join('');
}
