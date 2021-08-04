const sql = require('./mysqlconnect')

var Credential = function (Credential){
  // constructor
  this.id = Credential.id;
  this.userId = Credential.userId;
  this.userName = Credential.userName;
  this.password = Credential.password;
}


Credential.create = function (newCredential, result) {
  console.log("New flower to be added ");
  console.log(newFlower);
  sql.query("INSERT INTO credential values(?)", newCredential, function (err, res) {
    if (err) {
      result(err, null);
    } else {
      result(null, res.insertId);
    }
  });
};


Credential.remove = function (id, result) {
  sql.query("DELETE FROM credential WHERE id = ?", id, function (err, res) {
    if (err) {
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

module.exports = Credential;
