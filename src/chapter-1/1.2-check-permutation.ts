export function isPermutation(a: string, b: string): boolean {
  const map: object = {};
  if(a.length !== b.length) {
    return false;
  }
  for(const c of a.split('')) {
    if(map[c]) {
      map[c]++;
    } else {
      map[c] = 1;
    }
  }
  for(const d of b.split('')) {
    if(!map[d]) {
      return false;
    }
    map[d]--;
  }
  return true;
}
