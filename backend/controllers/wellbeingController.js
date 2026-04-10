const MoodLog = require('../models/MoodLog');

const createTeacherAlert = async (userId, stressLevel, note) => {
    // In a fully integrated app, this resolves to the Notification model and alerts the mapped teacher
    console.log(`[WELLBEING ALERT] User ${userId} is exhibiting high stress: ${stressLevel}/10. Note: ${note}`);
};

// @desc    Submit a daily mood log and run basic stress detection
// @route   POST /api/wellbeing/mood
const submitMoodLog = async (req, res, next) => {
    try {
        const { emoji, note } = req.body;

        // Basic heuristic: later will be integrated with more complex analytics or OpenAI
        let computedStress = 0;
        const negativeWords = ['stressed', 'sad', 'overwhelmed', 'anxious', 'tired', 'depressed', 'hard'];
        const lowerNote = note ? note.toLowerCase() : '';
        const hasNegative = negativeWords.some(w => lowerNote.includes(w));

        const sadEmojis = ['😢', '😭', '😞', '😖', '😩'];

        if (sadEmojis.includes(emoji)) computedStress += 5;
        if (hasNegative) computedStress += 3;

        const newLog = await MoodLog.create({
            userId: req.user._id,
            emoji,
            note,
            stressLevel: Math.min(computedStress, 10)
        });

        // Trigger Alert if Stress is High
        if (computedStress >= 7) {
            await createTeacherAlert(req.user._id, computedStress, note);
        }

        res.status(201).json(newLog);
    } catch (err) { next(err); }
};

// @desc    Get user's recent mood logs
// @route   GET /api/wellbeing/mood
const getMyMoodLogs = async (req, res, next) => {
    try {
        const logs = await MoodLog.find({ userId: req.user._id }).sort({ date: -1 }).limit(10);
        res.json(logs);
    } catch (err) { next(err); }
};

module.exports = { submitMoodLog, getMyMoodLogs };
