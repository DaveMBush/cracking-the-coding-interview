// given a word, return true if it is a permutation of
// a palindrome (word or phrase that is the same forward or backward)

export function isPalindromePermutation(str: string): boolean {
  // put each letter in a map
  const map: object = {};
  for(const c of str.split('')) {
    map[c] = map[c] ? map[c] + 1 : 1;
  }
  // count how many items have an odd count
  const oddCount: number = Object
    .keys(map)
    .filter((k: string) => map[k] % 2)
    .length;
  if (str.length % 2 && oddCount === 1) {
    return true;
  }
  if (!(str.length % 2) && oddCount === 0) {
    return true;
  }
  return false;
}
