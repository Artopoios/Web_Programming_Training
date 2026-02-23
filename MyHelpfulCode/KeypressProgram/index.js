// Θυμήσου, είναι σαν να θέτουμε σε αναμονή το πρ΄όγραμμα για να πατηθεί
// ένα κουμπί με την εντολή window.addEventListener. Μόλις πατηθεί, 
// εκτελείται η συνάρτηση function(event)

// Το κουμπί που πατείται είναι το "event.key".

window.addEventListener('keydown', function(event) {
    console.log(event.key);
    const sound = new Audio("sounds/crash.mp3");
    sound.play().catch(error => {
      console.log("Playback prevented. Interact with the page first!");
    });
});