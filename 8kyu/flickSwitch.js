/*Create a function that always returns True/true for every item in a given list.
However, if an element is the word 'flick', switch to always returning the opposite boolean value*/

//My solution 

function flickSwitch(arr){
   let currentState = true;
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'flick') {
      currentState = !currentState;
    }
    result.push(currentState);
  }

  return result;
}