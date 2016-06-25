var generateEnemies = function(enemyCount) {
  var enemies = [];
  var enemy, speed, loc;
  for (var i=0; i < enemyCount; i++) {
    speed = Config.randomIntFromInterval(config.MIN_SPEED, config.MAX_SPEED);
    loc = Config.randomIntFromInterval(0,2)*config.ROW + (config.ROW/2);
    enemy = new Enemy(loc, speed);
    enemies.push(enemy);
  }
  return enemies;
}
var difficulty = 'hard';
var config = Config.difficulty_profiles[difficulty];
var allEnemies = generateEnemies(config.NUM_ENEMIES);
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
