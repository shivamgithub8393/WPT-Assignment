$(document).ready(() => {
  let url = "/api/customers";

  $("#create").click(() => {
    var id = $("#userid").val();
    var fname = $("#fname").val();
    var lname = $("#lname").val();
    var email = $("#email").val();
    var contact = $("#contact").val();

    var newCustomer = {
      customerid: id,
      firstname: fname,
      lastname: lname,
      email: email,
      contact: contact,
    };
    $.ajax({
      url: url,
      type: "POST",
      data: newCustomer,
      success: (result) => {
        console.log(result);
        console.log("Customer Added Successfully");
      },
      error: (err) => {
        console.log(err);
      },
    });
  });

  // GET Operation
  $("#showCustomers").click(() => {
    $.ajax({
      url: url,
      type: "GET",
      success: (result) => {
        console.log(result);
        // Craete table for customer list
        $("#show").html("");
        $("#show").append(
          `<tr><th>Customer ID</th><th>Name</th><th>Email</th><th>Contact Number</th></tr>`
        );
        result.forEach((res) => {
          $("#show").append(
            `<tr><td>${res.customerid}</td><td>${res.firstname} ${res.lastname}</td><td>${res.email}</td><td>${res.contact}</td></tr>`
          );
        });
      },
      error: (err) => {
        console.log(err);
      },
    });
  });

  // update customer
  $("#update").click(function () {
    var id = $("#userid1").val();
    var fname = $("#fname1").val();
    var lname = $("#lname1").val();
    var email = $("#email1").val();
    var contact = $("#contact1").val();

    var newCustomer = {
      customerid: id,
      firstname: fname,
      lastname: lname,
      email: email,
      contact: contact,
    };

    console.log(newCustomer);
    //U operation : Update Operation
    $.ajax({
      url: url + "/"+newCustomer.customerid,
      type: "PUT",
      dataType: "json",
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(newCustomer),
      success: function (result) {
        console.log(result);
        console.log("Customer Updated");
      },
      error: function (err) {
        console.log(err);
      },
    });
  });

  $("#delete").click(function () {
    // used to delete customer from server
    //D operation: Delete operation
    var id = $("#customerid").val();
    $.ajax({
      url: url + "/" + id,
      type: "DELETE",
      success: function (result) {
        console.log("the customer is deleted from database");
      },
      error: function (err) {
        console.log(err);
      },
    });
  });
});
