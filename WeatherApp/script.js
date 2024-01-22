const input = document.querySelector('input')
const button = document.querySelector('button')
const cityName = document.querySelector('.city-name')
const warning = document.querySelector('.warning')
const photo = document.querySelector('.photo')
const weather = document.querySelector('.weather')
const temperature = document.querySelector('.temperature')
const humidity = document.querySelector('.humidity')

const API_LINK = 'https://api.openweathermap.org/data/2.5/weather?q='

const API_KEY = '&appid=5d627d593ed141333257bd1a8e70a59c' //// NOTE: The following OpenWeatherMap API key is inactive.
// Please replace it with a valid and active API key before running the code.

const API_UNITS = '&units=metric'

const getWeather = () => {
	const city = input.value || 'London'
	const URL = API_LINK + city + API_KEY + API_UNITS

	axios
		.get(URL)
		.then(res => {
			console.log(res.data)
			const temp = res.data.main.temp
			const hum = res.data.main.humidity
			const status = Object.assign({}, ...res.data.weather)

			weather.textContent = status.main
			cityName.textContent = res.data.name
			temperature.textContent = Math.floor(temp) + 'C'
			humidity.textContent = Math.floor(hum) + '%'

			warning.textContent = ''
			input.value = ''

			const id = status.id
			if (id >= 300 && id <= 321) {
				photo.setAttribute('src', './img/thunderstorm.png')
			} else if (id >= 200 && id <= 232) {
				photo.setAttribute('src', './img/drizzle.png')
			} else if (id >= 500 && id <= 531) {
				photo.setAttribute('src', './img/rain.png')
			} else if (id >= 600 && id <= 622) {
				photo.setAttribute('src', './img/ice.png')
			} else if (id >= 701 && id <= 781) {
				photo.setAttribute('src', './img/fog.png')
			} else if (id === 800) {
				photo.setAttribute('src', './img/sun.png')
			} else if (id >= 801 && id <= 804) {
				photo.setAttribute('src', './img/cloud.png')
			} else {
				photo.setAttribute('src', './img/unknown.png')
			}
		})
		.catch(() => (warning.textContent = 'wpisz poprawna nazwe miasta'))
}

const enterCheck = e => {
	if (e.key === 'Enter') {
		getWeather()
	}
}

button.addEventListener('click', getWeather)
input.addEventListener('keyup', enterCheck)
