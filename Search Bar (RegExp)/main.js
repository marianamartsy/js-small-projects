const input = document.querySelector('.search')
const drinksList = document.querySelectorAll('.drink-list li')

const searchEngine = () => {
	
	drinksList.forEach(drink => {
		const match = new RegExp(input.value, 'i').test(drink.textContent)

		if(!match) {
			drink.style.display = 'none'
		} else {
			drink.style.display = 'block'
		}
	})
}

input.addEventListener('keyup', searchEngine)
