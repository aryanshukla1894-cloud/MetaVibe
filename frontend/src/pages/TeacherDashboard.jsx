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
                        className="relative overflow-visible group z-10"
                    >
                        {/* Glowing Background Effect */}
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 rounded-[1.5rem] blur opacity-40 group-hover:opacity-75 transition duration-500 will-change-transform"></div>
                        
                        <div className="relative bg-surface/95 backdrop-blur-3xl p-6 md:p-8 rounded-[1.4rem] border border-red-500/20 shadow-2xl overflow-hidden h-full">
                            {/* Inner ambient glow */}
                            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-red-500/10 rounded-full blur-[80px] pointer-events-none"></div>

                            <div className="flex items-center justify-between mb-8 relative z-10">
                                <div className="flex items-center gap-3">
                                    <div className="relative flex h-5 w-5 items-center justify-center">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500 shadow-[0_0_12px_rgba(239,68,68,1)]"></span>
                                    </div>
                                    <h3 className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-pink-400 to-red-400 tracking-tight">Wellbeing Alerts</h3>
                                </div>
                                <span className="px-4 py-1.5 bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-black uppercase tracking-widest rounded-full shadow-[0_0_15px_rgba(239,68,68,0.15)] flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                                    2 Action Required
                                </span>
                            </div>
                            
                            <div className="space-y-5 relative z-10">
                                {/* Alert Card 1 */}
                                <motion.div whileHover={{ scale: 1.015, y: -2 }} transition={{ type: "spring", stiffness: 400 }} className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/50 p-5 rounded-2xl border border-red-500/20 hover:border-red-500/50 transition-all shadow-lg overflow-hidden group/card text-left">
                                    <div className="absolute left-0 top-0 w-1.5 h-full bg-gradient-to-b from-red-500 to-pink-500 shadow-[0_0_15px_rgba(239,68,68,0.8)]"></div>
                                    <div className="absolute -inset-1 bg-gradient-to-r from-red-500/10 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity blur-lg pointer-events-none"></div>
                                    
                                    <div className="flex justify-between items-start pl-2">
                                        <div>
                                            <div className="flex items-center gap-3 mb-1.5">
                                                <h4 className="font-bold text-slate-100 text-lg">Alex Doe</h4>
                                                <span className="px-2 py-0.5 bg-red-500/20 text-red-300 text-[10px] uppercase font-black tracking-wider rounded border border-red-500/20">Critical Risk</span>
                                            </div>
                                            <p className="text-sm text-slate-300 flex items-center gap-2 bg-slate-900/50 inline-flex px-3 py-1.5 rounded-lg border border-slate-700/50 mt-1">
                                                <span className="text-xl">😫</span> <span className="font-medium">High stress detected (Level 8/10)</span>
                                            </p>
                                        </div>
                                        <span className="text-xs font-medium text-slate-400 flex items-center gap-1.5 bg-slate-800/80 px-2.5 py-1.5 rounded-md border border-slate-700 shadow-inner">
                                            <svg className="w-3.5 h-3.5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                            10m ago
                                        </span>
                                    </div>
                                    <div className="flex gap-3 mt-5 pt-4 border-t border-slate-700/50 pl-2">
                                        <button className="flex-1 py-2.5 bg-gradient-to-r from-red-500/10 to-red-500/5 hover:from-red-500/20 hover:to-red-500/10 text-red-400 text-sm font-bold rounded-xl transition-all border border-red-500/20 hover:border-red-500/40 flex items-center justify-center gap-2 hover:shadow-[0_0_15px_rgba(239,68,68,0.2)]">
                                            💬 Message Instantly
                                        </button>
                                        <button className="flex-1 py-2.5 bg-slate-800/50 hover:bg-slate-700/80 text-slate-300 text-sm font-bold rounded-xl transition-all border border-slate-700 hover:border-slate-500 flex items-center justify-center gap-2">
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                                            View Profile
                                        </button>
                                    </div>
                                </motion.div>

                                {/* Alert Card 2 */}
                                <motion.div whileHover={{ scale: 1.015, y: -2 }} transition={{ type: "spring", stiffness: 400 }} className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/50 p-5 rounded-2xl border border-yellow-500/20 hover:border-yellow-500/50 transition-all shadow-lg overflow-hidden group/card text-left">
                                    <div className="absolute left-0 top-0 w-1.5 h-full bg-gradient-to-b from-yellow-400 to-orange-500 shadow-[0_0_15px_rgba(234,179,8,0.8)]"></div>
                                    <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500/10 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity blur-lg pointer-events-none"></div>
                                    
                                    <div className="flex justify-between items-start pl-2">
                                        <div>
                                            <div className="flex items-center gap-3 mb-1.5">
                                                <h4 className="font-bold text-slate-100 text-lg">Sarah Jenkins</h4>
                                                <span className="px-2 py-0.5 bg-yellow-500/20 text-yellow-500 text-[10px] uppercase font-black tracking-wider rounded border border-yellow-500/20">Warning</span>
                                            </div>
                                            <p className="text-sm text-slate-300 flex items-center gap-2 bg-slate-900/50 inline-flex px-3 py-1.5 rounded-lg border border-slate-700/50 mt-1">
                                                <span className="text-xl">📉</span> <span className="font-medium">Performance drop: Average → Slow</span>
                                            </p>
                                        </div>
                                        <span className="text-xs font-medium text-slate-400 flex items-center gap-1.5 bg-slate-800/80 px-2.5 py-1.5 rounded-md border border-slate-700 shadow-inner">
                                             <svg className="w-3.5 h-3.5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                            1 hr ago
                                        </span>
                                    </div>
                                    <div className="flex gap-3 mt-5 pt-4 border-t border-slate-700/50 pl-2">
                                        <button className="flex-1 py-2.5 bg-gradient-to-r from-yellow-500/10 to-yellow-500/5 hover:from-yellow-500/20 hover:to-yellow-500/10 text-yellow-500 text-sm font-bold rounded-xl transition-all border border-yellow-500/20 hover:border-yellow-500/40 flex items-center justify-center gap-2 hover:shadow-[0_0_15px_rgba(234,179,8,0.15)]">
                                            🤖 AI Recommendations
                                        </button>
                                        <button className="flex-1 py-2.5 bg-slate-800/50 hover:bg-slate-700/80 text-slate-300 text-sm font-bold rounded-xl transition-all border border-slate-700 hover:border-slate-500 flex items-center justify-center gap-2">
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                                            View Profile
                                        </button>
                                    </div>
                                </motion.div>
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
