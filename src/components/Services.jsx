import React from 'react';
import { 
    PieChart, Users, FileText, Code, 
    Zap, Target, BarChart, Settings, 
    Briefcase, ArrowRight, CheckCircle2,
    Database, Cloud, ShieldCheck
} from 'lucide-react';

const Services = () => {
    return (
        <section id="servicios" className="py-24 bg-slate-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header */}
                <div className="text-center mb-20">
                    <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Soluciones Corporativas</h2>
                    <p className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-5xl tracking-tight">
                        Transformamos Estrategia en <br className="hidden sm:block" />
                        <span className="text-blue-600">Eficiencia Operativa</span>
                    </p>
                    <p className="mt-4 text-xl text-slate-500 max-w-3xl mx-auto">
                        Integramos consultoría de procesos, tecnología aplicada y capital humano para materializar sus objetivos de negocio con resultados medibles y sostenibles.
                    </p>
                </div>

                {/* Service Block 1: Consultoría (Hero Style) */}
                <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 lg:p-12 mb-12 flex flex-col lg:flex-row gap-12 items-center">
                    <div className="lg:w-1/2">
                        <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                            <PieChart size={32} />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Consultoría de Negocios & Procesos</h3>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            Analizamos su estructura para formular propuestas concretas que optimicen el desarrollo de sus negocios. Nuestro enfoque abarca desde el planeamiento estratégico hasta la continuidad operativa ante contingencias.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {[
                                'Planeamiento Estratégico',
                                'Business Continuity Plan (BCP)',
                                'Reingeniería de Procesos',
                                'Control de Gestión & Presupuesto',
                                'Sistemas de Información (MIS)',
                                'Plan de Contingencias'
                            ].map((item, i) => (
                                <li key={i} className="flex items-center text-slate-700 text-sm list-none">
                                    <CheckCircle2 size={16} className="text-blue-500 mr-2 flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </div>
                    </div>
                    <div className="lg:w-1/2 relative">
                        {/* Abstract visualization of strategic planning */}
                        <div className="bg-slate-900 rounded-2xl p-8 text-white relative overflow-hidden shadow-2xl h-full flex flex-col justify-center">
                            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl"></div>
                            <div className="relative z-10 space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-slate-800 rounded-lg border border-slate-700">
                                        <Target className="text-blue-400" size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">Objetivos Claros</h4>
                                        <p className="text-slate-400 text-sm">Definición de metas corporativas y métricas de éxito (KPIs).</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-slate-800 rounded-lg border border-slate-700">
                                        <ShieldCheck className="text-emerald-400" size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">Reducción de Riesgos</h4>
                                        <p className="text-slate-400 text-sm">Identificación y mitigación de riesgos operativos y de información.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-slate-800 rounded-lg border border-slate-700">
                                        <Zap className="text-amber-400" size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">Agilidad Operativa</h4>
                                        <p className="text-slate-400 text-sm">Procesos optimizados para responder a las exigencias del mercado.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Service Grid: Outsourcing, Tech & BI */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    
                    {/* Card: Outsourcing */}
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group flex flex-col">
                        <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 transition-transform">
                            <Users size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Outsourcing & RRHH</h3>
                        <p className="text-slate-600 mb-6 text-sm leading-relaxed flex-grow">
                            Provisión de recursos humanos especializados en tecnología y desarrollo. Coordinación de servicios de Outsourcing Bank y soporte operativo para cargas de trabajo críticas.
                        </p>
                        <div className="space-y-2 border-t border-slate-100 pt-4 mt-auto">
                            <div className="text-xs font-semibold text-indigo-600 uppercase tracking-wider mb-2">Servicios</div>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-2 py-1 bg-indigo-50 text-indigo-700 text-xs rounded-md">Staffing IT</span>
                                <span className="px-2 py-1 bg-indigo-50 text-indigo-700 text-xs rounded-md">Outsourcing Bank</span>
                                <span className="px-2 py-1 bg-indigo-50 text-indigo-700 text-xs rounded-md">Soporte</span>
                            </div>
                        </div>
                    </div>

                    {/* Card: Tecnología & BI */}
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group flex flex-col">
                        <div className="w-12 h-12 bg-cyan-50 rounded-xl flex items-center justify-center text-cyan-600 mb-6 group-hover:scale-110 transition-transform">
                            <Code size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Tecnología & B.I.</h3>
                        <p className="text-slate-600 mb-6 text-sm leading-relaxed flex-grow">
                            Desarrollo de Portales, Intranets y Aplicaciones Web. Implementación de soluciones de Business Intelligence para transformar datos en decisiones estratégicas.
                        </p>
                        <div className="space-y-2 border-t border-slate-100 pt-4 mt-auto">
                            <div className="text-xs font-semibold text-cyan-600 uppercase tracking-wider mb-2">Especialidades</div>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-2 py-1 bg-cyan-50 text-cyan-700 text-xs rounded-md">Business Intelligence</span>
                                <span className="px-2 py-1 bg-cyan-50 text-cyan-700 text-xs rounded-md">Web Enable Apps</span>
                                <span className="px-2 py-1 bg-cyan-50 text-cyan-700 text-xs rounded-md">Hosting</span>
                            </div>
                        </div>
                    </div>

                    {/* Card: Gestión Documental */}
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group flex flex-col">
                        <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 transition-transform">
                            <FileText size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Quality Data & Docs</h3>
                        <p className="text-slate-600 mb-6 text-sm leading-relaxed flex-grow">
                            Servicios de Quality Data y gestión documental integral. Digitalización inteligente y workflow para optimizar el manejo de la información física y lógica.
                        </p>
                        <div className="space-y-2 border-t border-slate-100 pt-4 mt-auto">
                            <div className="text-xs font-semibold text-emerald-600 uppercase tracking-wider mb-2">Soluciones</div>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-2 py-1 bg-emerald-50 text-emerald-700 text-xs rounded-md">Digitalización</span>
                                <span className="px-2 py-1 bg-emerald-50 text-emerald-700 text-xs rounded-md">Quality Data</span>
                                <span className="px-2 py-1 bg-emerald-50 text-emerald-700 text-xs rounded-md">Custodia</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Methodology Strip */}
                <div className="border-t border-slate-200 pt-16">
                    <div className="text-center mb-12">
                        <h3 className="text-2xl font-bold text-slate-900">Metodología de Trabajo</h3>
                        <p className="text-slate-500 mt-2">Un proceso probado para garantizar resultados.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {[
                            { step: '01', title: 'Análisis', desc: 'Entendemos su negocio y estructura actual.' },
                            { step: '02', title: 'Diagnóstico', desc: 'Identificamos riesgos y áreas de mejora.' },
                            { step: '03', title: 'Propuesta', desc: 'Diseñamos soluciones a medida.' },
                            { step: '04', title: 'Implementación', desc: 'Ejecución, seguimiento y soporte.' }
                        ].map((phase, idx) => (
                            <div key={idx} className="relative p-6 bg-white rounded-xl border border-slate-100 text-center group hover:border-blue-200 transition-colors">
                                <div className="text-4xl font-black text-slate-100 absolute top-2 right-4 group-hover:text-blue-50 transition-colors">{phase.step}</div>
                                <div className="relative z-10">
                                    <h4 className="font-bold text-slate-900 mb-1">{phase.title}</h4>
                                    <p className="text-sm text-slate-500">{phase.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Services;