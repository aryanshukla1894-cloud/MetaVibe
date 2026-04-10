import { motion } from 'framer-motion';
import { FiUsers, FiBookOpen, FiAlertTriangle, FiSettings, FiTrendingUp, FiActivity } from 'react-icons/fi';
import Navbar from '../components/Navbar';

const stats = [
    { icon: <FiUsers />, label: 'Total Students', value: '1,247', change: '+12%', color: 'text-blue-400', bg: 'bg-blue-500/10' },
    { icon: <FiBookOpen />, label: 'Active Courses', value: '48', change: '+5', color: 'text-purple-400', bg: 'bg-purple-500/10' },
    { icon: <FiAlertTriangle />, label: 'Wellbeing Alerts', value: '7', change: '-3', color: 'text-red-400', bg: 'bg-red-500/10' },
    { icon: <FiTrendingUp />, label: 'Avg Performance', value: '78%', change: '+4%', color: 'text-green-400', bg: 'bg-green-500/10' },
];

const recentUsers = [
    { name: 'Alex Doe', role: 'student', status: 'active', joined: '2 days ago' },
    { name: 'Sarah Jenkins', role: 'student', status: 'at-risk', joined: '1 week ago' },
    { name: 'Dr. Smith', role: 'teacher', status: 'active', joined: '1 month ago' },
    { name: 'Prof. Johnson', role: 'teacher', status: 'active', joined: '3 months ago' },
    { name: 'Mike Chen', role: 'student', status: 'inactive', joined: '5 days ago' },
];

const AdminPanel = () => {
    return (
        <div className="min-h-screen bg-background text-slate-100">
            <Navbar />
            <div className="pt-20 px-4 sm:px-8 pb-12 max-w-7xl mx-auto">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
                    <div>
                        <h1 className="text-3xl font-bold">Admin Panel</h1>
                        <p className="text-slate-400 mt-1">System overview and management</p>
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 bg-surface border border-slate-700 rounded-xl hover:border-accent transition-colors text-sm">
                        <FiSettings /> System Settings
                    </button>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    {stats.map((s) => (
                        <motion.div
                            key={s.label}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-surface border border-slate-700/50 rounded-2xl p-5"
                        >
                            <div className="flex items-center justify-between mb-3">
                                <div className={`w-10 h-10 rounded-xl ${s.bg} flex items-center justify-center ${s.color} text-lg`}>
                                    {s.icon}
                                </div>
                                <span className={`text-xs font-medium ${s.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                                    {s.change}
                                </span>
                            </div>
                            <p className="text-2xl font-bold">{s.value}</p>
                            <p className="text-slate-500 text-sm mt-1">{s.label}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Users Table */}
                    <div className="lg:col-span-2 bg-surface border border-slate-700/50 rounded-2xl p-6">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-bold">Recent Users</h2>
                            <button className="text-accent text-sm hover:underline">View All</button>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="text-slate-500 border-b border-slate-700">
                                        <th className="text-left py-3 px-2">Name</th>
                                        <th className="text-left py-3 px-2">Role</th>
                                        <th className="text-left py-3 px-2">Status</th>
                                        <th className="text-left py-3 px-2">Joined</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {recentUsers.map((u) => (
                                        <tr key={u.name} className="border-b border-slate-800 hover:bg-slate-800/50 transition-colors">
                                            <td className="py-3 px-2 font-medium">{u.name}</td>
                                            <td className="py-3 px-2">
                                                <span className={`px-2 py-0.5 rounded-lg text-xs ${u.role === 'teacher' ? 'bg-purple-500/10 text-purple-400' : 'bg-blue-500/10 text-blue-400'}`}>
                                                    {u.role}
                                                </span>
                                            </td>
                                            <td className="py-3 px-2">
                                                <span className={`flex items-center gap-1.5 text-xs ${u.status === 'active' ? 'text-green-400' :
                                                        u.status === 'at-risk' ? 'text-red-400' : 'text-slate-500'
                                                    }`}>
                                                    <span className={`w-1.5 h-1.5 rounded-full ${u.status === 'active' ? 'bg-green-400' :
                                                            u.status === 'at-risk' ? 'bg-red-400' : 'bg-slate-500'
                                                        }`}></span>
                                                    {u.status}
                                                </span>
                                            </td>
                                            <td className="py-3 px-2 text-slate-400">{u.joined}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Activity Feed */}
                    <div className="bg-surface border border-slate-700/50 rounded-2xl p-6">
                        <h2 className="text-xl font-bold mb-6 flex items-center gap-2"><FiActivity /> Activity</h2>
                        <div className="space-y-4">
                            {[
                                { text: 'New student registered', time: '2 min ago', dot: 'bg-green-400' },
                                { text: 'Wellbeing alert triggered for Sarah J.', time: '15 min ago', dot: 'bg-red-400' },
                                { text: 'Dr. Smith uploaded Quiz #12', time: '1 hr ago', dot: 'bg-purple-400' },
                                { text: 'System backup completed', time: '3 hrs ago', dot: 'bg-blue-400' },
                                { text: 'Course "Data Science 101" updated', time: '5 hrs ago', dot: 'bg-yellow-400' },
                            ].map((a, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <div className={`w-2 h-2 rounded-full mt-1.5 ${a.dot}`}></div>
                                    <div>
                                        <p className="text-sm">{a.text}</p>
                                        <p className="text-xs text-slate-500">{a.time}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;
