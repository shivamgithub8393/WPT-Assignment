const OrderDetail = require("../dal/orderDetailsdal");
const Orderdetail = require("../dal/orderDetailsdal");

exports.getAll = function (req, res) {
  Orderdetail.getAllOrderDetail((err, orderData) => {
    if (err) res.send("Eror : " + err.message);
    res.send(orderData);
  });
};

exports.getById = function (req, res) {
  var id = req.params.id;
  Orderdetail.getOrderDetailsById(id, (err, orderData) => {
    if (err) res.send("Error : " + err.message);
    res.send(orderData);
  });
};

exports.insert = function (req, res) {
  var newData = req.body;
  OrderDetail.insertOrderDetails(newData, function (err, orderData) {
     if (err) res.send("Error : " + err.message);
     else res.send(orderData);
  });
};

exports.update = function (req, res) {
var id = req.params.id;
OrderDetail.updateById(id, new OrderDetail(req.body), function (err, data) {
  if (err) res.send("Error : " + err.message);
  else res.json(data);
});
};

exports.delete = function (req, res) {
  var id = req.params.id;
  Orderdetail.remove(id, function (err, data) {
    if (err) res.send("Error : " + err.message);
    res.json(data);
  });
};
