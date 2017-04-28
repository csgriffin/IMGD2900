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

    const maxDeathCounter = 255;

    var deathCounter = 255;
    var pickupCounter = 0;

	var reqVic = 0;
	var curVic = 0;

	var timer;

	var mapNumber = 70;
	var currentMap = 0;
	var mapArray = ["p p p p p p p p p p p p w w w w p p p p p p p p p p f f w w w w p p p p p p p p p p f f w w w w p p p p p p p p f f f f f f f f p p p p p p p p f f f f f f f f p p p p p p f f f d b d f f f f p p p p p p f f f f f f f f f f p p p p f f f f f f f f f f f f p p p f f f f f f f f f f f f f p p p f f f f f f f f f f f f f p f f f f f f f f f f f f f f f p p f f f f f f f f f f f f f f p p f f f f f f f f f f f f f w p f f f f f f f f f f f f w f f p f f f f f f f f f f f f f f f p f f f f f f f f f f f f w f w",
    "w w w w w w w w w w w w w w w w w w w f f f f f f f f f f f w w w w w f f f f f f f f f f f f w f f f f f f f f f f f f f f f w f f f f f f f f f f f f f f f w f f d f b f b f f f f f f f f w f f f b f b f b f f f f f f f w f f f d f b f b f f f f f f f w f f f f f d f d f d f f f f f w f f f f f f f f f b f f f f f w f f d f b f b f f f f f f f f w f f f f d f d f f f f f f f f w f f f f f f f f f f f f f f f w w f f f f f f f f f f f f f f w f w f f f f f f f f f f f f w w w w w w w w w w w w w w w w w w",
    "w w w w w w w w t t t t t w w w w w f f f f f f f f f f f f w w w f f o f f o f f o f f f f f w w f f t f f f f f f f f f f f w w f t o t f f f f f f f f f v f w f f t f f f f f f f f f w w f w f f f f f f f f f f f f w w f w f f f f f o f f f f f f v t w w f f f f f f f f f f f f f f w w f f f f f f f f f f f f f f w w f f t f f f f f f f f f f f w w f t o t f f f f w f f f f f w w f f t f f f f f w f f f f f w w f f o f f o f f f f f f f f w w w f f f f f f f f f f f f w w w w w w w w w f f f f f w w w w",
    "w w w w w w w w w w w w w w w w w w d f f f f f f f f f f d w w w d w f f f f f f f f f f o d w f f f f f f f d w f f f f f f f f f f w w w d d w f f f f f f f f f f w w d w d d f f f f f f f f f f w w d d w w f f f f f f f w f f f f f f f f f f f f f f f w f w d f f f f f f f f f f f f w f d d f f f f f f f f f f f f w f f f f f f f f f f f f f f f w f f f f f f f f f f f f f f f w f f f f f f f f f f f f f f f w d o f f f f f f f f f f o d w w w d f f f f f f f f f f d w w w w w w w w w w w w w w w w w w",
    "w w w w w w w w w w w w w w w w w w d f f f f f f f f f f d w w w d o f f o f f f f o f f o d w f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f o f f v w w w w v f f o f f f f f f f w f f f f w f f f f f f f f f f w f d z f w f f f f f f f f f f w f d d f w f f f f f f f f f f w f f f f w f f f f f f f o f f v w w w w v f f o f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f w d o f f o f f f f o f f o d w w w d f f f f f f f f f f d w w w w w w w w w f f w w w w w w w",
    "w w w w w w w w w w w w w w w w w w d f f f f f f f f f f d w w w d o f f f f f f f f f f o d w f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f w d o f f f f f f f f f f o d w w w d f f f f f f f f f f d w w w w w w w w w w w w w w w w w w",
    "w w w w w w w w w w w w w w w w w w d f f f f f f f f f f d w w w d o f f f f f f f f f f o d w f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f w d o f f f f f f f f f f o d w w w d f f f f f f f f f f d w w w w w w w w w w w w w w w w w w",
    "w w w w w w w w w w w w w w w w w w d f f f f f f f f f f d w w w d o f f f f f f f f f f o d w f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f d d f f f f f f f f f f f f f f w w f f f f f f f f f f f f f f f f f f f w d f f f f f f f f f f d w w f w d f f f f f f f f w d d w w f f f f f f f f f f f d w d w w f f f f f f f f w d o f f f f f f f f f f o d w w w d f f f w w f f f f f d w w w w w w w w d d f f f w w w w w",
        "w w w w w w w w w w w w w w w w w w d f f f f f f f f f f d w w w d o f f f f f f f f f f o d w f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f w d o f f f f f f f f f f o d w w w d f f f f f f f f f f d w w w w w w w w w w w w w w w w w w",
    "p f f f f f f f f f f f f f w w p f f f f f f f f f f f f f d w p f f w f f f f f f f f f f f f p f f f f f f f f f w f f f f f p f f f f f w f f f f f f f f f p f f f f f f f f f f f f f w f p p f f f f f f f d d w f f f f p p f f f d w f f d w d f f f f p p f f f d w f f d w d f f f f p p f f w f f f f f f f f w f f p p f f f f d d w f d w f f f f p p f f f w d w w f d w f d w d p p p f f f d w w f f f f w w d p p p f w w f f f f w w f w w d p w w w d d f f f f d d f w w w p w w w f f f f f f f f f w w w",
    "w w w w w w w w w w w w w w w w w w f f f f f f f f f f f d w w f f f f f f f f f f f f f o d w f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f w w w w w w w w w w w w w w w w w w w w w w w w w w w w w w w w",
    "w w w w w w f f f f f f w w w w w w d f f f f f f f f f f d w w w d o f f f f o f f w f f w d w f f f f f w f f f f f f f d w d f f o f o f f f f o f f f v t f f f f f f f f f f f f f f w w f f f f f f t t f f w w f f w w f f f f f f w o f f f f o f f v f f f f f f w w f f w f f f w w f f f w w f f f f f w f f f w w f f f w w t f f f f f f f f f w f f f w t o f f f f f f t o w f f f f t t t f f f w f f f t f w f f f f f f w f f f f w f t w f f w w f f f f f f f f f f w f w w w w f f f f f f f f f f f f w w",
    "w w w w w w w w w w w w w w w w w w d f f f f f f f f f f d w w w d o f f f f f f f f f f o d w f f f f f f f f f f f f f f f f f f w f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f w w f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f w f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f w f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f w w w w w w w w w w w w w w w w w w w w w w w w w w w w w w w w",
    "w w w w w w w f f w w w w w w w w w d f f f w f f w f f f d w w w d o f f f v w w v f f f o d w f f f f f f f f f f f f f f f w f f f f f f f f f f f f f f f w f f f f f f f f f f f f f f f w f f f f f f f f f f f f f f f w f f f f f f f f f f f f f f f w f f f f f f f f f f f f f f f w f f f f f f f f f f f f f f f w f f f f f f f p f f f f f f f w f f f f f f p f f f f f f f f w f f f f f f p f f f f f f f f w f f f f f p f f f f f f f f f w w w w p p w w w w w w w w w w w w w p p p w w w w w w w w w w w",
    "w w w w w w w w w w w w w w w w w w d f o f f f f f f o f d w w w d d f f f f f t f f f f d d w w f f f f f f f o t f o f f o t w f f f f f f f f f f f f f t t w f f f f f f f f f f w f f o f w f f f f f f f f f f f f f w f w f f f f f f f t f f f f f w f w f f f o f f t o f f f f f v f w f f f f f f f t f w f f f w f w f f f f f f f f f f f f f w f w f f f f f f f f f f f f w w f w f f f f f f f f w f f w w w w w f f f f f f f f f f f w w w w w w w w w w w w w w f f w w w w w w w w w w w w w w f f w w w w",
    "w w w w w w w w w w w w w w w w w w d f f f f f f f f f f d w w w d o f f f f f f f f f f o d w f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f o f f f f o f f f f f f f f f f f f f f f f f f f f f w w w w w w f f f f w w w w w w w w w w w w w w w w w w w w w w w w w w w w w w w w w w w w w w",
    "w w w w w w w f f f f f w w w w w w d f f f f d w f d w f d w w w d o f f f f w d f d w f w d w f f f f f f f f f f w d f d w d f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f w w f f f f f f f f f f f f f f w w w w w w w w w w w w w w w w w w w w w w w w w w w w w w w w",
    "w w w p p p p p p p p p p p p p w w d f f p p p p p p p p p p p w d o f f f f f p p p p p p p p f f f f f f f f f p p p p p p p f f f f f f f f f f p p p p p p f f f f f f f f f f p p p p p p f f f f f f f f f f f p p p p p f f f f f f f f f f f p p p p p f f f f f f f f f f f p p p p p f f f f f f f f f f f p p p p p f f f f f f f f f f p p p p p p f f f f f f f f f f p p p p p p f f f f f f f f f f p p p p p p f f f f f f f f f f p p p p p p w w w w w f w f f f p p p p p p w w w w f f f f f f p p p p p p",
    "p w w w f f f f f f f f w w w w p w w w f f f f f f f f f f w w p p f f w f f f f f f f f f f f p p f f w f f f f f f f f f f f p p f f f f f f f f f f f f f f p p f f f f f f f f f f f f f f p p f f f f f f f f f f f f f f p p f f f f f f f f f f f f f f p p p f f f f f f f f f f f f f p p p f f f f f f f f f f f f f p p p f f f f f f f f f f f f f p p f f f f f f f f f f f f f f p p f f f f f f f f f f f f f f p p f f f f f f f f f f f f f f p p f f f f f f f f f f f f f f p p f f f f f f f f f f f f f f",
    "w w w w w w w w w w w w w w w w w w w w w w w w w w w w w w w w f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f w w f f w f f f f f f f f f f f w w w f f f f f f f f f f f f f f w f w f f f f f w f f w w w w w w f w w w w w w f w w w w",
    "w w f f f f f f f f f f f f w w w w f f f f f f f f f f f f w w f f f f f f f f f f f f f f f f f f w f f f f f f w f f f w f f f f f f f f f f f f f f f f w f f f f f w f f f f f f f f f f f f f f w f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f w f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f w w w w w w w w w w f f f f f f w w w w w w w w w w f f f w w w",
    "w w w w w w w w w w w w w w w w w w w w w w w w w w w w w w w w f f f f f f f f f f f f f f f p f f f f f f o f f w f f f f p p f f f f f f f f f f f f f f p p f f f f f f f f f f f f f p f f f f f f f f f f f f f f p f f f f f f f f f f f f f f f f f o f f f f f f f f f w f f f w w w w f f f f f f f f f f f f w w w w f f f f f f o f f f f f w w w w f f f f f f f f f f f f w w w w f f f f f f f f f f f f f f f f f f f f d w f f f f f f f f f f f f f f w d w w w w w w w w d w w w w w w f w w w w w w w w w d",
    "w w p p w w w w w w w w w w w w p p w w w w w w w w w w w w w w p p f f f f f f f f f f f w w w p w f f f f f f f f f f f f w w f w w f f f f f f f f f f f w w f f v f f f f f f f f f o f f w f f w f f f f f f f f w f f f w f f w f f f f f f f f f f f f w w w w f f f f f f f f f f f w f w w w f f f f f f f f f f f w f w w w f f f f f f f f f f f f w w w w f f o f f f f f f o f f w w f f f f f f f f f f f f f f w w f f f f f f f f f f f f f w f f t w w w w w w f f w w w w w w w t w w w w w w f f w w w w w w",
    "w w w w w w w w w w f f w w w w w w w w w w w f f f f f d w w w w w w w w w d w d d f f w d w w w w w w d f f w d d f f d d w w w w w w d w d d w d f f f f f f w w w w d w d f f f f d f f f f w w w w d f f f f f b d d f f f d d w w d f f f f d d b f f f f w w d d w f f f d b d f f f f f f d w f f f f b d d f f f f f f f w d f f f d d b f f f f w f f d d w f f d b d f f f f f f f f w d w f f d d f f f f w f w d f w w d f f f f f f f f f f w d f w w d f f f f f w w d w f f f f w w w w w t t t w w w w w w w w",
    "w w w w w w w w w w w w w w w w w w w w w w w w w w w w w w w w w w w w w w f f f f w w w w w w w w w w w w f f f f w w w w w w f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f o f f f f o f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f o f f f f o f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f w w w f f f f f f f f f f f f w",
    "w w w w w w w w w w w w w w w w w w w w w w w w w w w w w w w w w w f f f f f f f w f f w f f w w w f f f f f f f f w f f w f w f f f f f f f w f f f f w w f f f f f f f f f f f f f f f f w f f f f f f f f f w f f f f f w f f f f f f f w f f f f f w f f w f f f f f f f f f f f f f w f w f f f f f f f f f w f f f w w f f f f f f w w f f w f f w f f f f f f f f f f f f f f f f w f f f f f f f f f f f f f f f f w f f f f f f f f f f f f w w f w w f f f f f f f f f f f w w w w w w w w w w f f f f f f w w w w w",
    "w w w w w f f f f f f p p p p p w f f f f f f f f f f p p p p p w f f f f f f f f f p p p p p p f f f f f f f f f f p p p p p p f f f f f f f p p p p p p p p p f f f f f f f p p p p p p p p p f f f f f p p p p p p p p p p p f f f f f p p p p p p p p p p p f f f f f p p p p p p p p p p p f f f f p p p p p p p p p p p p f f p p p p p p p p p p p p p p f p p p p p p p p p p p p p p p f p p p p p p p p p p p p p p p f p p p p p p p p p p p p p p p p p p p p p p p p p p p p p p p p p p p p p p p p p p p p p p p",
    "p p f f f f f f f f f f f f w w p p f f f f f f f f f f f f d w p p f f f f f f f f f f f f d w p p f f f f f f f f f f f f f f p f f f f f f f f f f f f f f f p f f f f f f f f f f f f f f f p f f f f f f f f f f f f f f f p f f f f f f f f f f f f f f f p p f f f f f f f f f f f f f f p p f f f f f f f f f f f f f f p p f f f f f f f f f f f f f f p p f f f f f f f f f f f f f f p p f f f f f f f f f f f f d w p p f f f f f f f f f f f f d w p p f f f f f f f f f f f f w w p p f f f f f f f f f f f f w w",
    "w w w w f f w w w w f f w w w w w w f f w w f f f f w w f f w w w f f f w w f f f f f f w f w w f w w f f f f f f w f f f f w w f f f f f f f f f f f f f f w w f f f f f f f f f f f f f f w w f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f w f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f w w f f w w w f f w f f f f w w w w w w w w w w f f w f f w w w w w w w w w w w f f w w f w w w w w w w w w w w w w f f w w w w w w w w w w w w f f w f f w w w w w",
    "w w w w w w w w w w f f f w w w w w w w w w w w w w f f f w w w w w w w w w w w w w f f f w w w w w w w w w w w w w f f f w w w w w w w w w w w w w f f f w w w w w w w w w w w w w f f f w w w f f f f f f f f f f f f f f f w f f f f f f f f f f f f f f f w f f f f f f f f f f f f d w w w w w f f f f f f f f f f w w w w w d f f f f f f f f f f w w w w w d w w w w w w w w f f w w w w w d w w w w w w w w f f w w w w w w w w w w w w w w f f w w w w w w w w w w w w w w f f w w w w w d w w w w w w w w f f w w w w",
        "w w w w w w w w w w f f f w w w w w w w w w w w w w f f f w w w w w w w w w w w w w f f f w w w w w w w w w w w w w f f f w w w w w w w w w w w w w f f f w w w w w w w w w w w w w f f f w w w f f f f f f f f f f f f f f f w f f f f f f f f f f f f f f f w f f f f f f f f f f f f d w w w w w f f f f f f f f f f w w w w w d f f f f f f f f f f w w w w w d w w w w w w w w f f w w w w w d w w w w w w w w f f w w w w w w w w w w w w w w f f w w w w w w w w w w w w w w f f w w w w w d w w w w f f f f f f f f f f",
    "w w p p w w w w w w w w w w w w p p w w w w w w w w w w w w w w p p f f f f f f f f f f f w w w p w f f f f f f f f f f f f w w f w w f f f f f f f f f f f w w f f v f f f f f f f f f o f f w f f w f f f f f f f f w f f f w f f w f f f f f f f f f f f f w w w w f f f f f f f f f f f w f w w w f f f f f f f f f f f w f w w w f f f f f f f f f f f f w w w w f f o f f f f f f o f f w w f f f f f f f f f f f f f f w w f f f f f f f f f f f f f w f f t w w w w w w f f w w w w w w w t w w w w w w f f w w w w w w",
        "w w w w w w w w w w f f f w w w w w w w w w w w w w f f f w w w w w w w w w w w w w f f f w w w w w w w w w w w w w f f f w w w w w w w w w w w w w f f f w w w w w w w w w w w w w f f f w w w f f f f f f f f f f f f f f f w f f f f f f f f f f f f f f f w f f f f f f f f f f f f d w w w w w f f f f f f f f f f w w w w w d f f f f f f f f f f w w w w w d w w w w w w w w f f w w w w w d w w w w w w w w f f w w w w w w w w w w w w w w f f w w w w w w w w w w w w w w f f w w w w w d w w w w f f f f f f f f f f",
    "w w w f f f f f f f f f d w w w w w w f f o f f f f o f d d w w w w w f f f f f f f f f w d d w w w w f f f f f f f f f d d d w w w w f f f f f f f f f d d w w w w w f f f f f f f f f d d w w w w w f f o f f f f o f d w w w w w w f f f f f f f f f d w w w w w w f f f f f f f f f d w w w d t f f f f f f f f f f f f f w t d f f f f f f f f f f f w w w w w w w f o f f f f o f f w w w w w w w f f f f f f f f f w w w w w w w f f f f f f f f f w w w w w w w f f f f f f f f f w w w w w w w f f f f f f f f f w w w",
    "w w w w w f f f f f f f w w w w w w w w w f f f f f f f f f w w w w w w w f f f f f f f f f f w w w w w w f f f f f f f f f f f w w w w w f f f f f f f w f f f w w w w w f f f f w f f f f f f w w w w w f f f f f f f f f f f w w w w w f f f f f f f w f f f w w w w w f f f f f f f f f f f w f f f f f f f w w f f f w f f w w w w w w f f f f f f f f f f w w w w w w f f f f f w f f f f w w w w w w f f f f w f f f w f w w w w w w f f f f f f f f f f w w w w w w f f f f f f f f f w w w w w w w f f f f f f f f f w",
    "w w w w w f f f f f f p p p p p w f f f f f f f f f f p p p p p w f f f f f f f f f p p p p p p f f f f f f f f f f p p p p p p f f f f f f f p p p p p p p p p f f f f f f f p p p p p p p p p f f f f f p p p p p p p p p p p f f f f f p p p p p p p p p p p f f f f f p p p p p p p p p p p f f f f p p p p p p p p p p p p f f p p p p p p p p p p p p p p f p p p p p p p p p p p p p p p f p p p p p p p p p p p p p p p f p p p p p p p p p p p p p p p p p p p p p p p p p p p p p p p p p p p p p p p p p p p p p p p",
        "p f f f f f f f f f f f f f w w p f f f f f f f f f f f f f d w p f f w f f f f f f f f f f f f p f f f f f f f f f w f f f f f p f f f f f w f f f f f f f f f p f f f f f f f f f f f f f w f p p f f f f f f f d d w f f f f p p f f f d w f f d w d f f f f p p f f f d w f f d w d f f f f p p f f w f f f f f f f f w f f p p f f f f d d w f d w f f f f p p f f f w d w w f d w f d w d p p p f f f d w w f f f f w w d p p p f w w f f f f w w f w w d p w w w d d f f f f d d f w w w p w w w f f f f f f f f f w w w",
        "p f f f f f f f f f f f f f w w p f f f f f f f f f f f f f d w p f f w f f f f f f f f f f f f p f f f f f f f f f w f f f f f p f f f f f w f f f f f f f f f p f f f f f f f f f f f f f w f p p f f f f f f f d d w f f f f p p f f f d w f f d w d f f f f p p f f f d w f f d w d f f f f p p f f w f f f f f f f f w f f p p f f f f d d w f d w f f f f p p f f f w d w w f d w f d w d p p p f f f d w w f f f f w w d p p p f w w f f f f w w f w w d p w w w d d f f f f d d f w w w p w w w f f f f f f f f f w w w",
        "p f f f f f f f f f f f f f w w p f f f f f f f f f f f f f d w p f f w f f f f f f f f f f f f p f f f f f f f f f w f f f f f p f f f f f w f f f f f f f f f p f f f f f f f f f f f f f w f p p f f f f f f f d d w f f f f p p f f f d w f f d w d f f f f p p f f f d w f f d w d f f f f p p f f w f f f f f f f f w f f p p f f f f d d w f d w f f f f p p f f f w d w w f d w f d w d p p p f f f d w w f f f f w w d p p p f w w f f f f w w f w w d p w w w d d f f f f d d f w w w p w w w f f f f f f f f f w w w",
        "p f f f f f f f f f f f f f w w p f f f f f f f f f f f f f d w p f f w f f f f f f f f f f f f p f f f f f f f f f w f f f f f p f f f f f w f f f f f f f f f p f f f f f f f f f f f f f w f p p f f f f f f f d d w f f f f p p f f f d w f f d w d f f f f p p f f f d w f f d w d f f f f p p f f w f f f f f f f f w f f p p f f f f d d w f d w f f f f p p f f f w d w w f d w f d w d p p p f f f d w w f f f f w w d p p p f w w f f f f w w f w w d p w w w d d f f f f d d f w w w p w w w f f f f f f f f f w w w",
        "p f f f f f f f f f f f f f w w p f f f f f f f f f f f f f d w p f f w f f f f f f f f f f f f p f f f f f f f f f w f f f f f p f f f f f w f f f f f f f f f p f f f f f f f f f f f f f w f p p f f f f f f f d d w f f f f p p f f f d w f f d w d f f f f p p f f f d w f f d w d f f f f p p f f w f f f f f f f f w f f p p f f f f d d w f d w f f f f p p f f f w d w w f d w f d w d p p p f f f d w w f f f f w w d p p p f w w f f f f w w f w w d p w w w d d f f f f d d f w w w p w w w f f f f f f f f f w w w",
        "p f f f f f f f f f f f f f w w p f f f f f f f f f f f f f d w p f f w f f f f f f f f f f f f p f f f f f f f f f w f f f f f p f f f f f w f f f f f f f f f p f f f f f f f f f f f f f w f p p f f f f f f f d d w f f f f p p f f f d w f f d w d f f f f p p f f f d w f f d w d f f f f p p f f w f f f f f f f f w f f p p f f f f d d w f d w f f f f p p f f f w d w w f d w f d w d p p p f f f d w w f f f f w w d p p p f w w f f f f w w f w w d p w w w d d f f f f d d f w w w p w w w f f f f f f f f f w w w",
        "p f f f f f f f f f f f f f w w p f f f f f f f f f f f f f d w p f f w f f f f f f f f f f f f p f f f f f f f f f w f f f f f p f f f f f w f f f f f f f f f p f f f f f f f f f f f f f w f p p f f f f f f f d d w f f f f p p f f f d w f f d w d f f f f p p f f f d w f f d w d f f f f p p f f w f f f f f f f f w f f p p f f f f d d w f d w f f f f p p f f f w d w w f d w f d w d p p p f f f d w w f f f f w w d p p p f w w f f f f w w f w w d p w w w d d f f f f d d f w w w p w w w f f f f f f f f f w w w",
        "p f f f f f f f f f f f f f w w p f f f f f f f f f f f f f d w p f f w f f f f f f f f f f f f p f f f f f f f f f w f f f f f p f f f f f w f f f f f f f f f p f f f f f f f f f f f f f w f p p f f f f f f f d d w f f f f p p f f f d w f f d w d f f f f p p f f f d w f f d w d f f f f p p f f w f f f f f f f f w f f p p f f f f d d w f d w f f f f p p f f f w d w w f d w f d w d p p p f f f d w w f f f f w w d p p p f w w f f f f w w f w w d p w w w d d f f f f d d f w w w p w w w f f f f f f f f f w w w",
        "p f f f f f f f f f f f f f w w p f f f f f f f f f f f f f d w p f f w f f f f f f f f f f f f p f f f f f f f f f w f f f f f p f f f f f w f f f f f f f f f p f f f f f f f f f f f f f w f p p f f f f f f f d d w f f f f p p f f f d w f f d w d f f f f p p f f f d w f f d w d f f f f p p f f w f f f f f f f f w f f p p f f f f d d w f d w f f f f p p f f f w d w w f d w f d w d p p p f f f d w w f f f f w w d p p p f w w f f f f w w f w w d p w w w d d f f f f d d f w w w p w w w f f f f f f f f f w w w",
        "p f f f f f f f f f f f f f w w p f f f f f f f f f f f f f d w p f f w f f f f f f f f f f f f p f f f f f f f f f w f f f f f p f f f f f w f f f f f f f f f p f f f f f f f f f f f f f w f p p f f f f f f f d d w f f f f p p f f f d w f f d w d f f f f p p f f f d w f f d w d f f f f p p f f w f f f f f f f f w f f p p f f f f d d w f d w f f f f p p f f f w d w w f d w f d w d p p p f f f d w w f f f f w w d p p p f w w f f f f w w f w w d p w w w d d f f f f d d f w w w p w w w f f f f f f f f f w w w",
    "p p p f f f f f f f f f f f w w p p p f f f f f f f f f f f f f p p p f f f f f f f f f f f f f p p p f f f f f f f f f f f f f p p p p f f f f f f f f f f f f p p p p p f f f f f f f f f f f p p p p p f f f f f f f f f f f p p p p p f f f f f f f f f f f p p p p p f f f f f f f f f f f p p p p p f f f f f f f f f f f p p p p f f f f f f f f f f f f p p p p f f f f f f f f f f f f p p p p f f f f f f f f f f f w p p p p f f f f f f f f f f f w p p p p f f f f f f f f f f f w p p p p f f f f f f f f f f f w",
    "w w w w w w d w d w d d w w w w f f f f f w w d w d w w f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f w w w w w w w w w w w w f f f f w w w w w w w w w w w w f f f f w w w w w w w w w w w w f f f f w w w w w w w w w w w w t t t t",
    "w w w w w w d w d w d d w w w w f f f f f w w d w d w w f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f w w w w w w w w w w w w f f f f w w w w w w w w w w w w f f f f w w w w w w w w w w w w f f f f w w w w w w w w w w w w t t t t",
    "w w w w w w w w w w w w w w f f w w w w f f w w w w w w w w f f w w w w f f w w w w w w w w f f w w w w f f w w w w w w w w t f f f f f f f w w w w w w w w t f f f f f f f w w w w w w w w f w f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f w f f f f f f f f f f f f f f f w f f f f f f f f f f f f f f f w f f f f f f f f f w w w w w w w f f f f f f f f f w w w w w w",
    "w w w w w w f f f f w w w w w w w w w w w w f f f f w w w w w w w w w w w w f f f f f f f f f f w w w w w w f f f f f f f f f f f f f f f f f f f f o f f f f f w f f f f w f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f w w f f f f f f f f f f w f f f f f f f f f f f f f f f w f f f f f f f f f w f f f f w w w w w w w w f f f w f f f f w w w w w w w w f f f w f f f f w w w w w w w w f f f w f f f f w w w w w w w w f f f w",
    "w w w w w w w w w w w w w w w w w w w w t d w w w w w w w w w w f f f d d w w f w w w w f w w d f f f w d w d f w w w w f d w d f o f f w d w f f f f o d d w d f f f f w d w f f f f w w f f f f f f f d w w f f w w f f f f f f f f f f f f f f w w f f f f f f f f f f f f f f f f f f f f f f w f f f f o f w f f o f f f f f f f f f f f f f f f f f f f f w w w w f w w w w w w w f w w w w w w w f w w w w w w w f w w w w w w w f w w w w w w w f w w w w w w w f w w w w w w w t w w w w w w w f w w w w w w w f w w w",
    "w w w w f o f f f f w f f f w w w w w f f f f f f f f f f f w w f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f o f f f f o f f f f o f f f f o f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f o f f f f o f f f f o f f f f o f f f f f f f f f f f f f f f f w w w f f f f f f f f f f w w w w w w f f f f f f f f f f w w w w w w f f f f f f f f f f w w w w w w f f o f f f f o f f w w w w w w f f f f f f f f f f w w w",
    "w w w w w d f f f f f f f f f p w w w w w d f f f f f f f f f p f f w d d d f f f f f f f f f p f f d d d w f f f f f f f f f p f f d w w d f f f f f f f f f p f f f f f f f f f f f f f f f p f f f f f f f f f f f f f f p p f f f f f f f f f f f f f f p p f f f f f f f f f f f f f f p p f f f f f f f f f f f f f f p p f f f f f f f f f f f f f f p p w w w w w w f f f f f f f f p p w w w w w w f f f f f f f f f p w w w w w w f f f f f f f f f p w w w w w w f f f f f f f f f p w w w w w w f f f f f f f f f p",
    "w w w w w d f f f f f f f f f p w w w w w d f f f f f f f f f p f f w d d d f f f f f f f f f p f f d d d w f f f f f f f f f p f f d w w d f f f f f f f f f p f f f f f f f f f f f f f f f p f f f f f f f f f f f f f f p p f f f f f f f f f f f f f f p p f f f f f f f f f f f f f f p p f f f f f f f f f f f f f f p p f f f f f f f f f f f f f f p p w w w w w w f f f f f f f f p p w w w w w w f f f f f f f f f p w w w w w w f f f f f f f f f p w w w w w w f f f f f f f f f p w w w w w w f f f f f f f f f p",
        "p p p p t t t f f t t t t t t w " +
        "p o p p d d f v w w f f f f f w " +
        "p p p p d d f f f f f f f f f f " +
        "p p p p w w f f f f f f f f f f " +
        "p p p p w w p p f f f f f d o f " +
        "p p p p p p p t d f f f f d d f " +
        "p p p p p p p o w f f f f f f f " +
        "p p p p p p p p f f f f f f f f " +
        "p p p p p p f f f f f f f f f f " +
        "p p p w p p f o f f f f f d o d " +
        "p p p p f f f f f f f f f d d d " +
        "p o p p f f f f f f f f f d o d " +
        "p p p p f f f f f f f f f f f f " +
        "p p p p f f f f f w f f f w w w " +
        "p p p p f f f f w w f f f w w w " +
        "p p p p w w w w w w f f f w w w ",

        "w w w w w w w w w w w w t t t t " +
        "w w w w w w w w w w w w d d d d " +
        "f f f f f f f f f f f f f f f f " +
        "f f f f f f f f f f f f f f f f " +
        "f f f f f f f f f f d d d d f f " +
        "f f f f f f f f f f d d d d f f " +
        "f f f f f f f f f f d d d d f f " +
        "f f f f f f f f f f d d d d f f " +
        "f f f f f f f f f f f f f f f f " +
        "f f w d f f f f f f f f f f f f " +
        "f f w d f f w d d f f f d d f f " +
        "f f d d f f d w w f f f w w f f " +
        "w f d w f f d w w f f f f f f f " +
        "w f f f f f f f f f f f f f f f " +
        "w d d d d d w f f d d d d d d w " +
        "w w w w w w w f f w w w w d d w ",

        "w w w w w f f f f f w w w w w w " +
        "d d d d d w w v w w f f f f w f " +
        "d d d d f f f f f f f f f f w f " +
        "d d d d f f f d d d d d d f v f " +
        "d d d d f f o d d d d d d f f f " +
        "f f f f f f f d d d d d d f f f " +
        "f f f f f f f d d d d d d f f f " +
        "f f f f f f f d d d d d d f f f " +
        "f f f o f f o f f f f f f f f f " +
        "f f f f f f f f f f f f f f f f " +
        "f f f f f f f f f f f f f f f f " +
        "f f f f f f f f f f f f f f f f " +
        "f f f f f f w w w w w w w w t w " +
        "f f f o f f t t t t t t t t o w " +
        "w w f f f f w w w w w w w w w w " +
        "w w f f f t w w w w w w w w w w ",

        "w f f f f f f f w w w w w w w w f f f f f f f f w w w w w w w w w w w w w w f f w w w w w w w w w w w w w w t t w w w w w w w w w w w w w w f f f f f f f f f f w w w w w w f f f f f f f f f f w w w w w w f f f f d d d d f f w w w w w w f f f f d d d d f f w w w w w w f f f f d d d d f f w w w w w w f f f f d d d d f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f w f f f f f f f f f f f f f f f w f f f f f f f f f f f f f f f w f f d d w d d d d w d f f f f w f f d w w w d d d d w f f w w",
        "f f f f w w w w w w w w f f f w f f f f w w w w w w w w f f f f f f f f w w w w w w w w f f f f f f f f w w w w w w w w f f f f f f f f w w w w w w w w f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f w w w w f f d d d d d d f f f f w w w w f f d d d d d d f f f f w w w w f f d d d d d d f f f f w w w w f f d d d d d d f f f f w w w w f f d d d d d d f f f f w w w w f f d d d d d d f f f f f f f f f f f f f f f f f f w w w w w w w w w w w w w w w t",
        "w w w w w v w w w w w w f w w w f f f f f f f f f f f f t w w w f f f f f f f f f f t f f w w w f w d f f f f f f f f f f w w w f w d f f f f f f f f f f w w w f f f f f f f f f f f f f f f f f f f f f f f f f f f f f w w w f w w w t t w w w w w f f w w w f w f f f f f f f f w f f w w w f w f f f f f f o f w f f w w w f w f f f o f f f f w f f w w w f w f f f f f f f f w f f w w w f w f w f f f f f f w f f w w w f w w f f w w w w w w f f w w w f f f f f f f f f f f f f f f f w w w w w w w w w w w w w t t t",
        "w w w f f f f f f f f f w w w w w w w f f f f f f f f f f f f f w w w f f f f f f f f f f f f f w w w f f o f f f f o f w w w w w w w f f f f f f f f f w w w w f f f f f f f f f f f f w w w w w w w f f f f f f f f f w w w w w w w f f f f f f f f f w w w w w w w f f o f f f f o f w w w w w w w f f f f f f f f f w w w w w w w f f f f f f f f f w w w w w w w f f f f f f f f f w w w w w w w f f f f f f f f f w w w w w w w f f o f f f f o f w w w w f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f w",
        "w w w w w w f f f f f f f f f p f f f f f f f f f f f f f f p p f f f f f f f f f f f f f f p p w w w w f f f f f f f f f f p p w w w w f f f f f f f f f p p p w w w w f f f f f f p p p p p p w w w w f f f f f f f f f p p p w w w w f f f f f f p p p p p p w w w w f f f f f f f f f p p p w w w w f f f f f f f p p f p p w w w w f f f f f f f f f f p p w w w w f f f f f f f f f p f p w w w w f f f f f f f f p f f p w w w w f f f f f f f f f f f p f f f f f f f f f f f f f f f t w w w w w w w w w w w w w w t t",
        "p p p p w w w w w w w w v w w w p p p p w w w w w w f f f f f f p p p f w w o t t t f f o t o w p p p f w w t w w w f f w w d d p f f f f f f f f f f f d d d d p f f f f f f f f f f f d d d d p f f f f f f f f f f f d d d d p f f f f f f f f f f f d d d d p w w w f f o f f f f f f f f f p f f f f f f f f f f f f f f w p f f f f f f f f f f f f f f w p f f f w f f f f f f f f f f f p p f f f f f f f f f f f f f f p p f f f f f f f f f f f f f f p p f f f f f f f f d d d d f f p p f f f f f f f f d d d d f f",
        "w w w w w w w f f w w w w w v w f f f f f f f w w f f f f d d d o d d f f f f f f f f f f t o w d w o f f f f f o w w f f w t w d w d f f f f w d d d f f f f t d d d f f f f w d d w f f f f w d d d f f f f d d d d f f w f w d d d f f f f f f f f f f f f w f f f f f f f f w w w w w w w w o f o f f f f f f f f f f f f f w f w w f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f d d d d d d d d f f f f f f f f d d d d d d d d",
        "w w f f f t w w w w w w w w w w f f v w w f f f f f f f f f f f w f f f f f f f d d d d f f f f w f f f f f f f d d d d f f f f t f f f f f f f d d d d f f f f w w f f f f f f d d d d f f f f w w o f o f f f f f f f o f f f w w f f t f f f f f f f f f f f w w w w f w w w w w w w v w w w f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f w d f f f f f o f f f f f o f f d w f f f f f f f f f f f f f f f f f",
        "w f f d w w w w w w d w f f w d f f f d d w w w w w d w f f d w f f f w w d d w w d d d f f d w f f f d d f d w d d d d f f d w f f f f f f f f f w f d w f w d f f f f f w d d f f f d d f w d d d w f f d d d f f f d w d d w d d w f f d d d f f f d w d d w w w f f f f f f f f f f d w w w f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f d d f f f f f w f f f f f f f f w w f f f f f f f f f f o f f f f f f f f f f f f f f f f f f",
        "d d d w w w w w w w w w w w w f d d d w w w w w w w w w w w w w d d d d d d d d d w w w w w d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d w d d d d w d d d d w d d d d d d d d d d d d d d d d d d f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f o d d d d o d d d d o f f f f f d d d d d d d d d d d f f f",
        "w w w w w w w w w w w w w d d d w w w w w w w w w w w d d d d d w w w w w d d w d d d d d w w w w w w d d d w w d d d d d w w w d d d d d d w d d d w w d d d d d d d d w d d d w w d d d d d d d d d d d d w d d d d d d d d d d d w d d w w w d w d d w d d d w w w w w f f f w w w w w w w w f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f o d d d d o d d d d o d d d d f d d d d d d d d d d d d d d d",
        "t f f f f f f f f f f f f f f w w f f f f f f f f f f f f f f w t f f f f o f f f f o f f f f w w f f f f f f f f f f f f f f t w f f f f f f f f f f f f f f t w f f f f f f f f f f f f f f t w f f f f f f f f f f f f f f t w w f f f o f v w w o f f f w t w w w w w t f w f f w w w w w w f f f f f o w f f f o f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f o f f f f o f f f f o f f f f w d f f f f f f f f f f f f f f f",
        "w w w w w w w w w w w w w w f f w w w w w w w w w w w w w w w w w w w w w w w w w w w w w w w w t t t t w w w w w w w w w d d d t t t t d d d d d d d d d d d d t t d d d d d d d d d d d d d d t t d d d d d d d d d d d d d t t t d w d d d d w d d d d w d t w w w w w w w w w w w w w w w t f f f f f f f f f f f f f f f t f f f f f f f f f f f f f f t t f f f f f f f f f f f f f f t t f f f f f f f f f f f f f f t t f f f f f f f f f f f f f f t t f f f f f f f f f f f f f f f t f f f f f f f f f f f f f f f t"
    ];

	//var mapSizeArray = [[9, 9], [9, 9], [9, 9], [9, 9], [14, 14], [14, 14], [16, 16], [16, 16], [16, 16], [16, 16]];

	var mapWhereToArray = [[0, "N", 1, 9, "W"], [1, "N", "E", "S", 0], [2, "N", 3, 11, "W"], [3, "N", 4, "S", 2], [4, "N", 5, 13, 3],
    [5, "N", 6, "S", 4], [6, "N", 7, "S", 5], [7, "N", "E", 16, 6], [8, "N", "E", "S", "W"], [9, 0, 10, 18, "W"], [10, "N", 11, "S", 9],
    [11, 2, 12, 20, 10], [12, "N", 13, "S", 11], [13, 4, "E", "S", 12], [14, "N", 15, 23, "W"], [15, "N", 16, "S", 14], [16, 7, 17, "S", 15],
    [17, "N", "E", 26, 16], [18, 9, 19, 27, "W"], [19, "N", 20, "S", 18], [20, 11, 21, 29, 19], [21, "N", 22, "S", 20], [22, "N", "E", 31, 21],
    [23, 14, 24, "S", "W"], [24, "N", 25, 33, 23], [25, "N", "E", 34, 24], [26, 17, "E", 35, "W"], [27, 18, 28, 46, "W"], [28, "N", 29, "S", 27],
    [29, 20, "E", 48, 28], [30, 22, "E", 50, "W"], [31, 22, "E", 50, "W"], [32, 22, "E", 50, "W"], [33, 24, "E", 52, "W"], [34, 25, 35, 53, "W"],
    [35, 26, "E", "S", 34], [36, 26, "E", "S", 34], [37, 26, "E", "S", 34], [38, 26, "E", "S", 34], [39, 26, "E", "S", 34], [40, 26, "E", "S", 34],
        [41, 26, "E", "S", 34], [42, 26, "E", "S", 34], [43, 26, "E", "S", 34], [44, 26, "E", "S", 34], [45, 26, "E", "S", 34],
        [46, 27, 47, 55, "W"], [47, "N", 48, "S", 46], [48, 29, 49, 57, 47], [49, "N", 50, 58, 48], [50, 31, 51, 59, 49],
    [51, "N", 52, 60, 50], [52, 33, 53, 61, 51], [53, 34, "E", 62, 52], [54, 34, "E", 62, 52], [55, 47, 56, 63, 55], [56, 56, 57, 64, 55],
        [57, 49, 58, 65, 56], [58, 50, 59, 66, 57], [59, 51, 60, 67, 58], [60, 52, 61, 68, 59], [61, 53, 62, 69, 60], [62, 54, 63, 70, 61],
        [63, 55, 64, 70, 62], [64, 56, 65, 70, 63], [65, 57, 66, 73, 64], [66, 58, 67, 74, 65], [67, 59, 68, 70, 66], [68, 60, 69, 70, 67],
        [69, 61, 70, 70, 68], [70, 62, 70, 70, 69]];

	var playerSpawnArray = [[[8, 8], [15, 8], [8, 15], [8, 8]], [[8, 8], [15, 8], [8, 15], [0, 8]], [[8, 8], [15, 6], [10, 15], [0, 8]], [[8, 8], [15, 8], [8, 15], [0, 6]],
        [[8, 8], [15, 8], [8, 15], [0, 8]], [[8, 8], [15, 8], [8, 15], [0, 8]], [[8, 8], [15, 8], [8, 15], [0, 8]], [[8, 8], [15, 8], [9, 15], [0, 8]],
        [[8, 8], [15, 8], [8, 15], [0, 8]], [[8, 0], [15, 8], [8, 15], [0, 8]], [[8, 8], [15, 8], [8, 15], [0, 8]], [[10, 0], [15, 6], [8, 15], [0, 8]],
        [[8, 8], [15, 8], [8, 15], [0, 6]], [[8, 0], [15, 8], [8, 15], [0, 8]], [[8, 0], [15, 7], [11, 15], [0, 8]], [[8, 0], [15, 8], [8, 15], [0, 8]],
        [[10, 0], [15, 8], [8, 15], [0, 8]], [[8, 0], [15, 8], [8, 15], [0, 8]], [[8, 0], [15, 8], [8, 15], [0, 8]], [[8, 0], [15, 8], [8, 15], [0, 8]],
        [[8, 0], [15, 8], [12, 15], [0, 8]], [[8, 0], [15, 8], [8, 15], [0, 8]], [[8, 0], [15, 8], [10, 15], [0, 7]], [[11, 0], [15, 8], [8, 15], [0, 8]],
        [[8, 0], [15, 9], [8, 15], [0, 9]], [[8, 0], [15, 8], [8, 15], [0, 8]], [[8, 0], [15, 8], [8, 15], [0, 8]], [[8, 0], [15, 8], [8, 15], [0, 8]],
        [[8, 0], [15, 8], [8, 15], [0, 8]], [[12, 0], [15, 8], [12, 15], [0, 8]], [[8, 0], [15, 8], [8, 15], [0, 8]], [[10, 0], [15, 8], [8, 15], [0, 8]],
        [[8, 0], [15, 8], [8, 15], [0, 8]], [[8, 0], [15, 8], [8, 15], [0, 8]], [[8, 0], [15, 8], [8, 15], [0, 8]], [[8, 0], [15, 8], [8, 15], [0, 8]],
        [[8, 0], [15, 0], [8, 15], [0, 8]], [[8, 0], [15, 0], [8, 15], [0, 8]], [[8, 0], [15, 0], [8, 15], [0, 8]], [[8, 0], [15, 0], [8, 15], [0, 8]],
        [[8, 0], [15, 0], [8, 15], [0, 8]], [[8, 0], [15, 0], [8, 15], [0, 8]], [[8, 0], [15, 0], [8, 15], [0, 8]], [[8, 0], [15, 0], [8, 15], [0, 8]],
        [[8, 0], [15, 0], [8, 15], [0, 8]], [[8, 0], [15, 0], [8, 15], [0, 8]],
        [[8, 0], [15, 0], [8, 15], [0, 8]], [[8, 0], [15, 0], [8, 15], [0, 8]], [[12, 0], [15, 0], [8, 15], [0, 8]], [[8, 0], [15, 0], [7, 15], [0, 8]],
        [[8, 0], [15, 0], [4, 15], [0, 8]], [[8, 0], [15, 0], [5, 15], [0, 8]], [[8, 0], [15, 0], [8, 15], [0, 8]], [[8, 0], [15, 0], [8, 15], [0, 8]], [[8, 0], [15, 0], [8, 15], [0, 8]],
        [[9, 5], [9, 15], [11, 15], [9, 5]], [[9, 5], [15, 8], [7, 15], [0, 8]], [[7, 0], [15, 1], [3, 15], [0, 8]], [[7, 0], [15, 7], [2, 15], [0, 11]],
        [[3, 0], [15, 7], [2, 15], [0, 11]], [[4, 0], [15, 5], [2, 15], [0, 11]], [[4, 1], [15, 2], [2, 15], [0, 5]], [[7, 0], [15, 2], [2, 15], [0, 2]],
        [[12, 1], [15, 1], [5, 15], [0, 2]], [[14, 1], [15, 1], [5, 15], [0, 5]], [[3, 0], [15, 1], [5, 15], [0, 1]], [[2, 0], [15, 12], [5, 15], [0, 1]],
        [[2, 0], [15, 5], [5, 15], [0, 12]], [[2, 0], [15, 12], [5, 15], [0, 6]], [[5, 0], [15, 12], [5, 15], [0, 12]], [[5, 12], [5, 12], [5, 12], [5, 12]]];

	const G_COLOR_BLACK = [0, 0, 0];
	const G_COLOR_WHITE = [220, 220, 220];
	const G_COLOR_BG = [220, 220, 220];
	const G_COLOR_GRAY = [125, 125, 125];
	const G_COLOR_RED = [110, 110, 110];

	const G_COLOR_OBELISK = [39, 39, 39];
	const G_COLOR_OBTRAIL = [90, 90, 90];

	function setupMap(direction){
		var xIt;
		var yIt;

		reqVic = 0;

		var count = 0;

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
				count++;
			}
		}

		switch(direction){
            case "N":
                PS.data(playerSpawnArray[currentMap][0][0], playerSpawnArray[currentMap][0][1], ["s", false, true]);
                break;
            case "S":
                PS.data(playerSpawnArray[currentMap][2][0], playerSpawnArray[currentMap][2][1], ["s", false, true]);
                break;
            case "W":
                PS.data(playerSpawnArray[currentMap][3][0], playerSpawnArray[currentMap][3][1], ["s", false, true]);
                break;
            case "E":
                PS.data(playerSpawnArray[currentMap][1][0], playerSpawnArray[currentMap][1][1], ["s", false, true]);
                break;
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
            if (PS.data(x + 1, y)[0] === "b") {
                finishDrawing(x + 1, y, 1);
            }
            if (PS.data(x + 1, y)[0] === "d") {
                finishDrawing(x + 1, y, 1);
            }
        }

        if(x - 1 >= 0) {
            if (PS.data(x - 1, y)[0] === "f") {
                finishDrawing(x - 1, y, 3);
            }
            if (PS.data(x - 1, y)[0] === "b") {
                finishDrawing(x - 1, y, 3);
            }
            if (PS.data(x - 1, y)[0] === "d") {
                finishDrawing(x - 1, y, 3);
            }
        }

        if(y + 1 < gridSizeY) {
            if (PS.data(x, y + 1)[0] === "f") {
                finishDrawing(x, y + 1, 2);
            }
            if (PS.data(x, y + 1)[0] === "b") {
                finishDrawing(x, y + 1, 2);
            }
            if (PS.data(x, y + 1)[0] === "d") {
                finishDrawing(x, y + 1, 2);
            }
        }

        if(y - 1 >= 0) {
            if (PS.data(x, y - 1)[0] === "f") {
                finishDrawing(x, y - 1, 0);
            }
            if (PS.data(x, y - 1)[0] === "b") {
                finishDrawing(x, y - 1, 0);
            }
            if (PS.data(x, y - 1)[0] === "d") {
                finishDrawing(x, y - 1, 0);
            }
        }
	}

	function destroyWalls(x, y){
        if(x - 1 >= 0){
            if(PS.data(x - 1, y)[0] === "w") {
                PS.data(x - 1, y, ["f", false, false]);
                redrawMap();
            }
        }
        if(x - 2 >= 0){
            if(PS.data(x - 2, y)[0] === "w") {
                PS.data(x - 2, y, ["f", false, false]);
                redrawMap();
            }
        }
        if(x + 1 < gridSizeX){
            if(PS.data(x + 1, y)[0] === "w") {
                PS.data(x + 1, y, ["f", false, false]);
                redrawMap();
            }
        }
        if(x + 2 < gridSizeX){
            if(PS.data(x + 2, y)[0] === "w") {
                PS.data(x + 2, y, ["f", false, false]);
                redrawMap();
            }
        }
        if(y - 1 >= 0){
            if(PS.data(x, y - 1)[0] === "w") {
                PS.data(x, y - 1, ["f", false, false]);
                redrawMap();
            }
        }
        if(y - 2 >= 0){
            if(PS.data(x, y - 2)[0] === "w") {
                PS.data(x, y - 2, ["f", false, false]);
                redrawMap();
            }
        }
        if(y + 1 < gridSizeY){
            if(PS.data(x, y + 1)[0] === "w") {
                PS.data(x, y + 1, ["f", false, false]);
                redrawMap();
            }
        }
        if(y + 2 < gridSizeY){
            if(PS.data(x, y + 2)[0] === "w") {
                PS.data(x, y + 2, ["f", false, false]);
                redrawMap();
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
                    if (PS.data(x, y - 1)[0] === "b") {
                        finishDrawing(x, y - 1, 0);
                    }
                    if (PS.data(x, y - 1)[0] === "d") {
                        finishDrawing(x, y - 1, 0);
                    }
                    if (PS.data(x, y - 1)[0] === "v") {
                        curVic++;
                        finishDrawing(x, y - 1, 0);
                        destroyWalls(x, y - 1);
                    }
                    if (PS.data(x, y - 1)[0] === "o") {
						finishDrawing(x + 1, y - 1, 1);
						finishDrawing(x - 1, y - 1, 3);
						drawBead(x, y - 1);
                        PS.radius(x, y - 1, 0);
					}
                    if (PS.data(x, y - 1)[0] === "t") {
                        finishDrawing(x, y - 1, 0);
                    }
                    if (PS.data(x, y - 1)[0] === "p") {
                        finishDrawing(x, y - 1, 0);
                    }
                }
				break;
			case 1:
                if(x + 1 < gridSizeX) {
                    if (PS.data(x + 1, y)[0] === "f") {
                        finishDrawing(x + 1, y, 1);
                    }
                    if (PS.data(x + 1, y)[0] === "b") {
                        finishDrawing(x + 1, y, 1);
                    }
                    if (PS.data(x + 1, y)[0] === "d") {
                        finishDrawing(x + 1, y, 1);
                    }
                    if (PS.data(x + 1, y)[0] === "v") {
                        curVic++;
                        finishDrawing(x + 1, y, 1);
                        destroyWalls(x + 1, y);
                    }
                    if (PS.data(x + 1, y)[0] === "o") {
                        finishDrawing(x + 1, y - 1, 0);
                        finishDrawing(x + 1, y + 1, 2);
                        drawBead(x + 1, y);
                        PS.radius(x + 1, y, 0);
                    }
                    if (PS.data(x + 1, y)[0] === "t") {
                        finishDrawing(x + 1, y, 1);
                    }
                    if (PS.data(x + 1, y)[0] === "p") {
                        finishDrawing(x + 1, y, 1);
                    }
                }
				break;
			case 2:
                if(y + 1 < gridSizeY) {
                    if (PS.data(x, y + 1)[0] === "f") {
                        finishDrawing(x, y + 1, 2);
                    }
                    if (PS.data(x, y + 1)[0] === "b") {
                        finishDrawing(x, y + 1, 2);
                    }
                    if (PS.data(x, y + 1)[0] === "d") {
                        finishDrawing(x, y + 1, 2);
                    }
                    if (PS.data(x, y + 1)[0] === "v") {
                        curVic++;
                        finishDrawing(x, y + 1, 2);
                        destroyWalls(x, y + 1);
                    }
                    if (PS.data(x, y + 1)[0] === "o") {
                        finishDrawing(x + 1, y + 1, 1);
                        finishDrawing(x - 1, y + 1, 3);
                        drawBead(x, y + 1);
                        PS.radius(x, y + 1, 0);
                    }
                    if (PS.data(x, y + 1)[0] === "t") {
                        finishDrawing(x, y + 1, 2);
                    }
                    if (PS.data(x, y + 1)[0] === "p") {
                        finishDrawing(x, y + 1, 2);
                    }
                }
				break;
			case 3:
                if(x - 1 >= 0) {
                    if (PS.data(x - 1, y)[0] === "f") {
                        finishDrawing(x - 1, y, 3);
                    }
                    if (PS.data(x - 1, y)[0] === "b") {
                        finishDrawing(x - 1, y, 3);
                    }
                    if (PS.data(x - 1, y)[0] === "d") {
                        finishDrawing(x - 1, y, 3);
                    }
                    if (PS.data(x - 1, y)[0] === "v") {
                        curVic++;
                        finishDrawing(x - 1, y, 3);
                        destroyWalls(x - 1, y);
                    }
                    if (PS.data(x - 1, y)[0] === "o") {
                        finishDrawing(x - 1, y - 1, 0);
                        finishDrawing(x - 1, y + 1, 2);
                        drawBead(x - 1, y);
                        PS.radius(x - 1, y, 0);
                    }
                    if (PS.data(x - 1, y)[0] === "t") {
                        finishDrawing(x - 1, y, 3);
                    }
                    if (PS.data(x - 1, y)[0] === "p") {
                        finishDrawing(x - 1, y, 3);
                    }
                }
				break;
		}
	}

	function drawBead(x, y){
		switch(PS.data(x, y)[0]){
			case "f":
				PS.color(x, y, [220, 220, 220]);
				PS.border(x, y, 0);
                PS.radius(x, y, 0);
				break;
            case "b":
                PS.color(x, y, [240, 240, 240]);
                PS.border(x, y, 0);
                PS.radius(x, y, 0);
                break;
            case "d":
                PS.color(x, y, [200, 200, 200]);
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
                PS.color(x, y, [125, 125, 125]);
                PS.border(x, y, 0);
                PS.radius(x, y, 0);
            case "t":
                PS.color(x, y, [160, 160, 160]);
                PS.border(x, y, 0);
                PS.radius(x, y, 0);
                break;
            case "p":
                PS.color(x, y, [20, 20, 20]);
                PS.border(x, y, 0);
                PS.radius(x, y, 0);
                break;
            case "z":
                PS.color(x, y, [255, 255, 255]);
                PS.border(x, y, 2);
                PS.radius(x, y, 25);
                break;
            case "x":
                PS.color(x, y, G_COLOR_WHITE);
                PS.border(x, y, 0);
                PS.radius(x, y, 0);
                break;
		}
	}

	function declareVictory(){
		if(pickupCounter === 3){
			return true;
		}
	}

	function darkenScreen(){
	    if(deathCounter > 0) {
            deathCounter--;
        }

        var colorVar = 255 * (deathCounter/maxDeathCounter);

        PS.gridColor([colorVar, colorVar, colorVar]);
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
    }

    var relicFlag = false;
	var bFlag = false;
	var dFlag = false;

	function movePlayer(direction){
		var xIt;
		var yIt;

		PS.audioPlay("fx_click");

        for(yIt = 0; yIt < gridSizeY; yIt++){
            for(xIt = 0; xIt < gridSizeX; xIt++){
                if(PS.data(xIt, yIt)[0] === "s"){
                    switch(direction){
						case 0:
                            if(yIt - 1 >= 0) {
                                if(bFlag){
                                    bFlag = false;
                                    if (PS.data(xIt, yIt - 1)[0] === "f") {
                                        PS.data(xIt, yIt - 1, ["s", false, true]);
                                        PS.data(xIt, yIt, ["b", false, false]);
                                        darkenScreen();
                                    }
                                    if (PS.data(xIt, yIt - 1)[0] === "b") {
                                        PS.data(xIt, yIt - 1, ["s", false, true]);
                                        PS.data(xIt, yIt, ["b", false, false]);
                                        bFlag = true;
                                        darkenScreen();
                                    }
                                    if (PS.data(xIt, yIt - 1)[0] === "d") {
                                        PS.data(xIt, yIt - 1, ["s", false, true]);
                                        PS.data(xIt, yIt, ["b", false, false]);
                                        dFlag = true;
                                        darkenScreen();
                                    }
                                    if (PS.data(xIt, yIt - 1)[0] === "z") {
                                        PS.data(xIt, yIt - 1, ["s", false, true]);
                                        PS.data(xIt, yIt, ["b", false, false]);
                                        relicFlag = true;
                                        PS.audioPlay("fx_ding");
                                        pickupCounter++;
                                        darkenScreen();
                                    }
                                } else if(dFlag){
                                    dFlag = false;
                                    if (PS.data(xIt, yIt - 1)[0] === "f") {
                                        PS.data(xIt, yIt - 1, ["s", false, true]);
                                        PS.data(xIt, yIt, ["d", false, false]);
                                        darkenScreen();
                                    }
                                    if (PS.data(xIt, yIt - 1)[0] === "b") {
                                        PS.data(xIt, yIt - 1, ["s", false, true]);
                                        PS.data(xIt, yIt, ["d", false, false]);
                                        bFlag = true;
                                        darkenScreen();
                                    }
                                    if (PS.data(xIt, yIt - 1)[0] === "d") {
                                        PS.data(xIt, yIt - 1, ["s", false, true]);
                                        PS.data(xIt, yIt, ["d", false, false]);
                                        dFlag = true;
                                        darkenScreen();
                                    }
                                    if (PS.data(xIt, yIt - 1)[0] === "z") {
                                        PS.data(xIt, yIt - 1, ["s", false, true]);
                                        PS.data(xIt, yIt, ["d", false, false]);
                                        relicFlag = true;
                                        PS.audioPlay("fx_ding");
                                        pickupCounter++;
                                        darkenScreen();
                                    }
                                } else if(relicFlag){
                                    relicFlag = false;
                                    if (PS.data(xIt, yIt - 1)[0] === "f") {
                                        PS.data(xIt, yIt - 1, ["s", false, true]);
                                        PS.data(xIt, yIt, ["x", false, false]);
                                        darkenScreen();
                                    }
                                    if (PS.data(xIt, yIt - 1)[0] === "b") {
                                        PS.data(xIt, yIt - 1, ["s", false, true]);
                                        PS.data(xIt, yIt, ["x", false, false]);
                                        bFlag = true;
                                        darkenScreen();
                                    }
                                    if (PS.data(xIt, yIt - 1)[0] === "d") {
                                        PS.data(xIt, yIt - 1, ["s", false, true]);
                                        PS.data(xIt, yIt, ["x", false, false]);
                                        dFlag = true;
                                        darkenScreen();
                                    }
                                    if (PS.data(xIt, yIt - 1)[0] === "z") {
                                        PS.data(xIt, yIt - 1, ["s", false, true]);
                                        PS.data(xIt, yIt, ["x", false, false]);
                                        relicFlag = true;
                                        PS.audioPlay("fx_ding");
                                        pickupCounter++;
                                        darkenScreen();
                                    }
                                } else {
                                    if (PS.data(xIt, yIt - 1)[0] === "f") {
                                        PS.data(xIt, yIt - 1, ["s", false, true]);
                                        PS.data(xIt, yIt, ["f", false, false]);
                                        darkenScreen();
                                    }
                                    if (PS.data(xIt, yIt - 1)[0] === "b") {
                                        PS.data(xIt, yIt - 1, ["s", false, true]);
                                        PS.data(xIt, yIt, ["f", false, false]);
                                        bFlag = true;
                                        darkenScreen();
                                    }
                                    if (PS.data(xIt, yIt - 1)[0] === "d") {
                                        PS.data(xIt, yIt - 1, ["s", false, true]);
                                        PS.data(xIt, yIt, ["f", false, false]);
                                        dFlag = true;
                                        darkenScreen();
                                    }
                                    if (PS.data(xIt, yIt - 1)[0] === "z") {
                                        PS.data(xIt, yIt - 1, ["s", false, true]);
                                        PS.data(xIt, yIt, ["f", false, false]);
                                        relicFlag = true;
                                        PS.audioPlay("fx_ding");
                                        pickupCounter++;
                                        darkenScreen();
                                    }
                                }
                            } else{
                                if(relicFlag){
                                    relicFlag = false;
                                    PS.data(xIt, yIt, ["x", false, false]);
                                }
                                if(bFlag){
                                    bFlag = false;
                                    PS.data(xIt, yIt, ["b", false, false]);
                                }
                                if(dFlag){
                                    dFlag = false;
                                    PS.data(xIt, yIt, ["d", false, false]);
                                }
                                serializeCurrentMap();
                                currentMap = mapWhereToArray[currentMap][1];

                                setupMap("S");
                                darkenScreen();
                            }
							break;
						case 1:
                            if(xIt + 1 < gridSizeX) {
                                if(bFlag){
                                    bFlag = false;
                                    if (PS.data(xIt + 1, yIt)[0] === "f") {
                                        PS.data(xIt + 1, yIt, ["s", false, true]);
                                        PS.data(xIt, yIt, ["b", false, false]);
                                        darkenScreen();
                                    }
                                    if (PS.data(xIt + 1, yIt)[0] === "b") {
                                        PS.data(xIt + 1, yIt, ["s", false, true]);
                                        PS.data(xIt, yIt, ["b", false, false]);
                                        bFlag = true;
                                        darkenScreen();
                                    }
                                    if (PS.data(xIt + 1, yIt)[0] === "d") {
                                        PS.data(xIt + 1, yIt, ["s", false, true]);
                                        PS.data(xIt, yIt, ["b", false, false]);
                                        dFlag = true;
                                        darkenScreen();
                                    }
                                    if (PS.data(xIt + 1, yIt)[0] === "z") {
                                        PS.data(xIt + 1, yIt, ["s", false, true]);
                                        PS.data(xIt, yIt, ["b", false, false]);
                                        relicFlag = true;
                                        PS.audioPlay("fx_ding");
                                        pickupCounter++;
                                        darkenScreen();
                                    }
                                } else if(dFlag){
                                    dFlag = false;
                                    if (PS.data(xIt + 1, yIt)[0] === "f") {
                                        PS.data(xIt + 1, yIt, ["s", false, true]);
                                        PS.data(xIt, yIt, ["d", false, false]);
                                        darkenScreen();
                                    }
                                    if (PS.data(xIt + 1, yIt)[0] === "b") {
                                        PS.data(xIt + 1, yIt, ["s", false, true]);
                                        PS.data(xIt, yIt, ["d", false, false]);
                                        bFlag = true;
                                        darkenScreen();
                                    }
                                    if (PS.data(xIt + 1, yIt)[0] === "d") {
                                        PS.data(xIt + 1, yIt, ["s", false, true]);
                                        PS.data(xIt, yIt, ["d", false, false]);
                                        dFlag = true;
                                        darkenScreen();
                                    }
                                    if (PS.data(xIt + 1, yIt)[0] === "z") {
                                        PS.data(xIt + 1, yIt, ["s", false, true]);
                                        PS.data(xIt, yIt, ["d", false, false]);
                                        relicFlag = true;
                                        PS.audioPlay("fx_ding");
                                        pickupCounter++;
                                        darkenScreen();
                                    }
                                } else if(relicFlag){
                                    relicFlag = false;
                                    if (PS.data(xIt + 1, yIt)[0] === "f") {
                                        PS.data(xIt + 1, yIt, ["s", false, true]);
                                        PS.data(xIt, yIt, ["x", false, false]);
                                        darkenScreen();
                                    }
                                    if (PS.data(xIt + 1, yIt)[0] === "b") {
                                        PS.data(xIt + 1, yIt, ["s", false, true]);
                                        PS.data(xIt, yIt, ["x", false, false]);
                                        bFlag = true;
                                        darkenScreen();
                                    }
                                    if (PS.data(xIt + 1, yIt)[0] === "d") {
                                        PS.data(xIt + 1, yIt, ["s", false, true]);
                                        PS.data(xIt, yIt, ["x", false, false]);
                                        dFlag = true;
                                        darkenScreen();
                                    }
                                    if (PS.data(xIt + 1, yIt)[0] === "z") {
                                        PS.data(xIt + 1, yIt, ["s", false, true]);
                                        PS.data(xIt, yIt, ["x", false, false]);
                                        relicFlag = true;
                                        PS.audioPlay("fx_ding");
                                        pickupCounter++;
                                        darkenScreen();
                                    }
                                } else {
                                    if (PS.data(xIt + 1, yIt)[0] === "f") {
                                        PS.data(xIt + 1, yIt, ["s", false, true]);
                                        PS.data(xIt, yIt, ["f", false, false]);
                                        darkenScreen();
                                    }
                                    if (PS.data(xIt + 1, yIt)[0] === "b") {
                                        PS.data(xIt + 1, yIt, ["s", false, true]);
                                        PS.data(xIt, yIt, ["f", false, false]);
                                        bFlag = true;
                                        darkenScreen();
                                    }
                                    if (PS.data(xIt + 1, yIt)[0] === "d") {
                                        PS.data(xIt + 1, yIt, ["s", false, true]);
                                        PS.data(xIt, yIt, ["f", false, false]);
                                        dFlag = true;
                                        darkenScreen();
                                    }
                                    if (PS.data(xIt + 1, yIt)[0] === "z") {
                                        PS.data(xIt + 1, yIt, ["s", false, true]);
                                        PS.data(xIt, yIt, ["f", false, false]);
                                        relicFlag = true;
                                        PS.audioPlay("fx_ding");
                                        pickupCounter++;
                                        darkenScreen();
                                    }
                                }
                            } else{
                                if(relicFlag){
                                    relicFlag = false;
                                    PS.data(xIt, yIt, ["x", false, false]);
                                }
                                if(bFlag){
                                    bFlag = false;
                                    PS.data(xIt, yIt, ["b", false, false]);
                                }
                                if(dFlag){
                                    dFlag = false;
                                    PS.data(xIt, yIt, ["d", false, false]);
                                }
                                serializeCurrentMap();
                                currentMap = mapWhereToArray[currentMap][2];

                                setupMap("W");
                                darkenScreen();
                            }
							break;
						case 2:
                            if(yIt + 1 < gridSizeY) {
                                if(bFlag){
                                    bFlag = false;
                                    if (PS.data(xIt, yIt + 1)[0] === "f") {
                                        PS.data(xIt, yIt + 1, ["s", false, true]);
                                        PS.data(xIt, yIt, ["b", false, false]);
                                        darkenScreen();
                                    }
                                    if (PS.data(xIt, yIt + 1)[0] === "b") {
                                        PS.data(xIt, yIt + 1, ["s", false, true]);
                                        PS.data(xIt, yIt, ["b", false, false]);
                                        bFlag = true;
                                        darkenScreen();
                                    }
                                    if (PS.data(xIt, yIt + 1)[0] === "d") {
                                        PS.data(xIt, yIt + 1, ["s", false, true]);
                                        PS.data(xIt, yIt, ["b", false, false]);
                                        dFlag = true;
                                        darkenScreen();
                                    }
                                    if (PS.data(xIt, yIt + 1)[0] === "z") {
                                        PS.data(xIt, yIt + 1, ["s", false, true]);
                                        PS.data(xIt, yIt, ["b", false, false]);
                                        relicFlag = true;
                                        pickupCounter++;
                                        darkenScreen();
                                    }
                                } else if(dFlag){
                                    dFlag = false;
                                    if (PS.data(xIt, yIt + 1)[0] === "f") {
                                        PS.data(xIt, yIt + 1, ["s", false, true]);
                                        PS.data(xIt, yIt, ["d", false, false]);
                                        darkenScreen();
                                    }
                                    if (PS.data(xIt, yIt + 1)[0] === "b") {
                                        PS.data(xIt, yIt + 1, ["s", false, true]);
                                        PS.data(xIt, yIt, ["d", false, false]);
                                        bFlag = true;
                                        darkenScreen();
                                    }
                                    if (PS.data(xIt, yIt + 1)[0] === "d") {
                                        PS.data(xIt, yIt + 1, ["s", false, true]);
                                        PS.data(xIt, yIt, ["d", false, false]);
                                        dFlag = true;
                                        darkenScreen();
                                    }
                                    if (PS.data(xIt, yIt + 1)[0] === "z") {
                                        PS.data(xIt, yIt + 1, ["s", false, true]);
                                        PS.data(xIt, yIt, ["d", false, false]);
                                        relicFlag = true;
                                        pickupCounter++;
                                        darkenScreen();
                                    }
                                } else if(relicFlag){
                                    relicFlag = false;
                                    if (PS.data(xIt, yIt + 1)[0] === "f") {
                                        PS.data(xIt, yIt + 1, ["s", false, true]);
                                        PS.data(xIt, yIt, ["x", false, false]);
                                        darkenScreen();
                                    }
                                    if (PS.data(xIt, yIt + 1)[0] === "b") {
                                        PS.data(xIt, yIt + 1, ["s", false, true]);
                                        PS.data(xIt, yIt, ["x", false, false]);
                                        bFlag = true;
                                        darkenScreen();
                                    }
                                    if (PS.data(xIt, yIt + 1)[0] === "d") {
                                        PS.data(xIt, yIt + 1, ["s", false, true]);
                                        PS.data(xIt, yIt, ["x", false, false]);
                                        dFlag = true;
                                        darkenScreen();
                                    }
                                    if (PS.data(xIt, yIt + 1)[0] === "z") {
                                        PS.data(xIt, yIt + 1, ["s", false, true]);
                                        PS.data(xIt, yIt, ["x", false, false]);
                                        relicFlag = true;
                                        pickupCounter++;
                                        darkenScreen();
                                    }
                                } else {
                                    if (PS.data(xIt, yIt + 1)[0] === "f") {
                                        PS.data(xIt, yIt + 1, ["s", false, true]);
                                        PS.data(xIt, yIt, ["f", false, false]);
                                        darkenScreen();
                                    }
                                    if (PS.data(xIt, yIt + 1)[0] === "b") {
                                        PS.data(xIt, yIt + 1, ["s", false, true]);
                                        PS.data(xIt, yIt, ["f", false, false]);
                                        bFlag = true;
                                        darkenScreen();
                                    }
                                    if (PS.data(xIt, yIt + 1)[0] === "d") {
                                        PS.data(xIt, yIt + 1, ["s", false, true]);
                                        PS.data(xIt, yIt, ["f", false, false]);
                                        dFlag = true;
                                        darkenScreen();
                                    }
                                    if (PS.data(xIt, yIt + 1)[0] === "z") {
                                        PS.data(xIt, yIt + 1, ["s", false, true]);
                                        PS.data(xIt, yIt, ["f", false, false]);
                                        relicFlag = true;
                                        pickupCounter++;
                                        darkenScreen();
                                    }
                                }
                            } else{
                                if(relicFlag){
                                    relicFlag = false;
                                    PS.data(xIt, yIt, ["x", false, false]);
                                }
                                if(bFlag){
                                    bFlag = false;
                                    PS.data(xIt, yIt, ["b", false, false]);
                                }
                                if(dFlag){
                                    dFlag = false;
                                    PS.data(xIt, yIt, ["d", false, false]);
                                }
                                serializeCurrentMap();
                                currentMap = mapWhereToArray[currentMap][3];

                                setupMap("N");
                                darkenScreen();
                            }
							break;
						case 3:
                            if(xIt - 1 >= 0) {
                                if(bFlag){
                                    bFlag = false;
                                    if (PS.data(xIt - 1, yIt)[0] === "f") {
                                        PS.data(xIt - 1, yIt, ["s", false, true]);
                                        PS.data(xIt, yIt, ["b", false, false]);
                                        darkenScreen();
                                    }
                                    if (PS.data(xIt - 1, yIt)[0] === "b") {
                                        PS.data(xIt - 1, yIt, ["s", false, true]);
                                        PS.data(xIt, yIt, ["b", false, false]);
                                        bFlag = true;
                                        darkenScreen();
                                    }
                                    if (PS.data(xIt - 1, yIt)[0] === "d") {
                                        PS.data(xIt - 1, yIt, ["s", false, true]);
                                        PS.data(xIt, yIt, ["b", false, false]);
                                        dFlag = true;
                                        darkenScreen();
                                    }
                                    if (PS.data(xIt - 1, yIt)[0] === "z") {
                                        PS.data(xIt - 1, yIt, ["s", false, true]);
                                        PS.data(xIt, yIt, ["b", false, false]);
                                        relicFlag = true;
                                        pickupCounter++;
                                        darkenScreen();
                                    }
                                } else if(dFlag){
                                    dFlag = false;
                                    if (PS.data(xIt - 1, yIt)[0] === "f") {
                                        PS.data(xIt - 1, yIt, ["s", false, true]);
                                        PS.data(xIt, yIt, ["d", false, false]);
                                        darkenScreen();
                                    }
                                    if (PS.data(xIt - 1, yIt)[0] === "b") {
                                        PS.data(xIt - 1, yIt, ["s", false, true]);
                                        PS.data(xIt, yIt, ["d", false, false]);
                                        bFlag = true;
                                        darkenScreen();
                                    }
                                    if (PS.data(xIt - 1, yIt)[0] === "d") {
                                        PS.data(xIt - 1, yIt, ["s", false, true]);
                                        PS.data(xIt, yIt, ["d", false, false]);
                                        dFlag = true;
                                        darkenScreen();
                                    }
                                    if (PS.data(xIt - 1, yIt)[0] === "z") {
                                        PS.data(xIt - 1, yIt, ["s", false, true]);
                                        PS.data(xIt, yIt, ["d", false, false]);
                                        relicFlag = true;
                                        pickupCounter++;
                                        darkenScreen();
                                    }
                                } else if(relicFlag){
                                    relicFlag = false;
                                    if (PS.data(xIt - 1, yIt)[0] === "f") {
                                        PS.data(xIt - 1, yIt, ["s", false, true]);
                                        PS.data(xIt, yIt, ["x", false, false]);
                                        darkenScreen();
                                    }
                                    if (PS.data(xIt - 1, yIt)[0] === "b") {
                                        PS.data(xIt - 1, yIt, ["s", false, true]);
                                        PS.data(xIt, yIt, ["x", false, false]);
                                        bFlag = true;
                                        darkenScreen();
                                    }
                                    if (PS.data(xIt - 1, yIt)[0] === "d") {
                                        PS.data(xIt - 1, yIt, ["s", false, true]);
                                        PS.data(xIt, yIt, ["x", false, false]);
                                        dFlag = true;
                                        darkenScreen();
                                    }
                                    if (PS.data(xIt - 1, yIt)[0] === "z") {
                                        PS.data(xIt - 1, yIt, ["s", false, true]);
                                        PS.data(xIt, yIt, ["x", false, false]);
                                        relicFlag = true;
                                        pickupCounter++;
                                        darkenScreen();
                                    }
                                } else {
                                    if (PS.data(xIt - 1, yIt)[0] === "f") {
                                        PS.data(xIt - 1, yIt, ["s", false, true]);
                                        PS.data(xIt, yIt, ["f", false, false]);
                                        darkenScreen();
                                    }
                                    if (PS.data(xIt - 1, yIt)[0] === "b") {
                                        PS.data(xIt - 1, yIt, ["s", false, true]);
                                        PS.data(xIt, yIt, ["f", false, false]);
                                        bFlag = true;
                                        darkenScreen();
                                    }
                                    if (PS.data(xIt - 1, yIt)[0] === "d") {
                                        PS.data(xIt - 1, yIt, ["s", false, true]);
                                        PS.data(xIt, yIt, ["f", false, false]);
                                        dFlag = true;
                                        darkenScreen();
                                    }
                                    if (PS.data(xIt - 1, yIt)[0] === "z") {
                                        PS.data(xIt - 1, yIt, ["s", false, true]);
                                        PS.data(xIt, yIt, ["f", false, false]);
                                        relicFlag = true;
                                        pickupCounter++;
                                        darkenScreen();
                                    }
                                }
                            } else{
                                if(relicFlag){
                                    relicFlag = false;
                                    PS.data(xIt, yIt, ["x", false, false]);
                                }
                                if(bFlag){
                                    bFlag = false;
                                    PS.data(xIt, yIt, ["b", false, false]);
                                }
                                if(dFlag){
                                    dFlag = false;
                                    PS.data(xIt, yIt, ["d", false, false]);
                                }
                                serializeCurrentMap();
                                currentMap = mapWhereToArray[currentMap][4];

                                setupMap("E");
                                darkenScreen();
                            }
							break;
					}
					redrawMap();
                    if(declareVictory()){
                    	doVictory();
					}
                    if(deathCounter <= 0){
                        if(!declareVictory()) {
                            PS.audioPlay("fx_pop");
                            serializeCurrentMap();
                            relicFlag = false;
                            bFlag = false;
                            dFlag = false;
                            resetMaps();

                            currentMap = 0;

                            setupMap("N");
                            deathCounter = maxDeathCounter;
                            pickupCounter = 0;
                        }
                    }
					return;
                }
            }
        }
	}

	function resetMaps(){
	    var mapIt;
	    var xIt;
	    var yIt;

	    for(mapIt = 0; mapIt < mapArray.length; mapIt++){
	        currentMap = mapIt;
	        setupMap("N");
            for(xIt = 0; xIt < gridSizeX; xIt++){
                for(yIt = 0; yIt < gridSizeY; yIt++){
                    if(PS.data(xIt, yIt)[0] === "x"){
                        PS.data(xIt, yIt, ["z", false, false]);
                    }
                }
            }
            serializeCurrentMap();
        }
    }

	var isWinning = false;

	function doVictory() {
        if (!isWinning) {
            isWinning = true;

            PS.audioPlay("fx_tada");

            /*var gridSizeX = 16;
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
                        //setupMap();
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
                });*/
        }
	}

	var exports = {
		finalize: function(){
			G.init(0, 0);
		},

		init: function(system, options){
			PS.gridSize(gridSizeX, gridSizeY);
			PS.statusText("");
			setupMap("N");

			var audioObject = { autoplay: true, loop: true, lock: true, }

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