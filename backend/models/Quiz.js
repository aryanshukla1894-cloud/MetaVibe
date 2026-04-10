const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    questionText: { type: String, required: true },
    options: [{ type: String, required: true }],
    correctAnswerIndex: { type: Number, required: true, min: 0 },
    explanation: { type: String }
});

const quizSchema = new mongoose.Schema({
    moduleId: { type: mongoose.Schema.Types.ObjectId, required: true }, // Not heavily referencing Course to allow flexibility
    title: { type: String, required: true },
    difficulty_level: { type: Number, default: 2, min: 1, max: 5 },
    questions: [questionSchema]
}, { timestamps: true });

module.exports = mongoose.model('Quiz', quizSchema);
