"use strict"

//================================= Задача 4 ====================================
// Задача 4.Дано послідовність номерів автомобілів. Підрахувати кількість номерів, які :
// •	починаються на букву «А»;
// •	перша і остання літери співпадають;
// •	складаються з більше ніш 5 символів;

const numberOfCar = [
  "AA9172HI",
  "KA4513",
  "AB1248AA",
  "AI7845TA",
  "KA6295BT",
  "PA452",
  "AH128",
]
const searchFirstLetterA = isFirstLetterA(numberOfCar)
const searchFirstAndLastLetter = isFirstAndLastLetterSame(numberOfCar)
const searchNumberThanHaveMoreFiveLetters = isMoreFiveLetters(numberOfCar)

function isFirstLetterA(carNumbers) {
  let countNumberFirstLetter = 0
  for (let i = 0; i < carNumbers.length; i++) {
    if (carNumbers[i][0] === "A") countNumberFirstLetter++
  }
  return [countNumberFirstLetter]
}
function isFirstAndLastLetterSame(carNumbers) {
  let countLettersFirstAndLast = 0
  for (let i = 0; i < carNumbers.length; i++) {
    if (carNumbers[i][0] === carNumbers[i][carNumbers[i].length - 1])
      countLettersFirstAndLast++
  }
  return countLettersFirstAndLast
}
function isMoreFiveLetters(carNumbers) {
  const moreFiveLetters = 5
  let countMoreFiveLetters = 0
  for (let i = 0; i < carNumbers.length; i++) {
    if (carNumbers[i].length > moreFiveLetters) countMoreFiveLetters++
  }
  return countMoreFiveLetters
}

document.write(`
<p>Усі номери масиву: ${numberOfCar}</p>
<p>Номери з першою літерою "А" - <span>${searchFirstLetterA} шт.</span></p>
<p>Перша і остання букви номера співпадають - <span>${searchFirstAndLastLetter} шт.</span></p>
<p>Більше пяти букв у номері <span>${searchNumberThanHaveMoreFiveLetters} шт.</span></p>`)
