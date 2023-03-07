

//================================= Задача 6 ====================================
// Задача 6. Дано послідовність цін товарів та назв (у окремих масивах). Вивести на екран ті, які може собі дозволити користувач (кількість грошей задається).

const priceProducts = [150,56,1000,400,20,220,90]
const titlesProducts = ["fish","bear","laptop","sweter","coffee","fruits","phone"]
const userMoney = parseInt(prompt(`How money you have? Please enter`))
let userCanBuy = getUserCanBuy(userMoney, priceProducts, titlesProducts)

function getUserCanBuy(money, price, products) {
	let userCan = []
	for (let i = 0; i < price.length; i++) {
		if (money >= price[i]) userCan.push(products[i])
	}
	return userCan
}


document.write(`<p>Client can buy - <span> ${userCanBuy}</span></p>`)