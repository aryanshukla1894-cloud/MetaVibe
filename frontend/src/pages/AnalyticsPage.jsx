import { motion } from 'framer-motion';
import { FiTrendingUp, FiBookOpen, FiClock, FiAward } from 'react-icons/fi';
import Navbar from '../components/Navbar';

const subjectData = [
    { name: 'Data Science', score: 85, color: 'bg-blue-500' },
    { name: 'Database Design', score: 72, color: 'bg-purple-500' },
    { name: 'Machine Learning', score: 91, color: 'bg-green-500' },
    { name: 'Web Dev', score: 68, color: 'bg-yellow-500' },
    { name: 'Statistics', score: 77, color: 'bg-pink-500' },
];

const weeklyProgress = [40, 55, 45, 70, 65, 80, 75];

const AnalyticsPage = () => {
    return (
        <div className="min-h-screen bg-background text-slate-100">
            <Navbar />
            <div className="pt-20 px-4 sm:px-8 pb-12 max-w-7xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold">Performance Analytics</h1>
                    <p className="text-slate-400 mt-1">Track your progress and engagement metrics</p>
                </div>

                {/* Summary Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    {[
                        { icon: <FiTrendingUp />, label: 'Overall Score', value: '82%', sub: '+4% this week', color: 'text-green-400', bg: 'from-green-500/10 to-emerald-500/5' },
                        { icon: <FiBookOpen />, label: 'Courses Active', value: '5', sub: '2 in progress', color: 'text-blue-400', bg: 'from-blue-500/10 to-cyan-500/5' },
                        { icon: <FiClock />, label: 'Study Hours', value: '23h', sub: 'This month', color: 'text-purple-400', bg: 'from-purple-500/10 to-violet-500/5' },
                        { icon: <FiAward />, label: 'Quizzes Passed', value: '12/14', sub: '85% pass rate', color: 'text-yellow-400', bg: 'from-yellow-500/10 to-amber-500/5' },
                    ].map((c) => (
                        <motion.div
                            key={c.label}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`bg-gradient-to-br ${c.bg} border border-slate-700/50 rounded-2xl p-5`}
                        >
                            <div className={`w-10 h-10 rounded-xl bg-surface flex items-center justify-center ${c.color} text-lg mb-3`}>
                                {c.icon}
                            </div>
                            <p className="text-2xl font-bold">{c.value}</p>
                            <p className="text-slate-500 text-sm">{c.label}</p>
                            <p className="text-xs text-slate-400 mt-1">{c.sub}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                    {/* Weekly Progress Chart */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-surface border border-slate-700/50 rounded-2xl p-6"
                    >
                        <h2 className="text-xl font-bold mb-6">Weekly Study Progress</h2>
                        <div className="flex items-end gap-3 h-48">
                            {weeklyProgress.map((val, i) => (
                                <div key={i} className="flex-1 flex flex-col items-center gap-2">
                                    <span className="text-xs text-slate-500">{val}%</span>
                                    <motion.div
                                        initial={{ height: 0 }}
                                        animate={{ height: `${val}%` }}
                                        transition={{ delay: i * 0.05, duration: 0.5 }}
                                        className={`w-full rounded-t-lg ${val >= 70 ? 'bg-gradient-to-t from-accent to-cyan-400' : 'bg-gradient-to-t from-slate-700 to-slate-600'}`}
                                    />
                                    <span className="text-xs text-slate-500">
                                        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i]}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Subject-wise Performance */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-surface border border-slate-700/50 rounded-2xl p-6"
                    >
                        <h2 className="text-xl font-bold mb-6">Subject-wise Performance</h2>
                        <div className="space-y-5">
                            {subjectData.map((s, i) => (
                                <div key={s.name}>
                                    <div className="flex justify-between text-sm mb-1.5">
                                        <span>{s.name}</span>
                                        <span className="text-slate-400">{s.score}%</span>
                                    </div>
                                    <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${s.score}%` }}
                                            transition={{ delay: i * 0.1, duration: 0.6 }}
                                            className={`h-full ${s.color} rounded-full`}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Engagement Metrics */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-surface border border-slate-700/50 rounded-2xl p-6"
                >
                    <h2 className="text-xl font-bold mb-6">Engagement Metrics</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { label: 'Avg. Session', value: '42 min', icon: '⏱️' },
                            { label: 'Login Streak', value: '7 days', icon: '🔥' },
                            { label: 'Materials Read', value: '34', icon: '📖' },
                            { label: 'Notes Taken', value: '89', icon: '📝' },
                        ].map((m) => (
                            <div key={m.label} className="text-center p-4 bg-slate-800/30 rounded-xl">
                                <p className="text-2xl mb-2">{m.icon}</p>
                                <p className="text-xl font-bold">{m.value}</p>
                                <p className="text-xs text-slate-500 mt-1">{m.label}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default AnalyticsPage;
