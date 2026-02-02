'use client';

import { motion } from 'framer-motion';

export default function Hero({ content }: { content: any }) {
    // Fallback
    const heroContent = content || {
        tag: "Defying The Laws of Software",
        title: "Orbit",
        titleAccent: "Think",
        description: "We help startups turn ideas into scalable web & mobile products — fast.",
        cta: "Book Free Strategy Call",
        ctaId: "services",
        number: "+923394054520"
    };
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
                <span className="hero-tag">{heroContent.tag}</span>
                <h1>{heroContent.title}<span style={{ color: 'var(--accent-cyan)' }}>{heroContent.titleAccent}</span></h1>
                <p>{heroContent.description}</p>
                <div className="cta-group">
                    <a href={`https://wa.me/${heroContent.number ? heroContent.number : "+923394054520"}`} className="btn btn-primary">{heroContent.cta}</a>
                </div>
            </motion.div>
        </section>
    );
}
