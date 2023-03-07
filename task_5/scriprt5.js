//================================= Задача 5 ====================================
// Задача 5. Дано послідовність оцінок учня. Підрахувати кількість:
// 1)	двійок
// 2)	кількість хороших оцінок (добре, відмінно);
// 3)	кількість оцінок, які нижче середнього.
const studentsScores = [
  3, 1, 5, 2, 1, 3, 4, 5, 1, 2, 4, 5, 2, 3, 2, 2, 1, 4, 5, 2,
]

const badScoreStudent = getBadScore(studentsScores)
const goodScoreStudent = getGoodScore(studentsScores)
const averageScore = getAverageScore(studentsScores)
const countScoresLowerAvarege =
  getCountScoresLowerAvarege(studentsScores, averageScore)

function getBadScore(allScors) {
  let countBadScore = 0
  for (let i = 0; i < allScors.length; i++) {
    if (allScors[i] === 2) countBadScore++
  }
  return countBadScore
}

function getGoodScore(allScors) {
  let countGoodScore = 0
  for (let i = 0; i < allScors.length; i++) {
    if (allScors[i] === 4 || allScors[i] === 5) countGoodScore++
  }
  return countGoodScore
}
function getAverageScore(allScors) {
  let averageScore = 0
  for (let i = 0; i < allScors.length; i++) {
    averageScore += allScors[i]
  }
  return averageScore / allScors.length
}

function getCountScoresLowerAvarege(scores, averageScore) {
  let countLowerScores = 0
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] < averageScore) countLowerScores++
  }
  return countLowerScores
}

document.write(
  `<p>Кількість двійок - <span>${badScoreStudent}</span></p>
  <p>Кількість хороших оцінок - <span>${goodScoreStudent}</span></p>
  <p>Середній бал - <span>${averageScore.toFixed(1)}</span></p>
  <p>Кількість оцінок нижчих за середній бал - <span>${countScoresLowerAvarege}</span></p>`
)
