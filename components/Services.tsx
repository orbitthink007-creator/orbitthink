'use client';

import { motion } from 'framer-motion';
import { Brain, Cpu, Network } from 'lucide-react'; // Using Lucide icons as replacement for SVGs if preferred, or I can use the SVGs from original

// I'll stick to the original SVGs for exact fidelity or use Lucide. The prompt mentioned "Component Architecture" but didn't specify icon replacement. 
// I'll use the original SVGs to ensure pixel perfect match as per plan.

const services = [
    {
        title: 'Generative AI',
        description: 'Custom LLM integration and RAG architectures that empower your business to generate value, content, and code at scale. Use the power of creativity, automated.',
        iconColor: 'var(--accent-cyan)',
        bgColor: 'rgba(0, 243, 255, 0.2)',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a10 10 0 1 0 10 10H12V2z" />
                <path d="M12 12 2.1 12a10.1 10.1 0 0 0 4 4.1h5.9v5.8a10 10 0 0 0 9.9-10" />
            </svg>
        )
    },
    {
        title: 'Machine Learning',
        description: 'Predictive analytics and data-driven decision engines. We turn raw data into actionable foresight, optimizing operations and strategy with high-fidelity models.',
        iconColor: 'var(--accent-purple)',
        bgColor: 'rgba(188, 19, 254, 0.2)',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
        )
    },
    {
        title: 'Deep Learning',
        description: 'Advanced neural networks for computer vision, NLP, and complex pattern recognition. Pushing the boundaries of cognitive computing.',
        iconColor: 'var(--accent-pink)',
        bgColor: 'rgba(255, 0, 85, 0.2)',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-5.38c-3.72-4.23-6.94-6.45-9.25-10.428" />
            </svg>
        )
    }
];

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
                    Intelligent Solutions
                </motion.h2>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <motion.article
                            key={index}
                            className="glass-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                        >
                            <div style={{ marginBottom: '1.5rem', width: '50px', height: '50px', background: service.bgColor, borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: service.iconColor }}>
                                {service.icon}
                            </div>
                            <h3 style={{ marginBottom: '1rem', color: service.iconColor }}>{service.title}</h3>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>{service.description}</p>
                            <a href="#" style={{ color: 'var(--text-primary)', fontSize: '0.9rem', fontWeight: 500 }}>Explore Capabilities &rarr;</a>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
