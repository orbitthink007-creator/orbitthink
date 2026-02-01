'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ content }: { content: any }) {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Fallback protection
    const navContent = content || { logo: { text: "Orbit", accent: "Think" }, links: [], cta: { label: "Get Started", href: "#" } };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith('/#')) {
            e.preventDefault();
            const id = href.replace('/#', '');
            if (window.location.pathname !== '/') {
                window.location.href = href;
                return;
            }
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                setMobileMenuOpen(false);
            }
        } else {
            setMobileMenuOpen(false);
        }
    };

    return (
        <header className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 ${scrolled ? 'py-6 bg-[#050508] border-b border-white/10 shadow-2xl' : 'py-8 md:py-10 bg-transparent'}`}>
            <div className="container mx-auto px-6 md:px-8 flex justify-between items-center">
                <Link href="/" className="font-[family-name:var(--font-heading)] text-xl md:text-2xl font-bold text-white flex items-center gap-2 z-[1001]">
                    {navContent.logo.text}<span className="text-[var(--accent-cyan)]">{navContent.logo.accent}</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:block">
                    <ul className="flex gap-8 lg:gap-12">
                        {navContent.links && navContent.links.map((link: any, index: number) => (
                            <li key={index}>
                                {link.href.startsWith('/#') ? (
                                    <a href={link.href} onClick={(e) => handleScrollTo(e, link.href)} className="text-sm uppercase tracking-widest text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] transition-colors relative group">
                                        {link.label}
                                        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[var(--accent-cyan)] transition-all duration-300 group-hover:w-full"></span>
                                    </a>
                                ) : (
                                    <Link href={link.href} className="text-sm uppercase tracking-widest text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] transition-colors relative group">
                                        {link.label}
                                        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[var(--accent-cyan)] transition-all duration-300 group-hover:w-full"></span>
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="hidden md:block">
                    <Link href={navContent.cta.href} className="btn btn-primary text-xs px-6 py-3" style={{ marginTop: '1rem' }}>
                        {navContent.cta.label}
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden z-[1001] text-white focus:outline-none"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {mobileMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: '100%' }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: '100%' }}
                            transition={{ type: "tween", duration: 0.3 }}
                            className="fixed inset-0 bg-[#050508] z-[1000] flex flex-col items-center justify-center space-y-8 md:hidden"
                        >
                            <nav>
                                <ul className="flex flex-col items-center gap-8">
                                    {navContent.links && navContent.links.map((link: any, index: number) => (
                                        <li key={index}>
                                            {link.href.startsWith('/#') ? (
                                                <a href={link.href} onClick={(e) => handleScrollTo(e, link.href)} className="text-xl uppercase tracking-widest text-white hover:text-[var(--accent-cyan)]">
                                                    {link.label}
                                                </a>
                                            ) : (
                                                <Link href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-xl uppercase tracking-widest text-white hover:text-[var(--accent-cyan)]">
                                                    {link.label}
                                                </Link>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                            <Link href={navContent.cta.href} onClick={() => setMobileMenuOpen(false)} className="btn btn-primary text-sm px-8 py-3" style={{ marginTop: '1rem', paddingTop: '1rem' }}>
                                {navContent.cta.label}
                            </Link>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
}
