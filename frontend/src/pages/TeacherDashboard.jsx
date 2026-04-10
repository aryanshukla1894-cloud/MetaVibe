import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

const TeacherDashboard = () => {
    return (
        <div className="min-h-screen bg-background text-slate-100">
            <Navbar />
            <div className="pt-20 px-4 sm:px-8 pb-12 max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
                {/* Sidebar */}
                <div className="w-full md:w-64 space-y-6 shrink-0">
                    <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent to-purple-500">Teacher Portal</h2>
                    <div className="bg-surface p-6 rounded-2xl shadow-lg border border-slate-700">
                        <img src="https://i.pravatar.cc/150?u=teacher" className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-purple-500" alt="Profile" />
                        <h3 className="text-center font-semibold text-lg">Dr. Smith</h3>
                        <div className="mt-4 pt-4 border-t border-slate-700 text-center">
                            <p className="text-sm">Active Students</p>
                            <p className="text-2xl font-bold text-accent">142</p>
                        </div>
                    </div>

                    <button className="w-full py-3 bg-gradient-to-r from-accent to-purple-500 hover:opacity-90 rounded-xl font-bold transition-all transform hover:scale-105 shadow-md">
                        + Create Course
                    </button>
                    <button className="w-full py-3 bg-surface border border-slate-700 hover:border-accent rounded-xl font-bold transition-all">
                        📝 Create Quiz
                    </button>
                </div>

                <div className="flex-1 space-y-8">
                    {/* Wellbeing Alerts */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-surface p-6 rounded-2xl shadow-lg border border-red-900/50"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                            </span>
                            <h3 className="text-xl font-bold text-red-400">Student Wellbeing Alerts</h3>
                        </div>
                        <div className="space-y-4">
                            <div className="bg-slate-800/50 p-4 rounded-xl border-l-4 border-red-500">
                                <div className="flex justify-between items-center">
                                    <h4 className="font-bold">Student: Alex Doe</h4>
                                    <span className="text-xs text-slate-500 bg-slate-800 px-2 py-1 rounded-lg">10 min ago</span>
                                </div>
                                <p className="text-sm text-slate-300 mt-2">High stress detected (Level 8/10). Mood reported: 😫</p>
                                <div className="flex gap-3 mt-3">
                                    <button className="text-sm text-accent hover:underline">💬 Message</button>
                                    <button className="text-sm text-purple-400 hover:underline">📊 View Profile</button>
                                </div>
                            </div>

                            <div className="bg-slate-800/50 p-4 rounded-xl border-l-4 border-yellow-500">
                                <div className="flex justify-between items-center">
                                    <h4 className="font-bold">Student: Sarah Jenkins</h4>
                                    <span className="text-xs text-slate-500 bg-slate-800 px-2 py-1 rounded-lg">1 hr ago</span>
                                </div>
                                <p className="text-sm text-slate-300 mt-2">Decrease in performance. Learning speed: Average → Slow.</p>
                                <div className="flex gap-3 mt-3">
                                    <button className="text-sm text-accent hover:underline">📝 AI Recommendations</button>
                                    <button className="text-sm text-purple-400 hover:underline">📊 View Profile</button>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Analytics & Course Management */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="bg-surface p-6 rounded-2xl shadow-lg border border-slate-700"
                        >
                            <h3 className="text-xl font-bold mb-4">Course Performance</h3>
                            <div className="flex items-end gap-3 h-40 border-b border-l border-slate-700 pb-2 pl-2">
                                {[
                                    { label: 'Mod 1', height: '50%', color: 'from-blue-600 to-blue-400' },
                                    { label: 'Mod 2', height: '75%', color: 'from-purple-600 to-purple-400' },
                                    { label: 'Mod 3', height: '35%', color: 'from-pink-600 to-pink-400' },
                                    { label: 'Mod 4', height: '60%', color: 'from-green-600 to-green-400' },
                                    { label: 'Avg', height: '90%', color: 'from-accent to-cyan-400' },
                                ].map((bar) => (
                                    <div key={bar.label} className="flex-1 flex flex-col items-center gap-2">
                                        <motion.div
                                            initial={{ height: 0 }}
                                            animate={{ height: bar.height }}
                                            transition={{ duration: 0.6 }}
                                            className={`w-full rounded-t-lg bg-gradient-to-t ${bar.color}`}
                                        />
                                        <span className="text-xs text-slate-500">{bar.label}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-surface p-6 rounded-2xl shadow-lg border border-slate-700"
                        >
                            <h3 className="text-xl font-bold mb-4">Recent Quizzes</h3>
                            <ul className="space-y-4">
                                {[
                                    { name: 'Advanced DB Design Q1', avg: '78%', status: 'good' },
                                    { name: 'Intro to Data Science Q3', avg: '62%', status: 'warning' },
                                    { name: 'ML Fundamentals Q5', avg: '89%', status: 'excellent' },
                                ].map((q) => (
                                    <li key={q.name} className="flex justify-between items-center text-sm border-b border-slate-800 pb-3">
                                        <span>{q.name}</span>
                                        <span className={`text-xs px-2 py-1 rounded-lg ${q.status === 'excellent' ? 'bg-green-900/40 text-green-400' :
                                                q.status === 'warning' ? 'bg-yellow-900/40 text-yellow-400' :
                                                    'bg-blue-900/40 text-blue-400'
                                            }`}>Avg: {q.avg}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                    {/* Student Overview Table */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-surface p-6 rounded-2xl shadow-lg border border-slate-700"
                    >
                        <h3 className="text-xl font-bold mb-4">Student Progress Overview</h3>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="text-slate-500 border-b border-slate-700">
                                        <th className="text-left py-3">Student</th>
                                        <th className="text-left py-3">Avg Score</th>
                                        <th className="text-left py-3">Pace</th>
                                        <th className="text-left py-3">Wellbeing</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { name: 'Alex Doe', score: '82%', pace: 'Average', well: '😫 At Risk' },
                                        { name: 'Sarah Jenkins', score: '55%', pace: 'Slow', well: '😟 Needs Check' },
                                        { name: 'Mike Chen', score: '91%', pace: 'Fast', well: '😃 Good' },
                                        { name: 'Emma Wilson', score: '73%', pace: 'Average', well: '🙂 Stable' },
                                    ].map((s) => (
                                        <tr key={s.name} className="border-b border-slate-800 hover:bg-slate-800/50 transition-colors">
                                            <td className="py-3 font-medium">{s.name}</td>
                                            <td className="py-3">{s.score}</td>
                                            <td className="py-3">
                                                <span className={`text-xs px-2 py-0.5 rounded-lg ${s.pace === 'Fast' ? 'bg-green-900/40 text-green-400' :
                                                        s.pace === 'Slow' ? 'bg-red-900/40 text-red-400' :
                                                            'bg-blue-900/40 text-blue-400'
                                                    }`}>{s.pace}</span>
                                            </td>
                                            <td className="py-3">{s.well}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
export default TeacherDashboard;
