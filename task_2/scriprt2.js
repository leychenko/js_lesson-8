//================================= Задача 2 ====================================
// Задача 2. Дано масив, який зберігає кількість відвідувачів магазину протягом тижня. Вивести на екран:
// номери днів, протягом яких кількість відвідувачів була меншою за 20;
// номери днів, коли кількість відвідувачів була мінімальною;
// номери днів, коли кількість відвідувачів була мінімальною;
// загальну кількість клієнтів у робочі дні та окремо загальну кількість днів на вихідних.


// Функція що додає масив з відвідувачами
function getPersonForDay(day) {
  let dayPerson = []
  for (let i = 1; i <= day; i++) {
    dayPerson.push(parseInt(prompt(`Кількість відвідувачів за ${i} день`)))
  }
  return dayPerson
}
// Функція що знаходить меньше ніж 20 відвідувачув за день
function countPersonDayMin_20(personForDaymin) {
  let dayMinGuest = []
  for (let i = 0; i < personForDaymin.length; i++) {
    if (personForDaymin[i] < 20) dayMinGuest.push(i+1)
  }
 return dayMinGuest
}
// Функція що знаходить мин.відвідувачув за день
function countMinPersonDay(minPersonForDay) {
  let min = minPersonForDay[0]
  for (let i = 0; i < minPersonForDay.length; i++) {
    if (min > minPersonForDay[i]) min = i + 1
  }
  return min
}
// Функція що знаходить макс.відвідувачув за день
function countMaxPersonDay(minPersonForDay) {
  let max = minPersonForDay[0]
  for (let i = 0; i < minPersonForDay.length; i++) {
    if (max < minPersonForDay[i]) max = i + 1
  }
  return max
}

function getAllGuestsForWeek(personWeek) {
	let countPersonWeekday = 0
	let countPersonWeekEnd = 0
	for (let i = 0; i < personWeek.length; i++) {
    if (i < 5) countPersonWeekday += personWeek[i]
    else countPersonWeekEnd += personWeek[i]
  }
  return [countPersonWeekday, countPersonWeekEnd]
}



let guestDay = getPersonForDay(7)
let guestMinDay_20 = countPersonDayMin_20(guestDay)
let minGuest = countMinPersonDay(guestDay)
let maxGuest = countMaxPersonDay(guestDay)
const [allGuestsForWeek, guestForWeekEnd] = getAllGuestsForWeek(guestDay)
document.write(
  `<p>Дні коли відвідвачів було меньше ніж 20: <span> ${guestMinDay_20}</span>
  </p><p>Номер дня коли було найменьше відвідувачів- <span> ${minGuest}</span></p>
  <p>Номер дня коли було найбільше відвідувачів- <span> ${maxGuest}</span></p>
  <p>Всього відвідувачів в будні дні: <span> ${allGuestsForWeek}</span></p>
  <p>Всього відвідувачів в вихідні дні: <span> ${guestForWeekEnd}</span></p>`
)
