//================================= Задача 8 ====================================
// Задача 8. Дано одновимірний масив, у якому зберігається певна виграшна сума (елементи заповнюються випадковим чином значеннями від -500 до 500). Надаючи користувачу можливість вибирати номери елементів  (поки він не відмовиться). Знаходити сумарний виграш.


const userGame = getRandomPrize(10)
const choiseUserNumber = getUserPrize(userGame)




// Отримуем рандомне число виграшу
function getRandomPrize(sumPrize) {
  let prize = []
  const minPrize = -500
  const maxPrize = 500
  for (let i = 0; i < sumPrize; i++) {
    let resultPrize = Math.floor(
     Math.random() * (maxPrize - minPrize) + minPrize)
		prize.push(resultPrize)
  }
  return prize
}

function getUserPrize(choiseUserNumber) {
	let userCountPrize = 0
	let userEnterNumber = 0
	do {
    userEnterNumber = parseInt(prompt(`Введіть номер від 1 - 10`))
	 if(userEnterNumber > 0 && userEnterNumber <= 12)
	 userCountPrize += choiseUserNumber[userEnterNumber - 1]
  } while (!isNaN(userEnterNumber))
  	
  return userCountPrize
}

document.write(`<p>Ваш виграш склав: <span>${choiseUserNumber}</span></p>`)
