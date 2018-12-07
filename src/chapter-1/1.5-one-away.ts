export function isDiffByOne(s1: string, s2: string): boolean {
  // is s1 one edit away from s2 where edit is add, delete,
  // or change one character
  let s1Array: Array<string>;
  let s2Array: Array<string>;
  if(s1.length > s2.length) {
    s1Array = s1.split('');
    s2Array = s2.split('');
  } else {
    s1Array = s2.split('');
    s2Array = s1.split('');
  }
  if(s1Array.length - s2Array.length > 1) {
    return false;
  }
  let s2Index: number = -1;
  let diffCount: number = 0;
  s1Array.map((s: string, index: number) => {
    s2Index++;
    if(s === s2Array[s2Index]) {
      return s;
    }
    if(s1Array.length === s2Array.length) {
      diffCount++;
      return s;
    }
    if(s === s2Array[s2Index + 1]) {
      s2Index++;
      diffCount++;
      return s;
    }
    diffCount++;
    return s;
  });
  return diffCount < 2;
}
