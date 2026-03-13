//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is Arkoleon

//This is so that ExpressJS can be run. 
import express from "express";
//This is so that data can be transferred through middleware
import bodyParser from "body-parser";

//This is so that the redirection between pages is possible (It finds
//the data path.)
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

// The server application
const app = express();

// The port that will be run for the application
const port = 3000;

// For the function later
var userIsAuthorized = false;

// How much information will be transferred with each sent
// package (extended)
app.use(
    bodyParser.urlencoded({ extended: true })
);

// Function about checking password. If req.body["password"] becomes true
// userIsAuthorized becomes true.
app.use((req, res, next) => {
  const password = req.body["password"];
  if (password === "Arkoleon") {
    userIsAuthorized = true;
  }
  next();
});

app.get("/", (req, res) => {
  console.log(__dirname + "/public/index.html");
  res.sendFile(__dirname + "/public/index.html");
});

// The use happens whenever a post request '/check' happens 
app.post("/check", (req, res) => {
  if (userIsAuthorized) {
    res.sendFile(__dirname + "/public/secret.html");
  } else {
    res.sendFile(__dirname + "/public/index.html");
    //Alternatively res.redirect("/");
  }
});



app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
