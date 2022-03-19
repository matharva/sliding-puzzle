/*function bfs() {
    arrayObj = [];
    var queueObj = new Queue();
    var count = 0;
    arrayObj[count++] = new State(gridCopy , "0" , posCopy);
    queueObj.enqueue(arrayObj[count-1]);
    
    while (!queueObj.isEmpty()) {

        if(checkCopy() == -1)
        {
            if(queueObj.items[0].posCopy == 0) {
                arrayObj[count++] = new State(gridCopy , 3 , 3);
                queueObj.enqueue(arrayObj[count-1]);
                arrayObj[count++] = new State(gridCopy , -1 , 1);
                queueObj.enqueue(arrayObj[count-1]);
            }
            else if(queueObj.items[0].posCopy == 2) {
                arrayObj[count++] = new State(gridCopy , 3 , 5);
                queueObj.enqueue(arrayObj[count-1]);
                arrayObj[count++] = new State(gridCopy , 1 , 1);
                queueObj.enqueue(arrayObj[count-1]);
            }
            else if(queueObj.items[0].posCopy == 6) {
                arrayObj[count++] = new State(gridCopy , -3 , 3);
                queueObj.enqueue(arrayObj[count-1]);
                arrayObj[count++] = new State(gridCopy , -1 , 7);
                queueObj.enqueue(arrayObj[count-1]);
            }
            else if(queueObj.items[0].posCopy == 8) {
                arrayObj[count++] = new State(gridCopy , -3 , 5);
                queueObj.enqueue(arrayObj[count-1]);
                arrayObj[count++] = new State(gridCopy , 1 , 7);
                queueObj.enqueue(arrayObj[count-1]);
            }
            else if(queueObj.items[0].posCopy == 1) {
                arrayObj[count++] = new State(gridCopy , 3 , 4);
                queueObj.enqueue(arrayObj[count-1]);
                arrayObj[count++] = new State(gridCopy , -1 , 2);
                queueObj.enqueue(arrayObj[count-1]);
                arrayObj[count++] = new State(gridCopy , 1 , 0);
                queueObj.enqueue(arrayObj[count-1]);
            }
            else if(queueObj.items[0].posCopy == 3) {
                arrayObj[count++] = new State(gridCopy , 3 , 6);
                queueObj.enqueue(arrayObj[count-1]);
                arrayObj[count++] = new State(gridCopy , -1 , 4);
                queueObj.enqueue(arrayObj[count-1]);
                arrayObj[count++] = new State(gridCopy , -3 , 0);
                queueObj.enqueue(arrayObj[count-1]);
            }
            else if(queueObj.items[0].posCopy == 5) {
                arrayObj[count++] = new State(gridCopy , 3 , 8);
                queueObj.enqueue(arrayObj[count-1]);
                arrayObj[count++] = new State(gridCopy , -3 , 2);
                queueObj.enqueue(arrayObj[count-1]);
                arrayObj[count++] = new State(gridCopy , 1 , 4);
                queueObj.enqueue(arrayObj[count-1]);
            }
            else if(queueObj.items[0].posCopy == 7) {
                arrayObj[count++] = new State(gridCopy , -3 , 4);
                queueObj.enqueue(arrayObj[count-1]);
                arrayObj[count++] = new State(gridCopy , 1 , 6);
                queueObj.enqueue(arrayObj[count-1]);
                arrayObj[count++] = new State(gridCopy , -1 , 8);
                queueObj.enqueue(arrayObj[count-1]);
            }
            else if(queueObj.items[0].posCopy == 4) {
                arrayObj[count++] = new State(gridCopy , 3 , 7);
                queueObj.enqueue(arrayObj[count-1]);
                arrayObj[count++] = new State(gridCopy , -3 , 1);
                queueObj.enqueue(arrayObj[count-1]);
                arrayObj[count++] = new State(gridCopy , 'l' , 3);
                queueObj.enqueue(arrayObj[count-1]);
                arrayObj[count++] = new State(gridCopy , 'r' , 5);
                queueObj.enqueue(arrayObj[count-1]);
            }
            posCopy = queueObj.items[0].posCopy;
            direction = queueObj.items[0].dir;
            gridCopy = queueObj.items[0].gridCopy;
            queueObj.dequeue();

            if(direction == 1) 
                slideLeft();
            else if(direction == 3)
                slideUp();
            else if(direction == -1)
                slideRight();
            else
                slideDown();
            undoStack.push(direction);
        }
    }
}*/
// class Queue 
// { 
//     constructor() 
//     { 
//         this.items = []; 
//     } 
    
//     enqueue(item) {      
//         this.items.push(item); 
//     } 
//     dequeue() { 
//         // removing element from the queue 
//         if(this.isEmpty()) 
//             return "Underflow"; 
//         return this.items.shift(); 
//     } 
//     front() { 
//         // returns the Front element of   
//         if(this.isEmpty()) 
//             return "No elements in Queue"; 
//         return this.items[0]; 
//     } 
//     isEmpty() { 
//         // return true if the queue is empty. 
//         return this.items.length == 0; 
//     } 
// } 

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
const top1 = 0;
const parent = i => ((i + 1) >>> 1) - 1;
const left = i => (i << 1) + 1;
const right = i => (i + 1) << 1;

class PriorityQueue {
  constructor(comparator = (a, b) => a > b) {
    this._heap = [];
    this._comparator = comparator;
  }
  size() {
    return this._heap.length;
  }
  isEmpty() {
    return this.size() == 0;
  }
  peek() {
    return this._heap[top1];
  }
  push(...values) {
    values.forEach(value => {
      this._heap.push(value);
      this._siftUp();
    });
    return this.size();
  }
  pop() {
    const poppedValue = this.peek();
    const bottom = this.size() - 1;
    if (bottom > top1) {
      this._swap(top1, bottom);
    }
    this._heap.pop();
    this._siftDown();
    return poppedValue;
  }
  replace(value) {
    const replacedValue = this.peek();
    this._heap[top1] = value;
    this._siftDown();
    return replacedValue;
  }
  _greater(i, j) {
    return this._comparator(this._heap[i], this._heap[j]);
  }
  _swap(i, j) {
    [this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]];
  }
  _siftUp() {
    let node = this.size() - 1;
    while (node > top1 && this._greater(node, parent(node))) {
      this._swap(node, parent(node));
      node = parent(node);
    }
  }
  _siftDown() {
    let node = top1;
    while (
      (left(node) < this.size() && this._greater(left(node), node)) ||
      (right(node) < this.size() && this._greater(right(node), node))
    ) {
      let maxChild = (right(node) < this.size() && this._greater(right(node), left(node))) ? right(node) : left(node);
      this._swap(node, maxChild);
      node = maxChild;
    }
  }
}

var pos = 8, undoMove = 0;
var grid = [0,1,2,3,4,5,6,7,8];     // An array from 0-9 which represent the 3x3 game grid
var cord = [[0,0],[0,1],[0,2],[1,0],[1,1],[1,2],[2,0],[2,1],[2,2]];     // Co-ordinates of each tile in the grid
var row = [1, 0, -1, 0];
var col = [0, -1, 0, 1];
var helpme = false;         // Used in the helper function
var undoStack = new Stack();    // Used to store the solution and hence allows the user to undo the steps

function checkState() {
    for(let i = 0; i < 9; i++)
        if(grid[i] != i)
            return false;
    return true;
}

function moveTile(id) {
    // console.log(id);
    let tilePos = grid.indexOf(parseInt(id));
    pos = grid.indexOf(8);
    console.log(tilePos);
    if(tilePos-3 == pos)
        slideUp();
    else if(tilePos+3 == pos)
        slideDown();
    else if(tilePos-1 == pos && (pos != 2 && pos != 5))
        slideLeft();
    else if(tilePos+1 == pos && (pos != 3 && pos != 6))
        slideRight();
    pos = grid.indexOf(8);
}

// Makes changes in the actual grid
function swap(x , y) {
    var temp = grid[x];
    grid[x] = grid[y];
    grid[y] = temp;
}

// Makes changes in the temporary grid, hence the changes do not reflect on the screen 
function tempSwap(x , y, tempGrid) {
    var temp = tempGrid[x];
    tempGrid[x] = tempGrid[y];
    tempGrid[y] = temp;
}

// Slides the tile upward by manipulating margins
function slideUp() {
    if(!undoMove)
        undoStack.push("up");
    pos = grid.indexOf(8);
    let blank = document.getElementById(grid[pos]);
    let tile = document.getElementById(grid[pos + 3]);
    swap(pos, pos + 3);
    blank.style.top = (parseInt(blank.style.top.split('px')[0])+110).toString()+'px';
    tile.style.top = (parseInt(tile.style.top.split('px')[0])-110).toString()+'px';
    pos = grid.indexOf(8);
    if(checkState())
        myFunction();
}

// Slides the tile downward by manipulating margins
function slideDown() {
    if(!undoMove)
        undoStack.push("down");
    pos = grid.indexOf(8);
    let blank = document.getElementById(grid[pos]);
    let tile = document.getElementById(grid[pos - 3]);
    swap(pos, pos - 3);
    blank.style.top = (parseInt(blank.style.top.split('px')[0])-110).toString()+'px';
    tile.style.top = (parseInt(tile.style.top.split('px')[0])+110).toString()+'px';
    pos = grid.indexOf(8);
    if(checkState())
        myFunction();
}

// Slides the tile to the right by manipulating margins
function slideRight() {
    if(!undoMove)
        undoStack.push("right");
    pos = grid.indexOf(8);
    let blank = document.getElementById(grid[pos]);
    let tile = document.getElementById(grid[pos - 1]);
    swap(pos, pos - 1);
    blank.style.left = (parseInt(blank.style.left.split('px')[0])-110).toString()+'px';
    tile.style.left = (parseInt(tile.style.left.split('px')[0])+110).toString()+'px';
    pos = grid.indexOf(8);
    if(checkState())
        myFunction();
}

// Slides the tile to the left by manipulating margins
function slideLeft() {
    if(!undoMove)
        undoStack.push("left");
    pos = grid.indexOf(8);
    let blank = document.getElementById(grid[pos]);
    let tile = document.getElementById(grid[pos + 1]);
    swap(pos, pos + 1);
    blank.style.left = (parseInt(blank.style.left.split('px')[0])+110).toString()+'px';
    tile.style.left = (parseInt(tile.style.left.split('px')[0])-110).toString()+'px';
    pos = grid.indexOf(8);
    if(checkState())
        myFunction();
}
var optimalMove = 1, direction = 0;

// Activated when the undo button is clicked
// Moves the topmost tile in a direction that is opposite to the tile at the top of the undoStack
function undo() {
    if(!undoStack.isEmpty()) {
        var tempdirection = undoStack.peek();
        undoStack.pop();
        undoMove = 1;
        if(tempdirection == "right") 
            slideLeft();
        else if(tempdirection == "down")
            slideUp();
        else if(tempdirection == "left")
            slideRight();
        else
            slideDown();
        undoMove = 0;
    }
}

function myFunction() {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar");
  
    // Add the "show" class to DIV
    x.className = "show";
  
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }

  function myFunction1() {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar1");
  
    // Add the "show" class to DIV
    x.className = "show";
  
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }

var imageArr = ['kungupanda', 'kungupanda2', 'shifu', 'kungupanda3', 'kungupanda4']
var selectImage = Math.floor(Math.random() * imageArr.length);


// Sets the position of the tiles and loads the image 
function setPos() {
    // sets the top and left margin as 0px as its is the first tile of the grid
    document.getElementById(grid[0]).style.top = "0px";
    document.getElementById(grid[0]).style.left = "0px";

    // Loads the image by going to the respective directory using string manipulation
    let img1 = imageArr[selectImage] + '/' + (grid[0]+1).toString() + '.jpg';
    if (grid[0] != 8)   // Checks foe blank tile
        document.getElementById(grid[0]).style.backgroundImage = `url(${img1})`;

    document.getElementById(grid[1]).style.top = "0px";
    document.getElementById(grid[1]).style.left = "110px";
    let img2 = imageArr[selectImage] + '/' + (grid[1]+1).toString() + '.jpg';
    if (grid[1] != 8)
        document.getElementById(grid[1]).style.backgroundImage = `url(${img2})`;
    
    document.getElementById(grid[2]).style.top = "0px";
    document.getElementById(grid[2]).style.left = "220px";
    let img3 = imageArr[selectImage] + '/' + (grid[2]+1).toString() + '.jpg';
    if (grid[2] != 8)
        document.getElementById(grid[2]).style.backgroundImage = `url(${img3})`;
    
    document.getElementById(grid[3]).style.top = "110px";
    document.getElementById(grid[3]).style.left = "0px";
    let img4 = imageArr[selectImage] + '/' + (grid[3]+1).toString() + '.jpg';
    if (grid[3] != 8)
        document.getElementById(grid[3]).style.backgroundImage = `url(${img4})`;
        
    document.getElementById(grid[4]).style.top = "110px";
    document.getElementById(grid[4]).style.left = "110px";
    let img5 = imageArr[selectImage] + '/' + (grid[4]+1).toString() + '.jpg';
    if (grid[4] != 8)
        document.getElementById(grid[4]).style.backgroundImage = `url(${img5})`;
    
    document.getElementById(grid[5]).style.top = "110px";
    document.getElementById(grid[5]).style.left = "220px";
    let img6 = imageArr[selectImage] + '/' + (grid[5]+1).toString() + '.jpg';
    if (grid[5] != 8)
        document.getElementById(grid[5]).style.backgroundImage = `url(${img6})`;
    
    document.getElementById(grid[6]).style.top = "220px";
    document.getElementById(grid[6]).style.left = "0px";
    let img7 = imageArr[selectImage] + '/' + (grid[6]+1).toString() + '.jpg';
    if (grid[6] != 8)
        document.getElementById(grid[6]).style.backgroundImage = `url(${img7})`;
    
    document.getElementById(grid[7]).style.top = "220px";
    document.getElementById(grid[7]).style.left = "110px";
    let img8 = imageArr[selectImage] + '/' + (grid[7]+1).toString() + '.jpg';
    if (grid[7] != 8)
        document.getElementById(grid[7]).style.backgroundImage = `url(${img8})`;
    
    document.getElementById(grid[8]).style.top = "220px";
    document.getElementById(grid[8]).style.left = "220px";
    let img9 = imageArr[selectImage] + '/' + (grid[8]+1).toString() + '.jpg';
    if (grid[8] != 8)
        document.getElementById(grid[8]).style.backgroundImage = `url(${img9})`;
}

function shuffle() {
    var currentIndex = grid.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = grid[currentIndex];
      grid[currentIndex] = grid[randomIndex];
      grid[randomIndex] = temporaryValue;
    }
    pos = grid.indexOf(8);
        
  }
 
// Checks for the Inversion count - if even it is a solvable state, else it is not
function getInvCount() { 
    let inv_count = 0; 
    for (let i = 0; i < 9 - 1; i++) 
        for (let j = i+1; j < 9; j++) 
             // Value 0 is used for empty space 
             if ((grid[j]+1)%9 && (grid[i]+1)%9 &&  (grid[i]+1)%9 > (grid[j]+1)%9) 
                  inv_count++; 
    return inv_count; 
} 
  
// This function returns true if given 8 puzzle is solvable. 
function isSolvable() { 
    // Count inversions in given 8 puzzle 
    let invCount = getInvCount(); 
  
    // return true if inversion count is even. 
    return (invCount%2 == 0); 
} 

// Code starts from here
// This function is used to set the game by shuffling the grid and checking for unsolvable states 
window.onload = function() {

    shuffle(grid);      // Shuffles the grid 
    
    // Does not allow the game to load unless it is a solvable state
    while(!isSolvable()) {
        shuffle();
    }

    // Sets up the game on the screen by setting the tiles in their appropriate places and gives styling as well
    setPos();
}

// This function calcualtes the heuristic value for each state of the grid
function moveCost(tempGrid) {
    heuristic = 0;
    for (let i = 0; i < 9; i++) {
        if(tempGrid[i] != i && tempGrid[i] != 8) {
            // Calculating the heuristic by considering the manhattan distance
            heuristic += (Math.abs(cord[tempGrid[i]][0] - cord[i][0])+Math.abs(cord[tempGrid[i]][1] - cord[i][1]));

            // Condition for conflict state
            if(tempGrid[i] == tempGrid[tempGrid[i]] && (cord[tempGrid[i]][0] == cord[i][0] || cord[tempGrid[i]][1] == cord[i][1]))
                heuristic += 2;
        }
    }
    return heuristic;
}

// Checks if the state is valid ie- within the bounds of (0, 0) and (2, 2)
function checkCord(x, y) {
    return (x >= 0 && x < 3 && y >= 0 && y < 3);
}

// Function that uses the Priority Queue and implements the BFS using heuristic until the final state is encountered
function solvePuzzleEfficient() {
    if(!checkState()) {
        pos = grid.indexOf(8);  // Position of the blank tile
        move = [];      // Array for storing all the moves to reach the final state

        var pq = new PriorityQueue((a, b) => a.cost + a.level < b.cost + b.level);

        var root = {
            mat : grid,
            x: cord[pos][0],
            y: cord[pos][1],
            level: 0,
            cost: moveCost(grid),   // Heuristic
            parent: null
        };

        // Enqueue the root node or the shuffled unsolved state into the Priority Queue
        pq.push(root);

        // BFS traversal
        while(!pq.isEmpty()) {

            var min = pq.peek();
            pq.pop();

            let tempGrid = min.mat.slice(); 

            // Condition to break out of the while loop when the final state is reached
            if(min.cost == 0) {     
                break;
            }

            // Creates all the possible states and enqueues them in the priority queue
            for(let i = 0; i < 4; i++) {
                if(checkCord(min.x + row[i], min.y + col[i])) {
                    tempSwap(3*min.x+min.y, 3*(min.x+row[i])+(min.y+col[i]), tempGrid);

                    let tempNode = {
                        mat: tempGrid.slice(),
                        x: min.x + row[i],
                        y: min.y + col[i],
                        level: min.level + 1,
                        cost: moveCost(tempGrid),
                        parent: min
                    };

                    tempSwap(3*min.x+min.y, 3*(min.x+row[i])+(min.y+col[i]), tempGrid);
                    pq.push(tempNode);
                }
            }
        }

        // Once the final state is obtained, 
        performMoves(min, null);
    }
    else    // Function that uses snackbar to indicate that the final state is found ie- we won the game
        myFunction();
}

// Stores the position of the blank tile during the traversal 
var move = [];


function performMoves(min, minChild) {

    // Recursively travel to initial state or the root node
    if(min.parent != null)
        performMoves(min.parent, min);

    // From the initial state, traverse into the branch which gives us the solution
    if(minChild != null) {
            // Position of blank tile in the child node of the current node
            let tilePos = min.mat.indexOf(parseInt(min.mat[minChild.mat.indexOf(8)]));
            pos = min.mat.indexOf(8);
            console.log(tilePos);

            // Updates the array that contains the moves as it traverses through the branch
            if(tilePos-3 == pos)
                move.push("up");
            else if(tilePos+3 == pos)
                move.push("down");
            else if(tilePos-1 == pos && (pos != 2 && pos != 5))
                move.push("left");
            else if(tilePos+1 == pos && (pos != 3 && pos != 6))
                move.push("right");
            pos = min.mat.indexOf(8);
    }
    else {
        move.push("done");
        movePosition = 0;
        console.log(move);
        solvePuzzle();
    }
}

var movePosition = 0;
function moveWinTile() {
    pos = grid.indexOf(8);
    // console.log(pos)
    if(move[movePosition] == "up")
        slideUp();
    else if(move[movePosition] == "down")
        slideDown();
    else if(move[movePosition] == "left")
        slideLeft();
    else if(move[movePosition] == "right")
        slideRight();
    pos = grid.indexOf(8);
}

// Calls the function that slides the tiles until the final state is reached ie-the "done" parameter is encountered
function solvePuzzle() {
    setTimeout(function() {
        if(move[movePosition] != "done") {
            moveWinTile();
            movePosition += 1;
            solvePuzzle();
        }
    }, 300)
}

// Displays the tile number when the checkbox is marked
let helpArray = document.querySelectorAll('.checkthis');
console.log(helpArray);
function help(){
    console.log('In click');
    if(helpme){
        helpme = false;
        for(var i=0;i<helpArray.length;i++){
        // Changes the css of the tile in such a way that the text is hidden
		helpArray[i].style.display = "none";
    }
}
    else{
	helpme = true;
	for(var i=0;i<helpArray.length;i++){
        // Changes the css of the tile in such a way that the text is visible
        helpArray[i].style.display = "inline-block";
		helpArray[i].style.color = "white";
        helpArray[i].innerText = helpArray[i].parentElement.id;
        
	}
}
}
