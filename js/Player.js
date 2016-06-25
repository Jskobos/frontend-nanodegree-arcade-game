(function() {
  var Player = function() {
    this.x = 2*config.COLUMN;
    this.y = 4*config.ROW + (config.ROW/2);
    this.sprite = 'images/char-boy.png';

    this.score = 0;
  };

  Player.prototype.update = function() {
    if (this.onWater()) { this.resetPlayer(); }
  };
  Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    ctx.font = "36px serif";
    ctx.fillText("Score:   " + this.score, 5, 600-config.ROW);
  };
  Player.prototype.resetPlayer = function() {
    this.x = 2*config.COLUMN;
    this.y = 4*config.ROW + (config.ROW/2);
  }
  Player.prototype.onWater = function(x,y) { return y <= 0; }
  Player.prototype.isOnBoard = function(nx,ny) {
    return (nx >= 0 && nx <= config.COLUMN*4 && ny >= 0 && ny <= config.ROW*5);
  }
  Player.prototype.victory = function() {
    this.score += 100;
    this.resetPlayer();
  }
  Player.prototype.handleInput = function(key) {
    var nx, ny;
    switch(key) {
      case 'up':
        nx = this.x;
        ny = this.y - config.ROW;
        break;
      case 'down':
        nx = this.x;
        ny = this.y + config.ROW;
        break;
      case 'left':
        nx = this.x - config.COLUMN;
        ny = this.y;
        break;
      case 'right':
        nx = this.x + config.COLUMN;
        ny = this.y;
        break;
      }
      if (this.onWater(nx, ny)) {
        this.victory();
      }
      else if (this.isOnBoard(nx, ny)) {
        this.x = nx;
        this.y = ny;
      }
  };
  window.Player = Player;
})();
