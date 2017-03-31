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


	G.init(system, options);

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

	G.keyUp(key, shift, ctrl, options);
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

	// Add code here for when Perlenspiel is about to close
};

var G = (function () {

	const gridSizeX = 8;
	const gridSizeY = 8;

	var test = "b b b b b b b b r r r r b r r r r r r r b r r r r r r r b r r r r r r r r r r r r r r r r r r r r r r r r r r r s r r r r r r r";

	var map;
	var counter;

	var iterator;
	var xIt;
	var yIt;

	var lightFlag = false;

	function setupMap(mapVar){
		counter = 0;
		for(yIt = 0; yIt < gridSizeY; yIt++){
			for(xIt = 0; xIt < gridSizeX; xIt++){
				PS.data(xIt, yIt, map[counter]);
				drawBead(xIt, yIt, map[counter]);
				counter++;
			}
		}
	}

	function getPlayerPos(){
		for(iterator = 0; iterator < map.length; iterator++){
			if(map[iterator] === "s"){
				return iterator;
			}
		}
	}

	function canMove(mapPos){
		if((mapPos < map.length) && (mapPos >= 0)){
			if(map[mapPos] === "r") {
                return true;
            }
            if(map[mapPos] === "l"){
				return true;
			}
		}
		return false;
	}

	function moveTo(startPos, destinationPos){
        map[startPos] = "r";
		if(lightFlag){
			map[startPos] = "l";
		}
		if(map[destinationPos] === "l"){
			lightFlag = true;
		}
		if(map[destinationPos] !== "l"){
			lightFlag = false;
		}
		map[destinationPos] = "s";
        drawBead(getPlayerPos() % gridSizeX, Math.floor(getPlayerPos()/gridSizeY), "s");
	}

	function drawBead(xPos, yPos, data){
		switch(data){
			case "r":
				PS.color(xPos, yPos, [255, 0, 0]);
				break;

			case "s":
				PS.color(xPos, yPos, [0, 0, 0]);
				break;

			case "b":
				PS.color(xPos, yPos, [0, 0, 255]);
				break;

			case "l":
				PS.color(xPos, yPos, [0, 255, 0]);
				break;
		}
	}

	function placeLight(){
		if(lightFlag) {
            lightFlag = false;
        } else if(!lightFlag){
			lightFlag = true;
		}
	}

	function isLight(){
		if(lightFlag){
			return "l";
		} else if(!lightFlag){
			return "r";
		}
	}

	function redrawLight(){
		for(iterator = 0; iterator < map.length; iterator++){
			if(map[iterator] === "l"){
				//To do draw light
			}
		}
	}

	function movePlayer(direction){
		switch(direction){
			case 0:
				if(getPlayerPos() < gridSizeX){
					break;
				}
				if(canMove(getPlayerPos() - gridSizeX)){
                    drawBead(getPlayerPos() % gridSizeX, Math.floor(getPlayerPos()/gridSizeY), isLight());
					moveTo(getPlayerPos(), getPlayerPos() - gridSizeX);
				}
				break;
			case 1:
                if(getPlayerPos() % gridSizeX === gridSizeX - 1){
                    break;
                }
                if(canMove(getPlayerPos() + 1)){
                    drawBead(getPlayerPos() % gridSizeX, Math.floor(getPlayerPos()/gridSizeY), isLight());
                    moveTo(getPlayerPos(), getPlayerPos() + 1);
                }
                break;
			case 2:
                if(getPlayerPos() > map.length - (gridSizeX + 1)){
                    break;
                }
                if(canMove(getPlayerPos() + gridSizeX)){
                    drawBead(getPlayerPos() % gridSizeX, Math.floor(getPlayerPos()/gridSizeY), isLight());
                    moveTo(getPlayerPos(), getPlayerPos() + gridSizeX);
                }
                break;
			case 3:
                if(getPlayerPos() % gridSizeX === 0){
                    break;
                }
                if(canMove(getPlayerPos() - 1)){
                    drawBead(getPlayerPos() % gridSizeX, Math.floor(getPlayerPos()/gridSizeY), isLight());
                    moveTo(getPlayerPos(), getPlayerPos() - 1);
                }
                break;
		}
		redrawLight();
	}

	var exports = {

        init: function(system, options) {
            PS.gridSize(8, 8);

			map = test.split(" ");

			setupMap(map);
        },

        keyUp: function(key, shift, ctrl, options){
        	switch(key){
				case PS.KEY_ARROW_UP:
					movePlayer(0);
					break;
                case PS.KEY_ARROW_RIGHT:
                    movePlayer(1);
                    break;
                case PS.KEY_ARROW_DOWN:
                    movePlayer(2);
                    break;
                case PS.KEY_ARROW_LEFT:
                    movePlayer(3);
                    break;
				case 108:
					placeLight();

			}
		}

	}

	return exports;
}) ();