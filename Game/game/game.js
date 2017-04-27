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

    var trailArray = [];

	var reqVic = 0;
	var curVic = 0;

	var timer;

	var mapNumber = 10;
	var currentMap = 0;
	var mapArray = [
        "f f f f f f f f f " +
        "f f f f f f f f f " +
        "f f f f f f f f f " +
        "f f f f s f f f f " +
        "f f f f f f f f f " +
        "f v f f o f f v f " +
        "f f f f f f f f f " +
        "f f f f f f f f f " +
        "f f f f f f f f f ",

        "f f f f f f f f f " +
        "f f f f f f v f f " +
        "f f f f f f f f f " +
        "f f f f f f f f f " +
        "f v f s f f o f f " +
        "f f f f f f f f f " +
        "f f f f f f f f f " +
        "f f f f f f v f f " +
        "f f f f f f f f f ",

        "f f f f f f f f f " +
        "f v f f f f f f f " +
        "f f f v f f f f f " +
        "f f f f f f f f f " +
        "f o f o f f f s f " +
        "f f f f f f f f f " +
        "f f f f f f f f f " +
        "f v f f f f f f f " +
        "f f f f f f f f f ",

        "f f f f s f f f f " +
        "f v f f f f f v f " +
        "f f f f f f f f f " +
        "f f f f o f f f f " +
        "f f f f f f f f f " +
        "f f f f f f f f f " +
        "f o f f o f f o f " +
        "f f f f f f f f f " +
        "f f f f f f f f f ",

        "f f f f f f f f f f f f f f " +
        "f f o f f f f f f f f f o f " +
        "f f f f f f f f f f f f f f " +
        "f f f f f f f f f f f f f f " +
        "f f f w o f f f f f f f o f " +
        "f f f f f f f f f f f f f f " +
        "f f f f f f f f f f f f f f " +
        "f f f f f f f s f f f f w f " +
        "f f f f f f f f f f f f f f " +
        "f f f f f f f f f f f f f f " +
        "f f v f f w f o f f f f v f " +
        "f f f f f f f f f f f f f f " +
        "f f f f o f f o f f f f f f " +
        "f f f f f f f f f f f f f f ",

        "f f f f f f f f f f f f f f " +
        "f f f f f o f f f f f v f f " +
        "f f f f f f f f f f f f f f " +
        "f f f f f f f o f f f o f f " +
        "f f f f f f f f f f f f f f " +
        "f f w f f s f f f f f f f f " +
        "f w o f f f f f f o f f f f " +
        "f f f f f f v f f f f o w f " +
        "f f f f f f f f f f f w f f " +
        "f f f f f f f f f f f f f f " +
        "f f o f f f o f f f f f o f " +
        "f f f f f f f f f f f f f f " +
        "f f f f f o f o f f f f o f " +
        "f f f f f f f f f f f f f f ",

        "f f f f f f f f f f f f f f f f " +
        "f f f f f f f o f f o f f f f f " +
        "f f f f f f f f f f f f f f f f " +
        "f o f f f o f f f f o f f f o f " +
        "f f f f f f f f f f f f f f f f " +
        "f f f f f f f v f f o f f f f f " +
        "f o f f w f f f f s f f f f f f " +
        "f f f f f f f w f f f o f f o f " +
        "f o f f f o f f v f f f f f f f " +
        "f f f f f f f f f f f f f f f f " +
        "f f f f f f f f f f f w f f f f " +
        "f f f f f f f f f f f f f f f f " +
        "f o f f o f f w f f f f f f o f " +
        "f f f f f f f f f f f f f f f f " +
        "f f f f f f f f f f f f f f f f " +
        "f f f f f f f f f f f f f f f f ",

        "f f f f f f f f f f f f f f f f " +
        "f f f f f f f f f f f f f f f f " +
        "f f v f f f f f f f f f f f f f " +
        "f f f f f f f s f f f f f f f f " +
        "f f f f f f f f f f f f f f f f " +
        "f f f f f o f f f o f f f f f f " +
        "f f f f f f f f f f f f f f f f " +
        "f f f f f f f f f f f f f f f f " +
        "f f f f f f f f f v f f f o f f " +
        "f f f f f o f f f f f f f o f f " +
        "f f f f f f f f f f f f f f f f " +
        "f f f f f f f f f f f f f f f f " +
        "f f o f f o f f f o f f f f f f " +
        "f f o f f f f f f f f f f f f f " +
        "f f f f f f f f f f f f f f f f " +
        "f f f f f f f f f f f f f f f f ",

        "f f f f f f f f f f f f f f f f " +
        "f f o f f f f o f f f f f f f f " +
        "f f f f f f f f f f f f f f f f " +
        "f f f f f f f f f f f f f f f f " +
        "f f f f f o f f f o f f f f f f " +
        "f f f f f f f f f f f f f f f f " +
        "f f f f f s f f f f f f f f f f " +
        "f f o f f f f f v f f f o f o f " +
        "f f f f f f f f f f f f f f f f " +
        "f f f f f o f f f f f o f f o f " +
        "f f f f f f f f f f f f f f f f " +
        "f f f f f f f f f f f f f f f f " +
        "f f f f f f f o f f f f f f v f " +
        "f f f f f f f f f f f f f f f f " +
        "f f f f f f f o f f f o f f f f " +
        "f f f f f f f f o f f f f f f f ",

        "f f f f f f f f f f f f f f f f " +
        "f f o f o f o o f f v f f f f f " +
        "f f f f f f f f f f f f f f f f " +
        "f f f f f f f f f f f f f f f f " +
        "f f f f f f f f f f s f f f f f " +
        "f f f o o f f f f f f f f f f f " +
        "f f f f f f f f f f f f f f f f " +
        "f f f f f f f o f f o f f f f f " +
        "f f f f f f f f f f f f f f f f " +
        "f f f f f f o f f f o f f f o f " +
        "f f f f f f f f f f f f f f f f " +
        "f f f f f f f o f f f f f f f f " +
        "f f f f f f f f f f f f f f f f " +
        "f f v f o f f f f f f f f f o f " +
        "f f f o f f f f f f o f f f f f " +
        "f f f f f f f f f f f f f f f f "];
	var mapSizeArray = [[9, 9], [9, 9], [9, 9], [9, 9], [14, 14], [14, 14], [16, 16], [16, 16], [16, 16], [16, 16]];

	const G_COLOR_BLACK = [0, 0, 0];
	const G_COLOR_WHITE = [220, 220, 220];
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

		gridSizeX = mapSizeArray[currentMap][0];
		gridSizeY = mapSizeArray[currentMap][1];

		PS.gridSize(gridSizeX, gridSizeY);
		PS.gridColor(G_COLOR_BG);

		var tempMap = mapArray[currentMap].split(" ");

		for(yIt = 0; yIt < gridSizeY; yIt++){
			for(xIt = 0; xIt < gridSizeX; xIt++){
				//Data, isVictoryPoint, isPlayer
				PS.data(xIt, yIt, [tempMap[count], false, false]);
				if(tempMap[count] === "v"){
					PS.data(xIt, yIt, ["v", true, false]);
					reqVic++;
				}
				if(tempMap[count] === "s"){
					PS.data(xIt, yIt, ["s", false, true]);
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
                    findObelisks(xIt, yIt);
                }
            }
        }
	}

	function findObelisks(x, y){
	    trailArray = [];
		if(x + 1 < gridSizeX) {
            if (PS.data(x + 1, y)[0] === "o") {
				drawObelisks(x + 1, y);
            }
        }

        if(x - 1 >= 0) {
            if (PS.data(x - 1, y)[0] === "o") {
                drawObelisks(x - 1, y);
            }
        }

        if(y + 1 < gridSizeY) {
            if (PS.data(x, y + 1)[0] === "o") {
                drawObelisks(x, y + 1);
            }
        }

        if(y - 1 >= 0) {
            if (PS.data(x, y - 1)[0] === "o") {
                drawObelisks(x, y - 1);
            }
        }
	}

	function drawObelisks(x, y){
        if(x + 1 < gridSizeX) {
            if (PS.data(x + 1, y)[0] === "f") {
                finishDrawing(x + 1, y, 1);
            }
        }

        if(x - 1 >= 0) {
            if (PS.data(x - 1, y)[0] === "f") {
                finishDrawing(x - 1, y, 3);
            }
        }

        if(y + 1 < gridSizeY) {
            if (PS.data(x, y + 1)[0] === "f") {
                finishDrawing(x, y + 1, 2);
            }
        }

        if(y - 1 >= 0) {
            if (PS.data(x, y - 1)[0] === "f") {
                finishDrawing(x, y - 1, 0);
            }
        }
	}

	function finishDrawing(x, y, direction){
	    if(trailArray.indexOf(x + (100 * y)) >= 0){
	        return;
        } else {
	        trailArray.push(x + (100 * y));
        }
        PS.color(x, y, G_COLOR_OBTRAIL);

        switch(direction){
			case 0:
                if(y - 1 >= 0) {
                    if (PS.data(x, y - 1)[0] === "f") {
                        finishDrawing(x, y - 1, 0);
                    }
                    if (PS.data(x, y - 1)[0] === "v") {
                        curVic++;
                        finishDrawing(x, y - 1, 0);
                    }
                    if (PS.data(x, y - 1)[0] === "o") {
						finishDrawing(x + 1, y - 1, 1);
						finishDrawing(x - 1, y - 1, 3);
						drawBead(x, y - 1);
                        PS.radius(x, y - 1, 0);
					}
                }
				break;
			case 1:
                if(x + 1 < gridSizeX) {
                    if (PS.data(x + 1, y)[0] === "f") {
                        finishDrawing(x + 1, y, 1);
                    }
                    if (PS.data(x + 1, y)[0] === "v") {
                        curVic++;
                        finishDrawing(x + 1, y, 1);
                    }
                    if (PS.data(x + 1, y)[0] === "o") {
                        finishDrawing(x + 1, y - 1, 0);
                        finishDrawing(x + 1, y + 1, 2);
                        drawBead(x + 1, y);
                        PS.radius(x + 1, y, 0);
                    }
                }
				break;
			case 2:
                if(y + 1 < gridSizeY) {
                    if (PS.data(x, y + 1)[0] === "f") {
                        finishDrawing(x, y + 1, 2);
                    }
                    if (PS.data(x, y + 1)[0] === "v") {
                        curVic++;
                        finishDrawing(x, y + 1, 2);
                    }
                    if (PS.data(x, y + 1)[0] === "o") {
                        finishDrawing(x + 1, y + 1, 1);
                        finishDrawing(x - 1, y + 1, 3);
                        drawBead(x, y + 1);
                        PS.radius(x, y + 1, 0);
                    }
                }
				break;
			case 3:
                if(x - 1 >= 0) {
                    if (PS.data(x - 1, y)[0] === "f") {
                        finishDrawing(x - 1, y, 3);
                    }
                    if (PS.data(x - 1, y)[0] === "v") {
                        curVic++;
                        finishDrawing(x - 1, y, 3);
                    }
                    if (PS.data(x - 1, y)[0] === "o") {
                        finishDrawing(x - 1, y - 1, 0);
                        finishDrawing(x - 1, y + 1, 2);
                        drawBead(x - 1, y);
                        PS.radius(x - 1, y, 0);
                    }
                }
				break;
		}
	}

	function drawBead(x, y){
		switch(PS.data(x, y)[0]){
			case "f":
				PS.color(x, y, G_COLOR_WHITE);
				PS.border(x, y, 0);
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
                PS.border(x, y, 0);
                PS.radius(x, y, 50);
				break;
			case "o":
				PS.color(x, y, G_COLOR_OBELISK);
                PS.border(x, y, 0);
                PS.radius(x, y, 0);
				break;
            case "w":
                PS.color(x, y, G_COLOR_RED);
                PS.border(x, y, 0);
                PS.radius(x, y, 0);
		}
	}

	function declareVictory(){
		if(curVic === reqVic){
			return true;
		}
	}

	function movePlayer(direction){
		var xIt;
		var yIt;

        for(yIt = 0; yIt < gridSizeY; yIt++){
            for(xIt = 0; xIt < gridSizeX; xIt++){
                if(PS.data(xIt, yIt)[0] === "s"){
                    switch(direction){
						case 0:
                            if(yIt - 1 >= 0) {
                                if (PS.data(xIt, yIt - 1)[0] === "f") {
                                	PS.data(xIt, yIt - 1, ["s", false, true]);
                                	PS.data(xIt, yIt, ["f", false, false]);
                                }
                            }
							break;
						case 1:
                            if(xIt + 1 < gridSizeX) {
                                if (PS.data(xIt + 1, yIt)[0] === "f") {
                                    PS.data(xIt + 1, yIt, ["s", false, true]);
                                    PS.data(xIt, yIt, ["f", false, false]);
                                }
                            }
							break;
						case 2:
                            if(yIt + 1 < gridSizeY) {
                                if (PS.data(xIt, yIt + 1)[0] === "f") {
                                    PS.data(xIt, yIt + 1, ["s", false, true]);
                                    PS.data(xIt, yIt, ["f", false, false]);
                                }
                            }
							break;
						case 3:
                            if(xIt - 1 >= 0) {
                                if (PS.data(xIt - 1, yIt)[0] === "f") {
                                    PS.data(xIt - 1, yIt, ["s", false, true]);
                                    PS.data(xIt, yIt, ["f", false, false]);
                                }
                            }
							break;
					}
					redrawMap();
                    if(declareVictory()){
                    	doVictory();
					}
					return;
                }
            }
        }
	}

	var isWinning = false;

	function doVictory() {
        if (!isWinning) {
            isWinning = true;

            var gridSizeX = 16;
            var gridSizeY = 16;

            var reqVic = 0;
            var curVic = 0;

            currentMap++;

            if (db && PS.dbValid(db)) {
                PS.dbEvent(db, "Level completion", currentMap); // val can be anything
            }

            timer = PS.timerStart(60,
                function endMap() {
                    if (currentMap < mapNumber) {
                        setupMap();
                    } else {
                        PS.statusText("");
                        if (db && PS.dbValid(db)) {
                            PS.dbEvent(db, "gameover", true);
                            PS.dbSend(db, "bmoriarty", {discard: true});
                            db = null;
                        }
                    }

                    isWinning = false;
                    PS.timerStop(timer);
                });
        }
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

		keyDown: function(key, shift, ctrl, options){
			switch(key){
				case PS.KEY_ARROW_LEFT:
					movePlayer(3);
					break;
                case PS.KEY_ARROW_RIGHT:
                	movePlayer(1);
                    break;
                case PS.KEY_ARROW_UP:
                	movePlayer(0);
                    break;
                case PS.KEY_ARROW_DOWN:
                	movePlayer(2);
                    break;
                case 97:
                    movePlayer(3);
                    break;
                case 100:
                    movePlayer(1);
                    break;
                case 119:
                    movePlayer(0);
                    break;
                case 115:
                    movePlayer(2);
                    break;
			}
		}
	};

	return exports;
})();