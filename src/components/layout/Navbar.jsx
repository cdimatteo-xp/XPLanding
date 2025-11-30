import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Logo } from './Logo';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Inicio', path: '/', hash: '' },
        { name: 'Academia', path: '/academia', hash: '' },
        { name: 'Software', path: '/productos', hash: '' },
    ];

    const handleNavigation = (e, path, hash) => {
        e.preventDefault();
        setIsOpen(false);

        if (path !== '/') {
            navigate(path);
            window.scrollTo(0, 0);
            return;
        }

        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                if (hash) {
                    const element = document.getElementById(hash.replace('#', ''));
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                } else {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            }, 100);
        } else {
            if (hash) {
                const element = document.getElementById(hash.replace('#', ''));
                if (element) element.scrollIntoView({ behavior: 'smooth' });
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }
    };

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 shadow-md py-2' : 'bg-white/90 py-4'} backdrop-blur-md`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex items-center gap-2 cursor-pointer" onClick={(e) => handleNavigation(e, '/', '')}>
                        <div>
                            <Logo />
                            <span className="text-xs text-sky-600 font-semibold tracking-widest uppercase">Tecnología y Conocimiento</span>
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex space-x-6 items-center">
                        {navLinks.map((link) => (
                            <a 
                                key={link.name} 
                                href={link.path + link.hash} 
                                onClick={(e) => handleNavigation(e, link.path, link.hash)}
                                className="text-slate-600 hover:text-blue-600 font-medium transition text-sm uppercase tracking-wide cursor-pointer"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a 
                            href="/contacto" 
                            onClick={(e) => handleNavigation(e, '/contacto', '')}
                            className="px-5 py-2.5 bg-slate-900 text-white rounded-full font-medium hover:bg-blue-600 transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm cursor-pointer"
                        >
                            Contactar
                        </a>
                    </div>

                    {/* Mobile Button */}
                    <div className="lg:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 hover:text-slate-900 focus:outline-none">
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full h-screen overflow-y-auto pb-20">
                    <div className="px-4 pt-2 pb-6 space-y-1 shadow-lg">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.path + link.hash}
                                className="block px-3 py-4 text-lg font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 border-b border-gray-50"
                                onClick={(e) => handleNavigation(e, link.path, link.hash)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="/contacto"
                            className="block px-3 py-4 text-lg font-medium text-blue-600 font-bold hover:bg-slate-50 mt-4"
                            onClick={(e) => handleNavigation(e, '/contacto', '')}
                        >
                            Contactar Ahora
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
