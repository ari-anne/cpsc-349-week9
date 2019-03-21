var charOneSpr = document.querySelector("#SomeID1");
var charOneSpr = document.querySelector("#SomeID2");

var C1;


var sqrGridSize = 8;//might not be used?

var array_GridTiles = []; //empty array, should be filled with tileData

//Tile data to be paired with DOM element
var tileData = {
    column: "",
    row: "",
    gridID: "null" //this is the element ID
};


// when window loads all assets
window.onload = function()
{
    alert("Hello, welcome to the grid board!");
    
    myGamePiece = new component(30, 30, "red", 10, 120);
    
};




//Parameter is the square grid size
function initializeGridSize()
{
    var boardElement = document.querySelector(".board");
    
    var innerHtmlOfTile = "<div class=\"tileBackground\">Tile!</div>";
    //use query to search for all grid element frames? (ie: #Grid0-0 )
    //var allTilesCSS = document.querySelectorAll("#GridTile");
    for(i = 0; i < (sqrGridSize*sqrGridSize); i++)
        {
            
        }
    
    
    
    //go thru all found GridTiles, rename their ID to match the grid size
    
    
} 




function MoveUp(char)
{
    
}

function checkMovementTo(theNewTile)
{
    
}