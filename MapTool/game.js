// game.js for Perlenspiel 3.2.x

/*
Perlenspiel is a scheme by Professor Moriarty (bmoriarty@wpi.edu).
Perlenspiel is Copyright © 2009-17 Worcester Polytechnic Institute.
This file is part of Perlenspiel.

Perlenspiel is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published
by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Perlenspiel is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU Lesser General Public License for more details.

You may have received a copy of the GNU Lesser General Public License
along with Perlenspiel. If not, see <http://www.gnu.org/licenses/>.
*/

// The "use strict" directive in the following line is important. Don't remove it!
"use strict";

// The following comment lines are for JSLint/JSHint. Don't remove them!

/*jslint nomen: true, white: true */
/*global PS */

// This is a template for creating new Perlenspiel games

// All of the functions below MUST exist, or the engine will complain!

// PS.init( system, options )
// Initializes the game
// This function should normally begin with a call to PS.gridSize( x, y )
// where x and y are the desired initial dimensions of the grid
// [system] = an object containing engine and platform information; see documentation for details
// [options] = an object with optional parameters; see documentation for details

PS.init = function( system, options ) {
	// Use PS.gridSize( x, y ) to set the grid to
	// the initial dimensions you want (32 x 32 maximum)
	// Do this FIRST to avoid problems!
	// Otherwise you will get the default 8x8 grid

    if ( db ) {
        db = PS.dbInit( db, { login : G.finalize } );
        if ( db === PS.ERROR ) {
            db = null;
        }
    }
    else {
        G.finalize();
    }

	// Add any other initialization code you need here
};

// PS.touch ( x, y, data, options )
// Called when the mouse button is clicked on a bead, or when a bead is touched
// It doesn't have to do anything
// [x] = zero-based x-position of the bead on the grid
// [y] = zero-based y-position of the bead on the grid
// [data] = the data value associated with this bead, 0 if none has been set
// [options] = an object with optional parameters; see documentation for details

PS.touch = function( x, y, data, options ) {
	// Uncomment the following line to inspect parameters
	// PS.debug( "PS.touch() @ " + x + ", " + y + "\n" );

    G.touch(x, y, data, options);

	// Add code here for mouse clicks/touches over a bead
};

// PS.release ( x, y, data, options )
// Called when the mouse button is released over a bead, or when a touch is lifted off a bead
// It doesn't have to do anything
// [x] = zero-based x-position of the bead on the grid
// [y] = zero-based y-position of the bead on the grid
// [data] = the data value associated with this bead, 0 if none has been set
// [options] = an object with optional parameters; see documentation for details

PS.release = function( x, y, data, options ) {
	// Uncomment the following line to inspect parameters
	// PS.debug( "PS.release() @ " + x + ", " + y + "\n" );

	// Add code here for when the mouse button/touch is released over a bead
};

// PS.enter ( x, y, button, data, options )
// Called when the mouse/touch enters a bead
// It doesn't have to do anything
// [x] = zero-based x-position of the bead on the grid
// [y] = zero-based y-position of the bead on the grid
// [data] = the data value associated with this bead, 0 if none has been set
// [options] = an object with optional parameters; see documentation for details

PS.enter = function( x, y, data, options ) {
	// Uncomment the following line to inspect parameters
	// PS.debug( "PS.enter() @ " + x + ", " + y + "\n" );

	// Add code here for when the mouse cursor/touch enters a bead
};

// PS.exit ( x, y, data, options )
// Called when the mouse cursor/touch exits a bead
// It doesn't have to do anything
// [x] = zero-based x-position of the bead on the grid
// [y] = zero-based y-position of the bead on the grid
// [data] = the data value associated with this bead, 0 if none has been set
// [options] = an object with optional parameters; see documentation for details

PS.exit = function( x, y, data, options ) {
	// Uncomment the following line to inspect parameters
	// PS.debug( "PS.exit() @ " + x + ", " + y + "\n" );

	// Add code here for when the mouse cursor/touch exits a bead
};

// PS.exitGrid ( options )
// Called when the mouse cursor/touch exits the grid perimeter
// It doesn't have to do anything
// [options] = an object with optional parameters; see documentation for details

PS.exitGrid = function( options ) {
	// Uncomment the following line to verify operation
	// PS.debug( "PS.exitGrid() called\n" );

	// Add code here for when the mouse cursor/touch moves off the grid
};

// PS.keyDown ( key, shift, ctrl, options )
// Called when a key on the keyboard is pressed
// It doesn't have to do anything
// [key] = ASCII code of the pressed key, or one of the PS.KEY constants documented at:
// http://users.wpi.edu/~bmoriarty/ps/constants.html
// [shift] = true if shift key is held down, else false
// [ctrl] = true if control key is held down, else false
// [options] = an object with optional parameters; see documentation for details

PS.keyDown = function( key, shift, ctrl, options ) {
	// Uncomment the following line to inspect parameters
	//	PS.debug( "DOWN: key = " + key + ", shift = " + shift + "\n" );

	G.keyDown(key, shift, ctrl, options);

	// Add code here for when a key is pressed
};

// PS.keyUp ( key, shift, ctrl, options )
// Called when a key on the keyboard is released
// It doesn't have to do anything
// [key] = ASCII code of the pressed key, or one of the PS.KEY constants documented at:
// http://users.wpi.edu/~bmoriarty/ps/constants.html
// [shift] = true if shift key is held down, false otherwise
// [ctrl] = true if control key is held down, false otherwise
// [options] = an object with optional parameters; see documentation for details

PS.keyUp = function( key, shift, ctrl, options ) {
	// Uncomment the following line to inspect parameters
	// PS.debug( "PS.keyUp(): key = " + key + ", shift = " + shift + ", ctrl = " + ctrl + "\n" );

	// Add code here for when a key is released
};

// PS.input ( sensors, options )
// Called when an input device event (other than mouse/touch/keyboard) is detected
// It doesn't have to do anything
// [sensors] = an object with sensor information; see documentation for details
// [options] = an object with optional parameters; see documentation for details

PS.input = function( sensors, options ) {
	// Uncomment the following block to inspect parameters
	/*
	 PS.debug( "PS.input() called\n" );
	 var device = sensors.wheel; // check for scroll wheel
	 if ( device )
	 {
	 PS.debug( "sensors.wheel = " + device + "\n" );
	 }
	 */

	// Add code here for when an input event is detected
};

// PS.swipe ( data, options )
// Called when the player swipes a held-down mouse or finger across or around the grid.
// It doesn't have to do anything
// [data] = an object with swipe information; see documentation for details
// [options] = an object with optional parameters; see documentation for details

PS.swipe = function( data, options ) {

	// Add code here for when a swipe event is detected
};

// PS.shutdown ( options )
// Called when the browser window running Perlenspiel is about to close
// It doesn't have to do anything
// [options] = an object with optional parameters; see documentation for details

PS.shutdown = function( options ) {

    PS.shutdown = function( options ) {
        if ( db && PS.dbValid( db ) ) {
            PS.dbEvent( db, "shutdown", true );
            PS.dbSend( db, "bmoriarty", { discard : true } );
        }
    };

	// Add code here for when Perlenspiel is about to close
};

var db = null;

var G = (function(){
	var gridSizeX = 16;
	var gridSizeY = 16;

    var floorFlag = false;
    var bloorFlag = false;
    var dloorFlag = false;
    var vicFlag = false;
    var obFlag = false;
    var wallFlag = false;
    var titFlag = false;
    var pitFlag = false;
    var zicFlag = false;

    var trailArray = [];

    const maxDeathCounter = 10;

    var deathCounter = 10;
    var pickupCounter = 0;

	var reqVic = 0;
	var curVic = 0;

	var mapNumber = 1;
	var currentMap = 0;
	var mapArray = ["f f f f f f f f f f f f f f f f " +
    "f f f f f f f f f f f f f f f f " +
    "f f f f f f f f f f f f f f f f " +
    "f f f f f f f f f f f f f f f f " +
    "f f f f f f f f f f f f f f f f " +
    "f f f f f f f f f f f f f f f f " +
    "f f f f f f f f f f f f f f f f " +
    "f f f f f f f f f f f f f f f f " +
    "f f f f f f f f f f f f f f f f " +
    "f f f f f f f f f f f f f f f f " +
    "f f f f f f f f f f f f f f f f " +
    "f f f f f f f f f f f f f f f f " +
    "f f f f f f f f f f f f f f f f " +
    "f f f f f f f f f f f f f f f f " +
    "f f f f f f f f f f f f f f f f " +
    "f f f f f f f f f f f f f f f f "];
	var mapSizeArray = [[16, 16]];

	const G_COLOR_BLACK = [0, 0, 0];
	const G_COLOR_WHITE = [256, 256, 256];
	const G_COLOR_BG = [220, 220, 220];
	const G_COLOR_GRAY = [125, 125, 125];
	const G_COLOR_RED = [110, 110, 110];

	const G_COLOR_OBELISK = [39, 39, 39];
	const G_COLOR_OBTRAIL = [90, 90, 90];

	function setupMap(){
		var xIt;
		var yIt;

		reqVic = 0;

		var count = 0;

		//gridSizeX = mapSizeArray[currentMap][0];
		//gridSizeY = mapSizeArray[currentMap][1];

		PS.gridSize(gridSizeX, gridSizeY);
		PS.gridColor(G_COLOR_BG);

		var tempMap = mapArray[0].split(" ");

		for(yIt = 0; yIt < gridSizeY; yIt++){
			for(xIt = 0; xIt < gridSizeX; xIt++){
				//Data, isVictoryPoint, isPlayer
				PS.data(xIt, yIt, [tempMap[count], false, false]);
				if(tempMap[count] === "v"){
					PS.data(xIt, yIt, ["v", true, false]);
					reqVic++;
				}
				count++;
			}
		}
		redrawMap();
	}

	function redrawMap(){
		var xIt;
		var yIt;

		curVic = 0;

		for(yIt = 0; yIt < gridSizeY; yIt++){
			for(xIt = 0; xIt < gridSizeX; xIt++){
				drawBead(xIt, yIt);
			}
		}

        for(yIt = 0; yIt < gridSizeY; yIt++){
            for(xIt = 0; xIt < gridSizeX; xIt++){
                if(PS.data(xIt, yIt)[0] === "s"){
                }
            }
        }
	}

	function drawBead(x, y){
		switch(PS.data(x, y)[0]){
			case "f":
				PS.color(x, y, G_COLOR_WHITE);
				PS.border(x, y, 1);
                PS.radius(x, y, 0);
				break;
            case "b":
                PS.color(x, y, [200, 200, 200]);
                PS.border(x, y, 1);
                PS.radius(x, y, 0);
                break;
            case "d":
                PS.color(x, y, [150, 150, 150]);
                PS.border(x, y, 1);
                PS.radius(x, y, 0);
                break;
			case "v":
				PS.color(x, y, G_COLOR_WHITE);
				PS.border(x, y, 3);
				PS.borderColor(x, y, G_COLOR_OBELISK);
                PS.radius(x, y, 0);
				break;
			case "s":
				PS.color(x, y, G_COLOR_GRAY);
                PS.border(x, y, 1);
                PS.radius(x, y, 50);
				break;
			case "o":
				PS.color(x, y, G_COLOR_OBELISK);
                PS.border(x, y, 1);
                PS.radius(x, y, 0);
				break;
            case "w":
                PS.color(x, y, [110, 110, 110]);
                PS.border(x, y, 1);
                PS.radius(x, y, 0);
                break;
            case "t":
                PS.color(x, y, [50, 50, 50]);
                PS.border(x, y, 1);
                PS.radius(x, y, 0);
                break;
            case "p":
                PS.color(x, y, G_COLOR_BLACK);
                PS.border(x, y, 1);
                PS.radius(x, y, 0);
                break;
            case "z":
                PS.color(x, y, [255, 255, 255]);
                PS.border(x, y, 2);
                PS.radius(x, y, 25);
                break;
            case "x":
                PS.color(x, y, G_COLOR_WHITE);
                PS.border(x, y, 1);
                PS.radius(x, y, 0);
                break;
		}
	}
	function serializeCurrentMap(){
	    var tempString = "";

	    var xIt;
	    var yIt;

	    for(yIt = 0; yIt < gridSizeY; yIt++){
	        for(xIt = 0; xIt < gridSizeX; xIt++){
	            if(PS.data(xIt, yIt)[0] !== "s") {
                    tempString = tempString + PS.data(xIt, yIt)[0] + " ";
                } else{
                    tempString = tempString + "f" + " ";
                }
            }
        }
        mapArray[currentMap] = tempString;
        PS.debugClear();
        PS.debug(tempString);
    }

	function cleanFlags(){
        floorFlag = false;
        bloorFlag = false;
        dloorFlag = false;
        vicFlag = false;
        obFlag = false;
        wallFlag = false;
        titFlag = false;
        pitFlag = false;
        zicFlag = false;
    }

	var exports = {
		finalize: function(){
			G.init(0, 0);
		},

		init: function(system, options){
			PS.gridSize(gridSizeX, gridSizeY);
			PS.statusText("");
			setupMap();
		},

        touch: function(x, y, data, options){
            if(floorFlag){
                PS.data(x, y, ["f", false, false]);
            }
            if(bloorFlag){
                PS.data(x, y, ["b", false, false]);
            }
            if(dloorFlag){
                PS.data(x, y, ["d", false, false]);
            }
            if(vicFlag){
                PS.data(x, y, ["v", false, false]);
            }
            if(obFlag){
                PS.data(x, y, ["o", false, false]);
            }
            if(wallFlag){
                PS.data(x, y, ["w", false, false]);
            }
            if(titFlag){
                PS.data(x, y, ["t", false, false]);
            }
            if(pitFlag){
                PS.data(x, y, ["p", false, false]);
            }
            if(zicFlag){
                PS.data(x, y, ["z", false, false]);
            }
            redrawMap();
        },

		keyDown: function(key, shift, ctrl, options){
			switch(key){
                case 98:
                    cleanFlags();
                    bloorFlag = true;
                    break;
                case 100:
                    cleanFlags();
                    dloorFlag = true;
                    break;
                case 102:
                    cleanFlags();
                    floorFlag = true;
                    break;
                case 111:
                    cleanFlags();
                    obFlag = true;
                    break;
                case 112:
                    cleanFlags();
                    pitFlag = true;
                    break;
                case 116:
                    cleanFlags();
                    titFlag = true;
                    break;
                case 118:
                    cleanFlags();
                    vicFlag = true;
                    break;
                case 119:
                    cleanFlags();
                    wallFlag = true;
                    break;
                case 122:
                    cleanFlags();
                    zicFlag = true;
                    break;
                case 13:
                    serializeCurrentMap();
                    break;
			}
		}
	};

	return exports;
})();