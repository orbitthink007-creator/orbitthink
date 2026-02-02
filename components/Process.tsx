'use client';

import { motion } from 'framer-motion';

export default function Process({ content }: { content: any }) {
    // Fallback content
    const processContent = content || {
        title: "Mission Trajectory",
        steps: [
            {
                number: "01",
                title: "Ignition",
                description: "We analyze your data landscape and identify high-impact AI opportunities.",
                color: "var(--accent-cyan)",
                shadow: "rgba(0, 243, 255, 0.3)"
            },
            {
                number: "02",
                title: "Orbit",
                description: "Our engineers build and train custom models tailored to your specific parameters.",
                color: "var(--accent-purple)",
                shadow: "rgba(188, 19, 254, 0.3)"
            },
            {
                number: "03",
                title: "Velocity",
                description: "Deploy, monitor, and scale. We ensure your AI solution reaches escape velocity.",
                color: "var(--accent-pink)",
                shadow: "rgba(255, 0, 85, 0.3)"
            }
        ]
    };

    return (
        <section id="process" className="section" style={{ background: 'linear-gradient(180deg, var(--bg-void) 0%, rgba(0, 243, 255, 0.03) 50%, var(--bg-void) 100%)' }}>
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    {processContent.title}
                </motion.h2>
                <div className="process-container">
                    {processContent.steps && processContent.steps.map((step: any, index: number) => (
                        <div key={index} style={{ display: 'contents' }}>
                            <motion.div
                                className="process-step"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                            >
                                <div className="step-icon" style={{ borderColor: step.color, color: step.color, boxShadow: `0 0 15px ${step.shadow || 'rgba(255, 255, 255, 0.1)'}` }}>
                                    <span className="step-number">{step.number}</span>
                                </div>
                                <h3 style={{ color: step.color }}>{step.title}</h3>
                                <p>{step.description}</p>
                            </motion.div>

                            {/* Connector (don't show after last item) */}
                            {index < processContent.steps.length - 1 && (
                                <div className="step-connector"></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
