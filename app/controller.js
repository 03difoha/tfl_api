"use strict";

var Model = require("./model");

exports.list_all_tasks = function(req, res) {
  Task.getAllTask(function(err, task) {
    if (err) res.send(err);
    res.send(task);
  });
};

exports.dailyChart = function(req, res) {
  Model.getDailyData(req.params.station, req.params.day, function(err, task) {
    if (err) res.send(err);
    res.json(task);
  });
};

exports.CarParkNames = function(req, res) {
  Model.getCarParkNames(function(err, task) {
    if (err) res.send(err);
    res.json(task);
  });
};
