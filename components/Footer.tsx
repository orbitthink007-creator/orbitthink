import Link from 'next/link';
import { content } from '@/app/data/content';

export default function Footer() {
    return (
        <footer style={{ padding: '4rem 0', borderTop: '1px solid var(--glass-border)', textAlign: 'center', background: 'var(--bg-deep)' }}>
            <div className="container">
                <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>{content.footer.logo.text}<span>{content.footer.logo.accent}</span></h2>
                <div className="social-links-container" style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2rem' }}>
                    {content.footer.socials.map((social, index) => (
                        <a key={index} href={social.href} className="social-link">{social.label}</a>
                    ))}
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    &copy; 2026 {content.footer.logo.text}{content.footer.logo.accent}. All rights reserved. | <a href={`mailto:${content.footer.contactEmail}`} style={{ color: 'var(--accent-cyan)' }}>{content.footer.contactEmail}</a>
                </p>
            </div>
        </footer>
    );
}
