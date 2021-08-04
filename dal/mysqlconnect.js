const mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Shivam123",
  database: "tflstore",
  port: 3360,
});

con.connect((err) => {
  if (err) throw err;
  console.log("Connected");
});

module.exports = con;
