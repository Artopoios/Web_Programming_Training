// EXERCISE ABOUT MORGAN
// In this exercise we install morgan so that we can have better
// http informations.

// Installation command: `npm i morgan`

import express from "express";

// STEP 1: Import morgan
import morgan from "morgan";

const app = express();
const port = 3000;

// STEP 2: Use morgan
app.use(morgan("combined"));


// STEP 3: Test morgan...
app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
