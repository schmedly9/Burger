var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');

var routes = require('./controllers/burger_controller.js');


var app = express();
var PORT = process.env.PORT || 3000;

//Serve static content for the app from the "public" directory in the application directory.
app.use("/static", express.static(__dirname + "/public"));

// app.use(express.static(process.cwd() + '/public'));

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

app.use("/", routes);

app.listen(PORT, function(){
  console.log(`app listening on port ${PORT}`);
});







