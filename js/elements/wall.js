var wall = {
  list: {},
  create: function(id, x, y, width, height) {
    wall.list[id] = {
      id: id,
      x: x,
      y: y,
      width: width,
      height: height,
      init: function() { },
      update: function() { },
      render: function() { }
    };
  }
};
