'use client';

import { motion } from 'framer-motion';

export default function AboutClient({ content }: { content: any }) {
    // Fallback if content is missing (e.g. initial load or error)
    const about = content?.about || {
        tag: "Who We Are",
        title: "The Minds Behind",
        titleAccent: "The Machine",
        missionTitle: "Our Mission",
        missionText: "Loading...",
        teamTitle: "Leadership Team",
        team: []
    };

    return (
        <>
            <section className="section" style={{ paddingTop: '150px', paddingBottom: '50px' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <span className="hero-tag">{about.tag}</span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {about.title} <span style={{ color: 'var(--accent-cyan)' }}>{about.titleAccent}</span>
                    </motion.h1>
                </div>
            </section>

            <section className="section" style={{ paddingTop: 0 }}>
                <div className="container">
                    <motion.div
                        className="glass-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 style={{ color: 'var(--accent-purple)', marginBottom: '1.5rem' }}>{about.missionTitle}</h2>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', lineHeight: '1.8' }}>
                            {about.missionText}
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <motion.h2
                        style={{ textAlign: 'center' }}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        {about.teamTitle}
                    </motion.h2>
                    <div className="services-grid" style={{ marginTop: '3rem' }}>
                        {about.team.map((member: any, index: number) => (
                            <motion.div
                                key={index}
                                className="glass-card"
                                style={{ textAlign: 'center' }}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                            >
                                <div style={{ width: '120px', height: '120px', background: '#333', borderRadius: '50%', margin: '0 auto 1.5rem', border: `2px solid ${member.borderColor}` }}></div>
                                <h3 style={{ marginBottom: '0.5rem' }}>{member.name}</h3>
                                <p style={{ color: member.roleColor, marginBottom: '1rem', fontSize: '0.9rem' }}>{member.role}</p>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{member.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
