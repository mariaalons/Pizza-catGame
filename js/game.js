
function Game(canvastv) {
  this.canvas = document.getElementById(canvastv);
  this.ctx = this.canvas.getContext("2d");
  this.fps = 60;

  this.reset();
}


Game.prototype.start = function () {
  this.interval = setInterval(function () {
    this.clear();

    this.framesCounter++;
    //when 
    
    if (this.framesCounter % 50 == 0) {
      this.createObstacles(brocoli,45,55);
    } else if (this.framesCounter % 135 == 0) {
      this.createObstacles(pizza,80,50);
    }
    

    this.drawGame();
    this.moveGame();
    this.clearObstacles();
    this.obsCollision();
   



  }.bind(this), 1000 / this.fps);
};

Game.prototype.reset = function () {
  this.background = new Background(this);
  this.player = new Player(this);
  this.points = new Points(this);
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

//Game.prototype.cheeckIfObstacle = function () {
 //para que no haga una pizza encima de un brócoli 
//}

Game.prototype.obsCollision = function () {
  this.obstacles = this.obstacles.filter(function (obj) {
    var collisions = (!(this.player.x + this.player.w - 30 >= obj.x && 
      obj.x + obj.w >= this.player.x + 30 && 
      this.player.y + this.player.h - 30 >= obj.y && 
      obj.y + obj.h >= this.player.y))
      if (collisions == false && obj.img.name == "brocoli"){
        this.points.restPoints();
        this.stop()
       
      } else if (collisions === false && obj.img.name == "pizza"){
       this.points.sumPoints();
      }
      return collisions;
  }.bind(this))

}


//function clear canavas

Game.prototype.clear = function () {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
}

// function draw (movimiento)

Game.prototype.drawGame = function () {
  this.background.draw();
  this.points.draw();
  this.player.draw();
  this.obstacles.forEach(function (obstacle) { obstacle.draw() ; });

}

Game.prototype.moveGame = function () {
  this.background.move();
  this.player.move();
  this.obstacles.forEach(function (obstacle) { obstacle.move(); });
  
}

Game.prototype.stop = function () {
  this.player.catPizza();
  this.drawGame()
  this.player.sy = 200;

  clearInterval(this.interval); 
  setTimeout(function(){

     this.start(); 
     
    }.bind(this), 1000);
  }










