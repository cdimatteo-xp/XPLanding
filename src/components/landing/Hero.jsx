import React from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section id="inicio" className="relative h-screen flex items-center justify-center bg-slate-900 overflow-hidden">
            <div
                className="absolute inset-0 z-0 opacity-30 bg-cover bg-center bg-fixed"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900 z-0" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
                <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-medium text-sm mb-6 backdrop-blur-sm">
                    Innovación y Gestión de Procesos
                </div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
                    Inteligencia aplicada a <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-300">
                        Sistemas Críticos
                    </span>
                </h1>
                <p className="mt-4 text-xl text-slate-300 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                    Desarrollamos software de gestión de riesgos, auditoría y cumplimiento normativo para potenciar la seguridad y eficiencia de tu organización.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="#sistemas" className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold text-lg hover:bg-blue-500 transition shadow-lg hover:shadow-blue-500/30 flex items-center justify-center gap-2">
                        Ver Sistemas <ArrowRight size={20} />
                    </a>
                    <a href="#contacto" className="px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 text-white rounded-full font-semibold text-lg hover:bg-white/10 transition flex items-center justify-center">
                        Solicitar Demo
                    </a>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-500">
                <ChevronDown size={32} />
            </div>
        </section>
    );
};

export default Hero;
