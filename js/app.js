// Enemies our player must avoid
var COLUMN = 101;
var ROW = 86;
var MAX_SPEED = 500;
var MIN_SPEED = 60;

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
  this.y = randomIntFromInterval(0,2)*ROW + (ROW/2);
  this.speed = randomIntFromInterval(MIN_SPEED, MAX_SPEED);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
  this.x = 2*COLUMN;
  this.y = 4*ROW + (ROW/2);
  this.sprite = 'images/char-boy.png';

  this.score = 0;
};

Player.prototype.update = function() {
  if (this.onWater()) { this.resetPlayer(); }
};
Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  ctx.font = "36px serif";
  ctx.fillText("Score:   " + this.score, 5, 600-ROW);
};
Player.prototype.resetPlayer = function() {
  this.x = 2*COLUMN;
  this.y = 4*ROW + (ROW/2);
}
Player.prototype.onWater = function(x,y) { return y <= 0; }
Player.prototype.isOnBoard = function(nx,ny) {
  return (nx >= 0 && nx <= COLUMN*4 && ny >= 0 && ny <= ROW*5);
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
      ny = this.y - ROW;
      break;
    case 'down':
      nx = this.x;
      ny = this.y + ROW;
      break;
    case 'left':
      nx = this.x - COLUMN;
      ny = this.y;
      break;
    case 'right':
      nx = this.x + COLUMN;
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


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

var generateEnemies = function(enemyCount) {
  var enemies = [];
  var enemy, speed, loc;
  for (var i=0; i < enemyCount; i++) {
    speed = randomIntFromInterval(MIN_SPEED, MAX_SPEED);
    loc = randomIntFromInterval(0,2)*ROW + (ROW/2);
    enemy = new Enemy(loc, speed);
    enemies.push(enemy);
  }
  return enemies;
}

var allEnemies = generateEnemies(3);
var player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
