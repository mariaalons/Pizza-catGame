var img = {
  brocoli: {
    src: "img/brocoli.png",
    name: "brocoli",
    w: 45,
    h: 55
  },
  pizza: {
    src: "img/pizza.png",
    name: "pizza",
    w: 80,
    h: 50,
  },
  avocado: {
    src: "img/avocado.png",
    name: "avocado",
    w: 100,
    h: 80,
    avocadoY: 50,
  },
  gameOver: {
    src: "img/gameover.png",
    name: "gameOver",
    w: 100,
    h: 80,
  }
}

var loadedimg = {}
var totalLoaded = 0;
var totalimg = Object.keys(img).length;

Object.keys(img).forEach(function (e) {
  var keysImg = new Image();
  Object.keys(img[e]).forEach(function (e1) {
    keysImg[e1] = img[e][e1];
    keysImg.onload = function () {
      totalLoaded++;
      if (totalLoaded == totalimg) {
        console.log("All images loaded");
      }
    };
  })
  loadedimg[e] = keysImg;
})