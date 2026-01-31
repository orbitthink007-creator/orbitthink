'use client';

import { motion } from 'framer-motion';

export default function AboutSection() {
    return (
        <section id="about" className="section" style={{ background: 'linear-gradient(180deg, var(--bg-void) 0%, rgba(20, 20, 31, 0.5) 100%)' }}>
            <div className="container">
                <motion.div
                    className="glass-card"
                    style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', border: '1px solid var(--accent-purple)' }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="hero-tag" style={{ borderColor: 'var(--text-secondary)', color: 'var(--text-secondary)' }}>Our Mission</span>
                    <h2 style={{ marginTop: '2rem' }}>The Gravity of Innovation</h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '2rem' }}>
                        At OrbitThink, we believe AI is the architecture of the future. We are a collective of data scientists, ML engineers, and visionaries dedicated to pushing the boundaries of what machine intelligence can achieve.
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', marginTop: '3rem' }}>
                        <div>
                            <h4 style={{ fontSize: '2.5rem', color: 'var(--accent-cyan)' }}>100+</h4>
                            <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Models Deployed</span>
                        </div>
                        <div>
                            <h4 style={{ fontSize: '2.5rem', color: 'var(--accent-purple)' }}>99.9%</h4>
                            <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Model Accuracy</span>
                        </div>
                        <div>
                            <h4 style={{ fontSize: '2.5rem', color: 'var(--accent-pink)' }}>24/7</h4>
                            <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Neural Uptime</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
