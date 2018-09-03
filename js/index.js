//event listener start click 

window.onload = function () {
  var game = new Game("canvastv");
  document.getElementById("start").onclick = function () {
    disableBtn();
    game.start();
    
  }
}

function disableBtn() {
  document.getElementById("start").disabled = true;
}