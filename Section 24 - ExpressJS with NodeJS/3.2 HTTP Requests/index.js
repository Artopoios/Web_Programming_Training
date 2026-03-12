// FIRST THINGS FIRST - HOW TO KILL A PORT
// If a port is being used and you cant stop it
// there are instructions here:
// https://dev.to/sylwiavargas/how-to-properly-close-a-port-2p36
// Good luck Arko if this happens...

// From now on, we learn how to communicate
// between the server and the client.

// This happens with the use of HTTP!

// What is HTTP?
// H.T.T.P. = Hyper Text Transfer Protocol
// Basically it is a way to communicate between
// Client and server
// Client could be us by using our browser
// Server is the app `index.js` run on a computer
// localhost is the server if it is run
// on our computer.

// The HTTP Vocabulary:
/** GET    -> Client Requests something from the server
 *  POST   -> Client sends something to the server
 *  PUT    -> UPDATE (Replace a resource on the server)
 *  PATCH  -> UPDATE (Edit a resource on the server)
 *  DELETE -> Delete something on the server.
 */

// Whatever here is familiar to 3.1 section.
// Cannot GET /
// Our server does not have any code that sends
// anything to the client. 

// LETS CHANGE THIS!

import express from "express";
const app = express();
const port = 3000;

/** How does the app.get method works?
 * app.get(`Where the request will be handled`, 
 *        (req = request, res = response) => {
 *    `code that will be run`
 * } )
 */

// When the server gets a get request sends
// <h1>Hello!</h1> (localhost:3000)
app.get("/", (req, res) => {
  // console.log(req.rawHeaders)
  /** Information about the request
   * Domain,
   * What system I am running
   * ...
   */

  // res.send("Hello World!");
  /** Step by step:
   * 1. Browser tries to find localhost:3000
   * 2. Server responds and SENDS the
   * `response.send(bla bla)`
   * 3. I see the response back on my browser.
   */
  res.send("<h1>Hello!</h1>");
});

// <h1>About me</h1> (localhost:3000/about)
app.get("/about", (req, res) => {
  res.send("<h1>About me</h1>");
});

// <p>About me</p> (localhost:3000/contact)
app.get("/contact", (req, res) => {
  res.send("<p>My contact information: </p>");
});

// This message will be posted where the terminal
// commands are run (on server side)
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

/** WHAT WE LEARN FROM THIS SECTION
 * So what I think will happen on future
 * tutorial is that we will run an app.get
 * command in order to send each individual 
 * html / css file to the user...?
 * Something familiar should be happening when
 * the client is sending his login information
 * or stuff like that. Server app (index.js)
 * should handle them and send back the 
 * appropriate responses.
 */

/** REVISION - RUN SERVER STEPS
 * 1. Create directory (3.2 HTTP Requests)
 * 2. Create "index.js"
 * 3. Initialize NPM `npm init` on terminal
 * 4. Install the Express Package `node i express`
 * 5. Write Server application in "index.js"
 * 6. Start server `node index.js`
 * 
 * More details are on Section 3.1 Express Server
 */

/** DEVELOP SERVER BACKEND WITH NODEMAN
 * On Step 6. instead of running 
 * `node index.js`
 * run `nodemon index.js`
 * This way whenever I edit the index.js
 * the server gets restarted automatically.
 * TO INSTALL IT... `npm i -g nodemon`
 * Or safely search for it on npm libraries!
 */