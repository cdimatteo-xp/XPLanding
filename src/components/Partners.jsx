import React from 'react';
import { Award, Globe, Server } from 'lucide-react';

const Partners = () => {
    return (
        <section className="py-10 bg-white border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-center text-sm font-semibold text-slate-400 uppercase tracking-widest mb-8">
                    Alianzas Estratégicas y Certificaciones
                </p>
                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
                    {/* Mock Logos - Replace with real ones */}
                    <div className="flex items-center gap-2 group">
                        <div className="text-2xl font-bold text-slate-800 flex items-center gap-2">
                            <Award className="text-blue-600" /> IRAM
                        </div>
                        <span className="text-xs text-slate-500 font-medium border-l border-slate-300 pl-2 ml-2">Empresa Asociada</span>
                    </div>

                    <div className="flex items-center gap-2 group">
                        <div className="text-2xl font-bold text-slate-700 flex items-center gap-2">
                            <Globe className="text-cyan-600" /> ADVANTUR
                        </div>
                        <span className="text-xs text-slate-500 font-medium border-l border-slate-300 pl-2 ml-2">Consultoría España</span>
                    </div>

                    <div className="flex items-center gap-2 group">
                        <div className="text-2xl font-bold text-slate-700 flex items-center gap-2">
                            <Server className="text-indigo-600" /> GLI
                        </div>
                        <span className="text-xs text-slate-500 font-medium border-l border-slate-300 pl-2 ml-2">Soluciones EDI</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Partners;
