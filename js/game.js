var game = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  backgroundColor: '#333',
  context: null,
  elements: [],
  start: function(canvas) {
    this.x = canvas.x;
    this.y = canvas.y;
    this.width = canvas.width;
    this.height = canvas.height;
    this.context = canvas.context;
    wall.create('top', 0, -980, this.width, 1000);
    wall.create('bottom', 0, this.height-20, this.width, 1000);
    wall.create('left', -980, 0, 1000, this.height);
    wall.create('right', this.width-20, 0, 1000, this.height);
    for (var key in wall.list) {
      if (wall.list.hasOwnProperty(key)) {
        this.elements.push(wall.list[key]);
      }
    }
    setInterval(this.update.bind(this), 1000/60);
  },
  update: function() {
    this.render();
  },
  render: function() {
    this.context.fillStyle = 'rgba(50, 50, 50, 0.01)';
    this.context.fillRect(this.x, this.y, this.width, this.height);
    for (var i = 0; i < this.elements.length; i++) {
        this.elements[i].render();
      }
  }
}
