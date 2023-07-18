const express = require('express');
const router = express.Router(); //khai báo một đối tượng router trong Express.js

const meController = require('../app/controllers/MeController');

router.get('/stored/courses', meController.storedCourses);

module.exports = router; // xuất ra router ở đây