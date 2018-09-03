function Player(game) {
  this.game = game;
  this.x = this.game.canvas.width * 0.1;

  this.yInitial = 340;
  this.y = this.yInitial;

  this.img = new Image();
  this.img.src = "img/sprit.png";

  this.img.frames = 3;
  this.img.frameIndex = 0;

  this.w = 150;
  this.h = 135;

  this.ySpeed = 1;

  this.jumpKey();
}
//cat
Player.prototype.draw = function () {
  this.game.ctx.drawImage(
    this.img,
    Math.floor(this.img.width / this.img.frames) * this.img.frameIndex,
    200,
    190,
    170,
    this.x,
    this.y,
    this.h,
    this.w,
  );
  this.animateImg();
}

//cat walking
Player.prototype.animateImg = function () {
  if (this.game.framesCounter % 10 === 0) {
    this.img.frameIndex += 1;
    if (this.img.frameIndex > 2) this.img.frameIndex = 0;
  }
};

//jumping cat 
Player.prototype.jumpKey = function () {
  document.onkeydown = function (event) {
    if (event.keyCode == UP && this.y == this.yInitial) {

      this.y -= 40;
      this.ySpeed -=10;
      
    }

  }.bind(this);
}

Player.prototype.move = function () {
   var gravity = 0.4;
   if (this.y >= this.yInitial) {
    this.ySpeed = 1;
    this.y = this.yInitial;
  } else {
    this.ySpeed += gravity;
    this.y += this.ySpeed;
  }
}
var UP = 38;