const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose');
//Viết controller ở đây
class CoursesController{
    //courses/:slug
    showSingleCourse(req, res, next){
        //res.send('Course detail ' + req.params.slug); //req.params.(lấy đường dẫn dữ liệu ở đây)
        Course.findOne({ slug : req.params.slug}) //Được hiểu là trường slug ở trong bảng Course bằng với request parameters của api
            .then(course => {
                res.render('courses/showSingleCourse',{ course : mongooseToObject(course) });
            })
            .catch(next);
    }
    //courses/create [get]
    create(req, res, next){ // gửi về trang create
        res.render('courses/create');
    }
    //courses/store [Post]
    store(req, res, next){
        // thực hiện việc lưu trữ dữ luệ
        //res.json(req.body);
        const formData = req.body;
        formData.image = 'https://www.youtube.com/watch?v=${req.body.videoId}';
        const course = new Course(formData); // mapping lại dữ liệu 
        course.save()
        .then(() => res.redirect('/'))
        .catch(error => { 
        });
        //res.send('Course Saved!!');
    }

    //courses/id/edit
    edit(req,res, next){
        Course.findById(req.params.id)
        .then(course => {
            res.render('courses/edit',{
                course : mongooseToObject(course)
            });
        })
        .catch(next);
    }

    update(req,res, next){
        Course.updateOne({ _id: req.params.id} , req.body)
        .then(() => res.redirect('/me/stored/courses'))
        .catch(next);
    }
    //[Delete] course/:id
    destroy(req,res,next){
        Course.deleteOne({_id: req.params.id}, req.body)
        .then(() => res.redirect('back'))
        .catch(next);
    }
}
module.exports = new CoursesController; // xuất ra các hàm đã viết trong controller