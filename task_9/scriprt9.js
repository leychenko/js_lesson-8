//================================= Задача 9 ====================================

// Задача 9. Морський бій. Користувач вводить кількість клітинок одновимірного масиву та кількість одиночних кораблів. Комп’ютер довільно розміщує ці одиночні кораблі у масиві по один у клітинці (якщо у клітинці 0, то клітинка пуста, якщо 1 – то це означає, що там є корабель. Користувач вводить номер клітинки, куди стріляє. Гра продовжується до тих пір, поки не будуть потоплені усі кораблі


let areaGame = parseInt(prompt("Введіть довжину поля", "10"))
let userShips = parseInt(prompt("Введіть кільсть кораблів", "5"))
const startGame = getAreaAndShips(areaGame, userShips)


function getAreaAndShips(area, ships) {
  const arrPlay = []
  for (let i = 0; i < area; i++) {
    arrPlay.push(0)
  }
  while (ships > 0) {
    let randonValue = Math.floor(Math.random() * arrPlay.length)
    if (arrPlay[randonValue] === 0) {
      arrPlay[randonValue] = 1
      ships--
    }
  }
  return arrPlay
}

do {
  let userShoot =
    parseInt(prompt(`Введіть поле для пострілу, от 1 до ${areaGame}`)) - 1
  if (startGame[userShoot] === 1) {
    startGame[userShoot] = 0
    userShips--
    alert(`Ви потопили корабель, залишилось ${userShips} кораблів`)
  } else alert(`Ви промазали, залишилось ${userShips} кораблів`)
} while (userShips > 0)


