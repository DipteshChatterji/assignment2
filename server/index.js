const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const db = require("./database/models");
// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

var corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

db.sequelize.sync();

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to My application." });
});

require("./database/routes/transaction.route")(app);

// app.get("/api", (req, res) => {
//   res.json();
// });

app.listen(4005, () => {
  console.log("server running on port 4005");
});
