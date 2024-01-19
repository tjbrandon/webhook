const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});
// POST endpoint to log the received data into the console
app.post("/api/log", (req, res) => {
  console.log("Received data:", req.body);
  res.json({ message: "Data received successfully" });
});

const port = 6499;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
