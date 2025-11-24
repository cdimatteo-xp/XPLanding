import React from 'react';
import { 
    Landmark, GraduationCap, Building2, Wallet, 
    Globe, ShieldCheck, ArrowRight 
} from 'lucide-react';

const Industries = () => {
    const sectors = [
        {
            title: 'Banca Nacional e Internacional',
            desc: 'Infraestructura crítica para entidades de alta exigencia regulatoria. Experiencia en integración con core bancarios, cumplimiento de normas BCRA/UIF y auditoría continua.',
            icon: <Landmark size={32} />,
            color: 'text-blue-600',
            bg: 'bg-blue-50',
            border: 'hover:border-blue-200'
        },
        {
            title: 'Servicios Financieros & Fintech',
            desc: 'Tecnología para escalar operaciones de crédito y pagos. Automatización de onboarding, scoring crediticio y prevención de lavado para financieras ágiles.',
            icon: <Wallet size={32} />,
            color: 'text-cyan-600',
            bg: 'bg-cyan-50',
            border: 'hover:border-cyan-200'
        },
        {
            title: 'Universidades y Educación',
            desc: 'Gestión administrativa y documental para instituciones educativas de gran escala. Optimización de legajos de alumnos, docentes y procesos de facturación.',
            icon: <GraduationCap size={32} />,
            color: 'text-indigo-600',
            bg: 'bg-indigo-50',
            border: 'hover:border-indigo-200'
        },
        {
            title: 'Fiduciarias y Fondos',
            desc: 'El estándar del mercado para la administración de patrimonios autónomos. Motores contables y de gestión de deuda para fideicomisos públicos y privados.',
            icon: <Building2 size={32} />,
            color: 'text-purple-600',
            bg: 'bg-purple-50',
            border: 'hover:border-purple-200'
        },
        {
            title: 'Seguros y Reaseguros',
            desc: 'Control de riesgos y solvencia. Soluciones para la gestión de siniestros, prevención de fraude y cumplimiento ante la Superintendencia de Seguros.',
            icon: <ShieldCheck size={32} />,
            color: 'text-emerald-600',
            bg: 'bg-emerald-50',
            border: 'hover:border-emerald-200'
        },
        {
            title: 'Grandes Corporaciones',
            desc: 'Consultoría de procesos y desarrollo a medida para empresas que requieren reingeniería administrativa y transformación digital segura.',
            icon: <Globe size={32} />,
            color: 'text-slate-600',
            bg: 'bg-slate-100',
            border: 'hover:border-slate-300'
        }
    ];

    return (
        <section id="industrias" className="py-24 bg-white border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wide mb-4">
                        Experiencia Multisectorial
                    </div>
                    <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl mb-4">
                        Nuestra Tecnología en Acción
                    </h2>
                    <p className="text-lg text-slate-500 max-w-3xl mx-auto">
                        Hemos desplegado soluciones críticas en los entornos más exigentes del mercado, adaptando nuestra metodología a la realidad operativa de cada industria.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sectors.map((sector, index) => (
                        <div key={index} className={`p-8 rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group ${sector.border}`}>
                            <div className={`w-14 h-14 rounded-xl ${sector.bg} ${sector.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                {sector.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{sector.title}</h3>
                            <p className="text-slate-500 text-sm leading-relaxed">
                                {sector.desc}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-1 pr-1 pl-6 bg-slate-50 rounded-full border border-slate-200">
                        <span className="text-slate-600 font-medium text-sm py-2">¿Su organización pertenece a otro sector?</span>
                        <a href="#contacto" className="px-6 py-2 bg-slate-900 text-white rounded-full text-sm font-bold hover:bg-blue-600 transition flex items-center gap-2">
                            Analicemos su caso <ArrowRight size={16} />
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Industries;