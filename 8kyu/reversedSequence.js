/*Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]*/

//My solution

const reverseSeq = n => {
   if (n <= 0) {
    return [];
  }
  const result = Array.from({ length: n }, (_, index) => index + 1);
  return result.reverse();
};