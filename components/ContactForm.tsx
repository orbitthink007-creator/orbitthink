'use client';

import { motion } from 'framer-motion';

export default function ContactForm() {
    return (
        <motion.form
            className="glass-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Name</label>
                    <input type="text"
                        style={{ width: '100%', padding: '1rem', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--glass-border)', borderRadius: '8px', color: '#fff', outline: 'none', transition: 'border-color 0.3s' }}
                        onFocus={(e) => e.target.style.borderColor = 'var(--accent-cyan)'}
                        onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
                    />
                </div>
                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Company</label>
                    <input type="text"
                        style={{ width: '100%', padding: '1rem', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--glass-border)', borderRadius: '8px', color: '#fff', outline: 'none', transition: 'border-color 0.3s' }}
                        onFocus={(e) => e.target.style.borderColor = 'var(--accent-cyan)'}
                        onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
                    />
                </div>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Email</label>
                <input type="email"
                    style={{ width: '100%', padding: '1rem', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--glass-border)', borderRadius: '8px', color: '#fff', outline: 'none', transition: 'border-color 0.3s' }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--accent-cyan)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
                />
            </div>

            <div style={{ marginBottom: '2rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Project Details</label>
                <textarea rows={6}
                    style={{ width: '100%', padding: '1rem', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--glass-border)', borderRadius: '8px', color: '#fff', outline: 'none', transition: 'border-color 0.3s' }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--accent-cyan)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
                ></textarea>
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Initiate Launch Sequence</button>
        </motion.form>
    );
}
