"use strict";
module.exports = function(app) {
  var controller = require("./controller");

  app.route("/dailyChart/:station/:day/:access").get(controller.dailyChart);

  app.route("/carParkNames").get(controller.CarParkNames);
};
