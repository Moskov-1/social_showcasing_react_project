import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '/activities', label: 'Activities' },
    { to: '/blogs', label: 'Blogs' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/member-request', label: 'Join Us' },
];

export function Navbar() {
    const location = useLocation();
    const [open, setOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
            <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
                <Link to="/" className="text-xl font-bold text-blue-600 tracking-tight">
                    Social Showcase
                </Link>

                <button
                    className="md:hidden p-2 rounded-lg hover:bg-gray-100"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {open ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>

                <ul className="hidden md:flex items-center space-x-1">
                    {navLinks.map(({ to, label }) => (
                        <li key={to}>
                            <Link
                                to={to}
                                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                                    location.pathname === to
                                        ? 'bg-blue-50 text-blue-600'
                                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                                }`}
                            >
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {open && (
                <div className="md:hidden border-t border-gray-200 bg-white">
                    <ul className="px-4 py-2 space-y-1">
                        {navLinks.map(({ to, label }) => (
                            <li key={to}>
                                <Link
                                    to={to}
                                    onClick={() => setOpen(false)}
                                    className={`block px-3 py-2 rounded-lg text-sm font-medium ${
                                        location.pathname === to
                                            ? 'bg-blue-50 text-blue-600'
                                            : 'text-gray-600 hover:bg-gray-50'
                                    }`}
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
}