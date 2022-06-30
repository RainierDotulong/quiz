var highScoresList = document.querySelector('#highScoresList')
var scores = JSON.parse(localStorage.getItem('score'))

var list = JSON.stringify(highScores)
console.log(list)
highScoresList.innerHTML = `<li>${highScores['name']} --- ${highScores['score']}</li>`
