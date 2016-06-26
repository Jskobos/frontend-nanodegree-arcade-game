describe("Enemy", function() {
  var enemy, default_x,
      default_speed = 100,
      default_y     = 100;

  beforeEach(function() {
    enemy = new Enemy(default_y,default_speed);
    default_x = enemy.x;
  });

  it("should instantiate an enemy", function() {
    expect(enemy).toBeDefined();
    expect(enemy.speed).toBe(default_speed);
  });

  it("should move appropriately", function() {
    var x = enemy.x
    enemy.update(1);
    expect(enemy.x).not.toBe(x);
  });

  it("should reset correctly", function() {
    for(var i = 0; i < 5; i++) {
      enemy.update(1);
    }
    expect(enemy.x).not.toBe(default_x);
    enemy.resetEnemy();
    expect(enemy.x).toBe(default_x);
  });

  it("should reset automatically when it moves off screen", function() {
    enemy.x = 500;
    enemy.update(100);
    expect(enemy.x).toBe(default_x);
  });
});
