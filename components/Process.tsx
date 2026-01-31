'use client';

import { motion } from 'framer-motion';

export default function Process() {
    return (
        <section id="process" className="section" style={{ background: 'linear-gradient(180deg, var(--bg-void) 0%, rgba(0, 243, 255, 0.03) 50%, var(--bg-void) 100%)' }}>
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    Mission Trajectory
                </motion.h2>
                <div className="process-container">
                    {/* Step 1 */}
                    <motion.div
                        className="process-step"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="step-icon">
                            <span className="step-number">01</span>
                        </div>
                        <h3>Ignition</h3>
                        <p>We analyze your data landscape and identify high-impact AI opportunities.</p>
                    </motion.div>

                    {/* Connector */}
                    <div className="step-connector"></div>

                    {/* Step 2 */}
                    <motion.div
                        className="process-step"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                    >
                        <div className="step-icon" style={{ borderColor: 'var(--accent-purple)', color: 'var(--accent-purple)', boxShadow: '0 0 15px rgba(188, 19, 254, 0.3)' }}>
                            <span className="step-number">02</span>
                        </div>
                        <h3 style={{ color: 'var(--accent-purple)' }}>Orbit</h3>
                        <p>Our engineers build and train custom models tailored to your specific parameters.</p>
                    </motion.div>

                    {/* Connector */}
                    <div className="step-connector"></div>

                    {/* Step 3 */}
                    <motion.div
                        className="process-step"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="step-icon" style={{ borderColor: 'var(--accent-pink)', color: 'var(--accent-pink)', boxShadow: '0 0 15px rgba(255, 0, 85, 0.3)' }}>
                            <span className="step-number">03</span>
                        </div>
                        <h3 style={{ color: 'var(--accent-pink)' }}>Velocity</h3>
                        <p>Deploy, monitor, and scale. We ensure your AI solution reaches escape velocity.</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
