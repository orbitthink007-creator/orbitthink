'use client';

import { motion } from 'framer-motion';

export default function AboutSection({ content }: { content: any }) {
    // defaults
    const defaultStats = [
        { value: "100+", label: "Models Deployed", color: "var(--accent-cyan)" },
        { value: "99.9%", label: "Model Accuracy", color: "var(--accent-purple)" },
        { value: "24/7", label: "Neural Uptime", color: "var(--accent-pink)" }
    ];

    const defaultContent = {
        tag: "Our Mission",
        title: "The Gravity of Innovation",
        missionText: "At OrbitThink, we believe AI is the architecture of the future. We are a collective of data scientists, ML engineers, and visionaries dedicated to pushing the boundaries of what machine intelligence can achieve.",
        stats: defaultStats
    };

    // Safely extract values with fallbacks
    // If 'content' is provided (from DB), use it, otherwise use defaults.
    // If 'content' is provided but specific fields like 'stats' are missing (old DB record), fallback to defaultStats.
    const displayTag = content?.tag || defaultContent.tag;
    const displayTitle = content?.missionTitle || content?.title || defaultContent.title; // map missionTitle or title or default
    const displayText = content?.missionText || defaultContent.missionText;
    const stats = (content?.stats && content.stats.length > 0) ? content.stats : defaultContent.stats;

    // console.log('stats', stats);
    // console.log('sectionContent', sectionContent); 
    // console.log('content', content);

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
                    <span className="hero-tag" style={{ borderColor: 'var(--text-secondary)', color: 'var(--text-secondary)' }}>{displayTag}</span>
                    <h2 style={{ marginTop: '2rem' }}>{displayTitle}</h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '2rem' }}>
                        {displayText}
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', marginTop: '3rem' }}>
                        {stats.map((stat: any, index: number) => (
                            <div key={index}>
                                <h4 style={{ fontSize: '1.5rem', color: stat.color }}>{stat.value}</h4>
                                <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
