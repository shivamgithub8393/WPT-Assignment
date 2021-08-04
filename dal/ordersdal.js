const sql = require("./mysqlconnect");

var Order = function (Order) {
  // constructor
  this.orderId = Order.orderid;
  this.orderDate = Order.orderdate;
  this.customerId = Order.customerid;
  this.amount = Order.amount;
};

Order.insertOrderData = function (newOrderData, result) {
  sql.query("INSERT INTO orders SET ?", newOrderData, function (err, res) {
    if (err) {
      result(err, null);
    } else {
      // console.log(res.insertId);
      result(null, res);
    }
  });
};

Order.getAllOrder = function (result) {
  sql.query("Select * from orders", function (err, res) {
    if (err) {
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Order.getOrderById = function (id, result) {
  sql.query("Select * from orders where orderid=?", id, function (err, res) {
    if (err) {
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Order.getOrderByCustomerId = function (customerId, result) {
  sql.query(
    "SELECT * from orders WHERE customerid=?",
    customerId,
    function (err, res) {
      if (err) {
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};

Order.updateById = function (id, Order, result) {
  console.log(Order);
  sql.query(
    "UPDATE orders SET orderid = ?, orderdate = date(now()), customerid=?, amount=? WHERE orderid = ?",
    [Order.orderId, Order.customerId, Order.amount, id],
    function (err, res) {
      if (err) {
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};

Order.remove = function (id, result) {
  sql.query("DELETE FROM orders WHERE orderid = ?", id, function (err, res) {
    if (err) {
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

module.exports = Order;
