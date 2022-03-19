/*
Objects and its attributes

Object -> game
*/
// Creates an object called game

var posPrev;
var a = [];
var pos = 0;
var cord = [[0,0],[0,1],[0,2],[1,0],[1,1],[1,2],[2,0],[2,1],[2,2]];
class Queue { 
    constructor() { 
        this.items = []; 
    } 
    
    enqueue(item) {      
        this.items.push(item); 
    } 
    dequeue() { 
        // removing element from the queue 
        if(this.isEmpty()) 
            return "Underflow"; 
        return this.items.shift(); 
    } 
    front() { 
        // returns the Front element of   
        if(this.isEmpty()) 
            return "No elements in Queue"; 
        return this.items[0]; 
    } 
    isEmpty() { 
        // return true if the queue is empty. 
        return this.items.length == 0; 
    } 
} 

class Stack { 
  
    constructor() { 
        this.stackElements = []; 
    } 
  
    push(element) { 
        this.stackElements.push(element); 
    }
    pop() {  
        if (this.stackElements.length == 0) 
            return "Underflow"; 
        return this.stackElements.pop(); 
    } 
    peek() { 
        return this.stackElements[this.stackElements.length - 1]; 
    } 
    isEmpty() { 
        return this.stackElements.length == 0; 
    } 
}

/*class State {
    constructor(posPrevCopy , dir , posCopy)
    {
        this.posPrevCopy = posPrevCopy;
        this.dir = dir;
        this.posCopy = posCopy;
    }
}*/

var undoStack = new Stack();

function get_Heuristic() {
  var i;
  var heuristic = 0;
  for (i = 0; i <= 8; i++) {
      if(game.tiles[i] != game.winCondition[i] && game.tiles[i].id != "blank") {
          console.log("Tile ID: "+game.tiles[i].id);
          heuristic += (Math.abs(cord[i][0] - cord[game.tiles[i].id][0]) + Math.abs(cord[i][1] - cord[game.tiles[i].id][1]));
          if(game.tiles[game.tiles[i].id].id == i && (cord[game.tiles[i].id][0] == cord[i][0] || cord[game.tiles[i].id][1] == cord[i][1])) {
            heuristic += 2;
          }
      }
  }
  return heuristic; //return total mismatch
}

function swap(x , y) {
  var temp = game.tiles[x];
  game.tiles[x] = game.tiles[y];
  game.tiles[y] = temp;
}

function tempSwap(x , y) {
  var heurValue;

  swap(x , y);
  heurValue = get_Heuristic();
  swap(x , y);

  return heurValue;
}

function solvePuzzle() {
  var optimalMove = 1, direction = 0;
  while(optimalMove != 0) {
      pos = Array.prototype.indexOf.call(a, game.blanktile);
      // console.log(pos);
      
      optimalMove = 10;

      if(pos == 0) {

          if(optimalMove >= tempSwap(pos, pos + 1) && pos+1 != posPrev) {
            optimalMove = tempSwap(pos, pos + 1);
            direction = 1;
          }
          if(optimalMove >= tempSwap(pos, pos + 3) && pos+3 != posPrev) {
              optimalMove = tempSwap(pos, pos + 3);
              direction = 3;
          }
      }
      else if(pos == 1) {

          if(optimalMove >= tempSwap(pos, pos - 1) && pos-1 != posPrev) {
            optimalMove = tempSwap(pos, pos - 1);
            direction = -1;
          }
          
          if(optimalMove >= tempSwap(pos, pos + 3) && pos+3 != posPrev) {
              optimalMove = tempSwap(pos, pos + 3);
              direction = 3;
          }
          if(optimalMove >= tempSwap(pos, pos + 1) && pos+1 != posPrev) {
              optimalMove = tempSwap(pos, pos + 1);
              direction = 1;
          }
      }
      else if(pos == 2) {

          if(optimalMove >= tempSwap(pos, pos - 1) && pos-1 != posPrev) {
            optimalMove = tempSwap(pos, pos - 1);
            direction = -1;
          }
          
          if(optimalMove >= tempSwap(pos, pos + 3) && pos+3 != posPrev) {
              optimalMove = tempSwap(pos, pos + 3);
              direction = 3;
          }
      }
      else if(pos == 3) {

          if(optimalMove >= tempSwap(pos, pos - 3) && pos-3 != posPrev) {
            optimalMove = tempSwap(pos, pos - 3);
            direction = -3;
          }
          
          if(optimalMove >= tempSwap(pos, pos + 3) && pos+3 != posPrev) {
              optimalMove = tempSwap(pos, pos + 3);
              direction = 3;
          }
          if(optimalMove >= tempSwap(pos, pos + 1) && pos+1 != posPrev) {
              optimalMove = tempSwap(pos, pos + 1);
              direction = 1;
          }
      }
      else if(pos == 4) {

          if(optimalMove >= tempSwap(pos, pos - 1) && pos-1 != posPrev) {
            optimalMove = tempSwap(pos, pos - 1);
            direction = -1;
          }
          if(optimalMove >= tempSwap(pos, pos + 3) && pos+3 != posPrev) {
              optimalMove = tempSwap(pos, pos + 3);
              direction = 3;
          }
          if(optimalMove >= tempSwap(pos, pos + 1) && pos+1 != posPrev) {
              optimalMove = tempSwap(pos, pos + 1);
              direction = 1;
          }
          if(optimalMove >= tempSwap(pos, pos - 3) && pos-3 != posPrev) {
              optimalMove = tempSwap(pos, pos - 3);
              direction = -3;
          }
      }
      else if(pos == 5) {

          if(optimalMove >= tempSwap(pos, pos - 3) && pos-3 != posPrev) {
            optimalMove = tempSwap(pos, pos - 3);
            direction = -3;
          }
          if(optimalMove >= tempSwap(pos, pos + 3) && pos+3 != posPrev) {
              optimalMove = tempSwap(pos, pos + 3);
              direction = 3;
          }
          if(optimalMove >= tempSwap(pos, pos - 1) && pos-1 != posPrev) {
              optimalMove = tempSwap(pos, pos - 1);
              direction = -1;
          }
      }
      else if(pos == 6) {

          if(optimalMove >= tempSwap(pos, pos + 1) && pos+1 != posPrev) {
            optimalMove = tempSwap(pos, pos + 1);
            direction = 1;
          }
          if(optimalMove >= tempSwap(pos, pos - 3) && pos-3 != posPrev) {
              optimalMove = tempSwap(pos, pos - 3);
              direction = -3;
          }
      }
      else if(pos == 7) {

          if(optimalMove >= tempSwap(pos, pos - 3) && pos-3 != posPrev) {
            optimalMove = tempSwap(pos, pos - 3);
            direction = -3;
          }
          if(optimalMove >= tempSwap(pos, pos + 1) && pos+1 != posPrev) {
              optimalMove = tempSwap(pos, pos + 1);
              direction = 1;
          }
          if(optimalMove >= tempSwap(pos, pos - 1) && pos-1 != posPrev) {
              optimalMove = tempSwap(pos, pos - 1);
              direction = -1;
          }
      }
      else if(pos == 8) {
          if(optimalMove >= tempSwap(pos, pos - 1) && pos-1 != posPrev) {
            optimalMove = tempSwap(pos, pos - 1);
            direction = -1;
          }
          if(optimalMove >= tempSwap(pos, pos - 3) && pos-3 != posPrev) {
              optimalMove = tempSwap(pos, pos - 3);
              direction = -3;
          }
      }
      posPrev = pos;
      console.log(optimalMove);
      if(direction == 1) {
        swap(pos, pos+1);
        moveLeft(game.tiles[pos+1]);
      }
      else if(direction == 3) {
        swap(pos, pos + 3);
        moveTop(game.tiles[pos+3]);
      }
      else if(direction == -1) {
        swap(pos, pos-1);
        moveRight(game.tiles[pos-1]);
      }
      else {
        swap(pos, pos - 3);
        moveDown(game.tiles[pos-3]);
      }
      undoStack.push(direction);
  }
}

function undo() {
  var tempdirection = undoStack.pop();
  if(tempdirection == -1) 
      slideLeft();
  else if(tempdirection == -3)
      slideUp();
  else if(tempdirection == 1)
      slideRight();
  else
      slideDown();
}

var game = new Object();
// Makes an array of all the li from the HTML
game.tiles = Array.from(document.getElementsByClassName('tile'));
console.log(game.tiles);
// Storing the blank tile in a variable, blank is the id of the blank tile in the HTML
game.blanktile = document.getElementById('blank');
// Stores the final state of the board tha that has the answer
game.winCondition = Array.from(document.getElementsByClassName('tile')); //current game condition will be checked against this

(function (global) {
  // something like int main()? @Deep confirm
  setPuzzleImage();
  addClickEvent();
  setTiles(global);
})(game);

function setPuzzleImage() {
  for (let i = 0; i < game.tiles.length - 1; i++) {
    game.tiles[i].style.backgroundColor = '#F69A97';
    game.tiles[i].innerHTML = i;
    // game.tiles[i].setAttribute('class', 'display-1');
  }
}

function addClickEvent() {
  var solve = document.getElementById("solve");
  solve.addEventListener('click', function () {
    
    solvePuzzle();
    
    
  })
  for (let i = 0; i < game.tiles.length - 1; i++) {
    // If you click on a specific tile, it will
    // 1. Try shifting whatever it can with shiftPuzzle()
    // 2. Check if it is the solution we need through win()
    game.tiles[i].addEventListener('click', function () {
      // this keyword specifics the objects to which it belongs
      //   So, here this will tell us which was the object that was clicked so we can do the required function
      shiftPuzzle(this);
      win();
    });
  }
}

// Shuffles the tiles in the array
function shuffle(array) {
  // Get some random number of iterations to sufficiently shuffle the array
  // From 150 to 299
  let some_random_no_of_iterations = Math.floor(Math.random() * 150 + 150);

  // This is a list of all the possible places the blank tile can go
  // Imageine it as a 3x3 matrix, so if you want to go from top middle to center, you wil have to three elements ahead to get to that point
  // -3 -> to the downwards
  // 3 -> to the upwards
  // -1 -> to the left
  // 1 -> to the right
  let bot_right = [-3, -1];
  let bot_left = [-3, 1];
  let top_right = [3, -1];
  let top_left = [3, 1];
  let middle_right = [-1, -3, 3];
  let middle_left = [1, 3, -3];
  let middle_top = [1, -1, 3];
  let middle_bot = [1, -1, -3];
  let middle = [1, 3, -3, -1];
  // Stores the number of possible ways the blank tile can go for that paricular position in the array
  let moves;

  for (let i = 0; i < some_random_no_of_iterations; i++) {
    // Stores the position of the blank tile
    // Array is the object
    // prototype -> we always inheret methods from the Array.prototype, not the actual Array (this is applicable for all the objects)
    // indexOf - gets us the index of the FIRST appearance of the thing we are searching for
    // call - using call, we can access the method belonging to any other Object
    // var index = Array.prototype.indexOf.call(ancestor, parent);
    //                                            ^ Array   ^ Element in the array
    let position_of_blank_tile = Array.prototype.indexOf.call(
      array,
      game.blanktile
    );

    if (position_of_blank_tile == 0) {
      // Stores the number of possible ways the blank ~
      // tile can go for that paricular position in the array
      moves = top_left;
    }

    if (position_of_blank_tile == 1) {
      moves = middle_top;
    }

    if (position_of_blank_tile == 2) {
      moves = top_right;
    }

    if (position_of_blank_tile == 3) {
      moves = middle_left;
    }

    if (position_of_blank_tile == 4) {
      moves = middle;
    }

    if (position_of_blank_tile == 5) {
      moves = middle_right;
    }
    if (position_of_blank_tile == 6) {
      moves = bot_left;
    }
    if (position_of_blank_tile == 7) {
      moves = middle_bot;
    }
    if (position_of_blank_tile == 8) {
      moves = bot_right;
    }

    // move is a variable which stores where should the tile go out of all the choices given
    // in the arrays like in bot_right, it selects -3, so the blank tile will go upward
    move = moves[Math.floor(Math.random() * moves.length)];
    // Update the position of the blank tile by adding the particular random offset we get from move
    array[position_of_blank_tile] = array[position_of_blank_tile + move];
    // Bring the blank tile to the position of the tile we justed changed
    array[position_of_blank_tile + move] = game.blanktile;
  }
  console.log(array);
  return array;
}

function setTiles(game_object) {
  // Here a is the array which contains all the li from HTML
  a = game_object.tiles; // game_object.tiles => game.tiles

  // Literally, a function to shuffle the array
  a = shuffle(a);
  console.log(a);

  // Now, set is the shuffled array, so that we can access eah element easily
  let set = [
    [a[0], a[1], a[2]],
    [a[3], a[4], a[5]],
    [a[6], a[7], a[8]],
  ];

  for (var i = 0; i < 3; i++) {
    // Stores the position of the blank tile
    // Array is the object
    // prototype -> we always inheret methods from the Array.prototype, not the actual Array (this is applicable for all the objects)
    // indexOf - gets us the index of the FIRST appearance of the thing we are searching for
    // call - using call, we can access the method belonging to any other Object
    // var index = Array.prototype.indexOf.call(ancestor, parent);
    //                                            ^ Array   ^ Element in the array

    // call()*113 is because we are actually shifting the tiles by changing the margins
    // So, if the position is one, it means it is the middle element
    // So, from left we need a margin of 113px, for pos=2, 226px
    position = Array.prototype.indexOf.call(set[0], set[0][i]) * 113;
    // The top margin is zero because it is the first row
    set[0][i].style.top = '0px';
    // position is a number, toString() converts it into an string
    // This will now be the left margin of the tile
    set[0][i].style.left = position.toString() + 'px';
  }
  // Same as above, just for second row
  for (var i = 0; i < 3; i++) {
    position = Array.prototype.indexOf.call(set[1], set[1][i]) * 113;
    set[1][i].style.top = '113px';
    set[1][i].style.left = position.toString() + 'px';
  }

  // Same as above, just for third row
  for (var i = 0; i < 3; i++) {
    position = Array.prototype.indexOf.call(set[2], set[2][i]) * 113;
    set[2][i].style.top = '226px';
    set[2][i].style.left = position.toString() + 'px';
  }
}



// Checks all the possible ways in which we can move a tile
function shiftPuzzle(tile) {
  if (isRight(tile)) {
    // Checks if we can shift the current tile to the right
    moveRight(tile);
  } else if (isLeft(tile)) {
    moveLeft(tile);
  } else if (isTop(tile)) {
    moveTop(tile);
  } else if (isDown(tile)) {
    moveDown(tile);
  }
}

function isRight(tile) {
  // Gives us the position of the tile within the array
  var position = Array.prototype.indexOf.call(game.tiles, tile);
  //   console.log(position);

  // The condition for moving the tile to the right is that there should be a blank tile to the right of it
  // blank_position is to check that exactly
  blank_position = position + 1;
  //   Object.is() is to compare if the params are same
  // Also check if the tile is not the tile in the right most column
  if (
    Object.is(game.tiles[blank_position], game.blanktile) &&
    position != 5 &&
    position != 2 &&
    position != 8
  ) {
    return true;
  }
}

// The function that actually moves the tile to the right
function moveRight(tile) {
  // Gives us the position of the tile within the array
  var position = Array.prototype.indexOf.call(game.tiles, tile);
  //   The left margin gives us the position of the tile -> 0 is first, 113 is second, 226 is third
  var current_posX = tile.style.left;
  //   This is to get the numeric value from 113px ie - 113
  var res = current_posX.split('px')[0];
  //   No idea why eval is used
  current = eval(res);
  //   To move to right, add 113 to the left margin
  tile.style.left = (current + 113).toString() + 'px';

  //   Do the same thing that you did above for the blank tile
  // Just shift it in the opposite direction of the previous tile
  var blank_position = Array.prototype.indexOf.call(game.tiles, game.blanktile);
  var current_blank_posX = game.blanktile.style.left;
  var res_blank = current_blank_posX.split('px')[0];
  var current_blank = eval(res_blank);
  game.blanktile.style.left = (current_blank - 113).toString() + 'px';

  //   Change the content of the tile
  game.tiles[blank_position] = game.tiles[position];
  game.tiles[position] = game.blanktile;
}

// Check out isRight to understand what is happening
function isLeft(tile) {
  var position = Array.prototype.indexOf.call(game.tiles, tile);
  //   This is changed
  blank_position = position - 1;
  //   This is changed
  if (
    Object.is(game.tiles[blank_position], game.blanktile) &&
    position != 0 &&
    position != 3 &&
    position != 6
  ) {
    return true;
  }
}

// Check out moveRight to understand what is happening
function moveLeft(tile) {
  var position = Array.prototype.indexOf.call(game.tiles, tile);
  var current_posX = tile.style.left;
  var res = current_posX.split('px')[0];
  current = eval(res);
  //   This is changed
  tile.style.left = (current - 113).toString() + 'px';

  var blank_position = Array.prototype.indexOf.call(game.tiles, game.blanktile);
  var current_blank_posX = game.blanktile.style.left;
  var res_blank = current_blank_posX.split('px')[0];
  var current_blank = eval(res_blank);
  //   This is changed
  game.blanktile.style.left = (current_blank + 113).toString() + 'px';

  //game.tiles = Array.from(game.tiles);
  game.tiles[blank_position] = game.tiles[position];
  game.tiles[position] = game.blanktile;
}

// Check out isRight to understand what is happening
function isTop(tile) {
  var position = Array.prototype.indexOf.call(game.tiles, tile);
  //   This is changed
  blank_position = position - 3;
  //   This is changed
  if (Object.is(game.tiles[blank_position], game.blanktile)) {
    return true;
  }
}

// Check out moveRight to understand what is happening
function moveTop(tile) {
  var position = Array.prototype.indexOf.call(game.tiles, tile);
  //   This is changed
  var current_posY = tile.style.top;
  var res = current_posY.split('px')[0];
  current = eval(res);
  //   This is changed
  tile.style.top = (current - 113).toString() + 'px';

  var blank_position = Array.prototype.indexOf.call(game.tiles, game.blanktile);
  //   This is changed
  var current_blank_posY = game.blanktile.style.top;
  var res_blank = current_blank_posY.split('px')[0];
  var current_blank = eval(res_blank);
  //   This is changed
  game.blanktile.style.top = (current_blank + 113).toString() + 'px';

  game.tiles[blank_position] = game.tiles[position];
  game.tiles[position] = game.blanktile;
}

// Check out isRight to understand what is happening
function isDown(tile) {
  var position = Array.prototype.indexOf.call(game.tiles, tile);
  //   This is changed
  blank_position = position + 3;
  //   This is changed
  if (Object.is(game.tiles[blank_position], game.blanktile)) {
    return true;
  }
}

// Check out moveRight to understand what is happening
function moveDown(tile) {
  var position = Array.prototype.indexOf.call(game.tiles, tile);
  //   This is changed
  var current_posY = tile.style.top;
  var res = current_posY.split('px')[0];
  current = eval(res);
  //   This is changed
  tile.style.top = (current + 113).toString() + 'px';

  var blank_position = Array.prototype.indexOf.call(game.tiles, game.blanktile);
  //   This is changed
  var current_blank_posY = game.blanktile.style.top;
  var res_blank = current_blank_posY.split('px')[0];
  var current_blank = eval(res_blank);
  //   This is changed
  game.blanktile.style.top = (current_blank - 113).toString() + 'px';

  game.tiles[blank_position] = game.tiles[position];
  game.tiles[position] = game.blanktile;
}

// Checks if we won
function win() {
  //   isEqual is a function
  if (isEqual(game.tiles, game.winCondition)) {
    //   setTimeout is for setting the alert after 1/2 second
    setTimeout(function () {
      alert('You win!');
    }, 500);
  }
}

// Checks if the final state and current state are equal
function isEqual(currentboard, winboard) {
  for (var i = 0; i < currentboard.length; i++) {
    if (currentboard[i] != winboard[i]) {
      return false;
    }
  }

  return true;
}
