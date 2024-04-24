//randomNumber1 then set the value of this variable
// to a random number between 1 and 6. 
// Generate random numbers for both dice images
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Get the left and right <img> elements
var leftImage = document.querySelector(".img1");
var rightImage = document.querySelector(".img2");

// Construct the file paths of the random dice images
var leftImagePath = "./images/dice" + randomNumber1 + ".png";
var rightImagePath = "./images/dice" + randomNumber2 + ".png";

// Set the src attribute of the left and right <img> elements to the random dice image paths
leftImage.setAttribute("src", leftImagePath);
rightImage.setAttribute("src", rightImagePath);

// Get the <h1> element
var heading = document.querySelector("h1");

// Change the text in the <h1> element based on the comparison of dice values
if (randomNumber1 > randomNumber2) {
  heading.innerHTML = "Player 1 wins!";
} else if (randomNumber1 < randomNumber2) {
  heading.innerHTML = "Player 2 wins!";
} else {
  heading.innerHTML = "It's a draw!";
}
