const Customer = require('../dal/customerdal')

exports.getAll = function(req, res){
Customer.getAllCustomer((err, customerData) => {
  if (err) res.send("Eror : " + err.message);
  res.send(customerData);
});
}

exports.getById = function (req, res) {
  var id = req.params.id;
  Customer.getCustomerById(id, (err, customerData)=>{
    if(err) res.send("Error : " + err.message);
    res.send(customerData);
  })
};

exports.insert = function (req, res) {
  var newData = req.body;
  Customer.insertCustomerData(newData, function (err, customerData) {
    if (err) res.send("Error : " + err.message)
    else res.send("Customer data inserted");
  });
};

exports.update = function (req, res) {
  var id = req.params.id;
  Customer.updateById(id, new Customer(req.body), function (err, data) {
    if (err) res.send("Error : " + err.message);
    else res.json(data);
  });
};

exports.delete = function (req, res) {
  var id = req.params.id;
  Customer.remove(id, function (err, data) {
    if (err) res.send("Error : " + err.message);
    res.json(data);
  });
};