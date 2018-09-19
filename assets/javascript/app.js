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
var artists = ['kendrick+lamar','tom+petty','prince','tupac','bob+marley'];
 
// global variable selector for artistImage
var artistImage;

// global variable for imageURL from GIPHY
var imageURL;

// global variable newDiv
var newDiv;

// --------------------------- FUNCTIONS ----------------------------//
function initialButtons(){
    // for any value in initialButtons
    for (var i = 0; i < artists.length; i++){
        console.log(artists[i])

        //var newDiv
        newDiv = $("<button class = 'artists' type = 'button' value =" + artists[i] + ">" + artists[i] + "</button>")

        //generate a button
        $("#artistbuttons").prepend(newDiv).addClass('artistbtn')
    }
}

// generate a new button based on the userInput
function createNewButton(){
    // on click of 'submit' button (id = 'addbutton')
    $("#addbutton").on('click', function(){
        // get val of userInput from form to store in variable
        userInput = $("#user-input").val();
        console.log(userInput);

        // push value of userInput into 
        artists.push(userInput);

        // store val of userInput in variable to populate newBtn
        var newBtn = $("<button class = 'artists' type = 'button'>" + userInput + "</button>")

        //generate new button
        $("#artistbuttons").append(newBtn).addClass('artistbtn')
    })
    // append new button to div id = 'buttons'
}
    

// generate 10 random GIFs based on click of button
function generateGIFs(){
    // on click of any artist button...
    $(".artists").on('click',function(){

    // empty the current artistgifs
    $("#artistgifs").empty();

    // Storing our giphy API URL for a random (currently set to 'tupac')
    var queryURL = "https://api.giphy.com/v1/gifs/search?limit=10&api_key=dc6zaTOxFJmzC&q="+ (this.value)
        
    $.ajax({
        url: queryURL,
        method: "GET"
    })

    // After the data from the AJAX request comes back
        .then(function(response) {
            for (var i = 0;i < response.data.length; i++){
                console.log(response);
                // Saving the animated gif in variable 
                var imageURL = response.data[i].images.fixed_height_small.url;

                // Saving the still image in variable
                var stillURL = response.data[i].images.fixed_height_small_still.url;

                // Creating a div to hold the image and rating divs
                var gifDiv = $("<div>")
                
                // Creating and storing an image tag
                var artistImage = $("<img>");

                // Creating and storing a p tag to hold the rating
                var p = $("<p>");

                // Storing the rating from the GIPHY API in a variable
                p.text("Rating: " + response.data[i].rating);
                artistImage.prepend(p);


                
                // Setting the catImage src attribute to imageUrl
                artistImage.attr("src", imageURL);
                artistImage.attr("alt", "artist image");
                artistImage.attr("data-still",stillURL);
                artistImage.attr("data-animate",imageURL);



                gifDiv.append(p);
                gifDiv.append(artistImage).addClass('gif');

                // Prepending the artistImage to the images div
                $("#artistgifs").prepend(gifDiv);
            }
            animateGIFs();
        });
})
}

// function to toggle state between animate/still on click of GIF div 
function animateGIFs(){
    $("img").on("click", function(){
        console.log(this);
    var state = $(this).attr("data-state");
      // If the clicked image's state is still, 
      if (state === "still") {

        //update its src attribute to what its data-animate value is.
        $(this).attr("src", $(this).attr("data-animate"));

        // Then, set the image's data-state to animate
        $(this).attr("data-state", "animate");
        
        // Else set src to the data-still value
      } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      }
})
}




// ------------------------ EVENT LISTENERS -------------------------//

$(document).ready(function(){
    initialButtons();
    createNewButton();
    generateGIFs();
});
