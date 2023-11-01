const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');
const { mongooseToObject } = require('../../util/mongoose');

class MeController {
    //Get /me/stored/courses
    storedCourses(req, res, next) {
        Course.find({})
            .then((courses) =>
                res.render('me/stored-courses', {
                    courses: mutipleMongooseToObject(courses),
                }),
            )
            .catch(next);
    }
}
module.exports = new MeController();
