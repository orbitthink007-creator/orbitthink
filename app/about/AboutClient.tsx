'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AboutClient({ content }: { content: any }) {
    // Fallback if content is missing (e.g. initial load or error)
    const about = content?.about || {
        tag: "Who We Are",
        title: "Innovative Solutions",
        titleAccent: "For Your Business",
        missionTitle: "Our Mission",
        missionText: "Loading...",
        teamTitle: "Our Capabilities",
        team: [],
        cta: "Ready to Transform Your Ideas?",
        ctaText: "Let's discuss how we can help your business grow"
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
                                <div style={{ width: '80px', height: '80px', background: `linear-gradient(135deg, ${member.borderColor}20, ${member.borderColor}40)`, borderRadius: '12px', margin: '0 auto 1.5rem', border: `2px solid ${member.borderColor}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem' }}>
                                    {member.icon}
                                </div>
                                <h3 style={{ marginBottom: '0.5rem', color: member.roleColor }}>{member.role}</h3>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>{member.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section" style={{ paddingBottom: '100px' }}>
                <div className="container" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 style={{ marginBottom: '1rem' }}>{about.cta}</h2>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '2rem', lineHeight: '1.8' }}>
                            {about.ctaText}
                        </p>
                        <Link href="/contact">
                            <button
                                style={{
                                    padding: '12px 40px',
                                    background: 'var(--accent-cyan)',
                                    color: '#000',
                                    border: 'none',
                                    borderRadius: '8px',
                                    fontSize: '1rem',
                                    fontWeight: 'bold',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 243, 255, 0.4)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}
                            >
                                Start Your Project →
                            </button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
