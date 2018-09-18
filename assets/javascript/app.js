// --------------------------- PSEUDO CODE ----------------------------//

// function populateGIFs{
// click on a button
// make AJAX call to GIHPY API using button name
// populate 10 random results from GIPHY API, including image and rating
//}


// function animate(){
    // on click of any gif
    // if gif is clicked, change state to 'animate'
    // if gif is clicked again, change state to 'still'
//}





// --------------------------- VARIABLES ----------------------------//

// global variable for name of each button
var artistName;

// developerKey for Giphy API
var developerKey = 'U3BtmZzPNZDs1sxjc8CNPcTKD74evZQV'

// variable to store userInput from form
var userInput;

// array to hold initial sarch terms to create buttons upon init
var initialButtons = ['kendrick-lamar','tom-petty','prince','tupac','bob-marley'];

// --------------------------- FUNCTIONS ----------------------------//
function intialButtons(){
    // for any value in initialButtons
    for (var i = 0; i < initialButtons.length; i++){
        console.log(initialButtons[i])

        //var newDiv
        var newDiv = $("<button class = 'initialButtons' type = 'button'>" + initialButtons[i] + "</button>")

        //generate a button
        $("#artistbuttons").prepend(newDiv).addClass('artistbtn')
    }
}

function createNewButton(){
    // on click of 'submit' button (id = 'addbutton')
    // append new button to div id = 'buttons'
}
    



// Storing our giphy API URL for a random 
var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=U3BtmZzPNZDs1sxjc8CNPcTKD74evZQV&tag="+ userInput






// ------------------------ EVENT LISTENERS -------------------------//

$(document).ready(function(){
    initialButtons();
});