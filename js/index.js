window.onload = function() {

    var game = new Game("canvastv");
    document.getElementById("start-game").onclick = function() {
        $("#start-image").addClass("hidden")
        $("#canvastv").removeClass("hidden")
        disableBtn();
        game.start();

    }
}

function disableBtn() {
    document.getElementById("start-game").disabled = true;
}