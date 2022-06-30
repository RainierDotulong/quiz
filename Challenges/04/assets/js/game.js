var question = document.querySelector('#question')
var choices = Array.from(document.querySelectorAll('.choice-text'))
var progressText = document.querySelector('#progressText')
var scoreText = document.querySelector('#score')

let currentQuestion = {}
let correctAnswers = true
let score = 0
let timer = 0
let questionCounter = 0
let availableQuestions = []

//QUESTIONS
let questions = [
	{
		question: '2+2',
		choice1: '2',
		choice2: '3',
		choice3: '4',
		choice4: '5',
		answer: '4',
	},
	{
		question: '1+5',
		choice1: '2',
		choice2: '3',
		choice3: '6',
		choice4: '5',
		answer: '6',
	},
	{
		question: '10+2',
		choice1: '2',
		choice2: '3',
		choice3: '4',
		choice4: '12',
		answer: '12',
	},
	{
		question: '20+2',
		choice1: '2',
		choice2: '22',
		choice3: '4',
		choice4: '5',
		answer: '22',
	},
	{
		question: '3+2',
		choice1: '2',
		choice2: '3',
		choice3: '4',
		choice4: '5',
		answer: '5',
	},
]
const scorePoints = 10
const numberOfQuestions = 5

function startTimer() {
	var downloadTimer = setInterval(function () {
		if (timer <= 0) {
			clearInterval(downloadTimer)
			return window.location.assign('./end.html')
		}
		timer--
		document.getElementById('timerCountdown').innerHTML = timer
		console.log(timer)
	}, 1000)
}

function startGame() {
	questionCounter = 0
	score = 0
	timer = 50
	startTimer()
	availableQuestions = [...questions] //idk how this thing works, i googled it and it worked
	getNewQuestion()
}
function getNewQuestion() {
	document.getElementById('correctIncorrect').innerHTML = ''
	if (
		availableQuestions.length == 0 ||
		questionCounter > numberOfQuestions ||
		timer <= 0
	) {
		localStorage.setItem('mostRecentScore', score)
		//found this on stackoverflow, basically just changes directory
		return window.location.assign('./end.html')
	}
	questionCounter++
	progressText.innerHTML = `${questionCounter} of ${numberOfQuestions}`

	const questionRandom = Math.floor(Math.random() * availableQuestions.length)
	currentQuestion = availableQuestions[questionRandom]
	question.innerHTML = currentQuestion.question

	choices.forEach((choice) => {
		const number = choice.dataset['number']
		choice.innerHTML = currentQuestion['choice' + number]
	})
	console.log('answer: ' + currentQuestion['answer'])
	// for (var i = 0; i < choices.length; i++) {
	// 	var number = choices[i].dataset('number')
	// 	choices[i].innerHTML = currentQuestion['choice' + number]
	// }

	availableQuestions.splice(questionRandom, 1)

	correctAnswers = true
}
choices.forEach((choice) => {
	choice.addEventListener('click', (e) => {
		if (!correctAnswers) {
			return
		}

		correctAnswers = false
		var selectedChoice = e.target
		var selectedAnswer = selectedChoice.innerHTML

		if (currentQuestion.answer == selectedAnswer) {
			incrementScore(scorePoints)
			document.getElementById('correctIncorrect').style.color = 'green'
			document.getElementById('correctIncorrect').innerHTML = 'CORRECT'
		} else {
			document.getElementById('correctIncorrect').style.color = 'red'
			document.getElementById('correctIncorrect').innerHTML = 'INCORRECT'
			timer -= 10
		}

		setTimeout(() => {
			getNewQuestion()
		}, 1000)
	})
})
function incrementScore(num) {
	score += num
	scoreText.innerHTML = score
}
startGame()
