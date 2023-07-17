const Course = require('../models/Course'); 
const { multipleMongooseToObject } /*Viết tnay để lấy hàm bên trong(phải để đúng tên hàm)*/= require('../../util/mongoose');
//Viết controller ở đây
class SiteController{
    //[get] // trả về trang chủ
    index(req, res, next){
        Course.find({/* trong này là điều kiện truy vẫn */}) // Dưới dạng promise
            .then(courses =>{
                res.render('home',{
                    courses : multipleMongooseToObject(courses)
                });
            }) // thành công thì render về course nhận được
            .catch(next);
            //Lấy tất cả các dữ liệu của course
    };

    //[get]/search  / trang tìm kiếm
    search(req, res){
        res.render('search');
    }
}
module.exports = new SiteController; //Xuát ra các hàm đã viết trong SiteController