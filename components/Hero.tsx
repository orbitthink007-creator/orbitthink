'use client';

import { motion } from 'framer-motion';
import { content } from '@/app/data/content';

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
                className="container hero-content px-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <span className="hero-tag">{content.hero.tag}</span>
                <h1>{content.hero.title}<span style={{ color: 'var(--accent-cyan)' }}>{content.hero.titleAccent}</span></h1>
                <p>{content.hero.description}</p>
                <div className="cta-group">
                    <a href={`#${content.hero.ctaId}`} className="btn btn-primary">{content.hero.cta}</a>
                </div>
            </motion.div>
        </section>
    );
}
