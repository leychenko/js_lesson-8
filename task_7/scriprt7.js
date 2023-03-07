

//=================================Задача 7====================================
// Задача 7.Дано послідовність платіжок протягом року. Знайти сумарну кількість грошей за:
// за весь рік;
// у першій половині року;
// у другій половині року;
// за літо;
// за ІІ квартал;
// за парні місяці (з парними номерами);
// за місяці, які є початковими у сезоні (весна, літо, осінь, зима).


const billsApartment = getArrBills(12)
const TotalSumBillsForYear = getTotalSumBills(billsApartment, 1, 12)
const SumForSixMonth = getTotalSumBills(billsApartment, 1, 6)
const secondSumForSixMonth = getTotalSumBills(billsApartment, 7, 12)
const SumForSummerMonth = getTotalSumBills(billsApartment, 6, 8)
const SumForSecondQauter = getTotalSumBills(billsApartment, 5, 8)
const SumForEvenMonth = getTotalSumForEvenMonth(billsApartment, 1, 12)



// Створюємо масив з місяцями
function getArrBills(month) {
  const allBills = []
  let userBills = 0
  for (let i = 1; i <= month; i++) {
    userBills = parseFloat(prompt(`Введіть платіж за ${i} місяць`))
    allBills.push(userBills)
  }
  return allBills
}
// Отримання суми по платіжкам 
function getTotalSumBills(bills, startOfPeriod, endOfPeriod) {
  let countBillsForYear = 0
  for (let i = startOfPeriod; i <= endOfPeriod; i++) {
	 countBillsForYear += bills[i - 1]
  }
  return countBillsForYear
}
// Отримання суми за парні місяці (з парними номерами),
// та за місяці, які є початковими у сезоні
function getTotalSumForEvenMonth(allMonth, startOfPeriod, endOfPeriod) {
	let countSumEvenMonth = 0
	let countSumAddMonth = 0
	for (let month = startOfPeriod; month <= endOfPeriod; month++) {
    if (month % 2 === 0) countSumEvenMonth += allMonth[month - 1]
     if (month === 3 || month === 6 || month === 9 || month === 12) countSumAddMonth += allMonth[month - 1]
  }
	return [countSumEvenMonth, countSumAddMonth]
}


document.write(`<table>
<tr>
<td>Cумарну кількість грошей за рік</td>
<td><span>${TotalSumBillsForYear}</span></td>
</tr>
<tr>
<td>Cумарну кількість грошей за перші півроку</td>
<td><span>${SumForSixMonth}</span></td>
</tr>
<tr>
<td>Cумарну кількість грошей за другі півроку</td>
<td><span>${secondSumForSixMonth}</span></td>
</tr>
<tr>
<td>Cумарну кількість грошей за літо</td>
<td><span>${SumForSummerMonth}</span></td>
</tr>
<tr>
<td>Cумарну кількість грошей за ІІ квартал</td>
<td><span>${SumForSecondQauter}</span></td>
</tr>
<tr>
<td>Cумарну кількість грошей за парні місяці</td>
<td><span>${SumForEvenMonth[0]}</span></td>
</tr>
<tr>
<td>Cумарну кількість грошей за парні місяці</td>
<td><span>${SumForEvenMonth[1]}</span></td>
</tr>
</table>`)