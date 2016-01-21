var express = require('express');
var app = express(); //instance of express
var swig = require('swig');
var bodyParser = require('body-parser')
var routes = require('./routes/');

app.use('/', routes);

// app.use(express.static('public'));

// app.get("/", function (req, res) {
//   res.sendFile(__dirname + '/routes/index.js');
// });

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + "/views");

app.listen(3000, function(){
  console.log("server listening");
});

swig.setDefaults({ cache: false});







// app.get("/", function (req, res) {
//   var people = [{name: 'Grace Hopper'}, {name: 'Alyssa'}, {name: 'Mariya'}];
//   res.render('index', {title: 'Grasshoppers', people: people});

// });

// app.get("/special", function (req, res) {
//   res.send("GET / " +res.statusCode+"\n");
//   //next();
// });
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

// app.get("/news", function(req, res){
// 	res.send("This is news");
// })

//req.params getting parameters after our slash, must pass as argument before
//git clone GITHUB URL


