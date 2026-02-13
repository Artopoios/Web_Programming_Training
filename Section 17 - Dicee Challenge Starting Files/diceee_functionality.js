var dice1num = Math.floor(Math.random() * 6) + 1;
var dice2num = Math.floor(Math.random() * 6) + 1;

switch(dice1num){
    case 1:
        document.querySelector(".img1").src = "./images/dice1.png";
        break;
    case 2:
        document.querySelector(".img1").src = "./images/dice2.png";
        break;
    case 3:
        document.querySelector(".img1").src = "./images/dice3.png";
        break;
    case 4:
        document.querySelector(".img1").src = "./images/dice4.png";
        break;
    case 5:
        document.querySelector(".img1").src = "./images/dice5.png";
        break;
    case 6:
        document.querySelector(".img1").src = "./images/dice6.png";
        break;
    default:
        // Wrong data


}

switch(dice2num){
    case 1:
        document.querySelector(".img2").src = "./images/dice1.png";
        break;
    case 2:
        document.querySelector(".img2").src = "./images/dice2.png";
        break;
    case 3:
        document.querySelector(".img2").src = "./images/dice3.png";
        break;
    case 4:
        document.querySelector(".img2").src = "./images/dice4.png";
        break;
    case 5:
        document.querySelector(".img2").src = "./images/dice5.png";
        break;
    case 6:
        document.querySelector(".img2").src = "./images/dice6.png";
        break;
    default:
        // Wrong data


}

if (dice1num > dice2num) {
    document.getElementsByTagName("h1")[0].innerHTML = "🚩Player 1 Wins!";
} else if(dice1num < dice2num){
    document.getElementsByTagName("h1")[0].innerHTML = "Player 2 Wins!🚩";
} else {
    document.getElementsByTagName("h1")[0].innerHTML = "Draw!";
}