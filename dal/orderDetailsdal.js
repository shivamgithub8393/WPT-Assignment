const sql = require("./mysqlconnect");

var OrderDetail = function (OrderDetail) {
  // constructor
  this.orderDetailId = OrderDetail.orderdetailid;
  this.orderId = OrderDetail.orderid;
  this.flowerId = OrderDetail.flowerid;
  this.quantity = OrderDetail.quantity;
};

OrderDetail.insertOrderDetails = function (newOrderData, result) {
  sql.query("INSERT INTO orderdetails SET ?", newOrderData, function (err, res) {
    if (err) {
      result(err, null);
    } else {
      // console.log(res.insertId);
      result(null, res);
    }
  });
};

OrderDetail.getAllOrderDetail = function (result) {
  sql.query("Select * from orderdetails", function (err, res) {
    if (err) {
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

OrderDetail.getOrderDetailsById = function (id,result) {
  sql.query("Select * from orderdetails where orderdetailid=?",id, function (err, res) {
    if (err) {
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

OrderDetail.updateById = function (id, OrderDetail, result) {
  console.log(OrderDetail);
  sql.query(
    "UPDATE orderdetails SET orderdetailid= ?, orderid = ?, flowerid=?, quantity=? WHERE orderdetailid = ?",
    [
      OrderDetail.orderDetailId,
      OrderDetail.orderId,
      OrderDetail.flowerId,
      OrderDetail.quantity,
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

OrderDetail.remove = function (id, result) {
  sql.query("DELETE FROM orderdetails WHERE orderdetailid = ?", id, function (err, res) {
    if (err) {
      result(err, null);
    } else {
      result(null, res);
    }
  });
};
module.exports = OrderDetail;