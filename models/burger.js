var orm = require("../config/orm.js");

//code that will call the ORM functions using burger specific input for the ORM

var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(result) {
      cb(result);
    });
  },
  insertOne: function(burgerName, devoured, cb) {
    orm.insertOne("burgers", burgerName, devoured, function(result) {
      cb(result);
    });
  },
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function(result) {
      cb(result);
    });
  }
};

module.exports = burger;
