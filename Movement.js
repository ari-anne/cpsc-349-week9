var charOneSpr = document.querySelector("#cat");
var charTwoSpr = document.querySelector("#dog");



//var sqrGridSize = 8;//might not be used?

var array_GridTiles = []; //empty array

//Tile data to be paired with DOM element
//var tileData = {
//    column: "",
//    row: "",
//    gridID: "null" //this is the element ID
//};


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



function MoveUp(isCat) {


    if (isCat) {

    } else {

    }
}

function checkMovementTo(theNewTile) {
    //check if the div has an image inside it and read it's ID
}
