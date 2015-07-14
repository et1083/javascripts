//Add the code you're trying to change the font with below
var Engine = require('famous/core/Engine');
var Surface = require('famous/core/Surface');

var mainContext = Engine.createContext();

var firstSurface = new Surface({
  size: [100, 100],
  contect: 'font',
  properties: {
    fontSize: "40pt",
    backgroundColor: '#FA5C4F'
  }
});

mainContext.add(firstSurface);
