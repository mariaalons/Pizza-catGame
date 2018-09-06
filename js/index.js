//event listener start click 

window.onload = function () {
  var game = new Game("canvastv");
  document.getElementById("start-game").onclick = function () {
    disableBtn();
    game.start();
    
  }
}

function disableBtn() {
  document.getElementById("start-game").disabled = true;
}