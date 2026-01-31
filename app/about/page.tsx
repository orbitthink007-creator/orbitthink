'use client';

import { motion } from 'framer-motion';

const team = [
    {
        name: 'Dr. Alex Thorne',
        role: 'Chief AI Scientist',
        desc: 'PhD in Computer Vision. Former lead researcher at DeepMind.',
        borderColor: 'var(--accent-cyan)',
        roleColor: 'var(--accent-cyan)'
    },
    {
        name: 'Sarah Vane',
        role: 'VP of Engineering',
        desc: 'Architect of scalable cloud systems handling petabytes of data.',
        borderColor: 'var(--accent-purple)',
        roleColor: 'var(--accent-purple)'
    },
    {
        name: 'James Chen',
        role: 'Product Strategy',
        desc: 'Specializing in translating complex AI capabilities into market value.',
        borderColor: 'var(--accent-pink)',
        roleColor: 'var(--accent-pink)'
    }
];

export default function About() {
    return (
        <>
            <section className="section" style={{ paddingTop: '150px', paddingBottom: '50px' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <span className="hero-tag">Who We Are</span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        The Minds Behind <span style={{ color: 'var(--accent-cyan)' }}>The Machine</span>
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
                        <h2 style={{ color: 'var(--accent-purple)', marginBottom: '1.5rem' }}>Our Mission</h2>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', lineHeight: '1.8' }}>
                            OrbitThink was founded on the principle that Artificial Intelligence should amplify human potential,
                            not replace it. We bridge the gap between theoretical research and practical, high-impact business
                            applications. Our team operates at the bleeding edge of technology to deliver solutions that are not
                            just effective, but revolutionary.
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
                        Leadership Team
                    </motion.h2>
                    <div className="services-grid" style={{ marginTop: '3rem' }}>
                        {team.map((member, index) => (
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
