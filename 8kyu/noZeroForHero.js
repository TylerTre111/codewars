/*Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.*/

//My solution

function noBoringZeros(n) {
  if (n === 0) {
    return 0
  }
  let str = n.toString();
  str = str.replace(/(\.0+$|0+$)/, '');
  return parseFloat(str);
}