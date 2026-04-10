const mongoose = require('mongoose');

const moduleSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    videoUrl: { type: String },
    difficulty_level: { type: Number, default: 1, min: 1, max: 5 }, // 1: Beginner, 5: Advanced
    order: { type: Number, required: true }
});

const courseSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    teacherId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    modules: [moduleSchema],
    tags: [{ type: String }],
}, { timestamps: true });

module.exports = mongoose.model('Course', courseSchema);
