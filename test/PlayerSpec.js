describe("Player", function() {
  var player1, starting_x, starting_y;

  beforeEach(function() {
    player1 = new Player();
    starting_x = player1.x;
    starting_y = player1.y
  });

  it("should create a new player", function() {
    expect(player1).toBeDefined();
    expect(player1.score).toBe(0);
    expect(player1.x).toBe(starting_x);
    expect(player1.y).toBe(starting_y);
  });

  it("should move if the move is legal", function() {
    player1.handleInput('up');
    expect(player1.y).not.toBe(starting_y);
    player1.handleInput('right');
    expect(player1.x).not.toBe(starting_x);
  });

  it("shouldn't move if the move is illegal", function() {
    // assuming that player starts in the bottom row
    player1.handleInput('down');
    expect(player1.y).toBe(starting_y);
    expect(player1.x).toBe(starting_x)
  });

  it("should identify when the player is on the water", function() {
    expect(player1.onWater(100,0)).toBe(true);
  });

  it("should reset correctly", function() {
    player1.handleInput('left');
    player1.resetPlayer();
    expect(player1.x).toBe(starting_x);
  });

  it("should check onWater() when updating", function() {
    player1.x += 1;
    player1.y = 0;
    player1.update();
    expect(player1.x).toBe(starting_x);
  });

  it("should increase score for victory", function() {
    player1.score = 0;
    player1.x += 100;
    player1.victory();
    expect(player1.score).toBeGreaterThan(0);
    expect(player1.x).toBe(starting_x);
  });

  it("should recognize victory when moving onto water", function() {
    var score = player1.score;
    for(var i = 0; i<5; i++) {
      player1.handleInput('up');
    }
    expect(player1.score).toBeGreaterThan(score); 
  });
});
