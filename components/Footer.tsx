import Link from 'next/link';

export default function Footer() {
    return (
        <footer style={{ padding: '4rem 0', borderTop: '1px solid var(--glass-border)', textAlign: 'center', background: 'var(--bg-deep)' }}>
            <div className="container">
                <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Orbit<span>Think</span></h2>
                <div className="social-links-container" style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2rem' }}>
                    <a href="#" className="social-link">LinkedIn</a>
                    <a href="#" className="social-link">Twitter/X</a>
                    <a href="#" className="social-link">GitHub</a>
                    <a href="#" className="social-link">Instagram</a>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    &copy; 2026 OrbitThink. All rights reserved. | <a href="mailto:contact@orbitthink.com" style={{ color: 'var(--accent-cyan)' }}>contact@orbitthink.com</a>
                </p>
            </div>
        </footer>
    );
}
