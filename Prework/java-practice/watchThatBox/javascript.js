function grow() {
  const box = document.getElementById('box').style
  box.height = '250px'
  box.width = '250px'
}
function blueColor() {
  const box = document.getElementById('box')
  box.style.backgroundColor = 'blue'
}
function fade() {
  const box = document.getElementById('box')
  box.style.opacity = '0.5'
}
function reset() {
  const box = document.getElementById('box')
  box.style.opacity = '1'
  box.style.backgroundColor = 'orange'
  box.style.height = '150px'
  box.style.width = '150px'
}
