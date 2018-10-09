// --------------------------- VARIABLES ----------------------------//

// global variable for name of each button
var artistName;

// developerKey for Giphy API
var developerKey = 'U3BtmZzPNZDs1sxjc8CNPcTKD74evZQV'

// variable to store userInput from form
var userInput;

// array to hold initial sarch terms to create buttons upon init
var artists = ['kendrick lamar','tom petty','prince','tupac','bob marley', 'luke bryan','nelly','the beatles','red hot chili peppers','taylor swift','anderson paak','van morrison'];
 
// global variable selector for artistImage
var artistImage;

// global variable for gifURL from GIPHY
var gifURL;

// global variable newDiv
var newDiv;

//global newBtn variable
var newBtn;

// --------------------------- FUNCTIONS ----------------------------//
function initialButtons(){
    // for any value in initialButtons
    for (var i = 0; i < artists.length; i++){
        console.log(artists[i])

        //var newDiv
        newDiv = $("<button class = 'artists' type = 'button' value ='" + artists[i] + "'>" + artists[i] + "</button>")

        //generate a button
        $("#artistbuttons").prepend(newDiv)
    }
}

// generate a new button based on the userInput
function createNewButton(){
    // on click of 'submit' button (id = 'addbutton')
    $("#addbutton").on('click', function(){
        
        // get val of userInput from form to store in variable
        userInput = $("#user-input").val();

        // push value of userInput into artists array
        artists.push(userInput);
        console.log(artists);

        // generate new button    
        newBtn = $("<button class = 'artists' type = 'button' value ='" + userInput +"'>" + userInput + "</button>")

        // append new button to div id = 'artistbuttons'
        $("#artistbuttons").append(newBtn)  

        // clear user-input field in form
        $("#user-input").val("");

// on click of any artist button...
$(".artists").on('click',function(){
    console.log('test');
// empty the current artistgifs
$("#artistgifs").empty();

// ---------------- IDEALL CHANGE THIS.VALUE TO PULL VALUE FROM ARRAY -------------//
// Storing our giphy API URL for the name of the artist
var queryURL = "https://api.giphy.com/v1/gifs/search?limit=10&api_key=dc6zaTOxFJmzC&q="+ encodeURIComponent([this.value])
    
$.ajax({
    url: queryURL,
    method: "GET"
})

// After the data from the AJAX request comes back
    .then(function(response) {
        for (var i = 0;i < response.data.length; i++){
            // Saving the animated gif in variable 
            var gifURL = response.data[i].images.fixed_height.url;

            // Saving the still image in variable
            var stillURL = response.data[i].images.fixed_height_still.url;

            // Creating a div to hold the image and rating divs
            var gifDiv = $("<div>")
            
            // Creating and storing an image tag
            var artistImage = $("<img>");

            // Creating and storing a p tag to hold the rating
            var p = $("<p>");

            // Storing the rating from the GIPHY API in a variable
            p.text("Rating: " + response.data[i].rating);
            artistImage.prepend(p);

            // Setting the artistImage src attribute to gifURL
            artistImage.attr("src", gifURL);
            artistImage.attr("alt", "artist image");
            artistImage.attr("data-still",stillURL);
            artistImage.attr("data-animate",gifURL);

            gifDiv.append(p);
            gifDiv.append(artistImage).addClass('gif');

            // Prepending the artistImage to the images div
            $("#artistgifs").prepend(gifDiv);
        }
        animateGIFs();
    });
})

    })
}
    

// generate 10 random GIFs based on click of button
function generateGIFs(){
    // on click of any artist button...
    $(".artists").on('click',function(){
        console.log('test');
    // empty the current artistgifs
    $("#artistgifs").empty();
    
    // ---------------- IDEALL CHANGE THIS.VALUE TO PULL VALUE FROM ARRAY -------------//
    // Storing our giphy API URL for the name of the artist
    var queryURL = "https://api.giphy.com/v1/gifs/search?limit=10&api_key=dc6zaTOxFJmzC&q="+ encodeURIComponent([this.value])
        
    $.ajax({
        url: queryURL,
        method: "GET"
    })

    // After the data from the AJAX request comes back
        .then(function(response) {
            for (var i = 0;i < response.data.length; i++){
                // Saving the animated gif in variable 
                var gifURL = response.data[i].images.fixed_height.url;

                // Saving the still image in variable
                var stillURL = response.data[i].images.fixed_height_still.url;

                // Creating a div to hold the image and rating divs
                var gifDiv = $("<div>")
                
                // Creating and storing an image tag
                var artistImage = $("<img>");

                // Creating and storing a p tag to hold the rating
                var p = $("<p>");

                // Storing the rating from the GIPHY API in a variable
                p.text("Rating: " + response.data[i].rating);
                artistImage.prepend(p);

                // Setting the artistImage src attribute to gifURL
                artistImage.attr("src", gifURL);
                artistImage.attr("alt", "artist image");
                artistImage.attr("data-still",stillURL);
                artistImage.attr("data-animate",gifURL);

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
    var state = $(this).attr("data-state");
      // If the clicked image's state is still, 
      if (state === "still") {
        console.log(this);
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
