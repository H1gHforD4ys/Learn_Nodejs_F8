//Viết controller ở đây
class SiteController{
    //[get] // trả về trang chủ
    index(req, res){
        res.render('home'); // render lại file news trong views
    };

    //[get]/search  / trang tìm kiếm
    search(req, res){
        res.render('search');
    }
}
module.exports = new SiteController; //Xuát ra các hàm đã viết trong SiteController