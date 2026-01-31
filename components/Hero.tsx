'use client';

import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section id="home" className="hero">
            <div className="orbit-bg">
                <div className="orb orb-1"></div>
                <div className="orb orb-2">
                    <div className="planet"></div>
                </div>
                <div className="orb orb-3">
                    <div className="planet"></div>
                </div>
            </div>

            <motion.div
                className="container hero-content"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <span className="hero-tag">Next-Gen Artificial Intelligence</span>
                <h1>Pioneering the <span style={{ color: 'var(--accent-cyan)' }}>AI Frontier</span></h1>
                <p>OrbitThink engineers enterprise-grade Intelligence. We leverage Generative AI, Deep Learning, and Neural Networks to solve humanity's most complex challenges.</p>
                <div className="cta-group">
                    <a href="#services" className="btn btn-primary">Our Solutions</a>
                </div>
            </motion.div>
        </section>
    );
}
