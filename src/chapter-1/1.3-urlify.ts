// tslint:disable:readonly-array - problem explicitly ask for in-place
export function urlify(characterArray: Array<string>, length: number): Array<string> {
  length--;
  // start 2 positions in because %20 is 3 characters
  for (let index: number = length - 2; index >= 0; index--) {
    if(characterArray[index] === ' ') {
      // move every thing from here down over 2 characters
      for(let moveIndex: number = length - 2; moveIndex > index; moveIndex--) {
        characterArray[moveIndex + 2] = characterArray[moveIndex];
      }
      characterArray[index] = '%';
      characterArray[index + 1] = '2';
      characterArray[index + 2] = '0';
    }
  }
  return characterArray;
}
