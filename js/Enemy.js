(function() {
  var Enemy = function(y, speed) {
      this.sprite = 'images/enemy-bug.png';
      this.x = -101;
      this.y = y;
      this.speed = speed;
  };

  // Update the enemy's position, required method for game
  // Parameter: dt, a time delta between ticks
  Enemy.prototype.update = function(dt) {
      // You should multiply any movement by the dt parameter
      // which will ensure the game runs at the same speed for
      // all computers.
      this.x += this.speed * dt;
      if (this.x > 600) {
        this.resetEnemy();
      }
  };

  // Draw the enemy on the screen, required method for game
  Enemy.prototype.render = function() {
      ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  };

  Enemy.prototype.resetEnemy = function() {
    this.x = -101;
    this.y = Config.randomIntFromInterval(0,2)*config.ROW + (config.ROW/2);
    this.speed = Config.randomIntFromInterval(config.MIN_SPEED, config.MAX_SPEED);
  };

  window.Enemy = Enemy;
})();
