const Notification = require('../models/Notification');

// @desc    Get user notifications
// @route   GET /api/communications/notifications
const getNotifications = async (req, res, next) => {
    try {
        const notifications = await Notification.find({ userId: req.user._id }).sort({ createdAt: -1 }).limit(20);
        res.json(notifications);
    } catch (err) { next(err); }
};

// @desc    Mark notification as read
// @route   PUT /api/communications/notifications/:id/read
const markNotificationRead = async (req, res, next) => {
    try {
        const notification = await Notification.findById(req.params.id);
        if (notification) {
            notification.read = true;
            await notification.save();
            res.json(notification);
        } else {
            res.status(404).json({ message: 'Notification not found' });
        }
    } catch (err) { next(err); }
};

// @desc    Basic chat endpoint (Mock for now, would use Socket.io in full prod)
// @route   POST /api/communications/message
const sendMessage = async (req, res, next) => {
    try {
        const { receiverId, text } = req.body;
        // Mock saving message logic
        res.status(201).json({ senderId: req.user._id, receiverId, text, date: new Date() });
    } catch (err) { next(err); }
};

module.exports = { getNotifications, markNotificationRead, sendMessage };
