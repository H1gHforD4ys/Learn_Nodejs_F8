const Course = require('../models/Course'); 
//Viết controller ở đây
class SiteController{
    //[get] // trả về trang chủ
    index(req, res, next){
        Course.find({}) // Dưới dạng promise
            .then(course => res.json(course)) // thành công thì render về course nhận được
            .catch(next); 
        
        //res.render('home'); // render lại file news trong views
    };

    //[get]/search  / trang tìm kiếm
    search(req, res){
        res.render('search');
    }
}
module.exports = new SiteController; //Xuát ra các hàm đã viết trong SiteController