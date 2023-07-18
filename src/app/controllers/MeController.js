//Viết controller ở đây
const Course = require('../models/Course');
const { multipleMongooseToObject } /*Viết tnay để lấy hàm bên trong(phải để đúng tên hàm)*/= require('../../util/mongoose');

class MeController{
    
    //[get]/news/{slug} / show chi tiết tin tức
    storedCourses(req, res, next){
        Course.find({})
        .then(courses => {
            res.render('me/stored-course',{
                courses : multipleMongooseToObject(courses)
            });
        }).catch(next);
        
    }
}
module.exports = new MeController; // xuất ra các hàm đã viết trong controller