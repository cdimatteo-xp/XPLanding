import React from 'react';
import { Briefcase, Mail } from 'lucide-react';

const Careers = () => {
    return (
        <section className="py-20 bg-slate-50 border-t border-slate-200">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <Briefcase size={40} className="mx-auto text-blue-600 mb-4" />
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Trabaja con Nosotros</h2>
                <p className="text-lg text-slate-600 mb-8">
                    Buscamos gente con espíritu de superación y trabajo en equipo. Si tienes formación en ingeniería, comunicación o administración, queremos conocerte.
                </p>
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 inline-block text-left w-full md:w-auto">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <div>
                            <h3 className="font-bold text-slate-900 text-lg">Envíanos tu CV</h3>
                            <p className="text-slate-500 text-sm">Forma parte de proyectos de alta tecnología.</p>
                        </div>
                        <a href="mailto:info@x-project.com.ar" className="px-6 py-3 bg-slate-900 text-white rounded-lg font-medium hover:bg-blue-600 transition flex items-center gap-2 w-full md:w-auto justify-center">
                            <Mail size={18} /> Enviar correo
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Careers;
