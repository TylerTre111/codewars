/*HELP! Jason can't find his textbook! It is two days before the test date, 
and Jason's textbooks are all out of order! Help him sort a list full of textbooks by subject, 
so he can study before the test.

The sorting should NOT be case sensitive*/

//My solution 

function sorter(textbooks) {
  return textbooks.sort((a, b) => {
    let subjectA = a.toLowerCase();
    let subjectB = b.toLowerCase();
    if (subjectA < subjectB) {
      return -1;
    }
    if (subjectA > subjectB) {
      return 1;
    }
    return 0;
  });
}