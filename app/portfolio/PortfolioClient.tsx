'use client';

import { motion } from 'framer-motion';

export default function PortfolioClient({ content }: { content: any }) {
    const portfolio = content?.portfolio || { title: "Values", subtitle: "...", allProjects: [] };

    return (
        <section className="section" style={{ paddingTop: '150px' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <span className="hero-tag">{portfolio.title}</span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Proving The <span style={{ color: 'var(--accent-cyan)' }}>Impossible</span>
                    </motion.h1>
                    <motion.p
                        style={{ maxWidth: '700px', margin: '2rem auto', color: 'var(--text-secondary)' }}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                    >
                        {portfolio.subtitle}
                    </motion.p>
                </div>

                <div className="services-grid">
                    {portfolio.allProjects && portfolio.allProjects.map((project: any, index: number) => (
                        <motion.div
                            key={index}
                            className="glass-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <span style={{
                                fontSize: '0.8rem',
                                color: 'var(--accent-cyan)',
                                border: '1px solid rgba(0, 243, 255, 0.3)',
                                padding: '0.2rem 0.6rem',
                                borderRadius: '12px',
                                display: 'inline-block',
                                marginBottom: '1rem'
                            }}>
                                {project.category}
                            </span>
                            <h3 style={{ marginBottom: '0.5rem', fontSize: '1.5rem' }}>{project.title}</h3>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                                {project.description}
                            </p>

                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                                {project.tech && project.tech.map((t: string, i: number) => (
                                    <span key={i} style={{
                                        fontSize: '0.75rem',
                                        background: 'rgba(255,255,255,0.05)',
                                        padding: '0.2rem 0.5rem',
                                        borderRadius: '4px',
                                        color: '#cbd5e1'
                                    }}>
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <div style={{
                                borderTop: '1px solid rgba(255,255,255,0.1)',
                                paddingTop: '1rem',
                                fontSize: '0.85rem',
                                color: 'var(--text-secondary)',
                                fontStyle: 'italic'
                            }}>
                                Lead: <span style={{ color: 'var(--text-primary)' }}>{project.lead}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
