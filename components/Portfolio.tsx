'use client';

import { motion } from 'framer-motion';
import { content } from '@/app/data/content';

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
                    {content.portfolio.tag}
                </motion.h2>
                <div className="services-grid">
                    {content.portfolio.projects.map((project, index) => (
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
                                <span className="hero-tag" style={project.tagStyle || { marginBottom: '1rem', color: project.tagColor, borderColor: project.tagColor }}>{project.tag}</span>
                                <h3>{project.title}</h3>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>{project.description}</p>
                                <a href="/portfolio" className="btn-text" style={project.btnStyle}> {content.portfolio.viewProjectLabel} &rarr;</a>
                            </div>
                        </motion.article>
                    ))}
                </div>
                <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                    <a href="/contact" className="btn btn-primary">{content.portfolio.ctaButtonLiteral}</a>
                </div>
            </div>
        </section>
    );
}
