'use client';

import { motion } from 'framer-motion';

const testimonials = [
    {
        quote: "OrbitThink transformed our data infrastructure. Their GenAI models automated 60% of our workflow within weeks.",
        name: "Sarah Jenkins",
        role: "CTO, TechNova",
        borderColor: 'var(--accent-cyan)'
    },
    {
        quote: "The machine learning insights provided were game-changing. We predicted market trends with 95% accuracy.",
        name: "Marcus Chen",
        role: "Director, DataFlow",
        borderColor: 'var(--accent-purple)'
    },
    {
        quote: "Exceptional quality and speed. Their team understands the nuance of deep learning applications like no other.",
        name: "Elena Rodriguez",
        role: "VP of Engineering, SkyNet",
        borderColor: 'var(--accent-pink)'
    }
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="section" style={{ background: 'rgba(255,255,255,0.02)' }}>
            <div className="container">
                <motion.h2
                    style={{ textAlign: 'center' }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    Client Feedback
                </motion.h2>
                <div className="services-grid">
                    {testimonials.map((t, i) => (
                        <motion.article
                            key={i}
                            className="glass-card"
                            style={{ borderLeft: `4px solid ${t.borderColor}` }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: i * 0.1 }}
                        >
                            <p style={{ fontStyle: 'italic', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>"{t.quote}"</p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#333' }}></div>
                                <div>
                                    <h5 style={{ margin: 0 }}>{t.name}</h5>
                                    <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{t.role}</span>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
