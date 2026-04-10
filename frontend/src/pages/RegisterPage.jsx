import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import useAuthStore from '../store/authStore';
import Navbar from '../components/Navbar';

const RegisterPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('student');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { login } = useAuthStore();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            await new Promise(r => setTimeout(r, 800));
            const user = { _id: Date.now().toString(), name, email, role };
            login(user, 'mock_jwt_token_' + role);
            if (role === 'teacher') navigate('/teacher');
            else if (role === 'admin') navigate('/admin');
            else navigate('/student');
        } catch {
            setError('Registration failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const roles = [
        { value: 'student', label: '🎓 Student', desc: 'Learn & grow' },
        { value: 'teacher', label: '📚 Teacher', desc: 'Guide & teach' },
        { value: 'admin', label: '⚙️ Admin', desc: 'Manage platform' },
    ];

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
                            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-green-400 to-accent flex items-center justify-center">
                                <span className="text-2xl">🚀</span>
                            </div>
                            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-accent">Join MetaVibe</h1>
                            <p className="text-slate-400 mt-2">Create your account and start learning</p>
                        </div>

                        {error && (
                            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-3 mb-6 text-red-400 text-sm">
                                {error}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Full Name</label>
                                <input
                                    id="register-name"
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-slate-100 placeholder-slate-500 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                                    placeholder="John Doe"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
                                <input
                                    id="register-email"
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
                                    id="register-password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-slate-100 placeholder-slate-500 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                                    placeholder="••••••••"
                                    required
                                    minLength={4}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Select Your Role</label>
                                <div className="grid grid-cols-3 gap-2">
                                    {roles.map((r) => (
                                        <button
                                            key={r.value}
                                            type="button"
                                            onClick={() => setRole(r.value)}
                                            className={`p-3 rounded-xl border text-center transition-all ${role === r.value
                                                    ? 'border-accent bg-accent/10 ring-2 ring-accent/50'
                                                    : 'border-slate-700 bg-slate-800/50 hover:border-slate-600'
                                                }`}
                                        >
                                            <p className="text-lg">{r.label.split(' ')[0]}</p>
                                            <p className="text-xs text-slate-400 mt-1">{r.desc}</p>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <button
                                id="register-submit"
                                type="submit"
                                disabled={loading}
                                className="w-full py-3 bg-gradient-to-r from-green-400 to-accent rounded-xl font-bold text-white hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2"
                            >
                                {loading ? (
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                ) : 'Create Account'}
                            </button>
                        </form>

                        <div className="mt-6 text-center">
                            <p className="text-slate-400 text-sm">
                                Already have an account?{' '}
                                <Link to="/login" className="text-accent hover:underline font-medium">Sign in</Link>
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default RegisterPage;
