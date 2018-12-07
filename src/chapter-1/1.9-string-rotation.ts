// assume you have a method isSubstring which checks if one word is a substring of another.
// Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one
// call to isSubstring

export function isRotation(s1: string, s2: string): boolean {
  const s3: string = s1 + s1;
  return s3.indexOf(s2) !== -1 && s1.length === s2.length;
}
