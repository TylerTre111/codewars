/*You are given two sorted arrays that contain only integers. 
These arrays may be sorted in either ascending or descending order. 
Your task is to merge them into a single array, ensuring that:

The resulting array is sorted in ascending order.

Any duplicate values are removed, so each integer appears only once.

If both input arrays are empty, return an empty array.

No input validation is needed, as both arrays are guaranteed to contain zero or more integers*/

//My solution

function mergeArrays(arr1, arr2) {
 if (!arr1 && !arr2) {
    return [];
  } 
  const mergedArray = [...arr1, ...arr2];
  const uniqueSortedArray = [...new Set(mergedArray)].sort((a, b) => a - b);

  return uniqueSortedArray;
}