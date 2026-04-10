import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiCpu, FiUser } from 'react-icons/fi';
import Navbar from '../components/Navbar';

const initialMessages = [
    {
        role: 'assistant',
        content: "Hi there! 👋 I'm your MetaVibe AI Tutor. I can help you with:\n\n• **Academic questions** on any subject\n• **Study planning** and revision tips\n• **Emotional support** and motivation\n\nHow can I help you today?"
    }
];

const mockResponses = [
    "Great question! Let me break this down for you. The key concept here is to understand the fundamentals first, then build upon them layer by layer. Would you like me to create a step-by-step study plan for this topic?",
    "I understand how you're feeling. It's completely normal to feel overwhelmed during exam season. Here's what I suggest:\n\n1. **Break tasks into small chunks** - tackle one concept at a time\n2. **Use the Pomodoro technique** - 25 min study, 5 min break\n3. **Get enough sleep** - your brain consolidates memory during rest\n\nRemember, you've got this! 💪",
    "Based on your recent quiz performance, I recommend focusing on these areas:\n\n• **Database normalization** - review 3NF concepts\n• **SQL joins** - practice with real-world examples\n• **Indexing strategies** - understand B-tree vs Hash\n\nI can generate practice questions for any of these topics. Which one would you like to start with?",
    "That's a thoughtful question! Here's my perspective:\n\nThe best approach is to combine **active recall** with **spaced repetition**. Instead of re-reading notes, try:\n\n1. Close your notes and write down everything you remember\n2. Compare with your notes and identify gaps\n3. Review the gaps the next day\n\nThis method has been shown to improve retention by up to 50%!",
];

const ChatbotPage = () => {
    const [messages, setMessages] = useState(initialMessages);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage = { role: 'user', content: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsTyping(true);

        // Simulate AI response delay
        await new Promise(r => setTimeout(r, 1000 + Math.random() * 1500));

        const aiReply = mockResponses[Math.floor(Math.random() * mockResponses.length)];
        setMessages(prev => [...prev, { role: 'assistant', content: aiReply }]);
        setIsTyping(false);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <div className="min-h-screen bg-background text-slate-100 flex flex-col">
            <Navbar />
            <div className="flex-1 pt-16 flex flex-col max-w-4xl w-full mx-auto">
                {/* Chat Header */}
                <div className="px-4 sm:px-6 py-4 border-b border-slate-800 bg-surface/50 backdrop-blur-sm">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-purple-500 flex items-center justify-center">
                            <FiCpu size={18} />
                        </div>
                        <div>
                            <h1 className="font-bold">AI Tutor</h1>
                            <p className="text-xs text-green-400 flex items-center gap-1">
                                <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span> Online
                            </p>
                        </div>
                    </div>
                </div>

                {/* Messages Container */}
                <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-6 space-y-6">
                    {messages.map((msg, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                        >
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${msg.role === 'user'
                                    ? 'bg-primary-600'
                                    : 'bg-gradient-to-br from-accent to-purple-500'
                                }`}>
                                {msg.role === 'user' ? <FiUser size={14} /> : <FiCpu size={14} />}
                            </div>
                            <div className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${msg.role === 'user'
                                    ? 'bg-primary-600 rounded-tr-md'
                                    : 'bg-surface border border-slate-700/50 rounded-tl-md'
                                }`}>
                                {msg.content}
                            </div>
                        </motion.div>
                    ))}

                    {isTyping && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex gap-3"
                        >
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-purple-500 flex items-center justify-center">
                                <FiCpu size={14} />
                            </div>
                            <div className="bg-surface border border-slate-700/50 rounded-2xl rounded-tl-md px-4 py-3 flex gap-1">
                                <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                                <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                                <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                            </div>
                        </motion.div>
                    )}

                    <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="px-4 sm:px-6 py-4 border-t border-slate-800 bg-surface/50 backdrop-blur-sm">
                    <div className="flex items-end gap-3">
                        <textarea
                            id="chat-input"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder="Ask me anything..."
                            rows={1}
                            className="flex-1 px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-slate-100 placeholder-slate-500 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all resize-none max-h-32"
                        />
                        <button
                            id="chat-send"
                            onClick={handleSend}
                            disabled={!input.trim() || isTyping}
                            className="w-12 h-12 bg-gradient-to-r from-accent to-purple-500 rounded-xl flex items-center justify-center hover:opacity-90 transition-opacity disabled:opacity-30 shrink-0"
                        >
                            <FiSend size={18} />
                        </button>
                    </div>
                    <p className="text-xs text-slate-600 mt-2 text-center">MetaVibe AI can make mistakes. Verify important information.</p>
                </div>
            </div>
        </div>
    );
};

export default ChatbotPage;
