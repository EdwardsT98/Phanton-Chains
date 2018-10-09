var keyboard = {
  up: false,
  left: false,
  right: false,
  p: false,
  enter: false,
  attack: false,
  press: function(evt) {
    var key = keyboardEnum[evt.code];
    if(key) {
      keyboard[key] = true;
    }
  },
  release: function(evt) {
    var key = keyboardEnum[evt.code];
    if(key) {
      keyboard[key] = false;
    }
  }
};

var keyboardEnum = {
  KeyW: 'up',
  KeyA: 'left',
  KeyD: 'right',
  KeyP: 'p',
  Enter: 'enter',
  KeyH: 'attack'
};
