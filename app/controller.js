"use strict";

var Model = require("./model");

exports.dailyChart = function(req, res) {
  Model.getDailyData(
    req.params.station,
    req.params.day,
    req.params.access,
    function(err, task) {
      if (err) res.send(err);
      res.json(task);
    }
  );
};

exports.CarParkNames = function(req, res) {
  Model.getCarParkNames(function(err, task) {
    if (err) res.send(err);
    res.json(task);
  });
};
