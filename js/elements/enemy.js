var enemy = {
  x: 150,
  y: 0,
  width: 33,
  height: 36,
  image: new Image(),
  speed: 3,
  direction: 'left',
  checkCollision: function() {
    var i, collisionSide, hasCollisionBottom = false;
    for (i = 0; i < game.elements.length; i++) {
      collisionSide = collision.boxesSide(enemy, game.elements[i]);
      if(collisionSide) {
        if(collisionSide === 'left' && this.direction == 'left') {
          this.direction = 'right';
        } else if(collisionSide === 'right' && this.direction == 'right') {
          this.direction = 'left';
        }
      }
    }
  },
  move: function() {
    //move left and right
    if(this.direction == 'left') {
      this.x -= this.speed;
    } else if(this.direction == 'right') {
      this.x += this.speed;
    }
  },
  fixNumbers: function() {
    if(typeof this.x === 'number') this.x = Math.round(this.x * 100) / 100;
    if(typeof this.y === 'number') this.y = Math.round(this.y * 100) / 100;
  },
  init: function() {
    this.y = floor.y - this.height;
    this.image.src = 'img/zombie.png';
  },
  restart: function() {
    this.x = 150
    this.y = 0
    this.width = 33
    this.height = 36
    this.image = new Image()
    this.speed = 3
    this.direction = 'left'
  },
  update: function() {
    this.fixNumbers();
    this.move();
    this.checkCollision();
  },
  render: function() {
    game.context.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
};
