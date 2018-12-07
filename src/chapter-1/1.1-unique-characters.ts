export function isUnique(str: string): boolean {
  const map: object = {};
  const strArray: Array<string> = str.split('');
  for(const i of strArray) {
    if(map[i]) {
        return false;
    }
    map[i] = true;
  }
  return true;
}
