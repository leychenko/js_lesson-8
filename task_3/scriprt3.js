

//================================= Задача 3 ====================================


// Задача 3. Дано масив імен учнів. З’ясувати скільки разів зустрічається ім’я «Іван»

function getNameIvan(names) { 
	let countName = 0
	for (let i = 0; i < names.length; i++) {
    let searchName = names[i]
		if(searchName === "Ivan")countName++
  }
  return countName
}

const namesStudents = getNameIvan([
  "Ivan",
  "Koly",
  "Geny",
  "Pety",
  "Ivan",
  "Ira",
  "Any",
  "Ivan",
  "Pety",
  "Ivan",
  "Ira",
  "Any",
  "Ivan",
])

document.write(
  `<p>Ім'я "Ivan" зустічається в цьому массиві - <span> ${namesStudents}</span> раз(и)</p>`
)