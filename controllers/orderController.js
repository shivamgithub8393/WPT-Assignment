const Order = require("../dal/ordersdal");

exports.getAll = function (req, res) {
  Order.getAllOrder((err, orderData) => {
    if (err) res.send("Eror : " + err.message);
    res.send(orderData);
  });
};

exports.getById = function (req, res) {
  var id = req.params.id;
  Order.getOrderById(id, (err, orderData) => {
    if (err) res.send("Error : " + err.message);
    res.send(orderData);
  });
};

exports.getByCustomerId = function (req, res) {
  var customerId = req.params.customerid;
  Order.getOrderByCustomerId(customerId, (err, customerOrderData) => {
    if (err) res.send("Error : " + err.message);
    res.send(customerOrderData);
  });
};

exports.insert = function (req, res) {
  var newOrderData = req.body;
  Order.insertOrderData(newOrderData, function (err, data) {
    if (err) res.send("Error : " + err.message)
    else res.send(data);
  });
};

exports.update = function (req, res) {
  var id = req.params.id;
  Order.updateById(id, new Order(req.body), function (err, data) {
    if (err) res.send("Error : " + err.message);
    else res.json(data);
  });
};

exports.delete = function (req, res) {
  var id = req.params.id;
  Order.remove(id, function (err, data) {
    if (err) res.send("Error : " + err.message);
    res.json(data);
  });
};
