/*Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.*/

//My solution 

function past(h, m, s){
  //Convert hours to milliseconds
  const hoursInMs = h * 60 * 60 * 1000;
  //Convert minutes to milliseconds
  const minutesInMs = m * 60 * 1000;
  //Convert seconds to milliseconds 
  const secondsInMs = s * 1000;
  
  //Sum all milliseconds
  return hoursInMs + minutesInMs + secondsInMs;
}