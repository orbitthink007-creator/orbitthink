'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Portfolio({ content }: { content: any }) {
    const portfolioContent = content || { tag: "Mission Logs", title: "Mission Logs", subtitle: "...", viewProjectLabel: "View Mission", projects: [] };

    return (
        <section className="section">
            <div className="container">
                <div className="text-center mb-16">
                    <span className="hero-tag">{portfolioContent.tag}</span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-5xl font-bold mt-4 mb-6"
                    >
                        {portfolioContent.title}
                    </motion.h2>
                    <p className="max-w-2xl mx-auto text-[var(--text-secondary)]">
                        {portfolioContent.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {portfolioContent.projects && portfolioContent.projects.map((project: any, index: number) => (
                        <motion.div
                            key={index}
                            className="glass-card relative overflow-hidden group rounded-2xl p-6 hover:bg-white/[0.03] transition-all duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-3xl">{project.icon}</span>
                                <span
                                    className="text-xs font-bold px-2 py-1 rounded"
                                    style={project.tagStyle || { color: project.tagColor, border: `1px solid ${project.tagColor}` }}
                                >
                                    {project.tag}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                            <p className="text-sm text-[var(--text-secondary)] mb-6 line-clamp-3">
                                {project.description}
                            </p>

                            <div className="mt-auto">
                                <Link href="/portfolio" className="text-sm font-bold tracking-wider uppercase transition-colors hover:opacity-80 flex items-center gap-2"
                                    style={project.btnStyle || { color: project.tagColor }}>
                                    {portfolioContent.viewProjectLabel} <span>→</span>
                                </Link>
                            </div>

                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                                style={{ background: project.gradient }}
                            ></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
