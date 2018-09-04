
//multiple obstacles 
function Obstacles(game){
this.game = game;
this.w = 60;
this.h = 75;

this.img =  new Image();
this.img.src = "img/brocoli.png";

this.dx = 7;

this.x = 950;
this.randomY();
}

Obstacles.prototype.draw = function () {
  this.game.ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
}

Obstacles.prototype.move = function () {
  this.x -= this.dx;
}

Obstacles.prototype.randomY = function () {
  this.y = Math.round(Math.random()) 
  if (this.y == 0){
    this.y = 370
  }else if( this.y == 1){
    this.y= 250;
  }
}

