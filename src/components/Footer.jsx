import {SettingsData} from '../data/SettingsData';
import { useEffect, useState } from 'react';

export function Footer(){
    const [settings, setSettings] = useState({});
    useEffect(() => {
        setTimeout(() => {
            setSettings(SettingsData.settings);
        }, 1000);
    }, []);

    return (
        <footer className="bg-gray-800 text-white py-6 mt-12">
            <ul>
                <li className="mb-2"><a href="/about" className="hover:underline">{settings['extra'] && settings['extra']['facebook']}</a></li>
                <li className="mb-2"><a href="/about" className="hover:underline">{settings['extra'] && settings['extra']['twitter']}</a></li>
                <li className="mb-2"><a href="/about" className="hover:underline">{settings['extra'] && settings['extra']['instagram']}</a></li>
                <li className="mb-2"><a href="/about" className="hover:underline">{settings['extra'] && settings['extra']['linkedin']}</a></li>
            </ul>
            <div className="max-w-6xl mx-auto px-4 text-center">
                <p className="text-sm">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
            </div>
        </footer>
    );
}