//  This code puts the text "codefamo.us" in the
//  center of the display, colors it orange and then
//  rotates it around the Z axis, then adds a blue
//  "codefamo.us" that rotates around the Y axis.
//  To make them display more clearly, a black background 
//  surface is added and, using a StateModifier, is
//  translated behind the other two surfaces. (If the
//  translation isn't done, the blue text flickers.)
//
//  This example spun off of the rotating famo.us logo
//  in the default famous-generator project.
/* globals define */
define(function(require, exports, module) {
    'use strict';
    // import dependencies
    var Engine = require('famous/core/Engine');
    var Modifier = require('famous/core/Modifier');
    var Transform = require('famous/core/Transform');
    var Surface = require('famous/core/Surface');
    var StateModifier = require('famous/modifiers/StateModifier');

    // create the main context
    var mainContext = Engine.createContext();

    // our app here
    var logo = new Surface({
        size: [true, true],
        content: 'codefamo.us',
        classes: ['backfaceVisibility'],
        properties: {
            zIndex:1,
            fontFamily: "Arial, Helvetica, sans-serif",
            fontWeight:"bold",
            fontSize:"36pt",
            color:"#ff9f00"
        }
    });
   var logo2 = new Surface({
        size: [true, true],
        content: 'codefamo.us',
        classes: ['backfaceVisibility'],
       properties: {
          zIndex:1,
            fontFamily: "Arial, Helvetica, sans-serif",
           fontSize:"36pt",
            fontWeight:"bold",
            color:"#318ce7"
        }
    });

   var background = new Surface({
        size: [undefined, undefined],
        properties: {
            zIndex:-1,
           backgroundColor:"black"
        }
   });
    var initialTime = Date.now();
    var centerSpinModifier = new Modifier({
        origin: [0.5, 0.5],
        opacity: 0.8,
        transform : function() {
            return Transform.rotateZ(.0016 * (Date.now() - initialTime));
        }
    });
    var centerSpinModifier2 = new Modifier({
        origin: [0.5, 0.5],
        opacity: 0.8,
        transform : function() {
            return Transform.rotateY(.0016 * (Date.now() - initialTime));
        }
    });

    var backgroundModifier = new StateModifier({
        transform: Transform.translate(0,0,-100)
    })

    mainContext.add(backgroundModifier).add(background);
    mainContext.add(centerSpinModifier).add(logo);
    mainContext.add(centerSpinModifier2).add(logo2);
});
