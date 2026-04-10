import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

const moodOptions = [
    { emoji: '😃', label: 'Great', stress: 0 },
    { emoji: '🙂', label: 'Good', stress: 2 },
    { emoji: '😐', label: 'Okay', stress: 4 },
    { emoji: '😟', label: 'Stressed', stress: 7 },
    { emoji: '😢', label: 'Sad', stress: 8 },
    { emoji: '😫', label: 'Overwhelmed', stress: 10 },
];

const pastLogs = [
    { date: 'Today', emoji: '😃', note: 'Feeling confident after the quiz!', stress: 1 },
    { date: 'Yesterday', emoji: '😟', note: 'Struggled with database concepts.', stress: 7 },
    { date: '2 days ago', emoji: '🙂', note: 'Good study session with peers.', stress: 2 },
    { date: '3 days ago', emoji: '😐', note: 'Average day, need more focus.', stress: 4 },
    { date: '4 days ago', emoji: '😢', note: 'Feeling behind on assignments.', stress: 8 },
    { date: '5 days ago', emoji: '🙂', note: 'Completed module 2 successfully!', stress: 2 },
];

const WellbeingTracker = () => {
    const [selectedMood, setSelectedMood] = useState(null);
    const [note, setNote] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = () => {
        if (!selectedMood) return;
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
    };

    const getStressColor = (stress) => {
        if (stress <= 3) return 'text-green-400';
        if (stress <= 6) return 'text-yellow-400';
        return 'text-red-400';
    };

    const getStressBarColor = (stress) => {
        if (stress <= 3) return 'bg-green-500';
        if (stress <= 6) return 'bg-yellow-500';
        return 'bg-red-500';
    };

    return (
        <div className="min-h-screen bg-background text-slate-100">
            <Navbar />
            <div className="pt-20 px-4 sm:px-8 pb-12 max-w-5xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold">Wellbeing Tracker</h1>
                    <p className="text-slate-400 mt-1">Check in with yourself daily and track your emotional health</p>
                </div>

                {/* Daily Check-in Card */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-gradient-to-br from-surface to-slate-800/50 border border-slate-700/50 rounded-3xl p-8 mb-8"
                >
                    <h2 className="text-xl font-bold mb-2">How are you feeling right now?</h2>
                    <p className="text-slate-400 text-sm mb-6">Select your mood and add an optional note about your day.</p>

                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 mb-6">
                        {moodOptions.map((m) => (
                            <button
                                key={m.emoji}
                                onClick={() => setSelectedMood(m)}
                                className={`flex flex-col items-center p-4 rounded-2xl border transition-all ${selectedMood?.emoji === m.emoji
                                        ? 'border-accent bg-accent/10 ring-2 ring-accent/50 scale-105'
                                        : 'border-slate-700 bg-slate-800/30 hover:border-slate-600 hover:bg-slate-800/60'
                                    }`}
                            >
                                <span className="text-3xl mb-1">{m.emoji}</span>
                                <span className="text-xs text-slate-400">{m.label}</span>
                            </button>
                        ))}
                    </div>

                    <textarea
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        placeholder="Write a brief note about how you're feeling... (optional)"
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-slate-100 placeholder-slate-500 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all resize-none h-24 mb-4"
                    />

                    <div className="flex items-center gap-4">
                        <button
                            onClick={handleSubmit}
                            disabled={!selectedMood}
                            className="px-6 py-3 bg-gradient-to-r from-accent to-purple-500 rounded-xl font-bold hover:opacity-90 transition-opacity disabled:opacity-30"
                        >
                            Submit Check-in
                        </button>
                        {submitted && (
                            <motion.span
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="text-green-400 text-sm font-medium"
                            >
                                ✓ Check-in submitted successfully!
                            </motion.span>
                        )}
                    </div>
                </motion.div>

                {/* Mood History */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-surface border border-slate-700/50 rounded-2xl p-6 mb-8"
                >
                    <h2 className="text-xl font-bold mb-6">Mood History</h2>
                    <div className="space-y-4">
                        {pastLogs.map((log, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -15 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.05 }}
                                className="flex items-center gap-4 p-4 bg-slate-800/30 rounded-xl border border-slate-700/30 hover:border-slate-600/50 transition-colors"
                            >
                                <span className="text-3xl">{log.emoji}</span>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium">{log.note}</p>
                                    <p className="text-xs text-slate-500 mt-1">{log.date}</p>
                                </div>
                                <div className="flex items-center gap-2 shrink-0">
                                    <div className="w-16 h-2 bg-slate-800 rounded-full overflow-hidden">
                                        <div className={`h-full ${getStressBarColor(log.stress)} rounded-full`} style={{ width: `${log.stress * 10}%` }} />
                                    </div>
                                    <span className={`text-xs font-medium ${getStressColor(log.stress)}`}>{log.stress}/10</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Tips Card */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-gradient-to-r from-purple-500/10 to-accent/10 border border-purple-500/20 rounded-2xl p-6"
                >
                    <h2 className="text-xl font-bold mb-4">💡 Wellbeing Tips</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {[
                            { emoji: '🧘', tip: 'Take 5 deep breaths between study sessions to reset focus.' },
                            { emoji: '💤', tip: 'Aim for 7-8 hours of sleep to improve memory retention.' },
                            { emoji: '🏃', tip: '20 minutes of exercise can reduce stress by up to 40%.' },
                        ].map((t) => (
                            <div key={t.tip} className="p-4 bg-surface/50 rounded-xl">
                                <p className="text-2xl mb-2">{t.emoji}</p>
                                <p className="text-sm text-slate-300">{t.tip}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default WellbeingTracker;
