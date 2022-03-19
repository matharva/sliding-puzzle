/*function checkCopy() {
    var i;
    for (i = 0; i < 8; i++) {
        if(i+1 != gridCopy[i]) {
            return -1;
        }
    }
    return 1;
}

function bfs() {
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
class Queue 
{ 
    constructor() 
    { 
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
var grid = [0,1,2,3,4,5,6,7,8];
var cord = [[0,0],[0,1],[0,2],[1,0],[1,1],[1,2],[2,0],[2,1],[2,2]];
var stateHistory = [];
var heuristicHistory = [];
var pos = 8, gx = 0;
function checkState() {
    for(let i = 0; i < 9; i++)
        if(grid[i] != i)
            return false;
    return true;
}

class State
{
    constructor(gridCopy , dir , posCopy)
    {
        this.gridCopy = gridCopy;
        this.dir = dir;
        this.posCopy = posCopy;
    }
}

function moveTile(id) {
    // console.log(id);
    let tilePos = grid.indexOf(parseInt(id));
    console.log(tilePos);
    if(tilePos-3 == pos)
        slideUp();
    else if(tilePos+3 == pos)
        slideDown();
    else if(tilePos-1 == pos)
        slideLeft();
    else if(tilePos+1 == pos)
        slideRight();
    pos = grid.indexOf(8);
}

var heuristic = 0;
function get_Heuristic() {
    heuristic = 0;
    for (let i = 0; i < 9; i++) {
        if(grid[i] != i && grid[i] != 8) {
            // heuristic++;
            heuristic += (Math.abs(cord[grid[i]][0] - cord[i][0])+Math.abs(cord[grid[i]][1] - cord[i][1]));
            if(grid[i] == grid[grid[i]] && (cord[grid[i]][0] == cord[i][0] || cord[grid[i]][1] == cord[i][1]))
                heuristic += 2;
        }
    }
    return heuristic; //return total mismatch
}

// function bs(array,left,right,elem) {
//     if (left >= right)
//         return left;

//     let middle;
//     middle = Math.floor((left + right) / 2);
//     if (elem > array[middle])
//         return bs(array, middle + 1, right, elem);
//     if ((elem < array[middle]))
//         return bs(array, left, middle, elem); //<--- was: middle-1
//     return middle; // element existed into array
// }

// function checkHistory(currentHeuristic) {
//     let currentState = encode();
//     let searchResult = bs(stateHistory, 0, stateHistory.length-1, currentState);
//     if(stateHistory[searchResult] == currentState && gx+currentHeuristic >= heuristicHistory[searchResult])
//         return true;
//     return false;
// }

function encode() {
    let buffer = 100000000;
    let answer = 0;
    for(let i = 0; i < 9; i++) {
        answer += buffer*grid[i];
        buffer /= 10;
    }
    return answer;
}

function swap(x , y) {
    var temp = grid[x];
    grid[x] = grid[y];
    grid[y] = temp;
}

function tempSwap(x , y) {
    var heurValue;
    var currentEncodedState;
    swap(x , y);
    currentEncodedState = encode();
    heurValue = get_Heuristic();
    if(stateHistory.indexOf(currentEncodedState) != -1 && heuristicHistory[stateHistory.indexOf(currentEncodedState)] <= heurValue+gx) {
        swap(x , y);
        return -1;
    }
    swap(x , y);
    return heurValue;
}


var undoStack = new Stack();

function slideUp() {
    let blank = document.getElementById(grid[pos]);
    let tile = document.getElementById(grid[pos + 3]);
    swap(pos, pos + 3);
    blank.style.top = (parseInt(blank.style.top.split('px')[0])+110).toString()+'px';
    tile.style.top = (parseInt(tile.style.top.split('px')[0])-110).toString()+'px';
    if(checkState())
        myFunction();
}

function slideDown() {
    // console.log("here");
    let blank = document.getElementById(grid[pos]);
    let tile = document.getElementById(grid[pos - 3]);
    swap(pos, pos - 3);
    blank.style.top = (parseInt(blank.style.top.split('px')[0])-110).toString()+'px';
    tile.style.top = (parseInt(tile.style.top.split('px')[0])+110).toString()+'px';
    if(checkState())
        myFunction();
}

function slideRight() {
    let blank = document.getElementById(grid[pos]);
    let tile = document.getElementById(grid[pos - 1]);
    swap(pos, pos - 1);
    blank.style.left = (parseInt(blank.style.left.split('px')[0])-110).toString()+'px';
    tile.style.left = (parseInt(tile.style.left.split('px')[0])+110).toString()+'px';
    if(checkState())
        myFunction();
}

function slideLeft() {
    let blank = document.getElementById(grid[pos]);
    let tile = document.getElementById(grid[pos + 1]);
    swap(pos, pos + 1);
    blank.style.left = (parseInt(blank.style.left.split('px')[0])+110).toString()+'px';
    tile.style.left = (parseInt(tile.style.left.split('px')[0])-110).toString()+'px';
    if(checkState())
        myFunction();
}
var optimalMove = 1, direction = 0;

function getOptimal() {
    console.log(stateHistory);
    optimalMove = 100;
    if(pos == 0) {

        if(tempSwap(pos, pos + 1) != -1 && optimalMove >= tempSwap(pos, pos + 1)) {
          optimalMove = tempSwap(pos, pos + 1);
          direction = 1;
        }
        if(tempSwap(pos, pos + 3) != -1 && optimalMove >= tempSwap(pos, pos + 3)) {
            optimalMove = tempSwap(pos, pos + 3);
            direction = 3;
        }
        if(optimalMove == 100) {
            swap(pos, pos+1);
            stateHistory.splice(stateHistory.indexOf(encode()), 1);
          optimalMove = tempSwap(pos, pos+ 1);
          swap(pos, pos+1);
          direction = 1;
        }
    }
    else if(pos == 1) {

        if(tempSwap(pos, pos-1) != -1 && optimalMove >= tempSwap(pos, pos - 1)) {
          optimalMove = tempSwap(pos, pos - 1);
          direction = -1;
        }
        
        if(tempSwap(pos, pos + 3) != -1 && optimalMove >= tempSwap(pos, pos + 3)) {
            optimalMove = tempSwap(pos, pos + 3);
            direction = 3;
        }
        if(tempSwap(pos, pos + 1) != -1 && optimalMove >= tempSwap(pos, pos + 1)) {
            optimalMove = tempSwap(pos, pos + 1);
            direction = 1;
        }
        if(optimalMove == 100) {
            swap(pos, pos-1);
            stateHistory.splice(stateHistory.indexOf(encode()), 1);
          optimalMove = tempSwap(pos, pos - 1);
          swap(pos, pos-1);
          direction = -1;
        }
    }
    else if(pos == 2) {

        if(tempSwap(pos, pos-1) != -1 && optimalMove >= tempSwap(pos, pos - 1)) {
          optimalMove = tempSwap(pos, pos - 1);
          direction = -1;
        }
        
        if(tempSwap(pos, pos + 3) != -1 && optimalMove >= tempSwap(pos, pos + 3)) {
            optimalMove = tempSwap(pos, pos + 3);
            direction = 3;
        }
        if(optimalMove == 100) {
            swap(pos, pos-1);
            stateHistory.splice(stateHistory.indexOf(encode()), 1);
          optimalMove = tempSwap(pos, pos - 1);
          swap(pos, pos-1);
          direction = -1;
        }
        if(optimalMove == 100) {
            swap(pos, pos-1);
            stateHistory.splice(stateHistory.indexOf(encode()), 1);
          optimalMove = tempSwap(pos, pos - 1);
          swap(pos, pos-1);
          direction = -1;
        }
    }
    else if(pos == 3) {

        if(tempSwap(pos, pos-3) != -1 && optimalMove >= tempSwap(pos, pos - 3)) {
          optimalMove = tempSwap(pos, pos - 3);
          direction = -3;
        }
        
        if(tempSwap(pos, pos + 3) != -1 && optimalMove >= tempSwap(pos, pos + 3)) {
            optimalMove = tempSwap(pos, pos + 3);
            direction = 3;
        }
        if(tempSwap(pos, pos + 1) != -1 && optimalMove >= tempSwap(pos, pos + 1)) {
            optimalMove = tempSwap(pos, pos + 1);
            direction = 1;
        }
        if(optimalMove == 100) {
            swap(pos, pos+1);
            stateHistory.splice(stateHistory.indexOf(encode()), 1);
          optimalMove = tempSwap(pos, pos + 1);
          swap(pos, pos+1);
          direction = 1;
        }
    }
    else if(pos == 4) {

        if(tempSwap(pos, pos-1) != -1 && optimalMove >= tempSwap(pos, pos - 1)) {
          optimalMove = tempSwap(pos, pos - 1);
          direction = -1;
        }
        if(tempSwap(pos, pos + 3) != -1 && optimalMove >= tempSwap(pos, pos + 3)) {
            optimalMove = tempSwap(pos, pos + 3);
            direction = 3;
        }
        if(tempSwap(pos, pos + 1) != -1 && optimalMove >= tempSwap(pos, pos + 1)) {
            optimalMove = tempSwap(pos, pos + 1);
            direction = 1;
        }
        if(tempSwap(pos, pos-3) != -1 && optimalMove >= tempSwap(pos, pos - 3)) {
            optimalMove = tempSwap(pos, pos - 3);
            direction = -3;
        }
        if(optimalMove == 100) {
            swap(pos, pos-1);
            stateHistory.splice(stateHistory.indexOf(encode()), 1);
          optimalMove = tempSwap(pos, pos - 1);
          swap(pos, pos-1);
          direction = -1;
        }
    }
    else if(pos == 5) {

        if(tempSwap(pos, pos-3) != -1 && optimalMove >= tempSwap(pos, pos - 3)) {
          optimalMove = tempSwap(pos, pos - 3);
          direction = -3;
        }
        if(tempSwap(pos, pos + 3) != -1 && optimalMove >= tempSwap(pos, pos + 3)) {
            optimalMove = tempSwap(pos, pos + 3);
            direction = 3;
        }
        if(tempSwap(pos, pos-1) != -1 && optimalMove >= tempSwap(pos, pos - 1)) {
            optimalMove = tempSwap(pos, pos - 1);
            direction = -1;
        }
        if(optimalMove == 100) {
            swap(pos, pos-1);
            stateHistory.splice(stateHistory.indexOf(encode()), 1);
          optimalMove = tempSwap(pos, pos - 1);
          swap(pos, pos-1);
          direction = -1;
        }
    }
    else if(pos == 6) {

        if(tempSwap(pos, pos + 1) != -1 && optimalMove >= tempSwap(pos, pos + 1)) {
          optimalMove = tempSwap(pos, pos + 1);
          direction = 1;
        }
        if(tempSwap(pos, pos-3) != -1 && optimalMove >= tempSwap(pos, pos - 3)) {
            optimalMove = tempSwap(pos, pos - 3);
            direction = -3;
        }
        if(optimalMove == 100) {
            swap(pos, pos+1);
            stateHistory.splice(stateHistory.indexOf(encode()), 1);
          optimalMove = tempSwap(pos, pos + 1);
          swap(pos, pos+1);
          direction = 1;
        }
    }
    else if(pos == 7) {

        if(tempSwap(pos, pos-3) != -1 && optimalMove >= tempSwap(pos, pos - 3)) {
          optimalMove = tempSwap(pos, pos - 3);
          direction = -3;
        }
        if(tempSwap(pos, pos + 1) != -1 && optimalMove >= tempSwap(pos, pos + 1)) {
            optimalMove = tempSwap(pos, pos + 1);
            direction = 1;
        }
        if(tempSwap(pos, pos-1) != -1 && optimalMove >= tempSwap(pos, pos - 1)) {
            optimalMove = tempSwap(pos, pos - 1);
            direction = -1;
        }
        if(optimalMove == 100) {
            swap(pos, pos-1);
            stateHistory.splice(stateHistory.indexOf(encode()), 1);
          optimalMove = tempSwap(pos, pos - 1);
          swap(pos, pos-1);
          direction = -1;
        }
    }
    else if(pos == 8) {
        if(tempSwap(pos, pos-1) != -1 && optimalMove >= tempSwap(pos, pos - 1)) {
          optimalMove = tempSwap(pos, pos - 1);
          direction = -1;
        }
        if(tempSwap(pos, pos-3) != -1 && optimalMove >= tempSwap(pos, pos - 3)) {
            optimalMove = tempSwap(pos, pos - 3);
            direction = -3;
        }
        if(optimalMove == 100) {
            swap(pos, pos-1);
            stateHistory.splice(stateHistory.indexOf(encode()), 1);
          optimalMove = tempSwap(pos, pos - 1);
          swap(pos, pos-1);
          direction = -1;
        }
    }
    // let searchResult = bs(stateHistory, 0, stateHistory.length-1, currentEncoded);
    // stateHistory.splice(searchResult, 0, currentEncoded);
    // heuristicHistory.splice(searchResult, 0, currentEncoded, optimalMove+gx);
    swap(pos, pos+direction);
    let currentEncoded = encode();
    stateHistory.push(currentEncoded);
    heuristicHistory.push(optimalMove+gx);
    swap(pos, pos+direction);
    if(direction == 1) 
        slideLeft();
    else if(direction == 3)
        slideUp();
    else if(direction == -1)
        slideRight();
    else
        slideDown();
}
var posPrev = pos+1;
function solvePuzzle() {
    if(!isSolvable()) {
        myFunction1();
        while(!isSolvable())
            shuffle();
        setPos();
    }
    gx+=1;
    setTimeout(function() {
        if(optimalMove != 0) {
            solvePuzzle();
            console.log(optimalMove);
            console.log("Position: "+pos);
            console.log(grid);
            setTimeout(getOptimal, 300);
            posPrev = pos;
            pos = grid.indexOf(8);
            undoStack.push(direction);
        }
    }, 300)
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

function setPos() {
    document.getElementById(grid[0]).style.top = "0px";
    document.getElementById(grid[0]).style.left = "0px";
    
    document.getElementById(grid[1]).style.top = "0px";
    document.getElementById(grid[1]).style.left = "110px";
    
    document.getElementById(grid[2]).style.top = "0px";
    document.getElementById(grid[2]).style.left = "220px";
    
    document.getElementById(grid[3]).style.top = "110px";
    document.getElementById(grid[3]).style.left = "0px";
    
    document.getElementById(grid[4]).style.top = "110px";
    document.getElementById(grid[4]).style.left = "110px";
    
    document.getElementById(grid[5]).style.top = "110px";
    document.getElementById(grid[5]).style.left = "220px";
    
    document.getElementById(grid[6]).style.top = "220px";
    document.getElementById(grid[6]).style.left = "0px";
    
    document.getElementById(grid[7]).style.top = "220px";
    document.getElementById(grid[7]).style.left = "110px";
    
    document.getElementById(grid[8]).style.top = "220px";
    document.getElementById(grid[8]).style.left = "220px";
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
function isSolvable() 
{ 
    // Count inversions in given 8 puzzle 
    let invCount = getInvCount(); 
  
    // return true if inversion count is even. 
    return (invCount%2 == 0); 
} 
  window.onload = function() {
    shuffle(grid);
    grid = [0,1,2,3,4,5,7,6,8];
    console.log(isSolvable());
    // stateHistory.push(12345768);
    // stateHistory.push(210345768);
    // console.log(encode());
    console.log(stateHistory);
    while(!isSolvable()) {
        shuffle();
    }
    setPos();
}
