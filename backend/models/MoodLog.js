const mongoose = require('mongoose');

const moodLogSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    emoji: { type: String, required: true },
    note: { type: String, default: '' },
    stressLevel: { type: Number, default: 0, min: 0, max: 10 },
    date: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model('MoodLog', moodLogSchema);
