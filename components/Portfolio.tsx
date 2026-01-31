'use client';

import { motion } from 'framer-motion';

const projects = [
    {
        tag: 'GenAI',
        tagColor: 'var(--accent-purple)', // Default border is purple in HTML example for one, but first one has no color override? 
        // Checking index.html line 170: style="margin-bottom: 1rem;" (uses default border from check CSS? .hero-tag has border accent-purple by default).
        // Actually the first one line 170 doesn't have override.
        title: 'Nebula Text',
        description: 'Automated content generation engine for a Fortune 500 media conglomerate.',
        gradient: 'linear-gradient(45deg, #1a1a2e, #16213e)',
        icon: '🌌',
        color: null
    },
    {
        tag: 'Deep Learning',
        tagStyle: { borderColor: 'var(--accent-purple)', color: 'var(--accent-purple)', marginBottom: '1rem' },
        title: 'Void Vision',
        description: 'Computer vision system for real-time anomaly detection in manufacturing.',
        gradient: 'linear-gradient(45deg, #0f0c29, #302b63)',
        icon: '🔭',
        btnStyle: { color: 'var(--accent-purple)' }
    },
    {
        tag: 'Analytics',
        tagStyle: { borderColor: 'var(--accent-pink)', color: 'var(--accent-pink)', marginBottom: '1rem' },
        title: 'Pulsar Data',
        description: 'Predictive financial modeling tools processing parabytes of transaction data.',
        gradient: 'linear-gradient(45deg, #200122, #6f0000)',
        icon: '🚀',
        btnStyle: { color: 'var(--accent-pink)' }
    }
];

export default function Portfolio() {
    return (
        <section id="portfolio" className="section">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    Mission Logs
                </motion.h2>
                <div className="services-grid">
                    {projects.map((project, index) => (
                        <motion.article
                            key={index}
                            className="glass-card portfolio-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                        >
                            <div className="portfolio-image" style={{ background: project.gradient }}>
                                <div style={{ fontSize: '3rem', opacity: 0.2 }}>{project.icon}</div>
                            </div>
                            <div className="portfolio-content">
                                <span className="hero-tag" style={project.tagStyle || { marginBottom: '1rem' }}>{project.tag}</span>
                                <h3>{project.title}</h3>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>{project.description}</p>
                                <a href="#" className="btn-text" style={project.btnStyle}>View Mission &rarr;</a>
                            </div>
                        </motion.article>
                    ))}
                </div>
                <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                    <a href="/contact" className="btn btn-primary">Start Your Mission</a>
                </div>
            </div>
        </section>
    );
}
