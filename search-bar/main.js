const searchField = document.querySelector('.search')
const drinksList = document.querySelectorAll('.drink-list li')

const searchEngine = input => {
	const text = input.target.value.toLowerCase()
	console.log(text)

	drinksList.forEach(drink => {
		if (drink.textContent.toLowerCase().indexOf(text) !== -1) {
			drink.style.display = 'block'
		} else {
			drink.style.display = 'none'
		}
	})
}

searchField.addEventListener('keyup', searchEngine)
