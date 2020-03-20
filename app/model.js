"user strict";
var db = require("../db");

var Model = {
  getDailyData: function(station, day, access, result) {
    db.query(
      `SELECT HOUR(date) as hour, ANY_VALUE(${access}_bays) as max, ROUND(AVG(occ_${access}_bays)) as occ_bays from ${station} WHERE WEEKDAY(date)="${day}" GROUP BY hour ORDER BY hour ASC;`,
      function(err, res) {
        if (err) {
          console.log("error: ", err);
          result(err, null);
        } else {
          chartdata = {
            labels: [],
            max: 0,
            datasets: [
              {
                data: []
              }
            ]
          };
          for (let i of res) {
            if (i.hour < 10) {
              chartdata.labels.push(`0${i.hour}:00`);
            } else {
              chartdata.labels.push(`${i.hour}:00`);
            }
            chartdata.max = i.max;
            chartdata.datasets[0].data.push(i.occ_bays);
          }
          result(null, chartdata);
        }
      }
    );
  },
  getCarParkNames: function(result) {
    db.query(`SHOW TABLES`, function(err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        result(null, res);
      }
    });
  }
};

module.exports = Model;
