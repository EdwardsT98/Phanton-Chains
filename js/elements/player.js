var player = {
  x: 100,
  y: 0,
  width: 31,
  height: 39,
  image: new Image(),
  speed: 3,
  jumpForce: null,
  maxJumpForce: 7,
  lives: 1,
  checkCollision: function() {
    var i, collisionSide, hasCollisionBottom = false;
    for (i = 0; i < game.elements.length; i++) {
      collisionSide = collision.boxesSide(player, game.elements[i]);
      if (game.elements[i].class === 'heart') {
        if(collisionSide) {
          game.elements[i].die();
          this.lives++;
        }
      }
      else {
        if(collisionSide) {
          //game overs when the enemy hits the player from left or right
          if(game.elements[i] === enemy) {
            this.lives--;
            if (this.lives <= 0) {
              game.over();
            }
          }
          if(collisionSide === 'left' && keyboard.left) {
            //revert left action
            this.x += this.speed;
          } else if(collisionSide === 'right' && keyboard.right) {
            //revert right action
            this.x -= this.speed;
          } else if(collisionSide === 'top') {
            //start fall down if needed
            if(this.jumpForce >= 0) {
              this.jumpForce = -0.2;
            }
          } else if(collisionSide === 'bottom') {
            //stop jump
            this.jumpForce = null;
            //fix this.y
            this.y = game.elements[i].y - this.height;
            hasCollisionBottom = true;
          }
        }
      }
    }
    //if no collision bottom, restart falldown
    if(!hasCollisionBottom && this.jumpForce === null) {
      this.jumpForce = -0.2;
    }
  },
  move: function() {
    //move left and right
    if(keyboard.left) {
      this.x -= this.speed;
    } else if(keyboard.right) {
      this.x += this.speed;
    }
    //jump
    if(typeof this.jumpForce === 'number') {
      this.y -= this.jumpForce;
      if(this.jumpForce >= -this.maxJumpForce) {
        this.jumpForce -= 0.2;
      }
    }
  },
  checkJump: function() {
    if(keyboard.up && this.jumpForce === null) {
      this.jumpForce = this.maxJumpForce;
    }
  },
  fixNumbers: function() {
    if(typeof this.x === 'number') this.x = Math.round(this.x * 100) / 100;
    if(typeof this.y === 'number') this.y = Math.round(this.y * 100) / 100;
    if(typeof this.jumpForce === 'number') this.jumpForce = Math.round(this.jumpForce * 100) / 100;
  },
  init: function() {
    this.y = floor.y - this.height;
    this.image.src = 'img/sonic.png';
  },
  restart: function() {
    this.x = 100
    this.y = 0
    this.width = 31
    this.height = 39
    this.image = new Image()
    this.speed = 3
    this.jumpForce = null
    this.maxJumpForce = 7
    this.lives = 1
  },
  update: function() {
    this.fixNumbers();
    this.checkJump();
    this.move();
    this.checkCollision();
  },
  render: function() {

    game.context.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
};
