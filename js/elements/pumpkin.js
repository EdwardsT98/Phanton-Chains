var pumpkin = {
  list: {},
  create: function(id, x, y) {
    pumpkin.list[id] = {
      class: 'pumpkin',
      id: id,
      x: x,
      y: y,
      width: 40,
      height: 40,
      image: new Image(),
      dying: false,
      randomNumber: Math.floor(Math.random() * 5) + 1,
      init: function() {
        this.image.src = 'img/fruit.png';
      },
      update: function() {
        this.explode();
      },
      explode: function() {
        if ((Math.abs((player.x+player.width/2)-(this.x+this.width/2)) <= 70)
        && (Math.abs((player.y+player.height/2)-(this.y+this.height/2)) <= 70)
        && !this.dying)
        {
          if (this.randomNumber !== 1) {
            this.dying = true;
            setTimeout(this.damagePlayer.bind(this), 2000);
          }
          else {
            this.dying = true;
            setTimeout(this.die.bind(this), 2000);
          }
        }
      },
      damagePlayer: function() {
        this.die();
        if ((Math.abs((player.x+player.width/2)-(this.x+this.width/2)) <= 50)
        && (Math.abs((player.y+player.height/2)-(this.y+this.height/2)) <= 50))
        {
          player.takeDamage();
          this.dying = false;
        }

      },
      die: function() {
        console.log(this.randomNumber);
        if (this.randomNumber === 1) {
          heart.create('randomHeart', (this.x + this.width/2) - heart.width/2, (this.y + this.height/2) - heart.height/2);
          game.elements.push(heart.list['randomHeart']);
        }
        var index = game.elements.indexOf(this);
        var id = this.id;
        game.elements.splice(index, 1);
        delete pumpkin.list[id];
      },
      render: function() {
        game.context.drawImage(this.image, this.x, this.y, this.width, this.height);
      }
    };
  }
};
