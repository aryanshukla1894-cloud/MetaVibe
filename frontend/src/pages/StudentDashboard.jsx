import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

const StudentDashboard = () => {
    const [mood, setMood] = useState(null);
    const [moodSubmitted, setMoodSubmitted] = useState(false);

    const handleMoodSubmit = (emoji) => {
        setMood(emoji);
        setMoodSubmitted(true);
        setTimeout(() => setMoodSubmitted(false), 2000);
    };

    return (
        <div className="min-h-screen bg-background text-slate-100">
            <Navbar />
            <div className="pt-20 px-4 sm:px-8 pb-12 max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
                {/* Sidebar */}
                <div className="w-full md:w-64 space-y-6 shrink-0">
                    <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent to-purple-500">Student Hub</h2>
                    <div className="bg-surface p-6 rounded-2xl shadow-lg border border-slate-700">
                        <img src="https://i.pravatar.cc/150?u=student" className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-accent" alt="Profile" />
                        <h3 className="text-center font-semibold text-lg">Alex Doe</h3>
                        <p className="text-center text-sm text-slate-400">Pace: Average</p>
                        <div className="mt-4 pt-4 border-t border-slate-700 text-center">
                            <p className="text-sm">Avg Score</p>
                            <p className="text-2xl font-bold text-green-400">82%</p>
                        </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="bg-surface p-4 rounded-2xl border border-slate-700 space-y-3">
                        <div className="flex justify-between text-sm">
                            <span className="text-slate-400">Streak</span>
                            <span className="text-yellow-400 font-bold">🔥 7 days</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-slate-400">Badges</span>
                            <span>🏆 5</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-slate-400">Rank</span>
                            <span className="text-accent font-bold">#12</span>
                        </div>
                    </div>
                </div>

                <div className="flex-1 space-y-8">
                    {/* Wellbeing Check-in */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-surface p-6 rounded-2xl shadow-lg border border-slate-700 flex flex-col gap-4"
                    >
                        <h3 className="text-xl font-bold">Daily Check-in</h3>
                        <p className="text-slate-400">How are you feeling about your studies today?</p>
                        <div className="flex gap-4">
                            {['😃', '🙂', '😐', '😢', '😫'].map(emoji => (
                                <button
                                    key={emoji}
                                    onClick={() => handleMoodSubmit(emoji)}
                                    className={`text-3xl hover:scale-125 transition-all p-2 rounded-xl ${mood === emoji ? 'scale-125 bg-accent/10 ring-2 ring-accent' : ''}`}
                                >
                                    {emoji}
                                </button>
                            ))}
                        </div>
                        {moodSubmitted && (
                            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-400 text-sm">
                                ✓ Mood submitted! Take care of yourself 💙
                            </motion.p>
                        )}
                    </motion.div>

                    {/* AI Recommendations */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-gradient-to-r from-surface to-slate-800 p-6 rounded-2xl shadow-lg border border-primary-900"
                    >
                        <h3 className="text-xl font-bold mb-4 text-accent">AI Recommendations</h3>
                        <ul className="space-y-3">
                            <li className="flex gap-3 items-start text-slate-300">
                                <span className="text-green-500 mt-0.5">✔</span>
                                <span>Focus on reviewing key concepts from Module 3 to boost your score.</span>
                            </li>
                            <li className="flex gap-3 items-start text-slate-300">
                                <span className="text-green-500 mt-0.5">✔</span>
                                <span>Try out the latest practice exercise created for your pace.</span>
                            </li>
                            <li className="flex gap-3 items-start text-slate-300">
                                <span className="text-purple-400 mt-0.5">♥</span>
                                <span>Remember to take a 5-minute stretch after this session!</span>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Course Modules */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <h3 className="text-xl font-bold mb-4">Your Enrolled Courses</h3>
                        <div className="grid grid-cols-1 gap-4">
                            {[
                                { title: 'Introduction to Data Science', module: 'Module 3', difficulty: 'Adaptive Review', progress: 65, active: true },
                                { title: 'Advanced Database Design', module: 'Module 1', difficulty: 'Deep Dive', progress: 20, active: false },
                                { title: 'Machine Learning Fundamentals', module: 'Module 5', difficulty: 'Advanced', progress: 90, active: true },
                            ].map((course) => (
                                <div key={course.title} className="bg-surface p-5 rounded-2xl border border-slate-700 group hover:border-accent transition-colors">
                                    <div className="flex justify-between items-start mb-3">
                                        <div>
                                            <h4 className="text-lg font-bold group-hover:text-accent transition-colors">{course.title}</h4>
                                            <p className="text-sm text-slate-400">{course.module} - Difficulty: {course.difficulty}</p>
                                        </div>
                                        <button className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${course.active ? 'bg-primary-600 hover:bg-primary-500' : 'bg-slate-700 hover:bg-slate-600'}`}>
                                            {course.active ? 'Resume' : 'Start'}
                                        </button>
                                    </div>
                                    <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                                        <div className="h-full bg-gradient-to-r from-accent to-purple-500 rounded-full transition-all" style={{ width: `${course.progress}%` }} />
                                    </div>
                                    <p className="text-xs text-slate-500 mt-1">{course.progress}% complete</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
export default StudentDashboard;
