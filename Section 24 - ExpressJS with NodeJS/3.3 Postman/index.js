// TITLE: ALL ABOUT SERVER RESPONSES CODES

// IMPORTANT: To run a new program with npm
// the first command should be:
// `npm install` in order to install all the
// necessary dependencies.

/**HTTP Response Status Codes
 * Είναι αριθμοί που λαμβάνονται από τον server στον client
 * ανάλογα με το αίτημα του client προς τον server
 * 100 - 199: Information responses
 * 200 - 299: Successful responses
 * 300 - 399: Redirection messages (ex. googl.com)
 * 400 - 499: Client error responses (ex. 404)
 * 500 - 599: Server error responses
 * More details about these can be found here...
 * developer.mozilla.org/docs/Web/HTTP/Status
 */

/**GET - Receive data from server
 * POST - Send data to server
 * PUT - Replace a resource of the server
 * PATCH - Edit a resource of the server
 * DELETE - Delete a resource of the server
 */


import express from "express";
const app = express();
const port = 3000;

// *********************
// Let’s practice using Postman. Make sure your server is running with nodemon.
// Then test the 5 different routes below with Postman. Open a separate tab for each request.
// Check that for each route you’re getting the correct status code returned to you from your server.
// You should not get any 404s or 500 status codes.
// *********************

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

app.post("/register", (req, res) => {
  //Do something with the data
  // (This is the place where data is manipulated
  // by the server)
  res.sendStatus(201); // 201 = Created
});

app.put("/user/angela", (req, res) => {
  res.sendStatus(200);
});

app.patch("/user/angela", (req, res) => {
  res.sendStatus(200);
});

app.delete("/user/angela", (req, res) => {
  //Deleting
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
