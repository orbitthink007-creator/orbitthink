import Link from 'next/link';

export default function Footer({ content }: { content: any }) {
    const footerContent = content || { logo: { text: "Orbit", accent: "Think" }, socials: [], contactEmail: "contact@orbitthink.com" };

    return (
        <footer style={{ padding: '4rem 0', borderTop: '1px solid var(--glass-border)', textAlign: 'center', background: 'var(--bg-deep)' }}>
            <div className="container">
                <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>{footerContent.logo.text}<span>{footerContent.logo.accent}</span></h2>
                <div className="social-links-container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', marginBottom: '2rem' }}>
                    {footerContent.socials && footerContent.socials.map((social: any, index: number) => (
                        <a key={index} href={social.href} className="social-link">{social.label}</a>
                    ))}
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    &copy; 2026 {footerContent.logo.text}{footerContent.logo.accent}. All rights reserved. | <a href={`mailto:${footerContent.contactEmail}`} style={{ color: 'var(--accent-cyan)' }}>{footerContent.contactEmail}</a>
                </p>
            </div>
        </footer>
    );
}
