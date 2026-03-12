// This folder has exercises for middleware.

// NOTES ABOUT THE DIRECTORY
// /public/ folder is where the `static` magic happens.
// in this directory html, css and js animation files
// get saved.

import express from "express";
import bodyParser from "body-parser";

// The code below is necessary to get the address of the 
// files we want to be sent to the client by the server
// whenever he hits up the url of the website. Continues
// on res.sendFile(...) instead of res.send(`.html`)

import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

// This code makes the `index.html` file in the directory 
// 3.4 Middleware/public visible by sending it to the
// client.

// In the following exercises we will need the npm body-parser
// with the command `npm i body-parser`

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
  console.log(__dirname + "/public/index.html");
  res.sendFile(__dirname + "/public/index.html");
});

// This is where the code that receives the data from the client
// to the server. When submit is pressed, the data gets printed
// on the console.

app.post("/submit", (req, res) => {
  console.log(req.body);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
