// calculateScores.js

export default function calculateScores(questions) {
    const results = {};
    questions.forEach((questionSet) => {
      const score = questionSet.answers.filter((answer) => answer).length;
      results[questionSet.title] = score;
    });
    return results;
  }
  