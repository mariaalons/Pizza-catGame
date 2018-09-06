function Player(game) {
  this.game = game;
  this.x = this.game.canvas.width * 0.1;

  this.yInitial = 340;
  this.y = this.yInitial;

  this.img = new Image();
  this.img.src = "img/sprit.png";

  this.img.frames = 3;
  this.img.frameIndex = 0;

  this.sy = 200

  this.w = 140;
  this.h = 125;

  this.ySpeed = 1;

  this.jumpKey();
}
//cat
Player.prototype.draw = function () {
  this.game.ctx.drawImage(
    this.img,
    Math.floor(this.img.width / this.img.frames) * this.img.frameIndex,
    this.sy,
    190,
    170,
    this.x,
    this.y,
    this.h,
    this.w,
  );
  this.animateImg();
}

Player.prototype.catPizza = function () {
  this.img.frame = 1;
  this.img.frameIndex = 2;
  this.sy = 400;
}

Player.prototype.catAvocado = function () {
  this.img.frame = 1;
  this.img.frameIndex = 0;
  this.sy = 370;
}

//cat walking
Player.prototype.animateImg = function () {
  if (this.game.framesCounter % 10 === 0 && this.sy != 370) {
    this.img.frameIndex += 1;
    if (this.img.frameIndex > 2) this.img.frameIndex = 0;
  }
};

Player.prototype.jumpKey = function () {
  this.counter = 0
  document.onkeydown = function (event) {
    this.sound = jumpkey.play();
    this.counter++
    if (event.keyCode == UP && (this.y == this.yInitial || this.counter <= 2)) {
      this.y -= 80;
      this.ySpeed -= 10;
    }
  }.bind(this);
}

Player.prototype.move = function () {
  if (this.y == this.yInitial)
    this.counter = 0;
  
  var gravity = 0.5;
  if (this.y >= this.yInitial) {
    this.ySpeed = 1;
    this.y = this.yInitial;
  } else {
    this.ySpeed += gravity;
    this.y += this.ySpeed;
  }
}
var UP = 38;