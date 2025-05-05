



  let scores = [9, 8, 10, 7];

function evaluateScores(scores) {
  const average = scores.reduce((sum, score) => sum + score, 0) / scores.length;

  if (average > 8) {
    console.log("Pass");
  } else if (average < 5) {
    console.log("Fail");
  } else {
    console.log("Review");
  }
}
console.log (evaluateScores(scores) );