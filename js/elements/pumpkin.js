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
      init: function() {
        this.image.src = 'img/fruit.png';
      },
      update: function() {
        this.explode();
      },
      explode: function() {
        if ((((this.x - (player.x + player.width)) <= 50
        && this.x > (player.x + player.width))
        ||
        (player.x - (this.x + this.width)) <= 50
        && ((this.x + this.width) < player.x))
        && !this.dying
        && Math.abs((player.y+player.height/2)-(this.y+this.height/2)) <= 50)
         {
           this.dying = true;
          setTimeout(this.die.bind(this), 2000);
        }
        /* CORREGIR PORQUE NO FUNCA, NIERI
        if (((this.x - (player.x + player.width)) <= 50
        && this.x > (player.x + player.width))
        ||
        (player.x - (this.x + this.width)) <= 50
        && ((this.x + this.width) < player.x)) {
            setTimeout(player.takeDamage, 2000);
        } CORREGIR PORQUE NO FUNCA, NIERI*/
      },
      die: function() {
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
