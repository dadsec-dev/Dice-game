//Generate a random number from 1 -6 for both dice and save to a variable
var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

//Use the random number you created in the last step to pick out a random dice image between dice1.png to dice 6.png then place this image inside the left <img> element.
var dice  = "dice"+randomNumber1+".png"
var dice2 = "dice"+randomNumber2+".png"

document.querySelector(".img1").setAttribute("src", "images/"+dice);
document.querySelector(".img2").setAttribute("src", "images/"+dice2);

//Change the text in the h1, (which currently says Refresh Me) to show which user won or if there was a draw depending on the dice values of player 1 (left) and player 2 (right).
if (dice > dice2) {
    document.querySelector('h1').innerHTML = "🚩 Player 1 Wins!"
} else if (dice < dice2) {
    document.querySelector('h1').innerHTML = "Player 2 wins! 🚩"
} else {
    document.querySelector('h1').innerHTML = "Draw!"
}