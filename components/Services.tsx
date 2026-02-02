'use client';

import { motion } from 'framer-motion';
import { Sparkles, Globe, Cpu, Gamepad2, Smartphone, Bot } from 'lucide-react';
import Link from 'next/link';

// Helper to map icon names to Lucide components if needed, or just render the component logic inside
const IconMap: any = {
    'gamepad': Gamepad2,
    'smartphone': Smartphone,
    'globe': Globe,
    'bot': Bot
};

export default function Services({ content }: { content: any }) {
    const servicesContent = content || { tag: "Services", list: [], exploreLabel: "Explore" };

    return (
        <section id="services" className="section bg-[var(--bg-deep)]">
            <div className="container relative z-10">
                <div className="text-center mb-16">
                    <span className="hero-tag">{servicesContent.tag}</span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-5xl font-bold mt-4"
                    >
                        Engineering The <span className="text-[var(--accent-cyan)]">Future</span>
                    </motion.h2>
                    <p className=" mx-auto mt-6 text-[var(--text-secondary)]" style={{ marginBottom: '2rem' }}>
                        {servicesContent.description}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" style={{ marginBottom: '2rem' }}>
                    {servicesContent.list && servicesContent.list.map((service: any, index: number) => {
                        // Determine Icon. In content.ts we have iconName.
                        // For now using the index or simple mapping if we want to restore Lucide icons dynamically.
                        // But for simplicity/speed let's just use the hardcoded ones if mappings fail, 
                        // or rely on the `iconName` from content.ts
                        const IconComponent = IconMap[service.iconName] || Globe;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="glass-card p-8 group hover:bg-white/[0.03] transition-all duration-300"
                            >
                                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-300" style={{ backgroundColor: service.bgColor }}>
                                    <IconComponent className="w-7 h-7" style={{ color: service.iconColor }} />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                                    {service.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

                <div className="text-center mt-12">
                    <Link href="/services" className="inline-flex items-center gap-2 text-[var(--accent-cyan)] hover:opacity-80 transition-opacity uppercase tracking-widest text-sm font-bold">
                        {servicesContent.exploreLabel} <Sparkles className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
