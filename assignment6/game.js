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

	//Call game initialization
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

	//Call game keyDown function
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

	// Add code here for when Perlenspiel is about to close
};

var G = (function (){

	//-----------faster
	//Rate snake moves at
	const TICK_LENGTH = 8;

	//--------------
	//colors changed

	//Color constants
	const G_COLOR_BLUE = [50, 50, 205];
	const G_COLOR_RED = [205, 0, 0];
	const G_COLOR_DGRAY = [105, 105, 105];
	const G_COLOR_WHITE = [240, 240, 240];
	const G_COLOR_BLACK = [0, 0, 0];
	const G_COLOR_GRAY = [205, 205, 205];

	//-------------color change
	const G_COLOR_BACKGROUND = [50, 50, 50];


	//Package snake functionality together
	var snake = (function (){
		var posX = 0;
		var posY = 31;
		var snakeColor = G_COLOR_BLUE;
		var snakeDirection = "Right";

		var tempPosX;
		var tempPosY;

		//Erase border of specified bead
		function eraseBorder(posX, posY){
			PS.borderColor(posX, posY, G_COLOR_GRAY);
		}

		var snakeExports = {

			//Update the snake
			tickSnake: function(){
				tempPosX = posX;
				tempPosY = posY;

				if(snake.moveSnake(snakeDirection) === 0){
                    snake.drawSnake();
                    eraseBorder(tempPosX, tempPosY);
				}
			},

			//Draw the snake at posX, posY, with snakeColor
			drawSnake: function(){
				PS.color(posX, posY, snakeColor);
				PS.borderColor(posX, posY, G_COLOR_BLACK);
			},

			//Move the snake if it can move in the specified direction
			moveSnake: function(direction){
				switch(direction){
					case "Left":
						if(posX > 0){
							posX -= 1;
                            return 0;
						}
						break;
					case "Right":
						if(posX < 31){
							posX += 1;
                            return 0;
						}
						break;
					case "Up":
						if(posY > 2){
							posY -= 1;
                            return 0;
						}
						break;
					case "Down":
						if(posY < 31){
							posY += 1;
                            return 0;
						}
						break;
				}
				return -1;
			},

			//Set the direction of the snake
			directSnake: function(direction){
                switch(direction){
                    case "Left":
                        snakeDirection = "Left";
                        break;
                    case "Right":
                        snakeDirection = "Right";
                        break;
                    case "Up":
                        snakeDirection = "Up";
                        break;
                    case "Down":
                        snakeDirection = "Down";
                        break;
                }
			},

			//Change the color of the snake
			colorSnake: function(color){
				switch(color){
					case "White":
						snakeColor = G_COLOR_WHITE;
						break;
					case "DGray":
						snakeColor = G_COLOR_DGRAY;
						break;
					case "Red":
						snakeColor = G_COLOR_RED;
						break;
					case "Blue":
						snakeColor = G_COLOR_BLUE;
						break;
				}
			}
		}
		return snakeExports;
	} ());


	var exports = {

		//Initialize the game
		init: function(system, options){
            PS.gridSize( 32, 32 );
            PS.color(PS.ALL, 0, 0, 0, 0);
            PS.color(PS.ALL, 1, 0, 0, 0);
            PS.color(0, 0, G_COLOR_WHITE);
            PS.glyph(0, 0, "1");
            PS.color(1, 0, G_COLOR_DGRAY);
            PS.glyph(1, 0, "2");
            PS.color(2, 0, G_COLOR_RED);
            PS.glyph(2, 0, "3");
            PS.color(3, 0, G_COLOR_BLUE);
            PS.glyph(3, 0, "4");
            PS.borderColor(PS.ALL, PS.ALL, G_COLOR_GRAY);
            PS.gridColor(G_COLOR_BACKGROUND);

            snake.drawSnake();

            PS.timerStart(TICK_LENGTH, snake.tickSnake);
		},

		//Capture key inputs
        keyDown: function(key, shift, ctrl, options){
			switch(key){

				case PS.KEY_ARROW_LEFT:
					snake.directSnake("Left");
					break;
				case PS.KEY_ARROW_RIGHT:
					snake.directSnake("Right");
					break;
                case PS.KEY_ARROW_DOWN:
                	snake.directSnake("Down");
                    break;
                case PS.KEY_ARROW_UP:
                	snake.directSnake("Up");
                    break;
				case 49:
					snake.colorSnake("White");
					break;
                case 50:
                    snake.colorSnake("DGray");
                    break;
                case 51:
                    snake.colorSnake("Red");
                    break;
                case 52:
                    snake.colorSnake("Blue");
                    break;
			}
		}
	}
	return exports;
} ());