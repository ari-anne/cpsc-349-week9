var charOneSpr = document.querySelector("#cat");
var charTwoSpr = document.querySelector("#dog");



//var sqrGridSize = 8;//might not be used?

var array_GridTiles = []; //empty array

//Tile data to be paired with DOM element
var tileData = {
    column: "",
    row: "",
};


// when window loads all assets
window.onload = function () {
    alert("Hello, welcome to the grid board!");

    initializeGridSize();

};




//Parameter is the square grid size
function initializeGridSize() {
//    var boardElement = document.querySelector(".board");

    array_GridTiles = document.querySelectorAll("#tile");
    //go thru all found GridTiles, rename their ID to match the grid size

    
    array_GridTiles[1].appendChild(charOneSpr);
    array_GridTiles[2].appendChild(charTwoSpr);

}


//only call if valid step
function swapImage(char, newRow, newCol)
{
    //get the character to move to
    //clear old location
    //insert to new location?
}

//bool, direction="up","left","down","right"
function Move(isCat, direction) {
    var currRow;
    var currCol;
    
    if (isCat) {
        //find parent data-'type'
        currRow= charOneSpr.parentNode.dataset.rowId;
        currCol= charOneSpr.parentNode.dataset.colId;
        
        switch(direction)
            {
                case "up": checkMovementTo( );
                case "down":
                case "left":
                case "right":
            }
        
    } else {

    }
}

function checkMovementTo(theOldTile, theNewTile, char) {
    //check if the div has an image inside it and read it's ID
    
}
