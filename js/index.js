//event listener start click 

window.onload = function () {
  var game = new Game("canvastv");
  document.getElementById("start").onclick = function () {
    game.start();
  }
}