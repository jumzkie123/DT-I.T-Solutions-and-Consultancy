import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';

interface NavbarProps {
    onNavigate: (page: string, category?: string, section?: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [solutionsOpen, setSolutionsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const closeMenu = () => {
        setMenuOpen(false);
        setSolutionsOpen(false);
    };

    const handleNavigate = (page: string, cat?: string, section?: string) => {
        onNavigate(page, cat, section);
        closeMenu();
    };

    const solutionCategories = [
        { id: 'accounting', name: 'Accounting & Inventory' },
        { id: 'payroll', name: 'Payroll & HRIS' },
        { id: 'customized', name: 'Customized Systems' },
    ];

    return (
        <>
            <nav className={`fixed w-full z-50 transition-all duration-300 bg-primary ${scrolled ? 'shadow-lg shadow-black/30' : ''}`}>
                <div className="max-w-[1700px] mx-auto px-6 md:px-12 lg:px-20">
                    <div className="flex justify-between items-center h-20 lg:h-28">
                        {/* Logo */}
                        <div className="relative flex shrink-0 items-center cursor-pointer" onClick={() => handleNavigate('home')}>
                            <img
                                src={logo}
                                alt="DreamTeam I.T. Logo"
                                className="h-28 lg:h-48 w-auto absolute top-1/2 -translate-y-1/2 left-0 max-w-none"
                            />
                            {/* Spacer to maintain layout width since img is absolute */}
                            <div className="h-20 lg:h-28 w-48 lg:w-72"></div>
                        </div>

                        {/* Desktop Links */}
                        <div className="hidden lg:flex items-center justify-center flex-1 space-x-8 xl:space-x-12">
                            <button onClick={() => handleNavigate('home')} className="navbar-link-dark">Home</button>
                            <button onClick={() => handleNavigate('home', undefined, 'about')} className="navbar-link-dark">About Us</button>

                            {/* Solutions Dropdown */}
                            <div
                                className="relative group"
                                onMouseEnter={() => setSolutionsOpen(true)}
                                onMouseLeave={() => setSolutionsOpen(false)}
                            >
                                <button
                                    className="navbar-link-dark flex items-center gap-1"
                                    onClick={() => handleNavigate('home')}
                                >
                                    Our Solutions
                                    <svg className={`h-4 w-4 transition-transform duration-300 ${solutionsOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                {/* Dropdown Menu */}
                                <div className={`absolute top-full left-0 w-64 bg-white shadow-2xl transition-all duration-300 origin-top transform ${solutionsOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                                    <div className="h-1 bg-blue-500 w-full"></div>
                                    <div className="py-2">
                                        {solutionCategories.map((cat) => (
                                            <button
                                                key={cat.id}
                                                onClick={() => handleNavigate('solutions', cat.id)}
                                                className="w-full text-left px-6 py-4 text-sm font-medium text-gray-700 hover:bg-slate-50 hover:text-primary border-b border-gray-100 last:border-0 transition-colors uppercase tracking-tight"
                                            >
                                                {cat.name}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <button onClick={() => handleNavigate('home', undefined, 'news')} className="navbar-link-dark">News and Updates</button>
                            <button onClick={() => handleNavigate('home', undefined, 'testimonials')} className="navbar-link-dark">Testimonials</button>
                            <button onClick={() => handleNavigate('home', undefined, 'contact')} className="navbar-link-dark">Contact</button>
                        </div>

                        {/* Desktop Socials & Button */}
                        <div className="hidden lg:flex items-center space-x-6">
                            <div className="flex items-center space-x-4">
                                <a href="https://web.facebook.com/DreamTeamITSC/" target="_blank" rel="noreferrer" className="text-white/70 hover:text-white transition-colors">
                                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                                </a>
                                <a href="https://dtitsolutions.blogspot.com/" target="_blank" rel="noreferrer" className="text-white/70 hover:text-white transition-colors">
                                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M21.976 24H2.026C.9 24 0 23.1 0 21.976V2.026C0 .9.9 0 2.026 0h19.95C23.1 0 24 .9 24 2.026v19.95C24 23.1 23.1 24 21.976 24zM13.537 5.4H8.376C6.74 5.4 5.4 6.74 5.4 8.376v7.248C5.4 17.26 6.74 18.6 8.376 18.6h7.248c1.636 0 2.976-1.34 2.976-2.976v-4.672a.862.862 0 00-.862-.862h-1.427a.862.862 0 00-.862.862v3.75a.862.862 0 01-.862.862h-4.18a.862.862 0 01-.862-.862V9.238c0-.476.386-.862.862-.862h3.13a.862.862 0 00.862-.862V6.262A.862.862 0 0013.537 5.4z" /></svg>
                                </a>
                            </div>
                            <button onClick={() => handleNavigate('home', undefined, 'contact-form')} className="bg-white text-primary px-6 py-3 rounded-sm text-sm font-black uppercase tracking-widest hover:bg-white/90 transition-all">
                                Book a Demo
                            </button>
                        </div>

                        {/* Mobile Hamburger */}
                        <button className="lg:hidden text-white p-2 focus:outline-none" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
                            {menuOpen ? (
                                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                            ) : (
                                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Dropdown Menu */}
                {menuOpen && (
                    <div className="lg:hidden bg-primary border-t border-white/10 shadow-lg">
                        <div className="px-6 py-6 space-y-5">
                            <button onClick={() => handleNavigate('home')} className="block text-sm font-black text-white uppercase tracking-widest border-b-2 border-white pb-1 w-fit">Home</button>
                            <button onClick={() => handleNavigate('home', undefined, 'about')} className="block text-sm font-black text-white/70 hover:text-white uppercase tracking-widest transition-colors">About Us</button>

                            <div className="space-y-4 pt-2">
                                <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] block">Our Solutions</span>
                                {solutionCategories.map(cat => (
                                    <button
                                        key={cat.id}
                                        onClick={() => handleNavigate('solutions', cat.id)}
                                        className="block text-sm font-medium text-white/70 hover:text-white uppercase tracking-widest pl-4 transition-colors"
                                    >
                                        {cat.name}
                                    </button>
                                ))}
                            </div>

                            <button onClick={() => handleNavigate('home', undefined, 'expertise')} className="block text-sm font-black text-white/70 hover:text-white uppercase tracking-widest transition-colors w-full text-left">Our Expertise</button>
                            <button onClick={() => handleNavigate('home', undefined, 'news')} className="block text-sm font-black text-white/70 hover:text-white uppercase tracking-widest transition-colors w-full text-left">News and Updates</button>
                            <button onClick={() => handleNavigate('home', undefined, 'testimonials')} className="block text-sm font-black text-white/70 hover:text-white uppercase tracking-widest transition-colors w-full text-left">Testimonials</button>
                            <button onClick={() => handleNavigate('home', undefined, 'values')} className="block text-sm font-black text-white/70 hover:text-white uppercase tracking-widest transition-colors w-full text-left">Core Values</button>
                            <button onClick={() => handleNavigate('home', undefined, 'contact')} className="block text-sm font-black text-white/70 hover:text-white uppercase tracking-widest transition-colors w-full text-left">Contact</button>
                            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <a href="https://web.facebook.com/DreamTeamITSC/" target="_blank" rel="noreferrer" className="text-white/70 hover:text-white">
                                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                                    </a>
                                    <a href="https://dtitsolutions.blogspot.com/" target="_blank" rel="noreferrer" className="text-white/70 hover:text-white">
                                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M21.976 24H2.026C.9 24 0 23.1 0 21.976V2.026C0 .9.9 0 2.026 0h19.95C23.1 0 24 .9 24 2.026v19.95C24 23.1 23.1 24 21.976 24zM13.537 5.4H8.376C6.74 5.4 5.4 6.74 5.4 8.376v7.248C5.4 17.26 6.74 18.6 8.376 18.6h7.248c1.636 0 2.976-1.34 2.976-2.976v-4.672a.862.862 0 00-.862-.862h-1.427a.862.862 0 00-.862.862v3.75a.862.862 0 01-.862.862h-4.18a.862.862 0 01-.862-.862V9.238c0-.476.386-.862.862-.862h3.13a.862.862 0 00.862-.862V6.262A.862.862 0 0013.537 5.4z" /></svg>
                                    </a>
                                </div>
                                <button onClick={() => handleNavigate('home', undefined, 'contact-form')} className="bg-white text-primary px-6 py-3 rounded-sm text-xs font-black uppercase tracking-widest hover:bg-white/90 transition-all">
                                    Book a Demo
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
};

export default Navbar;

