import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Briefcase, ArrowRight, Shield, BookOpen, UserCircle } from 'lucide-react';
import { Logo } from '../layout/Logo';

const SimpleHome = () => {
    return (
        <div className="min-h-screen bg-slate-900 flex flex-col md:flex-row font-sans relative">
            
            {/* Client Portal Access */}
            <div className="absolute top-8 right-8 z-30">
                <Link 
                    to="/suscripcion" 
                    className="flex items-center gap-2 px-5 py-2.5 bg-slate-900/50 hover:bg-slate-800/80 backdrop-blur-md border border-slate-700 rounded-full text-white font-medium transition-all hover:scale-105 hover:border-blue-500/50 shadow-lg"
                >
                    <UserCircle size={20} className="text-blue-400" />
                    <span>Portal Clientes</span>
                </Link>
            </div>

            {/* Left Side: Academia */}
            <div className="flex-1 relative group overflow-hidden border-b md:border-b-0 md:border-r border-slate-800">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-slate-900 z-10 group-hover:bg-blue-900/30 transition-colors duration-500"></div>
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20 group-hover:scale-105 transition-transform duration-700"></div>
                
                <div className="relative z-20 h-full flex flex-col justify-center p-12 md:p-24">
                    <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-900/50 group-hover:scale-110 transition-transform duration-300">
                        <GraduationCap size={32} className="text-white" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        Academia <br/> <span className="text-blue-400">Profesional</span>
                    </h2>
                    <p className="text-slate-300 text-lg mb-10 max-w-md leading-relaxed">
                        Capacitación especializada en prevención de lavado de activos, compliance y gestión de riesgos. Webinars, papers y cursos certificados.
                    </p>
                    <Link to="/academia" className="inline-flex items-center gap-3 text-white font-bold text-lg group-hover:translate-x-2 transition-transform">
                        Ingresar a la Academia <ArrowRight size={24} className="text-blue-400" />
                    </Link>
                </div>
            </div>

            {/* Right Side: Productos */}
            <div className="flex-1 relative group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-bl from-emerald-900/40 to-slate-900 z-10 group-hover:bg-emerald-900/30 transition-colors duration-500"></div>
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20 group-hover:scale-105 transition-transform duration-700"></div>
                
                <div className="relative z-20 h-full flex flex-col justify-center p-12 md:p-24">
                    <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-emerald-900/50 group-hover:scale-110 transition-transform duration-300">
                        <Briefcase size={32} className="text-white" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        Soluciones <br/> <span className="text-emerald-400">Corporativas</span>
                    </h2>
                    <p className="text-slate-300 text-lg mb-10 max-w-md leading-relaxed">
                        Software de auditoría continua y gestión de cumplimiento. Explore nuestro catálogo y pruebe las demos interactivas.
                    </p>
                    <Link to="/productos" className="inline-flex items-center gap-3 text-white font-bold text-lg group-hover:translate-x-2 transition-transform">
                        Ver Productos y Demos <ArrowRight size={24} className="text-emerald-400" />
                    </Link>
                </div>
            </div>

            {/* Logo Overlay */}
            <div className="absolute top-8 left-8 z-30">
                <div className="text-2xl font-bold text-white tracking-tighter">
                    <Logo darkMode />
                </div>
            </div>

        </div>
    );
};

export default SimpleHome;