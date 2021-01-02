//jshint esversion: 6
const express = require("express");
// using body-parser
const bodyparser = require("body-parser");
const app = express();

app.use(bodyparser.urlencoded({extended: true}));

app.get("/", function(req, res){
  console.log(req.body);
  res.sendFile(__dirname + "/index.html");  // file path
});

app.post("/", function(req, res){
var num1 = Number(req.body.num1);  //  () function converts the object argument to a number that represents the object's value
var num2 = Number(req.body.num2);

var result = num1 + num2;
  console.log(req.body);
  res.send("Your result is :" + result);
  //(__dirname + "/index.html");  // file path
});

// app.get("/calculator", function(req, res){
//   res.send("<h1>My calculator rocks</h1>");
// });

app.listen(3000, function(){
  console.log("Server started on port 3000");
});
