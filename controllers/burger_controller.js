var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();


router.get('/', (req, res) => {
  burger.selectAll(function(burgers){
    var data = { burgers };
    res.render("index", data);
  });
});

//Update
router.put("/burgers/update/:id", function(req, res) {
  var condition = "id=" + req.params.id;

  burger.updateOne(
    { devoured: req.body.devoured },
    condition,
    function(data) {
      res.send(data);
    }
  );



});
 //Create
 router.post("/burgers/create", function(req, res) {
   console.log(req.body.burger_name);
   burger.insertOne(req.body.burger_name, req.body.devoured, function(
     data
   ) {
     res.redirect("/");
   });
 });


module.exports = router;



// router.get("/", function(req, res) {
//   res.redirect("/burgers");
// });

// //Read
// router.get("/burgers", function(req, res) {
//   burger.selectAll("events", function(data) {
//     var hbsObject = { burgers: data };
//     // console.log(hbsObject)
//     res.render("index", hbsObject);
//   });
// });

// //Create
// router.post("/burgers/create", function(req, res) {
//   console.log(req.body.burger_name);
//   burger.insertOne("events", req.body.burger_name, req.body.devoured, function(
//     data
//   ) {
//     res.redirect("/burgers");
//   });
// });
