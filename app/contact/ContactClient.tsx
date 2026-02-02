'use client';

import ContactForm from '@/components/ContactForm';
import { motion } from 'framer-motion';

export default function ContactClient({ content }: { content: any }) {
    const contactPage = content?.contactPage || { tag: "Get In Touch", title: "Start Your", titleAccent: "Transformation" };

    return (
        <section className="section pt-32 md:pt-40 min-h-[80vh]">
            <div className="container" style={{ maxWidth: '800px' }}>
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <span className="hero-tag">{contactPage.tag}</span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {contactPage.title} <span style={{ color: 'var(--accent-cyan)' }}>{contactPage.titleAccent}</span>
                    </motion.h1>
                </div>

                <ContactForm />
            </div>
        </section>
    );
}
