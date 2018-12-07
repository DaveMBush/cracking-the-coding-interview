// given an image represented by an n x n matrix, where each pixel in the image is 4 bytes,
// write a method to rotate the image by 90 degrees in place

export function rotateImage(imageArray: Uint8Array): Uint8Array {
  // we have to floor the sqrt because our 8bit array may be too long for
  // the number of bits we are holding (3 x 3, 5 x 5, etc)
  const matrixSize: number = Math.floor(Math.sqrt(imageArray.length * 2));
  const layers: number = Math.floor(matrixSize / 2);

  for (let l: number = 0; l < layers; l++) {
    for (let i: number = 0; i < matrixSize - 1 - (l * 2); i++) {
      const topLeftIndex: number = i + l + (l * matrixSize );
      const topRightIndex: number = (matrixSize - 1 - l) + (i * matrixSize) + (l * matrixSize);
      const bottomRightIndex: number = (matrixSize * matrixSize) - 1 - i - l - (l * matrixSize);
      const bottomLeftIndex: number = (matrixSize * matrixSize) - matrixSize * (i + 1) + l - (l * matrixSize);

      // start with simple 2 x 2
      const topLeft: number = getUint4(topLeftIndex, imageArray);
      // bottom left to top left
      setUint4(topLeftIndex, getUint4(bottomLeftIndex, imageArray), imageArray);
      // bottom right to bottom left
      setUint4(bottomLeftIndex, getUint4(bottomRightIndex, imageArray), imageArray);
      // top right to bottom right
      setUint4(bottomRightIndex, getUint4(topRightIndex, imageArray), imageArray);
      // top left to top right
      setUint4(topRightIndex, topLeft, imageArray);
    }
  }
  return imageArray;
}

export function getUint4(index: number, array: Uint8Array): number {
  const uint8Index: number = Math.floor(index / 2);
  const left: boolean = index % 2 === 0;
  const wholeValue: number = array[uint8Index];
  if (left) {
    // shift right;
    return wholeValue >> 4;
  }
  // only return the right most part.
  return wholeValue & 0b00001111;
}

export function setUint4(index: number, value: number, array: Uint8Array): Uint8Array {
  const uint8Index: number = Math.floor(index / 2);
  const left: boolean = index % 2 === 0;
  let currentWholeValue: number = array[uint8Index];
  if (left) {
    currentWholeValue = currentWholeValue & 0b00001111;
    value = value << 4;
  } else {
    currentWholeValue = currentWholeValue & 0b11110000;
  }
  array[uint8Index] = currentWholeValue + value;
  return array;
}
