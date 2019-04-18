// jshint esversion: 6

var mysql = require("mysql");
var inquirer = require("inquirer");
var custName = "";

var connection = mysql.createConnection({
  host: "localhost",
  // Your port; if not 3306
  port: 3306,
  // Your username
  user: "root",
  // Your password
  password: "root",
  database: "bamazonDB"
});
connection.connect(function(err) {
  if (err) throw err;
  // custName = connection.threadId;
  console.log(connection);
});

startShopping();

 function startShopping() {
var query = "SELECT * FROM products;";
connection.query(query, function(err, res) {
  for (var i = 0; i < res.length; i++) {
    console.log("Product: " + res[i].product_name + " || Price: " + res[i].price 
      + " || Stock: " + res[i].stock_quantity + " || Product Id: " + res[i].item_id);
  }
})
};

// END -------

  function promptGuest() {
    inquirer
    .prompt([
      {
        type: "input",
        message: "Please enter in the item Id you would like to purchase: ",
        name: "selectedItem"
      },
      {
        type: "input",
        message: "Please enter in the quantity you would like to purchase: ",
        name: "selectedQuantity"
      }
    ])
    .then(function(inquirerResponse){
      console.log("Would you like to purchase: " + inquirerResponse.selectedItem);
      console.log("Quantity: " + inquirerResponse.selectedQuantity);\
      cho

    } )
  }















// var enteredId = "";
// // YAY IT WORKS!!!--Need a way for the user selection to carry over to the next step for the user
// runSearch();

// function runSearch() {
//   inquirer
//     .prompt({
//       name: "action",
//       type: "rawlist",
//       message: "Next Step",
//       choices: [
        
//         "Enter in Item ID",
//         "Enter in quantity you'd like to purchase",
//         "Add to cart",
//         "Check Out"
//       ]
//     })
//     .then(function(answer) {
//       switch (answer.action) {

//       case "Enter in Item ID":
//       findItemById();
//         break;
// // how do I make it so this can only be called after the guest enters in ID 
//       case  "Enter in quantity you'd like to purchase":
//         enterQuantity();
//           break;

//       case "Add to cart":
//         addToCart();
//         break;

//       case "Check Out":
//         checkout();
//         break;
//       }
//     });
// }


// // ----------------------------------------------------------------------------------------------------------
// // **parseInt parses a string and will return an integer
     

// startShopping();

// // SHOWING UP RIGHT AT THE TOP ..NEED SOME SORT OF "SHOP" FUNCTION?


// // quantity()
// // ---Lists out all products/price/stock/ID--


// // Prompts user to enter in the item id #. Will then pick the appropriate item based on the input provided by the user. 
// function findItemById() {
//   inquirer
//   .prompt({
//     name: "item_id",
//     type: "input",
//     message: "Please enter in the product ID number. "

//   }, {
//     name: "stock_quantity",
//     type: "input",
//     message: "How many would you like to purchase?"
//   }
// )
//   .then(function(answer) {
//       var query = "SELECT * FROM products WHERE ?;";
//       connection.query(query, { item_id: answer.item_id }, function(err, res) {
//         for (var i = 0; i < res.length; i++) {
//           console.log("Product: " + res[i].product_name + " || Price: " + res[i].price 
//           + " || Stock: " + res[i].stock_quantity + " || Product Id: " + res[i].item_id);
//         }
//       });
//       enteredId = answer.item_id;
//       runSearch();
//   });
// }







// function enterQuantity(item_id, product_name, num, stock_quantity, price) {
//   if (num)
// }

// function enterQuantity() {
//   inquirer
//   .prompt({
//     name: "stock_quantity",
//     type: "input",
//     message: "How many would you like to purchase?"
//   }
// )
//   .then(function(answer) {
//       // var query = "SELECT * FROM products WHERE ?;";
      
//         for (var i = 0; i < res.length; i++) {
//           console.log("Product: " + res[i].product_name + " || Price: " + res[i].price 
//           + " || Stock: " + res[i].stock_quantity + " || Product Id: " + res[i].item_id);
//         }
//       });
//       enteredId = answer.item_id;
//       runSearch();
//   });
// }















// function quantity(item_id, product_name, num, stock_quantity, price){
//   if (num <= stock_quantity){
//       var newStock = stock_quantity - num;
//       var totalPrice = num * price;
//       con.query('UPDATE products SET stock_quantity = ' + newStock + ' WHERE id = ' + item_id + ';' , function(err){
//           if (err) throw err
//           console.log(num + ' ' + product_name + ' at ' + price + ' per unit = $' + totalPrice);
//           inq.prompt(
//               {
//                 product_name: 'confirm',
//                   type: 'confirm',
//                   message:'Would you like to continue?',
//               }
//           ).then(function(ans){
//               if(ans.confirm === true){
//                   console.log('Thank you!');
//                   con.end();
//               } else{
//                   con.query('UPDATE products SET stock_quantity = ' + stock_quantity + ' WHERE id = ' + item_id + ';' , function(err){
//                       if (err) throw err    
//                       con.end();
//                   });
//               }
//           });
//       });
//   } else if (num > stock_quantity) {
//       console.log('Sorry, there\'s not enough in the inventory');
//   }
// }








