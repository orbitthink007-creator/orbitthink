'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 ${scrolled ? 'py-4 bg-[#050508]/85 backdrop-blur-xl border-b border-white/10' : 'py-10'}`}>
            <div className="container mx-auto px-8 flex justify-between items-center">
                <Link href="/" className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white flex items-center gap-2">
                    Orbit<span className="text-[var(--accent-cyan)]">Think</span>
                </Link>
                <nav>
                    <ul className="flex gap-12">
                        <li><Link href="/" className="text-sm uppercase tracking-widest text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] transition-colors relative group">Home
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[var(--accent-cyan)] transition-all duration-300 group-hover:w-full"></span>
                        </Link></li>
                        <li><a href="#services" onClick={(e) => handleScrollTo(e, 'services')} className="text-sm uppercase tracking-widest text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] transition-colors relative group">Services
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[var(--accent-cyan)] transition-all duration-300 group-hover:w-full"></span>
                        </a></li>
                        <li><a href="#process" onClick={(e) => handleScrollTo(e, 'process')} className="text-sm uppercase tracking-widest text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] transition-colors relative group">Process
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[var(--accent-cyan)] transition-all duration-300 group-hover:w-full"></span>
                        </a></li>
                        <li><a href="#portfolio" onClick={(e) => handleScrollTo(e, 'portfolio')} className="text-sm uppercase tracking-widest text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] transition-colors relative group">Portfolio
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[var(--accent-cyan)] transition-all duration-300 group-hover:w-full"></span>
                        </a></li>
                        <li><Link href="/about" className="text-sm uppercase tracking-widest text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] transition-colors relative group">About
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[var(--accent-cyan)] transition-all duration-300 group-hover:w-full"></span>
                        </Link></li>
                        <li><Link href="/contact" className="text-sm uppercase tracking-widest text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] transition-colors relative group">Contact
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[var(--accent-cyan)] transition-all duration-300 group-hover:w-full"></span>
                        </Link></li>
                    </ul>
                </nav>
                <Link href="/contact" className="btn btn-primary text-xs px-6 py-4">
                    Get Started
                </Link>
            </div>
        </header>
    );
}
