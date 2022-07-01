var username = document.getElementById('username')
var saveScoreBtn = document.querySelector('#saveScoreBtn')
var showScoreBtn = document.querySelector('#showScoreBtn')
var finalScore = document.querySelector('#finalScore')
var mostRecentScore = localStorage.getItem('mostRecentScore')
finalScore.innerHTML = mostRecentScore

var highScores = JSON.parse(localStorage.getItem('highScores')) || []
console.log(highScores)

localStorage.setItem('highScores', JSON.stringify([]))

saveHighScore = (e) => {
	console.log('clicked saved button')
	e.preventDefault()
	const score = {
		score: mostRecentScore,
		name: username.value,
	}
	highScores.push(score)

	localStorage.setItem('highScores', JSON.stringify(highScores))
}
