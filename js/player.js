function Player(game) {
  this.game = game;
  this.x = this.game.canvas.width * 0.1;

  this.y0 = this.game.canvas.height * 0.6;
  this.y = this.y0;

  this.img = new Image();
  this.img.src = "img/sprit.png";

  this.img.frames = 3;
  this.img.frameIndex = 0;

  this.w = 150;
  this.h = 135;

}

Player.prototype.draw = function () {
  this.game.ctx.drawImage(
    this.img,
    Math.floor(this.img.width / this.img.frames) * this.img.frameIndex,
    200,
    190,
    170,
    this.x,
    340,
    this.h,
    this.w,
  );
  this.animateImg();
}

Player.prototype.jumpKey = function () {
  
}

Player.prototype.animateImg = function () {
  if (this.game.framesCounter % 10 === 0) {
    this.img.frameIndex += 1;
    if (this.img.frameIndex > 2) this.img.frameIndex = 0;
  }
};

