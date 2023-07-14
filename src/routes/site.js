const express = require('express');
const router = express.Router(); //khai báo một đối tượng router trong Express.js

const siteController = require('../app/controllers/SiteController');

//định dạng chi tiết router và gọi lại controller
router.use('/search', siteController.search); 
//newsController.index
router.use('/', siteController.index);// api có dạng /news/ thì gọi đến hàm index đã viết trong newsController // cái này phải chạy cuối cùng

module.exports = router; // xuất ra router ở đây