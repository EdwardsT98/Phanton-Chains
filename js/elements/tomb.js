var tomb = {
  width: 30,
  height: 50,
  list: {},
  create: function(id, x, y) {
    tomb.list[id] = {
      class: 'tomb',
      id: id,
      x: x,
      y: y,
      width: 30,
      height: 50,
      lives: 3,
      image: new Image(),
      randomNumber: Math.floor(Math.random() * 5) + 1,
      init: function() {
        this.image.src = 'img/fruit.png';
      },
      update: function() {
      },
      recieveAttack: function() {
        this.lives--;
        if (this.lives <= 0) {
          this.lives = 0;
          this.die();
        }
      },
      /*handAppears: function() {
        if ((Math.abs((player.x+player.width/2)-(this.x+this.width/2)) <= 10)
        && (Math.abs((player.y+player.height/2)-(this.y+this.height/2)) <= 10))
        {
          //CREAR MANO
        }
      },*/
      die: function() {
        if (this.randomNumber === 1) {
          heart.create('randomHeart', (this.x + this.width/2) - heart.width/2, (this.y + this.height/2) - heart.height/2);
          game.elements.push(heart.list['randomHeart']);
        }
        var index = game.elements.indexOf(this);
        var id = this.id;
        game.elements.splice(index, 1);
        delete tomb.list[id];
      },
      render: function() {
        game.context.drawImage(this.image, this.x, this.y, this.width, this.height);
      }
    };
  }
};
