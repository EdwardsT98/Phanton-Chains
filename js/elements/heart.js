var heart = {
  list: {},
  create: function(id, x, y) {
    heart.list[id] = {
      class: 'heart',
      id: id,
      x: x,
      y: y,
      width: 20,
      height: 20,
      image: new Image(),
      init: function() {
        this.image.src = 'img/fruit.png';
      },
      update: function() { },
      die: function() {
        var index = game.elements.indexOf(this);
        var id = this.id;
        game.elements.splice(index, 1);
        delete heart.list[id];
      },
      render: function() {
        game.context.drawImage(this.image, this.x, this.y, this.width, this.height);
      }
    };
  }
};
