var path = require('path');
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

//middleware xử lí gần giống với controller
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
// Http logger middleware
const morgan = require('morgan');
app.use(morgan('combined'));

// Template engine setup
const { engine } = require('express-handlebars');
app.engine('hbs', engine({ extname: '.hbs' })); //Định nghĩa đuôi mở rộng

app.set('view engine', 'hbs');
app.set('views', './src/resources/views');
app.set('views', path.join(__dirname, 'resources/views'));

// Thiết lập route
const route = require('./routes/index'); //lấy hàm route
//phải gọi đúng tên của hàm 
route(app); //bắt đầu đi từ đây đến chạy đến hàm route của index trong routes


app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});