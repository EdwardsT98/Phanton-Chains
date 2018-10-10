var skeleton = {
  x: 350,
  y: 0,
  width: 31,
  height: 36,
  image: new Image(),
  speed: 3,
  direction: 'left',
  lives: 3,
  checkCollision: function() {
    var i, collisionSide, hasCollisionBottom = false;
    for (i = 0; i < game.elements.length; i++) {
      collisionSide = collision.boxesSide(skeleton, game.elements[i]);
      if(collisionSide) {
        if(collisionSide === 'left' && this.direction == 'left') {
          this.direction = 'right';
        } else if(collisionSide === 'right' && this.direction == 'right') {
          this.direction = 'left';
        }
      }
    }
  },
  die: function() {
    var index = game.elements.indexOf(this);
    game.elements.splice(index, 1);
  },
  recieveAttack: function() {
    this.lives--;
    if (this.lives === 0) {
      this.die();
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
    this.x = 350
    this.y = 0
    this.width = 33
    this.height = 36
    this.image = new Image()
    this.speed = 3
    this.direction = 'left'
    this.lives = 1
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
