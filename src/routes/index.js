const newsRouter = require('./news'); //nạp các router ở trong thư mục routes/news.js vào đây
const siteRouter = require('./site'); //nạp các router ở trong thư mục routes/site.js vào đây

function route(app){
    //Địn nghĩa định dạng route ở đây
    // Hoạt động rất giống prefix
    app.get('/news',newsRouter); // mỗi lần vào tuyến có dạng news thì gọi tới hàm

    app.get('/',siteRouter); //mỗi lần định tuyến chỉ có dạng /
}
module.exports = route; //xuất ra hàm route 