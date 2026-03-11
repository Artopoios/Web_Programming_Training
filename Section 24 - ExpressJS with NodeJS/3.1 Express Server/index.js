/*
How can I make my first Express JS server?

Step 1: 
Create directory (3.1 Express Server)

Step 2: 
Create the empty file "index.js".

Step 3:
Initialize NPM -> `npm init` 
(Make sure you are in the correct directory)

Step 4:
Install the Express package -> `npm i express`

Step 5: 
In file "package.json" there must be a line:
`"main": "index.js"` (Where "index.js" is the same 
name as in Step 2.)

Step 6: 
In the same file we write `"type": "module",` 

Step 7: Write the code bellow...
*/

// For the express utilities (Step 6 requirement)
import express from "express";

// The app that runs the server is made here.
// It gets initialized this way like this below.
const app = express();

// The port that will be running the server:
const port = 3000;

// app.listen(PORT, 
// CALLBACK FUNCTION WHEN SERVER IS SETUP) => {`code`});
app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});

/** Step 8: Run the server...
 * To start the server we run in terminal:
 * `node index.js`
 * Congradulations, the server is running!
 * 
 * Step 9: Test our server is running...
 * Through a browswer we search:
 * `localhost:3000`
 * We should see a response "Cannot GET /"
 * we have a port where we can see the output
 * of our server app. So if we had hosted it
 * on an online server we could theoretically
 * see this from our computer. If we wanted to
 * send something, it should try to find the
 * address `localhost: 3000` or the place on 
 * the internet. So "app.listen" is run whenever
 * somebody finds that port and then the 
 * callback function is run and sends a
 * response. 
 * 
 * We can check which ports are running on
 * our computer with the command:
 * 
 * `netstat -ano | findstr "LISTENING"
 * 
 * or through Mac / Linux with the command:
 * 
 * `sudo lsof -i -P -n | grep LISTEN
 */
