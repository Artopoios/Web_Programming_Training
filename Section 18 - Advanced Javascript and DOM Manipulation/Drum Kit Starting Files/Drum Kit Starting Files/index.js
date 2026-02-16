// EventListener Mechanic
/* Με τη μέθοδο addEventListener("type", function, options) μπαίνει σε αναμονή 
   η δυνατότητα να καλεστεί η συνάρτηση "function" και το παρόν πρόγραμμα 
   συνεχίζει κανονικά την εκτέλεσή του. Οπότε, όσα events και να προσθέσουμε,
   δεν εμποδίζεται η λειτουργία του προγράμματος.
 */
for(var i=0; i<document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        var buttonInnerHTML = this.innerHTML;
            switch(buttonInnerHTML) {
                case "w":
                    var tom1 = new Audio("sounds/tom-1.mp3");
                    tom1.play();
                    break;
                case "a":
                    var tom2 = new Audio("sounds/tom-2.mp3");
                    tom2.play();
                    break;
                case "s":
                    var tom3 = new Audio("sounds/tom-3.mp3");
                    tom3.play();
                    break;
                case "d":
                    var tom4 = new Audio("sounds/tom-4.mp3");
                    tom4.play();
                    break;
                case "j":
                    var snare = new Audio("sounds/snare.mp3");
                    snare.play();
                    break;
                case "k":
                    var crash = new Audio("sounds/crash.mp3");
                    crash.play();
                    break;
                case "l":
                    var kickbass = new Audio("sounds/kick-bass.mp3");
                    kickbass.play();
                    break;
                default:
                    console.log(buttonInnerHTML);
            }
    });
}

// var audio = new Audio('./sounds/tom-1.mp3');
//        audio.play();

/*
It could also be written with an anonymous function which is cleaner and faster:

document.querySelector("button").addEventListener("click", function (){
    alert("I got clicked!")
});
 */