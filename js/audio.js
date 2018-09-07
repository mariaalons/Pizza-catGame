
var audioEffects = {
  soundTrack: "tracksound.mp3",
  jumpkey: "jump.mp3",
  angryCat: "catBrocoli.mp3",
  avocadoPower: "special.mp3",
  pizzaEat: "pizzaeat.mp3",
  youWin: "youwin.mp3"
}

var loadedAudios = {}
var totalLoaded = 0;
var totalAudios = Object.keys(audioEffects).length;

Object.keys(audioEffects).forEach(function (e) {
  var audio = new Audio('audio/' + audioEffects[e]);
  audio.oncanplay = function () {
    totalLoaded++;
    if (totalLoaded == totalAudios) {
      console.log("All audios loaded");
    }
  };
  loadedAudios[e] = audio;
})