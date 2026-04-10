const express = require('express');
const router = express.Router();
const { getNotifications, markNotificationRead, sendMessage } = require('../controllers/communicationController');
const { protect } = require('../middleware/authMiddleware');

router.route('/notifications').get(protect, getNotifications);
router.route('/notifications/:id/read').put(protect, markNotificationRead);
router.route('/message').post(protect, sendMessage);

module.exports = router;
