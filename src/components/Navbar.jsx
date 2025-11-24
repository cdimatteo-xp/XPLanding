import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Inicio', href: '#inicio' },
        { name: 'Empresa', href: '#nosotros' },
        { name: 'Servicios', href: '#servicios' },
        { name: 'Sistemas', href: '#sistemas' },
        { name: 'Novedades', href: '#novedades' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 shadow-md py-2' : 'bg-white/90 py-4'} backdrop-blur-md`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <div>
                            <img src="/XPLanding/x_project_sa.png" alt="X Project Logo" style={{ width: '12rem', height: 'auto' }} />
                            <span className="text-xs text-sky-600 font-semibold tracking-widest uppercase">Tecnología y Conocimiento</span>
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex space-x-6 items-center">
                        {navLinks.map((link) => (
                            <a key={link.name} href={link.href} className="text-slate-600 hover:text-blue-600 font-medium transition text-sm uppercase tracking-wide">
                                {link.name}
                            </a>
                        ))}
                        <a href="#contacto" className="px-5 py-2.5 bg-slate-900 text-white rounded-full font-medium hover:bg-blue-600 transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm">
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
                                href={link.href}
                                className="block px-3 py-4 text-lg font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 border-b border-gray-50"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="#contacto"
                            className="block px-3 py-4 text-lg font-medium text-blue-600 font-bold hover:bg-slate-50 mt-4"
                            onClick={() => setIsOpen(false)}
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
