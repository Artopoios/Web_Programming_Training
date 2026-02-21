var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];

function nextSequence() {
    // Generate a random number between 0 and 3
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    console.log("Random color chooser check: " + randomChosenColor);
    gamePattern.push(randomChosenColor);
    console.log(gamePattern);

    // Animation and sound of random chosen color
    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    var audio = new Audio(gamePattern[0] + '.mp3');
    audio.play();
}



