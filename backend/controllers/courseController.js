const Course = require('../models/Course');
const Quiz = require('../models/Quiz');
const User = require('../models/User');

// @desc    Get all courses (with basic adaptive filtering based on user level)
// @route   GET /api/courses
const getCourses = async (req, res, next) => {
    try {
        const courses = await Course.find();
        res.json(courses);
    } catch (err) { next(err); }
};

// @desc    Create a new course (Teacher/Admin)
// @route   POST /api/courses
const createCourse = async (req, res, next) => {
    try {
        const { title, description, modules, tags } = req.body;
        const course = await Course.create({
            title,
            description,
            teacherId: req.user._id,
            modules,
            tags
        });
        res.status(201).json(course);
    } catch (err) { next(err); }
};

// @desc    Submit quiz performance
// @route   POST /api/courses/quiz-results
const submitQuizResult = async (req, res, next) => {
    try {
        const { quizId, score, timeTaken } = req.body;

        // Find User and update performance profile
        const user = await User.findById(req.user._id);
        const prevAvg = user.performance.averageScore;
        const prevTaken = user.performance.quizzesTaken;

        const newTaken = prevTaken + 1;
        const newAvg = ((prevAvg * prevTaken) + score) / newTaken;

        user.performance.averageScore = newAvg;
        user.performance.quizzesTaken = newTaken;

        // Adaptive logic: update learning speed designation
        if (newAvg >= 85) user.performance.learningSpeed = 'fast';
        else if (newAvg < 50) user.performance.learningSpeed = 'slow';
        else user.performance.learningSpeed = 'average';

        await user.save();

        res.json({ message: 'Quiz performance logged successfully', updatedPerformance: user.performance });
    } catch (err) { next(err); }
};

module.exports = { getCourses, createCourse, submitQuizResult };
