var tx = Math.random()*500
var ty = Math.random()*300
var treasure = document.getElementById("treasure")
treasure.style.left = tx+"px"
treasure.style.top = ty+"px"
treasure.style.display="none"

var score = 0
document.addEventListener('click', showHint)
function showHint(event){
  score++
  document.getElementById("score").innerHTML = "Tries: "+score
  var cx = event.offsetX
  var cy = event.offsetY  
  var d = distance(tx, ty, cx, cy)
  var hint = document.getElementById("hint")
  if (d>200)
    hint.innerHTML="Freezing"
  else if (d>100)
    hint.innerHTML="Really Cold"
  else if (d>80)
    hint.innerHTML="Cold"
  else if (d>60)
    hint.innerHTML="Warm"
  else if (d>40)
    hint.innerHTML="Hot"
  else if (d>20)
    hint.innerHTML="Really Hot"
  else {
    hint.innerHTML="Congrats. You find it!!!"
    treasure.style.display="block"
  }
}

function distance (x1, y1, x2, y2){
  return Math.sqrt( (x1-x2)* (x1-x2) + (y1-y2)*(y1-y2) )
  
}

document.write(distance(0,0, 5, 12))
