var highScoresList = document.getElementById('highScoresList')
var scores = JSON.parse(localStorage.getItem('highScores'))
console.log(scores)
highScoresList.innerHTML = scores
	.map((score) => {
		return `<li class="high-score">${score.name} - ${score.score}</li>`
	})
	.join('')
