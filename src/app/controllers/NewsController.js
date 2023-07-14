//Viết controller ở đây
class NewsController{
    //[get]/news/
    index(req, res){
        res.render('news'); // render lại file news trong views
    };

    //[get]/news/{slug} / show chi tiết tin tức
    show(req, res){
        res.send('Đây là chi tiết tin tức!!!');
    }
}
module.exports = new NewsController; // xuất ra các hàm đã viết trong controller