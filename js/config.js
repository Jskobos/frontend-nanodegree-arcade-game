(function() {
  var make_profile = function(enemies, min_speed, max_speed) {
    this.COLUMN      = 101;
    this.ROW         = 86;
    this.NUM_ENEMIES = enemies;
    this.MAX_SPEED   = max_speed;
    this.MIN_SPEED   = min_speed;
  }

  var easy      = new make_profile(3,60,400);
  var medium    = new make_profile(4,60,600);
  var hard      = new make_profile(5,100,700);
  var ludicrous = new make_profile(30,150,900);

  var difficulty_profiles = {eash: easy,medium: medium,hard: hard,ludicrous: ludicrous};

  function randomIntFromInterval(min,max)
  {
      return Math.floor(Math.random()*(max-min+1)+min);
  }

  window.Config = {
    difficulty_profiles: difficulty_profiles,
    randomIntFromInterval: randomIntFromInterval
  };
})();
