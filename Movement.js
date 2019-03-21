var charOneSpr = document.querySelector("#SomeID1");
var charOneSpr = document.querySelector("#SomeID2");

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
    
    
};




//Parameter is the square grid size
function initializeGridSize()
{
    //use query to search for all grid element frames? (ie: #Grid0-0 )
    var allTilesCSS = document.querySelectorAll("#GridTile");
    
    
    
    
} 