var heart = {
  width: 20,
  height: 20,
  image: new Image(),
  list: {},
  create: function(id, x, y) {
    heart.list[id] = {
      class: 'heart',
      id: id,
      x: x,
      y: y,
      width: 20,
      height: 20,
      init: function() {
        heart.image.src = 'img/fruit.png';
      },
      update: function() { },
      die: function() {
        var index = game.elements.indexOf(this);
        var id = this.id;
        game.elements.splice(index, 1);
        delete heart.list[id];
      },
      render: function() {
        game.context.drawImage(heart.image, this.x, this.y, heart.width, heart.height);
      }
    };
  }
};
