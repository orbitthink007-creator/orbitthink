"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="fixed bottom-18 right-6.5 z-[1002] p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[var(--accent-cyan)] shadow-lg hover:scale-110 transition-all duration-300 group"
            aria-label="Toggle Theme"
        >
            {theme === "dark" ? (
                <Sun size={24} className="group-hover:rotate-90 transition-transform duration-300" />
            ) : (
                <Moon size={24} className="group-hover:-rotate-90 transition-transform duration-300" />
            )}
        </button>
    );
}
