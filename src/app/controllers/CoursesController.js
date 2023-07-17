const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose');
//Viết controller ở đây
class CoursesController{
    showSingleCourse(req, res, next){
        //res.send('Course detail ' + req.params.slug); //req.params.(lấy đường dẫn dữ liệu ở đây)
        Course.findOne({ slug : req.params.slug}) //Được hiểu là trường slug ở trong bảng Course bằng với request parameters của api
            .then(course => {
                res.render('courses/showSingleCourse',{ course : mongooseToObject(course) });
            })
            .catch(next);
    }
}
module.exports = new CoursesController; // xuất ra các hàm đã viết trong controller