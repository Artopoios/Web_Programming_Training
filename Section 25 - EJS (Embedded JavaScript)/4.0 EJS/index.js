import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    
    const today = new Date();
    let day = today.getDay();
    // console.log(day);

    let type = "a weekday";
    let adv = "it's time to work hard";

    if (day === 0){
        type = "Sunday";
        adv = "Time for relaxing!";
    } else if (day == 6){
        type = "Saturday";
        adv = "Time for relaxing!";
    } else if (day == 1){
        type = "Monday";
    } else if (day == 2){
        type = "Tuesday";
    } else if (day == 3){
        type = "Wednesday";
    } else if (day == 4){
        type = "Thursday";
    } else {
        type = "Friday";
    }
    res.render(
        "index.ejs", // This file MUST be in a views folder.
        {
            dayType: type, 
            advice: adv
        }
    );
});

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});