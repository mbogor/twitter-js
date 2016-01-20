var express = require('express');
var app = express(); //instance of express

app.listen(3000, function(){
	console.log("server listening");
});

app.use("/", function (req, res, next) {
  console.log('Time:' + Date());
  next();

});

app.get("/special", function (req, res) {
  res.send("GET / " +res.statusCode+"\n");
  //next();
});
/**
app.use("/", function (req, res, next) {
  res.send('Time:' + Date.now());
  next();
});
/**
app.get("/", function(req, res){
	res.send("Welcome");
})
**/

app.get("/news", function(req, res){
	res.send("This is news");
})



