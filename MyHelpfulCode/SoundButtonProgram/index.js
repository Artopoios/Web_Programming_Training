// Θυμήσου, επιλέγουμε πρακτικά κάποιο μέρος της σελίδας να αναμένει
// το "click". Όταν γίνει το "click" εκτελείται η συνάρτηση στο δεύ-
// τερο όρισμα της συνάρτησης. 

$("button").on("click", handleClick);

function handleClick(event){
    var drum = new Audio("sounds/crash.mp3");
    drum.play();
}