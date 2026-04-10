import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import useAuthStore from '../store/authStore';
import Navbar from '../components/Navbar';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { login } = useAuthStore();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            // Mock login for demo — replace with real API call
            const mockUsers = {
                'student@demo.com': { _id: '1', name: 'Alex Doe', email: 'student@demo.com', role: 'student' },
                'teacher@demo.com': { _id: '2', name: 'Dr. Smith', email: 'teacher@demo.com', role: 'teacher' },
                'admin@demo.com': { _id: '3', name: 'Admin User', email: 'admin@demo.com', role: 'admin' },
            };

            await new Promise(r => setTimeout(r, 800));

            const user = mockUsers[email];
            if (user && password.length >= 4) {
                login(user, 'mock_jwt_token_' + user.role);
                if (user.role === 'teacher') navigate('/teacher');
                else if (user.role === 'admin') navigate('/admin');
                else navigate('/student');
            } else {
                setError('Invalid credentials. Try student@demo.com / teacher@demo.com / admin@demo.com with any 4+ char password.');
            }
        } catch {
            setError('Login failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <div className="pt-24 flex items-center justify-center px-4 pb-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full max-w-md"
                >
                    <div className="bg-surface/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 shadow-2xl">
                        <div className="text-center mb-8">
                            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-accent to-purple-500 flex items-center justify-center">
                                <span className="text-2xl font-bold">M</span>
                            </div>
                            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent to-purple-400">Welcome Back</h1>
                            <p className="text-slate-400 mt-2">Sign in to your MetaVibe account</p>
                        </div>

                        {error && (
                            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-3 mb-6 text-red-400 text-sm">
                                {error}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
                                <input
                                    id="login-email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-slate-100 placeholder-slate-500 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                                    placeholder="you@example.com"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Password</label>
                                <input
                                    id="login-password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-slate-100 placeholder-slate-500 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                                    placeholder="••••••••"
                                    required
                                />
                            </div>
                            <button
                                id="login-submit"
                                type="submit"
                                disabled={loading}
                                className="w-full py-3 bg-gradient-to-r from-accent to-purple-500 rounded-xl font-bold text-white hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2"
                            >
                                {loading ? (
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                ) : 'Sign In'}
                            </button>
                        </form>

                        <div className="mt-6 text-center">
                            <p className="text-slate-400 text-sm">
                                Don&apos;t have an account?{' '}
                                <Link to="/register" className="text-accent hover:underline font-medium">Sign up</Link>
                            </p>
                        </div>

                        <div className="mt-6 p-4 bg-slate-800/30 rounded-xl border border-slate-700/50">
                            <p className="text-xs text-slate-500 font-medium mb-2">Demo Accounts:</p>
                            <div className="grid grid-cols-3 gap-2 text-xs">
                                <button onClick={() => { setEmail('student@demo.com'); setPassword('demo'); }} className="py-1.5 bg-blue-500/10 text-blue-400 rounded-lg hover:bg-blue-500/20 transition-colors">Student</button>
                                <button onClick={() => { setEmail('teacher@demo.com'); setPassword('demo'); }} className="py-1.5 bg-purple-500/10 text-purple-400 rounded-lg hover:bg-purple-500/20 transition-colors">Teacher</button>
                                <button onClick={() => { setEmail('admin@demo.com'); setPassword('demo'); }} className="py-1.5 bg-green-500/10 text-green-400 rounded-lg hover:bg-green-500/20 transition-colors">Admin</button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default LoginPage;
