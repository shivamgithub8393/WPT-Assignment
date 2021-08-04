var sql = require("./mysqlconnect");

var Flower = function (Flower) {
  //Constructor
  this.id = Flower.id;
  this.title = Flower.title;
  this.description = Flower.description;
  this.unitPrice = Flower.unitprice;
  this.quantity = Flower.quantity;
  this.likes = Flower.likes;
  // this.imageUrl = Flower.imageUrl;
};

//Attach member function to Model to perform DatABASE  CRUD operations

Flower.insertFlowerData = function (newFlower, result) {
  console.log(newFlower);
  sql.query("INSERT INTO flowers SET ?", newFlower, function (err, res) {
    if (err) {
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Flower.getFlowerById = function (id, result) {
  sql.query(
    "Select * from flowers where Id = ? ",
    id,
    function (err, res) {
      if (err) {
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};

Flower.getAllFlower = function (result) {
  sql.query("Select * from flowers", function (err, res) {
    if (err) {
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Flower.updateById = function (id, Flower, result) {
  sql.query(
    "UPDATE flowers SET title = ? WHERE id = ?",
    [Flower.title, id],
    function (err, res) {
      if (err) {
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};

Flower.remove = function (id, result) {
  sql.query("DELETE FROM flowers WHERE Id = ?", id, function (err, res) {
    if (err) {
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

module.exports = Flower;
