// when clicked do
$('#factButton').on('click', function () {
  //generate random number based on the number of variables in booFacts (0 to 4)
  var number = Math.floor(Math.random() * booFacts.length)
  // display fact from the Array that is in the random position we just generated.
  $('#factText').text(booFacts[number])
})

var booFacts = [
  'Boo is a pomeranian',
  "Boo's best friend is another pomeranian named Buddy",
  'Boo the Pomeranian was born on March 16, making him a Pisces',
  "Boo's favourite food is grass",
  'Boo has released two books',
]

$('#textPink').on('click', function () {
  $('#funText').css('color', 'pink')
})

$('#textOrange').on('click', function () {
  $('#funText').css('color', 'orange')
})
$('#textGreen').on('click', function () {
  $('#funText').css('color', 'green')
})

$('#boxGrow').on('click', function () {
  $('#box').animate({ height: '+=35px', width: '+=35px' }, 'fast')
})

$('#boxShrink').on('click', function () {
  $('#box').animate({ height: '-=35px', width: '-=35px' }, 'fast')
})
// var booFacts had only one long string instead of 4 seperate variable
// function pink wrote pink instead of 'pink'
// click forgot ''
