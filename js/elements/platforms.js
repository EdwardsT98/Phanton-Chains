var platform = {
  image: new Image(),
  list: {},
  create: function(id, x, y, width, height) {
    platform.list[id] = {
      id: id,
      x: x,
      y: y,
      width: width,
      height: height,
      init: function() {
        platform.image.src = 'img/block.png';
        console.log(this.image, this.x, this.y, this.width, this.height);
      },
      update: function() { },
      render: function() {
        var pattern = game.context.createPattern(platform.image, 'repeat');
        game.context.fillStyle = pattern;
        game.context.fillRect(this.x, this.y, this.width, this.height);
      }
    };
  }
};
