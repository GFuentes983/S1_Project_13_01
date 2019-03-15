"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 11
   Case Problem 1

   Author: 
   Date:   
   
   Filename: bw_review.js
	
   Functions List:

   init()
      Initializes the contents of the web page and sets up the
      event handlers.
      
   lightStars(e)
      Function that colors the stars representing the user rating
      for the book.
      
   turnOffStars(e)
      Function that restores the stars to empty colors, removing
      the user rating for the book.

   updateCount()
      Updates the count of characters in the wordCountBox
      element.

   countCharacters(textStr)
      Returns the number of a non-whitespace characters
      within textStr

*/
   // Global variable set to a collection of img elements that are nested within a span element with the id of stars.
   var stars = document.querySelectorAll("span#stars img");

// load the init function when the window loads
window.onload = init();

function init() {
   // For loop that changes the collection like object to be pointer when is over the element
   for (var i = 0; i < stars.length; i++) {
   stars[i].style.cursor = "pointer";
   stars[i].addEventListener('mouseenter', lightStars);
   }
   // Runs the updateCount function when keyup indicates a key has been pressed
   document.addEventListener("keyup", updateCount);
}
  
function lightStars() {
   // Sets a variable of starNumber to the alt attribute of an event
   var starNumber = event.target.alt;
   
   // Two for loops to change the source attribute of the stars collection to another image
   for (var i = 0; i < starNumber; i++) {
      stars[i].src = "bw_star2.png";
   }

   for (var i = starNumber; i < 5; i++) {
      stars[i].src = "bw_star.png";
   }

   // Setting the value of element with the Id rating to the starNumber variable/value and the string, stars to it.
   document.getElementById("rating").value = starNumber + " stars";
   // Setting the event to run the turnOffStars function and a command to remove the function when the event is not hovered by the mouse.
   event.target.addEventListener('mouseleave', turnOffStars);
   event.target.addEventListener('mouseleave', function() {
      event.target.removeEventListener('mouseleave', turnOffStars);
   });
}


function turnOffStars() {
   // For loop to set the stars collection to normal without changes and set element with the id rating to an empty string.
   for (var i = 0; i < stars.length; i++) {
      stars[i].src = "bw_star.png";
      document.getElementById('rating') = "";
   }
}


function updateCount() {
   // Create a variable set to the value of element with the id comment
   var commentText = document.getElementById('comment').value;

   // A variable set a function with parameters to count the characters
   var charCount = countCharacters(commentText);

   // Setting the value of the element with the id wordCount to the current characters in the input box and string of max characters
   document.getElementById('wordCount').value = charCount + "/1000";

   // If else statement to change the color and background color of the element with id wordCount when charCount is less than 1000
   if (charCount > 1000) {
      document.getElementById("wordCount").style.backgroundColor = "rgb(255, 0, 0)";
      document.getElementById("wordCount").style.color = "rgb(255, 255, 255)";
      
   } else {
      document.getElementById("wordCount").style.backgroundColor = "rgb(255, 255, 255)";
      document.getElementById("wordCount").style.color = "rgb(0, 0, 0)";
   }

}


  
  
/*=================================================================*/

function countCharacters(textStr) {
   var commentregx = /\s/g;
   var chars = textStr.replace(commentregx, "");
   return chars.length;
}   