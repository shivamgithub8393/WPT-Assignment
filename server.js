const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile("index.html");
});

// Router config
var routes = require('./router')
routes(app);

app.listen(3001, () =>
  console.log("Server is listening at http://localhost:3001/")
);


