
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
    
    if (this.framesCounter % 50 == 0) {
      this.createObstacles(brocoli,50,60);
    } else if (this.framesCounter % 135 == 0) {
      this.createObstacles(pizza,80,50);
    }
    

    this.drawGame();
    this.moveGame();
    this.clearObstacles();
    this.obsCollition();



  }.bind(this), 1000 / this.fps);
};

Game.prototype.reset = function () {
  this.background = new Background(this);
  this.player = new Player(this);
  this.framesCounter = 0;
  this.obstacles = [];
}

Game.prototype.clearObstacles = function () {
  this.obstacles = this.obstacles.filter(function (obstacle) {
    return obstacle.x >= 0;
  });
};

Game.prototype.createObstacles = function (img,w,h) {
  //push a this.Obstacles=[]
  this.obstacles.push(new Obstacles(this,img,w,h));
}

Game.prototype.obsCollition = function () {
  this.obstacles = this.obstacles.filter(function (obj) {
    return (!(this.player.x + this.player.w >= obj.x && 
      obj.x + obj.w >= this.player.x && 
      this.player.y + this.player.h >= obj.y && 
      obj.y + obj.h >= this.player.y))
  }.bind(this))

}


//function clear canavas

Game.prototype.clear = function () {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
}

// function draw (movimiento)

Game.prototype.drawGame = function () {
  this.background.draw();
  this.player.draw();
  this.obstacles.forEach(function (obstacle) { obstacle.draw() ; });

}

Game.prototype.moveGame = function () {
  this.background.move();
  this.player.move();
  this.obstacles.forEach(function (obstacle) { obstacle.moveBrocoli(); });
  
}




