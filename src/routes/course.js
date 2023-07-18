const express = require('express');
const router = express.Router(); //khai báo một đối tượng router trong Express.js

const coursesController = require('../app/controllers/CoursesController');

router.get('/create', coursesController.create);
router.post('/store',coursesController.store);
//định dạng chi tiết router và gọi lại controller
router.get('/:slug', coursesController.showSingleCourse);
router.put('/:id', coursesController.update);
router.delete('/:id', coursesController.destroy);
router.get('/:id/edit', coursesController.edit);

module.exports = router; // xuất ra router ở đây