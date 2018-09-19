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
var initialBtns = ['kendrick-lamar','tom-petty','prince','tupac','bob-marley'];
 
// global variable selector for artistImage
var artistImage;

// --------------------------- FUNCTIONS ----------------------------//
function initialButtons(){
    // for any value in initialButtons
    for (var i = 0; i < initialBtns.length; i++){
        console.log(initialBtns[i])

        //var newDiv
        var newDiv = $("<button class = 'initialButtons' type = 'button'>" + initialBtns[i] + "</button>")

        //generate a button
        $("#artistbuttons").prepend(newDiv).addClass('artistbtn')
    }
}

// generate a new button based on the userInput
function createNewButton(){
    // on click of 'submit' button (id = 'addbutton') -- NOT WORKING
    $("#addbutton").on('click', function(){
        userInput = $("#type").text();
        console.log(userInput);
    })
    // append new button to div id = 'buttons'
}
    



// Storing our giphy API URL for a random 
var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=U3BtmZzPNZDs1sxjc8CNPcTKD74evZQV&tag="+ userInput

$.ajax({
    url: queryURL,
    method: "GET"
  })

  // After the data from the AJAX request comes back
    .then(function(response) {

    // Saving the image_original_url property
      var imageUrl = response.data.image_original_url;

      // Creating and storing an image tag
      var artistImage = $("<img>");

      // Setting the catImage src attribute to imageUrl
      artistImage.attr("src", imageUrl);
      artistImage.attr("alt", "cat image");

      // Prepending the catImage to the images div
      $("#images").prepend(catImage);
    });




// ------------------------ EVENT LISTENERS -------------------------//

$(document).ready(function(){
    initialButtons();
    createNewButton();
});
