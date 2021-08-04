const sql = require("./mysqlconnect");

var Customer = function (Customer) {
  this.customerId = Customer.customerid;
  this.firstName = Customer.firstname;
  this.lastName = Customer.lastname;
  this.email = Customer.email;
  this.contact = Customer.contact;
};

Customer.insertCustomerData = function (newCustomer, result) {
  sql.query("INSERT INTO customers set ?", newCustomer, function (err, res) {
    if (err) {
      result(err, null);
    } else {
      result(null, res.insertId);
    }
  });
};

Customer.getAllCustomer = function (result) {
  sql.query("Select * from customers", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Customer.getCustomerById = function (id, result) {
  sql.query(
    "Select * from customers where customerid=?",
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

Customer.updateById = function (id, Customer, result) {
  sql.query(
    "UPDATE customers SET firstname = ?, lastname = ?, email=?, contact=? WHERE customerid = ?",
    [
      Customer.firstName,
      Customer.lastName,
      Customer.email,
      Customer.contact,
      id,
    ],
    function (err, res) {
      if (err) {
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};

Customer.remove = function (id, result) {
  sql.query(
    "DELETE FROM customers WHERE customerid = ?",
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

module.exports = Customer;
