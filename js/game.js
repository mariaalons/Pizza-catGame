
function Game(canvastv) {
  this.canvas = document.getElementById(canvastv);
  this.ctx = this.canvas.getContext("2d");
  this.fps = 60


  this.reset();
}


Game.prototype.start = function () {
  this.interval = setInterval(function () {
    this.clear();

    this.framesCounter++;
    //when 
    if (this.framesCounter % 50 == 0){
      this.createObstacles();
    }


    this.drawGame();
    this.moveGame();

  }.bind(this), 1000 / this.fps);
};

Game.prototype.reset = function () {
  this.background = new Background(this);
  this.player = new Player(this);
  this.framesCounter = 0;
  this.obstacles = [];
}

Game.prototype.createObstacles = function () {
 //push a this.Obstacles=[]
 this.obstacles.push(new Obstacles(this));
}

//function clear canavas

Game.prototype.clear = function () {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
}

// function draw (movimiento)

Game.prototype.drawGame = function () {
  this.background.draw();
  this.player.draw();
  this.obstacles.forEach(function(obstacle) { obstacle.draw(); });
  
}

Game.prototype.moveGame = function () {
  this.background.move();
  this.player.move();
  this.obstacles.forEach(function(obstacle) { obstacle.move(); });
}




