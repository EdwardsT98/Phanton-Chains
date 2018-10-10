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
      init: function() {
        this.image.src = 'img/fruit.png';
      },
      update: function() { },
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
