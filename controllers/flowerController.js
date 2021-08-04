
const Flower = require('../dal/flowerdal');

exports.getAll = function(req, res){
Flower.getAllFlower((err, data) => {
  if (err) res.send("Error : " + err.message)
  else res.send(data);
});
}

exports.getById = function (req, res) {
  var id = req.params.id;
  Flower.getFlowerById(id, (err, flowerData)=>{
    if(err) res.send("Error : " + err.message);
    res.send(flowerData);
  })
};

exports.insert = function (req, res) {
  var newData = req.body;
  Flower.insertFlowerData(newData, function (err, flowerData) {
    if (err) res.send("Error : " + err.message);
    res.send(flowerData);
  });
};

exports.update = function (req, res) {
  var id = req.params.id;
  Flower.updateById(id, new Flower(req.body), function (err, data) {
    if (err) res.send("Error : " + err.message);
    else res.json(data);
  });
};

exports.delete = function (req, res) {
  var id = req.params.id;
  Flower.remove(id, function (err, data) {
    if (err) res.send("Error : " + err.message);
    res.json(data);
  });
};