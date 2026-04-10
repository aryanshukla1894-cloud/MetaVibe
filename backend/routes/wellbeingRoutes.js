const express = require('express');
const router = express.Router();
const { submitMoodLog, getMyMoodLogs } = require('../controllers/wellbeingController');
const { protect } = require('../middleware/authMiddleware');

router.route('/mood')
    .post(protect, submitMoodLog)
    .get(protect, getMyMoodLogs);

module.exports = router;
