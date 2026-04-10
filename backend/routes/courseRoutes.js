const express = require('express');
const router = express.Router();
const { getCourses, createCourse, submitQuizResult } = require('../controllers/courseController');
const { protect, authorize } = require('../middleware/authMiddleware');

router.route('/')
    .get(protect, getCourses)
    .post(protect, authorize('teacher', 'admin'), createCourse);

router.route('/quiz-results')
    .post(protect, submitQuizResult);

module.exports = router;
