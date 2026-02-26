import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';

const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const closeMenu = () => setMenuOpen(false);

    return (
        <>
            <nav className={`fixed w-full z-50 transition-all duration-300 bg-primary ${scrolled ? 'shadow-lg shadow-black/30' : ''}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20 lg:h-28">
                        {/* Logo */}
                        <div className="flex shrink-0 items-center">
                            <img src={logo} alt="DreamTeam I.T. Logo" className="h-12 lg:h-20 w-auto" />
                            <div className="ml-3 flex flex-col">
                                <span className="text-lg lg:text-3xl font-black tracking-tighter text-white leading-tight">DREAMTEAM</span>
                                <span className="text-[8px] lg:text-xs font-bold text-white/70 tracking-[0.15em] uppercase">I.T. SOLUTIONS & CONSULTANCY</span>
                            </div>
                        </div>

                        {/* Desktop Links */}
                        <div className="hidden lg:flex items-center justify-center flex-1 space-x-10">
                            <a href="#" className="navbar-link-dark border-b-2 border-white">Home</a>
                            <a href="#about" className="navbar-link-dark">About Us</a>
                            <a href="#solutions" className="navbar-link-dark">Our Solutions</a>
                            <a href="#contact" className="navbar-link-dark">Contact</a>
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
                            <a href="#contact-form" className="bg-white text-primary px-6 py-3 rounded-sm text-sm font-black uppercase tracking-widest hover:bg-white/90 transition-all">
                                Book a Demo
                            </a>
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
                            <a href="#" onClick={closeMenu} className="block text-sm font-black text-white uppercase tracking-widest border-b-2 border-white pb-1 w-fit">Home</a>
                            <a href="#about" onClick={closeMenu} className="block text-sm font-black text-white/70 hover:text-white uppercase tracking-widest transition-colors">About Us</a>
                            <a href="#solutions" onClick={closeMenu} className="block text-sm font-black text-white/70 hover:text-white uppercase tracking-widest transition-colors">Our Solutions</a>
                            <a href="#expertise" onClick={closeMenu} className="block text-sm font-black text-white/70 hover:text-white uppercase tracking-widest transition-colors">Our Expertise</a>
                            <a href="#values" onClick={closeMenu} className="block text-sm font-black text-white/70 hover:text-white uppercase tracking-widest transition-colors">Core Values</a>
                            <a href="#contact" onClick={closeMenu} className="block text-sm font-black text-white/70 hover:text-white uppercase tracking-widest transition-colors">Contact</a>
                            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <a href="https://web.facebook.com/DreamTeamITSC/" target="_blank" rel="noreferrer" className="text-white/70 hover:text-white">
                                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                                    </a>
                                    <a href="https://dtitsolutions.blogspot.com/" target="_blank" rel="noreferrer" className="text-white/70 hover:text-white">
                                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M21.976 24H2.026C.9 24 0 23.1 0 21.976V2.026C0 .9.9 0 2.026 0h19.95C23.1 0 24 .9 24 2.026v19.95C24 23.1 23.1 24 21.976 24zM13.537 5.4H8.376C6.74 5.4 5.4 6.74 5.4 8.376v7.248C5.4 17.26 6.74 18.6 8.376 18.6h7.248c1.636 0 2.976-1.34 2.976-2.976v-4.672a.862.862 0 00-.862-.862h-1.427a.862.862 0 00-.862.862v3.75a.862.862 0 01-.862.862h-4.18a.862.862 0 01-.862-.862V9.238c0-.476.386-.862.862-.862h3.13a.862.862 0 00.862-.862V6.262A.862.862 0 0013.537 5.4z" /></svg>
                                    </a>
                                </div>
                                <a href="#contact-form" onClick={closeMenu} className="bg-white text-primary px-6 py-3 rounded-sm text-xs font-black uppercase tracking-widest hover:bg-white/90 transition-all">
                                    Book a Demo
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
};

export default Navbar;
