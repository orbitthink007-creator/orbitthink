'use client';

import { motion } from 'framer-motion';

export default function ServicesPage() {
    return (
        <>
            <section className="section" style={{ paddingTop: '150px', paddingBottom: '50px' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <span className="hero-tag">Our Expertise</span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Intelligence <span style={{ color: 'var(--accent-cyan)' }}>Unleashed</span>
                    </motion.h1>
                    <motion.p
                        style={{ maxWidth: '700px', margin: '2rem auto', color: 'var(--text-secondary)' }}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                    >
                        We provide a comprehensive suite of AI solutions designed to scale. From foundational models to custom deployment.
                    </motion.p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    {/* GenAI Detailed */}
                    <motion.div
                        className="glass-card"
                        style={{ marginBottom: '3rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div>
                            <h2 style={{ textAlign: 'left', color: 'var(--accent-cyan)', marginBottom: '1rem' }}>Generative AI & LLMs</h2>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                                Transform your business logic with State-of-the-Art Language Models. We build RAG (Retrieval-Augmented Generation) pipelines that allow AI to understand your specific data context.
                            </p>
                            <ul style={{ color: 'var(--text-secondary)', listStyle: 'disc', paddingLeft: '1.5rem', marginBottom: '2rem' }}>
                                <li>Custom Chatbots & Assistants</li>
                                <li>Automated Content Generation</li>
                                <li>Code Copilots & Developer Tools</li>
                            </ul>
                        </div>
                        <div style={{ height: '300px', background: 'rgba(0, 243, 255, 0.05)', borderRadius: '20px', border: '1px solid rgba(0, 243, 255, 0.2)', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <img src="/images/gen-ai.png" alt="Generative AI Visualization" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                    </motion.div>

                    {/* Deep Learning Detailed */}
                    <motion.div
                        className="glass-card"
                        style={{ marginBottom: '3rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                    >
                        <div className="order-2 md:order-1" style={{ height: '300px', background: 'rgba(188, 19, 254, 0.05)', borderRadius: '20px', border: '1px solid rgba(188, 19, 254, 0.2)', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <img src="/images/vision-ai.png" alt="Computer Vision Visualization" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div className="order-1 md:order-2">
                            <h2 style={{ textAlign: 'left', color: 'var(--accent-purple)', marginBottom: '1rem' }}>Computer Vision</h2>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                                See the world through data. Our computer vision models excel at detection, segmentation, and tracking in real-time environments.
                            </p>
                            <ul style={{ color: 'var(--text-secondary)', listStyle: 'disc', paddingLeft: '1.5rem', marginBottom: '2rem' }}>
                                <li>Object Detection & Tracking</li>
                                <li>Facial Recognition Systems</li>
                                <li>Medical Imaging Analysis</li>
                            </ul>
                        </div>
                    </motion.div>

                </div>
            </section>
        </>
    );
}
