import { SettingsData } from '../data/SettingsData';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
    const [settings, setSettings] = useState({});

    useEffect(() => {
        setTimeout(() => {
            setSettings(SettingsData.settings);
        }, 1000);
    }, []);

    const socials = settings?.extra || {};

    const socialLinks = [
        { key: 'facebook', label: 'Facebook', icon: 'f' },
        { key: 'twitter', label: 'Twitter', icon: 't' },
        { key: 'instagram', label: 'Instagram', icon: 'i' },
        { key: 'linkedin', label: 'LinkedIn', icon: 'in' },
    ];

    return (
        <footer className="bg-gray-900 text-gray-300 mt-20">
            <div className="max-w-6xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-white text-lg font-bold mb-4">Social Showcase</h3>
                        <p className="text-sm leading-relaxed">
                            Connecting communities through meaningful activities and projects.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                            <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
                            <li><Link to="/projects" className="hover:text-white transition-colors">Projects</Link></li>
                            <li><Link to="/member-request" className="hover:text-white transition-colors">Join Us</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white text-lg font-bold mb-4">Follow Us</h3>
                        <ul className="space-y-2 text-sm">
                            {socialLinks.map(({ key, label }) =>
                                socials[key] ? (
                                    <li key={key}>
                                        <a
                                            href={socials[key]}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:text-white transition-colors"
                                        >
                                            {label}
                                        </a>
                                    </li>
                                ) : null
                            )}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-800">
                <div className="max-w-6xl mx-auto px-4 py-4 text-center text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} Social Showcase. All rights reserved.
                </div>
            </div>
        </footer>
    );
}