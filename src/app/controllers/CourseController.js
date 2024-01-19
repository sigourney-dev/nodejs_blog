const Course = require('../models/Course');
const {mongooseToObject} = require("../../utils/mongoose");

class CourseController {

  //[GET] /courses/:slug
  show(req, res) {
    Course.findOne({slug: req.params.slug}).then((course) => {
        res.render('courses/show', {course: mongooseToObject(course)});
    });
  }

   //[GET] /courses/create
   create(req, res) {
    res.render('courses/create');
  }

  //[POST] /courses/store
  store(req, res) {
    const formData = req.body;
    formData.slug = req.body.name.toLowerCase().replaceAll(' ','-');
    const course = new Course(formData);
    course.save();
    res.send('saved');
  }
}

module.exports = new CourseController();
