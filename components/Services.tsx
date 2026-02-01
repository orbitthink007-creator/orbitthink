'use client';

import { motion } from 'framer-motion';
import { content } from '@/app/data/content';

export default function Services() {
    return (
        <section id="services" className="section">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    {content.services.tag}
                </motion.h2>
                <div className="services-grid">
                    {content.services.list.map((service, index) => (
                        <motion.article
                            key={index}
                            className="glass-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                        >
                            <div style={{ marginBottom: '1.5rem', width: '50px', height: '50px', background: service.bgColor, borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: service.iconColor }}>
                                {/* Icon rendering logic could be expanded here if we used a library, kept simple for now */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M12 16v-4" />
                                    <path d="M12 8h.01" />
                                </svg>
                            </div>
                            <h3 style={{ marginBottom: '1rem', color: service.iconColor }}>{service.title}</h3>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>{service.description}</p>
                            <a href="/services" style={{ color: 'var(--text-primary)', fontSize: '0.9rem', fontWeight: 500 }}>{content.services.exploreLabel} &rarr;</a>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
