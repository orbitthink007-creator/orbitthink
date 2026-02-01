'use client';

import { motion } from 'framer-motion';

export default function ServicesClient({ content }: { content: any }) {
    // Fallback
    const servicesPage = content?.servicesPage || {
        intro: { title: "Anti-Gravity", titleAccent: "Expertise", description: "Loading..." },
        sections: []
    };

    return (
        <>
            <section className="section" style={{ paddingTop: '150px', paddingBottom: '50px' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <span className="hero-tag">Our Collective Force</span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {servicesPage.intro.title} <span style={{ color: 'var(--accent-cyan)' }}>{servicesPage.intro.titleAccent}</span>
                    </motion.h1>
                    <motion.p
                        style={{ maxWidth: '800px', margin: '2rem auto', color: 'var(--text-secondary)' }}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                    >
                        {servicesPage.intro.description}
                    </motion.p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    {servicesPage.sections.map((section: any, index: number) => (
                        <motion.div
                            key={index}
                            className={`glass-card grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24 last:mb-0`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                        >
                            <div className={`order-2 ${index % 2 === 1 ? 'md:order-1' : ''}`} style={{ height: '300px', background: `${section.accentColor}0d`, borderRadius: '20px', border: `1px solid ${section.accentColor}33`, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <div style={{ fontSize: '3rem', color: section.accentColor }}>{section.icon}</div>
                            </div>

                            <div className={`order-1 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                                <h2 style={{ textAlign: 'left', color: section.accentColor, marginBottom: '1rem' }}>{section.title}</h2>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                                    {section.description}
                                </p>
                                <ul style={{ color: 'var(--text-secondary)', listStyle: 'disc', paddingLeft: '1.5rem', marginBottom: '2rem' }}>
                                    {section.list.map((item: string, i: number) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </>
    );
}
