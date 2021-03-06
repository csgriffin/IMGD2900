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

	var currentMap = 0;

	const G_COLOR_LIT_FLOOR = [74, 80, 122];
	const G_COLOR_FLOOR = [93, 93, 93];
	const G_COLOR_WALL = [64, 64, 64];
	const G_COLOR_END = [200, 200, 200];
	const G_COLOR_LIGHT = [16, 40, 204];
	const G_COLOR_PLAYER = [197, 197, 197];

	var sizeArray = [[6, 5], [7, 7], [8, 7], [9, 13], [15, 27]];

	var maxLightArray = [2, 2, 3, 3, 5];

    var gridSizeX = sizeArray[0][0];
    var gridSizeY = sizeArray[0][1];

	var mapArray = ["b b b b b b b b b b b b o s r r r e b b b b b b b b b b b b",
       				"b b b b e b b b b b b r b b b b b b r b b b b b b r b b o s r r r b b b b b b r b b b b b b b b b",
       				"b b b b b b b b b r r r r r r e b r b b b b r b b r r r r r r b b r b b b b b b b r r r s b b b b b b b o b b b",
        			"b b b b b b b b b o s r r r r r r b b b r b r b b r b b r r b r b b r b b r b b r r r r b b r b b r b b r b b r b b r b b r b b r b b r b b r b b r r r r b b r b b b b b r b b r b b b b b r b b r b b b b b r r r r e b b b b b b b b b",
        			"b b b b b b b b b b b b b b b b b b b r b b b b b b b b b b b b b b r r b b b r r b b b b b b b r r r b b b r r r r b b b r r r r r r r r r r r b b b b b r r r r b r r r r r r r e b b r r r r b b b r r r b b b b r r r r r r r r r b r r b b b r b r r b b r r b b b r b b b r b r r b b b r r r r r b b b r r r r b r r r b b b b b b b r r r r b r r r r r r b b b b r b r r r r b r r r r r r b b r b r r b b b b b r b r r b b r b r r r r r r r r r r r b b r b r b r r r r r b r r b b b r b r b r r r r r b r r b b b r r r b r r r b r b r r b b b r r b r r r r r r r r b b b b r r r r r r r r r r r r b b b b b b r r r r b b r r r b b b b b b r r r r r r r r r b b b b b r r r r r r r r r r b b b b b r r b r b r b r b r b b b b b r r b b b r b r r r b b b b r r r r r s r r r r r b b b b b b b b b o b b b b b b b b b b b b b b b b b b b b b b"]

	var test = mapArray[0];

	//var test = "e r r r r r r r r r r r r r r r r r r r r r r r r r r r r r r r r r r r r r r r r r r r r r r r r r r r r r r r r r r r r r r r r r r r r r r r r r r r r r r r r r r r r r r r r r r r r r r r r r s o"

	var maxLights = maxLightArray[0];

	var maxLightCounter = 0;

	var systemVar;
	var optionsVar;

	var map;
	var counter;

	var iterator;
	var xIt;
	var yIt;

	var lightFlag = false;
	var victoryFlag = false;

	var lightArray;
	var counter2;
	var counter3;

	var arrayHolder;

	var victoryArray = [];

	function setupMap(mapVar){
		counter = 0;
		counter2 = 0;
		for(yIt = 0; yIt < gridSizeY; yIt++){
			for(xIt = 0; xIt < gridSizeX; xIt++){
				PS.data(xIt, yIt, map[counter]);
				if(map[counter] === "s"){
					PS.data(xIt, yIt, "r");
				}
				drawBead(xIt, yIt, map[counter]);
				counter++;
			}
		}
		movePlayer(10);
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
			if(map[mapPos] === "v"){
            	return true;
			}
		}

        PS.audioPlay("fx_click");
		return false;
	}

	function moveTo(startPos, destinationPos){
        PS.audioPlay("fx_click");

        //PS.debug("Moving to " + destinationPos + "\n");

        map[startPos] = "r";
        if(victoryFlag){
            map[startPos] = "v";
            victoryFlag = false;
        }
		if(lightFlag){
			map[startPos] = "l";
		}
		if(map[destinationPos] === "v"){
			victoryFlag = true;
        }
		if(map[destinationPos] === "l"){
			lightFlag = true;
		}
		if(map[destinationPos] !== "l"){
			lightFlag = false;
		}
		map[destinationPos] = "s";
        drawBead(getPlayerPos() % gridSizeX, Math.floor(getPlayerPos()/gridSizeX), "s");
	}

	function drawBead(xPos, yPos, data){
		switch(data){
			case "v":
				//Do r code
			case "r":
				PS.color(xPos, yPos, G_COLOR_FLOOR);
				PS.radius(xPos, yPos, 0);
				break;

			case "s":
				PS.color(xPos, yPos, G_COLOR_PLAYER);
				PS.radius(xPos, yPos, 50);
				break;

			case "b":
				PS.color(xPos, yPos, G_COLOR_WALL);
                PS.radius(xPos, yPos, 0);
				break;

			case "l":
				PS.color(xPos, yPos, G_COLOR_LIGHT);
                PS.radius(xPos, yPos, 0);
				break;

			case "p":
				PS.color(xPos, yPos, G_COLOR_LIT_FLOOR);
				PS.radius(xPos, yPos, 0);
				break;

			case "e":
				PS.color(xPos, yPos, G_COLOR_END);
				PS.radius(xPos, yPos, 0);
				PS.glyph(xPos, yPos, "E");
				break;

			case "o":
				PS.color(xPos, yPos, G_COLOR_END);
				PS.radius(xPos, yPos, 0);
				PS.glyph(xPos, yPos, "B");
		}
	}

    var closedArray = [];

	function isVictorious(){
		closedArray.length = 0;
		for(iterator = 0; iterator < map.length; iterator++){
			if(map[iterator] === "e"){
				victoryArray.push([iterator % gridSizeX, Math.floor(iterator / gridSizeX)]);
                drawBead(iterator % gridSizeX, Math.floor(iterator / gridSizeX), "e");
			}
			if(map[iterator] === "o"){
                victoryArray.push([iterator % gridSizeX, Math.floor(iterator / gridSizeX)]);
                drawBead(iterator % gridSizeX, Math.floor(iterator / gridSizeX), "o");
			}
		}

		for(iterator = 0; iterator < lightArray.length; iterator++){
			drawBead(lightArray[iterator] % gridSizeX, Math.floor(lightArray[iterator] / gridSizeX), "l");
		}

        for(iterator = 0; iterator < map.length; iterator++) {
            if (map[iterator] === "e") {
                return iterateNeighbors([iterator % gridSizeX, Math.floor(iterator / gridSizeX)]);
            }
        }
        return false;
	}

	var someKindaFlag = false;

	function iterateNeighbors(start){
		//PS.debug("Iterating at " + start[0] + " " + start[1] + "\n");
		/*for(iterator = 0; iterator < victoryArray.length; iterator++){
			PS.debug("Victory Array contains " + victoryArray[iterator] + " \n");
		}*/
		someKindaFlag = false;
		for(counter2 = 0; counter2 < victoryArray.length; counter2++){
			if((victoryArray[counter2][0] === start[0]) && (victoryArray[counter2][1] === start[1])){
				//PS.debug("Made it here!");
                if(closedArray.length === victoryArray.length){
                	//PS.debug("Uh oh");
                    return false;
                }
                if(map[(start[1] * gridSizeX) + start[0]] === "o"){
                    return true;
                }
                for(iterator = 0; iterator < closedArray.length; iterator++){
                    if((closedArray[iterator][0] === start[0]) && (closedArray[iterator][1] === start[1])){
                    	//PS.debug("In closed");
                        someKindaFlag = true;
                    }
                }
                if(someKindaFlag === false) {
                	//PS.debug("Made it \n");
                    closedArray.push(start);
                    if (start[0] > 0) {
                        if(iterateNeighbors([start[0] - 1, start[1]])){
                            return true;
                        }
                    }
                    if (start[0] < gridSizeX - 1) {
                        if(iterateNeighbors([start[0] + 1, start[1]])){
                            return true;
                        }
                    }
                    if (start[1] > 0) {
                        if(iterateNeighbors([start[0], start[1] - 1])){
                            return true;
                        }
                    }
                    if (start[1] < gridSizeY - 1) {
                        if(iterateNeighbors([start[0], start[1] + 1])){
                            return true;
                        }
                    }
                }
			}
		}
		return false;
	}

	function placeLight(){
        PS.audioPlay("fx_click");

		if(lightFlag) {
            lightFlag = false;
            maxLightCounter -= 1;
            PS.statusText("Trailblazer - R to place light: " + (maxLights - maxLightCounter) + " left.");
        } else if(!lightFlag){
			if(maxLightCounter < maxLights) {
                lightFlag = true;
                maxLightCounter += 1;
                PS.statusText("Trailblazer - R to place light: " + (maxLights - maxLightCounter) + " left.");
            }
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
		lightArray = [];
		counter2 = 0;
		counter3 = 0;

        counter = 0;

        victoryArray.length = 0;

        for(yIt = 0; yIt < gridSizeY; yIt++){
            for(xIt = 0; xIt < gridSizeX; xIt++){
            	drawBead(xIt, yIt, "b");
                //drawBead(xIt, yIt, map[counter]);
                counter++;
            }
        }

		for(iterator = 0; iterator < map.length; iterator++){
			if(map[iterator] === "l"){
				lightArray[counter2] = iterator;
				counter2++;
			}
		}

		lightArray.push(getPlayerPos());

		for(iterator = 0; iterator < lightArray.length; iterator++){
			arrayHolder = [lightArray[iterator] % gridSizeX, Math.floor(lightArray[iterator] / gridSizeX)];
			victoryArray.push(arrayHolder);

			while(true) {
                if ((lightArray[iterator] - gridSizeX) >= 0 && (PS.data((lightArray[iterator] - gridSizeX) % gridSizeX, Math.floor((lightArray[iterator] - gridSizeX) / gridSizeX)) === "r")) {
                    drawBead((lightArray[iterator] - gridSizeX) % gridSizeX, Math.floor((lightArray[iterator] - gridSizeX) / gridSizeX), "p");

                    arrayHolder = [(lightArray[iterator] - gridSizeX) % gridSizeX, Math.floor((lightArray[iterator] - gridSizeX) / gridSizeX)];
                    victoryArray.push(arrayHolder);
                } else{
                	break;
				}

                if ((lightArray[iterator] - (2 * gridSizeX)) >= 0 && (PS.data((lightArray[iterator] - (2 * gridSizeX)) % gridSizeX, Math.floor((lightArray[iterator] - (2 * gridSizeX)) / gridSizeX)) === "r")) {
                    drawBead((lightArray[iterator] - (2 * gridSizeX)) % gridSizeX, Math.floor((lightArray[iterator] - (2 * gridSizeX)) / gridSizeX), "p");

                    arrayHolder = [(lightArray[iterator] - (2 * gridSizeX)) % gridSizeX, Math.floor((lightArray[iterator] - (2 * gridSizeX)) / gridSizeX)];
                    victoryArray.push(arrayHolder);
                } else{
                	break;
				}

                /*if ((lightArray[iterator] - (3 * gridSizeX)) >= 0 && (PS.data((lightArray[iterator] - (3 * gridSizeX)) % gridSizeX, Math.floor((lightArray[iterator] - (3 * gridSizeX)) / gridSizeX)) === "r")) {
                    drawBead((lightArray[iterator] - (3 * gridSizeX)) % gridSizeX, Math.floor((lightArray[iterator] - (3 * gridSizeX)) / gridSizeX), "p");

                    arrayHolder = [(lightArray[iterator] - (3 * gridSizeX)) % gridSizeX, Math.floor((lightArray[iterator] - (3 * gridSizeX)) / gridSizeX)];
                    victoryArray.push(arrayHolder);
                } else{
                	break;
				}*/
                break;
            }

            while(true) {
                if ((lightArray[iterator] % gridSizeX) > 0 && (PS.data((lightArray[iterator] - 1) % gridSizeX, Math.floor((lightArray[iterator] - 1) / gridSizeX)) === "r")) {
                    drawBead((lightArray[iterator] - 1) % gridSizeX, Math.floor((lightArray[iterator] - 1) / gridSizeX), "p");

                    arrayHolder = [(lightArray[iterator] - 1) % gridSizeX, Math.floor((lightArray[iterator] - 1) / gridSizeX)];
                    victoryArray.push(arrayHolder);
                } else{
                    break;
                }

                if ((lightArray[iterator] % gridSizeX) > 1 && (PS.data((lightArray[iterator] - 2) % gridSizeX, Math.floor((lightArray[iterator] - 2) / gridSizeX)) === "r")) {
                    drawBead((lightArray[iterator] - 2) % gridSizeX, Math.floor((lightArray[iterator] - 2) / gridSizeX), "p");

                    arrayHolder = [(lightArray[iterator] - 2) % gridSizeX, Math.floor((lightArray[iterator] - 2) / gridSizeX)];
                    victoryArray.push(arrayHolder);
                } else{
                    break;
                }

                /*if ((lightArray[iterator] % gridSizeX) > 2 && (PS.data((lightArray[iterator] - 3) % gridSizeX, Math.floor((lightArray[iterator] - 1) / gridSizeX)) === "r")) {
                    drawBead((lightArray[iterator] - 3) % gridSizeX, Math.floor((lightArray[iterator] - 1) / gridSizeX), "p");

                    arrayHolder = [(lightArray[iterator] - 3) % gridSizeX, Math.floor((lightArray[iterator] - 1) / gridSizeX)];
                    victoryArray.push(arrayHolder);
                } else{
                    break;
                }*/
                break;
            }

            while(true) {
                if ((lightArray[iterator] + gridSizeX) < (gridSizeX * gridSizeY) && (PS.data((lightArray[iterator] + gridSizeX) % gridSizeX, Math.floor((lightArray[iterator] + gridSizeX) / gridSizeX)) === "r")) {
                    drawBead((lightArray[iterator] + gridSizeX) % gridSizeX, Math.floor((lightArray[iterator] + gridSizeX) / gridSizeX), "p");

                    arrayHolder = [(lightArray[iterator] + gridSizeX) % gridSizeX, Math.floor((lightArray[iterator] + gridSizeX) / gridSizeX)];
                    victoryArray.push(arrayHolder);
                } else{
                    break;
                }

                if ((lightArray[iterator] + (2 * gridSizeX)) < (gridSizeX * gridSizeY) && (PS.data((lightArray[iterator] + (2 * gridSizeX)) % gridSizeX, Math.floor((lightArray[iterator] + (2 * gridSizeX)) / gridSizeX)) === "r")) {
                    drawBead((lightArray[iterator] + (2 * gridSizeX)) % gridSizeX, Math.floor((lightArray[iterator] + (2 * gridSizeX)) / gridSizeX), "p");

                    arrayHolder = [(lightArray[iterator] + (2 * gridSizeX)) % gridSizeX, Math.floor((lightArray[iterator] + (2 * gridSizeX)) / gridSizeX)];
                    victoryArray.push(arrayHolder);
                } else{
                    break;
                }

                /*if ((lightArray[iterator] + (3 * gridSizeX)) < (gridSizeX * gridSizeY) && (PS.data((lightArray[iterator] + (3 * gridSizeX)) % gridSizeX, Math.floor((lightArray[iterator] + (3 * gridSizeX)) / gridSizeX)) === "r")) {
                    drawBead((lightArray[iterator] + (3 * gridSizeX)) % gridSizeX, Math.floor((lightArray[iterator] + (3 * gridSizeX)) / gridSizeX), "p");

                    arrayHolder = [(lightArray[iterator] + (3 * gridSizeX)) % gridSizeX, Math.floor((lightArray[iterator] + (3 * gridSizeX)) / gridSizeX)];
                    victoryArray.push(arrayHolder);
                } else{
                    break;
                }*/
                break;
            }

            while(true) {
                if ((lightArray[iterator] % gridSizeX) < gridSizeX - 1 && (PS.data((lightArray[iterator] + 1) % gridSizeX, Math.floor((lightArray[iterator] + 1) / gridSizeX)) === "r")) {
                    drawBead((lightArray[iterator] + 1) % gridSizeX, Math.floor((lightArray[iterator] + 1) / gridSizeX), "p");

                    arrayHolder = [(lightArray[iterator] + 1) % gridSizeX, Math.floor((lightArray[iterator] + 1) / gridSizeX)];
                    victoryArray.push(arrayHolder);
                } else{
                    break;
                }
                if ((lightArray[iterator] % gridSizeX) < (gridSizeX - 2) && (PS.data((lightArray[iterator] + 2) % gridSizeX, Math.floor((lightArray[iterator] + 2) / gridSizeX)) === "r")) {
                    drawBead((lightArray[iterator] + 2) % gridSizeX, Math.floor((lightArray[iterator] + 2) / gridSizeX), "p");

                    arrayHolder = [(lightArray[iterator] + 2) % gridSizeX, Math.floor((lightArray[iterator] + 2) / gridSizeX)];
                    victoryArray.push(arrayHolder);
                } else{
                    break;
                }
                /*if ((lightArray[iterator] % gridSizeX) < (gridSizeX - 3) && (PS.data((lightArray[iterator] + 3) % gridSizeX, Math.floor((lightArray[iterator] + 1) / gridSizeX)) === "r")) {
                    drawBead((lightArray[iterator] + 3) % gridSizeX, Math.floor((lightArray[iterator] + 1) / gridSizeX), "p");

                    arrayHolder = [(lightArray[iterator] + 3) % gridSizeX, Math.floor((lightArray[iterator] + 1) / gridSizeX)];
                    victoryArray.push(arrayHolder);
                } else{
                    break;
                }*/
                break;
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
                    drawBead(getPlayerPos() % gridSizeX, Math.floor(getPlayerPos()/gridSizeX), isLight());
					moveTo(getPlayerPos(), getPlayerPos() - gridSizeX);
				}
				break;
			case 1:
                if(getPlayerPos() % gridSizeX === gridSizeX - 1){
                    break;
                }
                if(canMove(getPlayerPos() + 1)){
                    drawBead(getPlayerPos() % gridSizeX, Math.floor(getPlayerPos()/gridSizeX), isLight());
                    moveTo(getPlayerPos(), getPlayerPos() + 1);
                }
                break;
			case 2:
                if(getPlayerPos() > map.length - (gridSizeX + 1)){
                    break;
                }
                if(canMove(getPlayerPos() + gridSizeX)){
                    drawBead(getPlayerPos() % gridSizeX, Math.floor(getPlayerPos()/gridSizeX), isLight());
                    moveTo(getPlayerPos(), getPlayerPos() + gridSizeX);
                }
                break;
			case 3:
                if(getPlayerPos() % gridSizeX === 0){
                    break;
                }
                if(canMove(getPlayerPos() - 1)){
                    drawBead(getPlayerPos() % gridSizeX, Math.floor(getPlayerPos()/gridSizeX), isLight());
                    moveTo(getPlayerPos(), getPlayerPos() - 1);
                }
                break;
			default:
				moveTo(getPlayerPos(), getPlayerPos());
				break;
		}
		redrawLight();
        if(isVictorious()){
        	PS.audioPlay("fx_click");

        	currentMap++;
			if(currentMap < mapArray.length){
				gridSizeX = sizeArray[currentMap][0];
				gridSizeY = sizeArray[currentMap][1];

				maxLightCounter = 0;
				maxLights = maxLightArray[currentMap];

				test = mapArray[currentMap];

                G.init(systemVar, optionsVar);
			}
			if(currentMap === mapArray.length){
				PS.statusText("VICTORY!!!!!!");
			}
		}
        drawBead(getPlayerPos() % gridSizeX, Math.floor(getPlayerPos()/gridSizeX), "s");
	}

	var exports = {

        init: function(system, options) {
        	systemVar = system;
        	optionsVar = options;
            PS.gridSize(gridSizeX, gridSizeY);
            PS.statusText("Trailblazer - R to place light: " + maxLights + " left.");
            PS.gridColor(G_COLOR_WALL);

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
				case 114:
					placeLight();

			}
		}

	}

	return exports;
}) ();