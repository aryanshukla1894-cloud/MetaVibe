import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiShield, FiSmile, FiBarChart2, FiCpu, FiBell, FiBookOpen } from 'react-icons/fi';
import Navbar from '../components/Navbar';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } })
};

const features = [
    { icon: <FiCpu />, title: 'Adaptive Learning', desc: 'AI-powered content personalized to your pace and performance.' },
    { icon: <FiSmile />, title: 'Wellbeing Monitoring', desc: 'Daily mood check-ins with proactive stress detection alerts.' },
    { icon: <FiBarChart2 />, title: 'Performance Analytics', desc: 'Visual dashboards tracking progress and engagement metrics.' },
    { icon: <FiShield />, title: 'Role-Based Access', desc: 'Secure student, teacher, and admin dashboards with JWT.' },
    { icon: <FiBell />, title: 'Smart Notifications', desc: 'Timely reminders for assignments, tests, and wellbeing risks.' },
    { icon: <FiBookOpen />, title: 'Course Management', desc: 'Upload lessons, quizzes, and manage learning paths.' },
];

const LandingPage = () => {
    return (
        <div className="min-h-screen bg-background text-white overflow-hidden">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-4">
                {/* Background blobs */}
                <div className="absolute top-10 left-10 w-[500px] h-[500px] bg-accent/20 rounded-full mix-blend-multiply filter blur-[120px] animate-blob"></div>
                <div className="absolute top-20 right-10 w-[400px] h-[400px] bg-purple-500/20 rounded-full mix-blend-multiply filter blur-[120px] animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-pink-500/10 rounded-full mix-blend-multiply filter blur-[120px] animate-blob animation-delay-4000"></div>

                <div className="max-w-6xl mx-auto text-center relative z-10">
                    <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/10 border border-accent/30 rounded-full text-accent text-sm font-medium mb-6">
                            🎓 Adaptive Learning Platform
                        </span>
                    </motion.div>

                    <motion.h1
                        initial="hidden" animate="visible" variants={fadeUp} custom={1}
                        className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-6"
                    >
                        Learn Smarter,{' '}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent via-purple-400 to-pink-400">
                            Feel Better
                        </span>
                    </motion.h1>

                    <motion.p
                        initial="hidden" animate="visible" variants={fadeUp} custom={2}
                        className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10"
                    >
                        MetaVibe combines personalized AI-powered education with real-time wellbeing monitoring
                        to create a holistic platform for student success.
                    </motion.p>

                    <motion.div
                        initial="hidden" animate="visible" variants={fadeUp} custom={3}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Link
                            to="/register"
                            className="group px-8 py-4 bg-gradient-to-r from-accent to-purple-500 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-accent/25 transition-all transform hover:scale-105 flex items-center gap-2"
                        >
                            Get Started Free <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            to="/login"
                            className="px-8 py-4 bg-surface border border-slate-700 hover:bg-slate-800 rounded-full font-bold text-lg transition-all transform hover:scale-105"
                        >
                            Sign In
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Everything You Need to <span className="text-accent">Succeed</span></h2>
                        <p className="text-slate-400 text-lg max-w-xl mx-auto">A comprehensive platform designed for modern education and student care.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((f, i) => (
                            <motion.div
                                key={f.title}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                                custom={i}
                                className="group bg-surface/60 backdrop-blur border border-slate-700/50 rounded-2xl p-6 hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/5"
                            >
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-purple-500/20 flex items-center justify-center text-accent text-xl mb-4 group-hover:scale-110 transition-transform">
                                    {f.icon}
                                </div>
                                <h3 className="text-lg font-bold mb-2">{f.title}</h3>
                                <p className="text-slate-400 text-sm">{f.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 px-4 border-t border-slate-800">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                        className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
                    >
                        {[
                            { value: '10K+', label: 'Students' },
                            { value: '500+', label: 'Courses' },
                            { value: '95%', label: 'Satisfaction' },
                            { value: '24/7', label: 'AI Support' },
                        ].map((s) => (
                            <div key={s.label} className="p-6">
                                <p className="text-3xl sm:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-accent to-purple-400">{s.value}</p>
                                <p className="text-slate-400 text-sm mt-1">{s.label}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-4">
                <motion.div
                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                    className="max-w-4xl mx-auto bg-gradient-to-r from-accent/10 to-purple-500/10 border border-accent/20 rounded-3xl p-12 text-center"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Transform Your Learning?</h2>
                    <p className="text-slate-400 mb-8 max-w-lg mx-auto">Join thousands of students who are learning smarter and feeling better with MetaVibe.</p>
                    <Link to="/register" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent to-purple-500 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-accent/25 transition-all transform hover:scale-105">
                        Start Learning Now <FiArrowRight />
                    </Link>
                </motion.div>
            </section>

            {/* Footer */}
            <footer className="border-t border-slate-800 py-8 px-4">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-slate-500 text-sm">© 2026 MetaVibe. All rights reserved.</p>
                    <div className="flex gap-6 text-sm text-slate-500">
                        <a href="#" className="hover:text-accent transition-colors">Privacy</a>
                        <a href="#" className="hover:text-accent transition-colors">Terms</a>
                        <a href="#" className="hover:text-accent transition-colors">Contact</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
