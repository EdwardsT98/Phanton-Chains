var floor = {
  id: id,
  x: x,
  y: y,
  width: width,
  height: height,
  image: new Image(),
  init: function() {
    this.image.src = 'img/block.png';
  },
  update: function() { },
  render: function() { ;
        var pattern = game.context.createPattern(image, 'repeat');
        game.context.fillStyle = pattern;
        game.context.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
};
