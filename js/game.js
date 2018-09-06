
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
   
    this.drawGame();
    this.sound = soundTrack.play()
    this.obsCollision();
    
      if (this.points.score < 0) {
        this.gameOver();
      } else if(this.points.score == 8){
        this.youWin();
      }
    this.moveGame();
    this.probObstacles();
    this.clearObstacles();






  }.bind(this), 1000 / this.fps);
};

Game.prototype.reset = function () {
  this.background = new Background(this);
  this.player = new Player(this);
  this.points = new Points(this);
  this.framesCounter = 0;
  this.obstacles = [];
}

Game.prototype.probObstacles = function () {
  if (this.framesCounter % 50 == 0) {
    if (this.points.score >= 4) {
      if (this.framesCounter % 2 == 0)
        this.createObstacles(brocoli, 9)
    } else {
      this.createObstacles(brocoli, 7);
    }
  } else if (this.framesCounter % 135 == 0) {
    if (this.points.score >= 4) {
      this.createObstacles(pizza, 9)
    } else {
      this.createObstacles(pizza, 7);
    }
  } else if (this.framesCounter % 1001 == 0) {
    this.createObstacles(avocado, 5);
  }
}

Game.prototype.clearObstacles = function () {
  this.obstacles = this.obstacles.filter(function (obstacle) {
    return obstacle.x >= 0;
  });
};

Game.prototype.createObstacles = function (img, dx) {
  this.obstacles.push(new Obstacles(this, img, dx));
}

Game.prototype.obsCollision = function () {
  this.obstacles = this.obstacles.filter(function (obs) {
    var collisions = (!(this.player.x + this.player.w - 30 >= obs.x &&
      obs.x + obs.w >= this.player.x + 30 &&
      this.player.y + this.player.h - 30 >= obs.y &&
      obs.y + obs.h >= this.player.y))
    if (collisions == false && obs.img.name == "brocoli" && this.player.sy == 200) {
      this.sound = angryCat.play();
      this.points.restPoints();
      this.stop()
    } else if (collisions === false && obs.img.name == "pizza") {
      this.points.sumPoints();
    } else if (collisions === false && obs.img.name == "avocado") {
      this.specialPower();

    }
    return collisions;
  }.bind(this))

}

Game.prototype.clear = function () {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
}


Game.prototype.drawGame = function () {
  this.background.draw();
  this.player.draw();
  this.obstacles.forEach(function (obstacle) { obstacle.draw(); });
  this.points.draw();

}

Game.prototype.moveGame = function () {
  this.background.move();
  this.player.move();
  this.obstacles.forEach(function (obstacle) { obstacle.move(); });
}

Game.prototype.specialPower = function () {
  this.player.catAvocado();
  this.drawGame()
  this.sound = avocadoPower.play();
  setTimeout(function () {
   this.player.sy = 200;
   }.bind(this), 5000);
}

Game.prototype.stop = function () {
  this.player.catPizza();
  this.drawGame();
  this.player.sy = 200;

  clearInterval(this.interval);
  this.timeOut = setTimeout(function () {

   this.start();

  }.bind(this), 1000);
}

Game.prototype.gameOver = function () {
  clearInterval(this.interval);
  clearTimeout(this.timeOut)
  this.sound = soundTrack.pause();
  var draw = (function (img,img3) {
    this.clear();
    this.ctx.drawImage(img3, 0, 0, 950, 600)
    this.ctx.font = "150px helvetica"
    this.ctx.fillStyle = "black"
    this.ctx.textAlign = "center";
    this.ctx.fillText("GAME OVER", 475, 250)
    this.ctx.drawImage(img, 350, 340, 200, 190)
   
  }).bind(this);
  draw(gameOver, background);
}

Game.prototype.youWin = function () {
  clearInterval(this.interval);
  clearTimeout(this.timeOut)
  this.sound = soundTrack.pause();
  var draw = (function (img, img3) {
    this.clear();
    this.ctx.drawImage(img, 350, 410, 200, 190)  
  }).bind(this);
  draw(pizza);
}











