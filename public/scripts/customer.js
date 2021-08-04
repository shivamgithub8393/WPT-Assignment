$(document).ready(() => {
  let url = "/api/customers";

  $("#create").click(() => {
    var newCustomer = {
      id: 55,
      firstname: "Sonu",
      lastname: "Singh",
      email: "Sonu.singh@gamil.com",
      contact: "4567546785",
    };
    $.ajax({
      url: url,
      type: "POST",
      data: newCustomer,
      success: (result) => {
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
});
