const { OpenAI } = require('openai');
const User = require('../models/User');

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

// @desc    Get AI recommendations based on user performance and mood
// @route   GET /api/ai/recommendations
const getRecommendations = async (req, res, next) => {
    try {
        const user = await User.findById(req.user._id);

        let promptText = `Provide 3 short, actionable recommendations for a student studying at a ${user.performance.learningSpeed} pace, with an average score of ${user.performance.averageScore}%. Include a mental health tip.`;

        // Mock response if valid key doesn't exist to allow offline dev
        if (process.env.OPENAI_API_KEY === 'mocked_key' || !process.env.OPENAI_API_KEY) {
            return res.json({
                recommendations: [
                    "Focus on reviewing key concepts from the last module frequently to boost your score.",
                    "Since you are maintaining an average pace, try out practice exercises to apply your knowledge.",
                    "[Mental Health] Remember to take a 5-minute breather and stretch after every 45 minutes of work!"
                ]
            });
        }

        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{ role: "system", content: promptText }],
        });

        res.json({
            recommendations: response.choices[0].message.content.split('\n').filter(Boolean)
        });
    } catch (err) { next(err); }
};

// @desc    Chat with AI Tutor / Supporter
// @route   POST /api/ai/chat
const chatWithAI = async (req, res, next) => {
    try {
        const { message } = req.body;

        if (process.env.OPENAI_API_KEY === 'mocked_key' || !process.env.OPENAI_API_KEY) {
            return res.json({
                reply: `[Mock AI] I'm an AI assistant. You said: "${message}". How else can I help?`
            });
        }

        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                { role: "system", content: "You are an empathetic, knowledgeable tutor assisting a student." },
                { role: "user", content: message }
            ],
        });

        res.json({ reply: response.choices[0].message.content });
    } catch (err) { next(err); }
};

module.exports = { getRecommendations, chatWithAI };
