const express = require('express');
const router = express.Router();
const { getRecommendations, chatWithAI } = require('../controllers/aiController');
const { protect } = require('../middleware/authMiddleware');

router.route('/recommendations').get(protect, getRecommendations);
router.route('/chat').post(protect, chatWithAI);

module.exports = router;
