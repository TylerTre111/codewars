/*Given a set of numbers, return the additive inverse of each. 
Each positive becomes negatives, and the negatives become positives*/

//My solution 

function invert(array) {
   return array.map(num=>-num);
}