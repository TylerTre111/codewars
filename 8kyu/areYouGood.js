/*There was a test in your class and you passed it. Congratulations!

But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return true if you're better, else false*/

//My solution 

function betterThanAverage(classPoints, yourPoints) {
  const sumClassPoints = classPoints.reduce((sum, score) => sum + score, 0);
  const totalPoints = sumClassPoints + yourPoints;
  const numberOfStudents = classPoints.length + 1;
  const classAverage = totalPoints / numberOfStudents;
  return yourPoints > classAverage;
}