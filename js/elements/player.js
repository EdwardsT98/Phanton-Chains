var player = {
  x: 100,
  y: 0,
  width: 31,
  height: 36,
  image: new Image(),
  speed: 3,
  jumpForce: null,
  maxJumpForce: 7,
  lives: 1,
  direction: null,
  lastStateChange: 0,
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
          //game overs when the skeleton hits the player from left or right
          if(game.elements[i] === skeleton) {
            this.takeDamage();
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
      if(this.direction !== 'left') {
        this.direction = 'left';
      }
    } else if(keyboard.right) {
      this.x += this.speed;
      if(this.direction !== 'right') {
        this.direction = 'right';
      }
    }
    //jump
    if(typeof this.jumpForce === 'number') {
      this.y -= this.jumpForce;
      if(this.jumpForce >= -this.maxJumpForce) {
        this.jumpForce -= 0.2;
      }
    }
  },
  takeDamage: function() {
    player.lives--;
    if (player.lives <= 0) {
      game.over();
    }
  },
  attack: function() {
    if(keyboard.attack && this.lastStateChange > 30) {
      if((this.direction === 'left'
      && (this.x - (skeleton.x + skeleton.width)) <= 300
      && this.x > (skeleton.x + skeleton.width))
      ||
      (this.direction === 'right'
      && (skeleton.x - (this.x + this.width)) <= 300
      && (this.x + this.width) < skeleton.x)) {
        skeleton.recieveAttack();
      }
    this.lastStateChange = 0;
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
    this.direction = null
  },
  update: function() {
    this.lastStateChange++;
    this.fixNumbers();
    this.checkJump();
    this.move();
    this.checkCollision();
    this.attack();
  },
  render: function() {

    game.context.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
};
