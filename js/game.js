var game = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  backgroundColor: '#333',
  context: null,
  elements: [],
  state: null,
  lastStateChange: 30,
  start: function(canvas) {
    this.state = gameStatesEnum.playing;
    this.x = canvas.x;
    this.y = canvas.y;
    this.width = canvas.width;
    this.height = canvas.height;
    this.context = canvas.context;
    this.elements.push(floor);
    wall.create('left', -980, 0, 1000, this.height);
    wall.create('right', this.width-20, 0, 1000, this.height);
    for (var key in wall.list) {
      if (wall.list.hasOwnProperty(key)) {
        this.elements.push(wall.list[key]);
      }
    }
    heart.create('h1', this.width*0.4, this.height*0.8);
    heart.create('h2', this.width*0.7, this.height*0.8);
    for (var key in heart.list) {
      if (heart.list.hasOwnProperty(key)) {
        this.elements.push(heart.list[key]);
      }
    }
    this.elements.push(player);
    this.elements.push(enemy);
    for (var i = 0; i < this.elements.length; i++) {
      this.elements[i].init();
    }
    setInterval(this.update.bind(this), 1000/60);
  },
  update: function() {
    ++this.lastStateChange;
    if(this.state === gameStatesEnum.playing) {
      //hago update de todos los objetos del juego
      for (var i = 0; i < this.elements.length; i++) {
        this.elements[i].update();
      }
    }
    if(keyboard.p && this.lastStateChange > 30) {
      this.pause();
    }
    //llamo al render global
    this.render();
  },
  render: function() {
    this.context.fillStyle = 'rgb(50, 50, 50)';
    this.context.fillRect(this.x, this.y, this.width, this.height);
    for (var i = 0; i < this.elements.length; i++) {
        this.elements[i].render();
      }
  }
}

var gameStatesEnum = {
  playing: 'playing',
  pause: 'pause',
  win: 'w',
  over: 'o'
};
