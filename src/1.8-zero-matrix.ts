// in an n x m matrix, if an element is zero,
// every element in the row and column is set to zero

// tslint:disable-next-line:readonly-array
export function zeroMatrix(matrix: Array<Array<number>>): Array<Array<number>> {
  const xmap: { [key: number]: boolean } = {};
  const ymap: { [key: number]: boolean } = {};
  matrix.forEach((element: Array<number>, y: number) =>
    element.forEach((n: number, x: number) => {
      if (n === 0) {
        xmap[x] = true;
        ymap[y] = true;
      }
    })
  );
  Object.keys(xmap).forEach((x: string) => {
    matrix.forEach((z: Array<number>, y: number) => matrix[y][+x] = 0);
  });
  Object.keys(ymap).forEach((y: string) =>
    matrix[y].forEach((z: number, x: number) => matrix[+y][x] = 0)
  );
  return matrix;
}
