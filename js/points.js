function Points(game) {
    this.game = game;
    this.img = new Image();
    this.img.src = "img/pizzaScore.png"
    this.score = 0
}


Points.prototype.draw = function() {
    this.game.ctx.drawImage(
        this.img,
        760,
        20,
        140,
        140,
    )

    this.game.ctx.fillText(this.score + "/8 slices", 785, 180)
    this.game.ctx.font = "23px Roboto"
}

Points.prototype.restPoints = function() {
    this.score -= 2;
}

Points.prototype.sumPoints = function() {
    if (this.score < 8) {
        this.score++
    }
}