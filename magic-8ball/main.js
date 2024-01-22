const magicBall = document.querySelector('.ball-img img')
const questionInput = document.querySelector('.question-area input')
const answer = document.querySelector('.answer')
const error = document.querySelector('.error')

const answersArr = [
	'Możliwe, że tak',
	'Niestety, nie wiem',
	'Bez wątpienia',
	'Na pewno nie',
	'To zależy od wielu czynników',
	'Nie jestem pewien',
	'Nie chcę odpowiadać na to pytanie',
	'To zależy od Ciebie',
	'Bardzo możliwe',
	'Odpowiedź na to pytanie jest skomplikowana',
	'Myślę, że tak',
	'Nie',
	'Może lepiej zapytać kogoś innego',
	'Na razie nie mam na to odpowiedzi',
	'Możliwe, że tak, ale potrzebuję więcej informacji, aby udzielić precyzyjnej odpowiedzi',
]
const moveBall = () => {
	magicBall.classList.add('shake-animaton')
	setTimeout(check, 1000)
}

const check = () => {
	if (questionInput.value !== '' && questionInput.value.slice(-1) === '?') {
		giveAnswer()
		error.textContent = ''
	} else if (questionInput.value !== '' && questionInput.value.slice(-1) !== '?') {
		error.textContent = 'Pytanie musi być zakończone znakiem "?".'
		answer.textContent = ''
	} else {
		error.textContent = 'Musisz zadać jakieś pytanie!'
		answer.textContent = ''
	}

	magicBall.classList.remove('shake-animaton')
}

const giveAnswer = () => {
	const randomAnswerIndex = Math.floor(Math.random() * answersArr.length) + 1
	answer.innerHTML = `<span>Odpowiez:</span> ${answersArr[randomAnswerIndex]}`
}

magicBall.addEventListener('click', moveBall)
