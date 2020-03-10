"use strict";
module.exports = function(app) {
  var controller = require("./controller");

  // todoList Routes
  app.route("/dailyChart").get(controller.list_all_tasks);

  app.route("/dailyChart/:station/:day").get(controller.dailyChart);

  app.route("/carParkNames").get(controller.CarParkNames);
};
