import React from 'react';
import { Facebook, Twitter, Linkedin, Award, Github } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-950 text-white border-t border-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <img src="/x_project_sa_dark.png" alt="X Project Logo" style={{ width: '12rem', height: 'auto' }} />
                        </div>
                        <p className="text-slate-400 text-sm mb-4">
                            Tecnología y conocimiento aplicados al crecimiento de su negocio.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition"><Facebook size={16} /></a>
                            <a href="#" className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-400 hover:text-white transition"><Twitter size={16} /></a>
                            <a href="https://ar.linkedin.com/company/x-project-sa" className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-700 hover:text-white transition"><Linkedin size={16} /></a>
                            <a href="https://github.com/X-Project-SA" className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-gray-700 hover:text-white transition"><Github size={16} /></a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-slate-300 tracking-wider uppercase mb-4">Soluciones</h3>
                        <ul className="space-y-3 text-sm text-slate-400">
                            <li><a href="#sistemas" className="hover:text-white transition">e-ACM.core</a></li>
                            <li><a href="#sistemas" className="hover:text-white transition">e-CML.core</a></li>
                            <li><a href="#sistemas" className="hover:text-white transition">e-FIDUCIA.core</a></li>
                            <li><a href="#sistemas" className="hover:text-white transition">e-ACR.core</a></li>
                        </ul>
                        
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-slate-300 tracking-wider uppercase mb-4">Empresa</h3>
                        <ul className="space-y-3 text-sm text-slate-400">
                            <li><a href="#" className="hover:text-white transition">Sobre Nosotros</a></li>
                            <li><a href="#" className="hover:text-white transition">Alianzas</a></li>
                            <li><a href="#" className="hover:text-white transition">Trabaja con nosotros</a></li>
                            <li><a href="#" className="hover:text-white transition">Novedades</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-slate-300 tracking-wider uppercase mb-4">Legal</h3>
                        <ul className="space-y-3 text-sm text-slate-400">
                            <li><a href="#" className="hover:text-white transition">Privacidad</a></li>
                            <li><a href="#" className="hover:text-white transition">Términos</a></li>
                            <li className="flex items-center gap-2"><Award size={14} className="text-blue-500" /> IRAM Certificado</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-slate-500 text-sm">
                        &copy; 2025 X Project S.A. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
