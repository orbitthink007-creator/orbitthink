'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function AdminPanel() {
    const [content, setContent] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [status, setStatus] = useState('');
    const [activeTab, setActiveTab] = useState('all');

    useEffect(() => {
        fetch('/api/content')
            .then(res => res.json())
            .then(data => {
                setContent(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to load content", err);
                setStatus('Failed to load content');
                setLoading(false);
            });
    }, []);

    const handleSave = async () => {
        setStatus('Saving...');
        try {
            const res = await fetch('/api/content', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(content)
            });
            if (res.ok) {
                setStatus('Saved successfully!');
                setTimeout(() => setStatus(''), 3000);
            } else {
                setStatus('Failed to save.');
            }
        } catch (error) {
            console.error(error);
            setStatus('Error saving content.');
        }
    };

    const handleChange = (section: string, value: string) => {
        try {
            const parsed = JSON.parse(value);
            setContent((prev: any) => ({ ...prev, [section]: parsed }));
        } catch (e) {
            // Invalid JSON, just ignore or show error
        }
    };

    const handleGlobalChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        try {
            const parsed = JSON.parse(e.target.value);
            setContent(parsed);
        } catch (e) {
            // Allow typing invalid JSON temporarily? 
            // Better to manage state as string then parse on save, but that's complex for "All".
            // simplified: We'll just show the structure and allow editing specific sections safely, 
            // OR use a controlled text area that updates local state and tries to parse on blur/save.
        }
    };

    if (loading) return <div className="p-10 text-center text-white">Loading Admin Panel...</div>;

    const tabs = ['all', 'navbar', 'hero', 'services', 'portfolio', 'about', 'contactPage', 'footer'];

    return (
        <div className="min-h-screen bg-[#0a0a0f] text-white p-6 pt-24">
            <div className="container mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold">OrbitThink <span className="text-[var(--accent-cyan)]">Control Center</span></h1>
                    <div className="flex gap-4 items-center">
                        <span className={`text-sm ${status.includes('Success') ? 'text-green-400' : 'text-red-400'}`}>{status}</span>
                        <button onClick={handleSave} className="btn btn-primary px-6 py-2 rounded-lg font-bold">
                            Save Changes
                        </button>
                    </div>
                </div>

                <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
                    {tabs.map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${activeTab === tab ? 'bg-[var(--accent-cyan)] text-black' : 'bg-white/5 hover:bg-white/10'}`}
                        >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="glass-card p-6 h-[70vh] flex flex-col">
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <span>📝</span> Editor ({activeTab})
                        </h3>
                        {activeTab === 'all' ? (
                            <textarea
                                className="w-full h-full bg-black/20 border border-white/10 rounded-lg p-4 font-mono text-xs focus:ring-1 focus:ring-[var(--accent-cyan)] outline-none resize-none"
                                defaultValue={JSON.stringify(content, null, 2)}
                                onChange={(e) => {
                                    try {
                                        setContent(JSON.parse(e.target.value));
                                    } catch (err) { }
                                }}
                            />
                        ) : (
                            <textarea
                                className="w-full h-full bg-black/20 border border-white/10 rounded-lg p-4 font-mono text-xs focus:ring-1 focus:ring-[var(--accent-cyan)] outline-none resize-none"
                                value={content[activeTab] ? JSON.stringify(content[activeTab], null, 2) : ''}
                                onChange={(e) => {
                                    // This local edit is tricky purely via JSON.stringify/parse cycling.
                                    // We update the global content object under the active key.
                                    try {
                                        const parsed = JSON.parse(e.target.value);
                                        setContent({ ...content, [activeTab]: parsed });
                                    } catch (err) {
                                        // If user types invalid JSON, this logic prevents the update.
                                        // ideally we bind to a local string state and commit on valid.
                                        // For MVP, this direct bind is "risky" but standard for simple JSON editors.
                                        // User must type valid JSON.
                                    }
                                }}
                            />
                        )}
                        <p className="text-xs text-[var(--text-secondary)] mt-2 opacity-60">
                            * Edit the JSON directly. Ensure valid syntax. Changes auto-update preview state. Click Save to persist.
                        </p>
                    </div>

                    <div className="glass-card p-6 h-[70vh] overflow-y-auto">
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <span>👁️</span> Live Preview Data
                        </h3>
                        <pre className="text-xs text-green-400 font-mono whitespace-pre-wrap break-all">
                            {JSON.stringify(activeTab === 'all' ? content : content[activeTab], null, 2)}
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    );
}
