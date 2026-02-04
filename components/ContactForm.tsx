'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
// Using mailto link instead of server-side email

export default function ContactForm() {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const form = e.currentTarget as HTMLFormElement;
        const formData = new FormData(form);

        const name = formData.get('name')?.toString() ?? '';
        const company = formData.get('company')?.toString() ?? '';
        const email = formData.get('email')?.toString() ?? '';
        const details = formData.get('projectDetails')?.toString() ?? '';

        const subject = `OrbitThink: Project Inquiry from ${name || email}`;
        const body = `Name: ${name}\nCompany: ${company}\nEmail: ${email}\n\nProject Details:\n${details}`;

        const mailto = `mailto:orbitthink007@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        try {
            setStatus('loading');
            // Open user's default mail client with prefilled fields
            window.location.href = mailto;
            setStatus('success');
            setMessage('Opened your mail client. Please review and send the email.');
            form.reset();

            setTimeout(() => {
                setStatus('idle');
                setMessage('');
            }, 5000);
        } catch (err) {
            setStatus('error');
            setMessage('Unable to open mail client. Please email orbitthink007@gmail.com directly.');
        }
    };

    return (
        <motion.form
            className="glass-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            onSubmit={onSubmit}
        >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Name</label>
                    <input type="text"
                        name="name"
                        required
                        style={{ width: '100%', padding: '1rem', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--glass-border)', borderRadius: '8px', color: '#fff', outline: 'none', transition: 'border-color 0.3s' }}
                        onFocus={(e) => e.target.style.borderColor = 'var(--accent-cyan)'}
                        onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
                    />
                </div>
                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Company</label>
                    <input type="text"
                        name="company"
                        style={{ width: '100%', padding: '1rem', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--glass-border)', borderRadius: '8px', color: '#fff', outline: 'none', transition: 'border-color 0.3s' }}
                        onFocus={(e) => e.target.style.borderColor = 'var(--accent-cyan)'}
                        onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
                    />
                </div>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Email</label>
                <input type="email"
                    name="email"
                    required
                    style={{ width: '100%', padding: '1rem', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--glass-border)', borderRadius: '8px', color: '#fff', outline: 'none', transition: 'border-color 0.3s' }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--accent-cyan)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
                />
            </div>

            <div style={{ marginBottom: '2rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Project Details</label>
                <textarea rows={6}
                    name="projectDetails"
                    required
                    style={{ width: '100%', padding: '1rem', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--glass-border)', borderRadius: '8px', color: '#fff', outline: 'none', transition: 'border-color 0.3s' }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--accent-cyan)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
                ></textarea>
            </div>

            <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%', opacity: status === 'loading' ? 0.7 : 1, cursor: status === 'loading' ? 'wait' : 'pointer' }}
                disabled={status === 'loading'}
            >
                {status === 'loading' ? 'Initiating...' : 'Initiate Launch Sequence'}
            </button>

            {message && (
                <div style={{
                    marginTop: '1rem',
                    padding: '1rem',
                    borderRadius: '8px',
                    backgroundColor: status === 'success' ? 'rgba(0, 255, 0, 0.1)' : 'rgba(255, 0, 0, 0.1)',
                    border: `1px solid ${status === 'success' ? '#00ff00' : '#ff0000'}`,
                    color: status === 'success' ? '#00ff00' : '#ff0000',
                    textAlign: 'center'
                }}>
                    {message}
                </div>
            )}
        </motion.form>
    );
}
