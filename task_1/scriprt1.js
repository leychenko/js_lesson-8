//================================= Задача 1 ====================================
// Задача 1. Дано масив, який містить оцінки з К предметів. Знайти середній бал і з’ясувати до якої категорії він відноситься (відмінник, двійочник (має хоча би одну двійку), хорошист (оцінки добре і відмінно), трійочник(є хоча би одна трійка)).


const K = parseInt(prompt("Введіть кількість предметів"))
const studentsScores = getUserScores(K)
const averageScore = getAverageScore(studentsScores)
const studentMinScore = minScore(studentsScores)
let statusStudent = isExcellentStudent(studentMinScore)


function getUserScores(K) {
	const userScores = []
	for (let i = 1; i <= K; i++) {
		userScores.push(parseInt(prompt(`Введіть ${i} оцінку`)))
  }
  return userScores
}


function getAverageScore(Scores) {
  let countScore = 0
  for (let i = 0; i < Scores.length; i++) {
    countScore += Scores[i]
  }
  return countScore / Scores.length
}

function minScore(scores) {
	let minUserScore = scores[0]
	for (let i = 0; i < scores.length; i++) {
		if(scores[i] < minUserScore) minUserScore = scores[i]
  }
  return minUserScore
}


function isExcellentStudent(minScore) {
	  let studentStatus = ""
	for (let i = 0; i < minScore; i++) {
		if(minScore === 2) studentStatus = "Двійочник"
		else if(minScore === 3) studentStatus = "Трійочник"
		else if(minScore === 5) studentStatus = "Відмінник"
		else studentStatus = "Хорошист"
	}  
	 return studentStatus
}


document.write(`<p>Середній бал - <span> ${averageScore.toFixed(1)}</span></p>
<p>Студент - <span>${statusStudent}</span></p> `)
