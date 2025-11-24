import React from 'react';
import { GraduationCap } from 'lucide-react';

const Training = () => {
    return (
        <section id="capacitacion" className="py-20 bg-blue-600 relative overflow-hidden">
            <div className="absolute inset-0 bg-hero-pattern opacity-10 mix-blend-multiply"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="lg:flex lg:items-center lg:justify-between bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
                    <div className="lg:w-2/3">
                        <div className="flex items-center gap-3 mb-4">
                            <GraduationCap size={32} className="text-blue-600" />
                            <h2 className="text-3xl font-extrabold text-slate-900">
                                X Project <span className="text-blue-600">Academy</span>
                            </h2>
                        </div>
                        <p className="text-lg text-slate-600 mb-6">
                            No solo implementamos sistemas, también transferimos conocimiento.
                            <br />
                            Ofrecemos programas de capacitación in-company y online para que tu equipo domine las nuevas tecnologías y metodologías de gestión.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <span className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium">Gestión de Proyectos</span>
                            <span className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium">Uso de Sistemas X Project</span>
                            <span className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium">Compliance & Riesgos</span>
                        </div>
                    </div>
                    <div className="mt-8 lg:mt-0 lg:w-1/3 lg:flex lg:justify-end">
                        <button className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition shadow-xl">
                            Solicitar Programa
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Training;
