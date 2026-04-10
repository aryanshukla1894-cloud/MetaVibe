import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiBell, FiLogOut, FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi';
import { useState } from 'react';
import useAuthStore from '../store/authStore';

const Navbar = () => {
    const { user, logout } = useAuthStore();
    const navigate = useNavigate();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(true);

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    const getDashboardLink = () => {
        if (!user) return '/login';
        if (user.role === 'teacher') return '/teacher';
        if (user.role === 'admin') return '/admin';
        return '/student';
    };

    return (
        <motion.nav
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 120 }}
            className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/80 border-b border-slate-800"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <Link to="/" className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-purple-500 flex items-center justify-center font-bold text-sm">M</div>
                        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent to-purple-400">MetaVibe</span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-6">
                        {user ? (
                            <>
                                <Link to={getDashboardLink()} className="text-sm text-slate-300 hover:text-accent transition-colors">Dashboard</Link>
                                <Link to="/analytics" className="text-sm text-slate-300 hover:text-accent transition-colors">Analytics</Link>
                                <Link to="/wellbeing" className="text-sm text-slate-300 hover:text-accent transition-colors">Wellbeing</Link>
                                <Link to="/chatbot" className="text-sm text-slate-300 hover:text-accent transition-colors">AI Tutor</Link>
                                <button className="relative text-slate-300 hover:text-accent transition-colors">
                                    <FiBell size={18} />
                                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                                </button>
                                <button onClick={() => setDarkMode(!darkMode)} className="text-slate-300 hover:text-accent transition-colors">
                                    {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
                                </button>
                                <div className="flex items-center gap-3 pl-4 border-l border-slate-700">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-purple-500 flex items-center justify-center text-xs font-bold">
                                        {user.name?.[0]?.toUpperCase() || 'U'}
                                    </div>
                                    <div className="text-sm">
                                        <p className="font-medium text-slate-200">{user.name}</p>
                                        <p className="text-xs text-slate-500 capitalize">{user.role}</p>
                                    </div>
                                    <button onClick={handleLogout} className="text-slate-400 hover:text-red-400 transition-colors ml-2">
                                        <FiLogOut size={16} />
                                    </button>
                                </div>
                            </>
                        ) : (
                            <>
                                <Link to="/login" className="text-sm text-slate-300 hover:text-accent transition-colors">Login</Link>
                                <Link to="/register" className="px-5 py-2 bg-gradient-to-r from-accent to-purple-500 rounded-full text-sm font-bold hover:opacity-90 transition-opacity">
                                    Get Started
                                </Link>
                            </>
                        )}
                    </div>

                    {/* Mobile toggle */}
                    <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-slate-300">
                        {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {mobileOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="md:hidden bg-surface border-t border-slate-800 px-4 py-4 space-y-3"
                >
                    {user ? (
                        <>
                            <Link to={getDashboardLink()} className="block text-sm text-slate-300 hover:text-accent py-2" onClick={() => setMobileOpen(false)}>Dashboard</Link>
                            <Link to="/analytics" className="block text-sm text-slate-300 hover:text-accent py-2" onClick={() => setMobileOpen(false)}>Analytics</Link>
                            <Link to="/wellbeing" className="block text-sm text-slate-300 hover:text-accent py-2" onClick={() => setMobileOpen(false)}>Wellbeing</Link>
                            <Link to="/chatbot" className="block text-sm text-slate-300 hover:text-accent py-2" onClick={() => setMobileOpen(false)}>AI Tutor</Link>
                            <button onClick={handleLogout} className="block text-sm text-red-400 py-2">Logout</button>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="block text-sm text-slate-300 hover:text-accent py-2" onClick={() => setMobileOpen(false)}>Login</Link>
                            <Link to="/register" className="block text-sm text-accent font-bold py-2" onClick={() => setMobileOpen(false)}>Get Started</Link>
                        </>
                    )}
                </motion.div>
            )}
        </motion.nav>
    );
};

export default Navbar;
