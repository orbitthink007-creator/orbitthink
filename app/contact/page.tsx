'use client';

import ContactForm from '@/components/ContactForm';
import { motion } from 'framer-motion';

export default function Contact() {
    return (
        <section className="section" style={{ paddingTop: '150px', minHeight: '80vh' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <span className="hero-tag">Get In Touch</span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Start Your <span style={{ color: 'var(--accent-cyan)' }}>Transformation</span>
                    </motion.h1>
                </div>

                <ContactForm />
            </div>
        </section>
    );
}
