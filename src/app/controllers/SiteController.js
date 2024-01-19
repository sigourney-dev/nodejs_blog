const Course = require("../models/Course");
const { multiMongooseToObject } = require("../../utils/mongoose");

class SiteController {
  // [GET] /
  async home(req, res) {
    Course.find()
      .then((courses) => {
        res.render("home", { courses: multiMongooseToObject(courses) });
      })
      .catch((err) => console.log("err"));
  }

  //[GET] /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
