var floor = {
  x: 0,
  y: 0,
  width: 0,
  height: 23,
  image: new Image(),
  init: function() {
    this.image.src = 'img/block.png';
    this.y = game.height - this.height;
    this.width = game.width;
  },
  update: function() { },
  render: function() {
        var pattern = game.context.createPattern(this.image, 'repeat');
        game.context.fillStyle = pattern;
        game.context.fillRect(this.x, this.y, this.width, this.height);
  }
};
