
//multiple obstacles 
function Obstacles(game, img, w, h){
this.game = game;
this.w = w;
this.h = h;
this.img = img;
this.dx = 7;

this.x = 950;
this.randomY();

}

Obstacles.prototype.draw = function () {
  this.game.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
 

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

