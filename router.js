const orderController = require("./controllers/orderController");
const orderDetailController = require("./controllers/orderDetailController");
const customerController = require("./controllers/customerController");
const flowerController = require("./controllers/flowerController");

module.exports = function (app) {
  //Orders HTTP request Mapping
  app
    .route("/api/orders")
    .get(orderController.getAll)
    .post(orderController.insert);

  app
    .route("/api/orders/:id")
    .get(orderController.getById)
    .put(orderController.update)
    .delete(orderController.delete);

  // // Orders which a customer order
  app.route("/api/customersorders")
  .get(orderController.getAll);

  app
    .route("/api/customerorders/:customerid")
    .get(orderController.getByCustomerId);

  // //Orderdetails HTTP request Mapping
  app
    .route("/api/orderdetails")
    .get(orderDetailController.getAll)
    .post(orderDetailController.insert);

  app
    .route("/api/orderdetails/:id")
    .get(orderDetailController.getById)
    .put(orderDetailController.update)
    .delete(orderDetailController.delete);

  // // Flowers HTTP request Mapping
  app
    .route("/api/flowers")
    .get(flowerController.getAll)
    .post(flowerController.insert);

  app
    .route("/api/flowers/:id")
    .get(flowerController.getById)
    .put(flowerController.update)
    .delete(flowerController.delete);

  // // //Customers HTTP request Mapping
  app
    .route("/api/customers")
    .get(customerController.getAll)
    .post(customerController.insert);

  app
    .route("/api/customers/:id")
    .get(customerController.getById)
    .put(customerController.update)
    .delete(customerController.delete);
};
