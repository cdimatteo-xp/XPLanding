import React from 'react';
import { CheckCircle, Award, Users, TrendingUp, ShieldCheck, Layers, User, Linkedin, ChevronRight } from 'lucide-react';

const About = () => {
    return (
        <section id="nosotros" className="py-24 bg-white border-t border-slate-100 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* --- SECCIÓN 1: ADN CORPORATIVO --- */}
                <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center mb-32">
                    
                    {/* Columna de Texto */}
                    <div className="mb-16 lg:mb-0 relative z-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wide mb-6">
                            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                            ADN Corporativo
                        </div>
                        <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl mb-6 leading-tight">
                            Más que proveedores, somos <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">socios estratégicos</span>.
                        </h2>
                        <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                            X Project S.A. integra un equipo interdisciplinario de expertos en Consultoría, Marketing y Tecnología. No solo entregamos software; diseñamos el futuro operativo de su organización.
                        </p>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            Nuestra misión es potenciar el desempeño estratégico mediante la implementación de procesos robustos y tecnologías de vanguardia, limitando riesgos y maximizando beneficios.
                        </p>

                        <div className="flex flex-col gap-4">
                            <div className="group flex items-start p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/30 transition duration-300 cursor-default">
                                <div className="flex-shrink-0 bg-white p-2 rounded-lg text-blue-600 shadow-sm group-hover:scale-110 transition-transform">
                                    <TrendingUp size={24} />
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-base font-bold text-slate-900">Soluciones de Alto Impacto</h4>
                                    <p className="text-sm text-slate-500 mt-1">Respuestas ágiles para un mercado dinámico y cambiante.</p>
                                </div>
                            </div>
                            
                            <div className="group flex items-start p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/30 transition duration-300 cursor-default">
                                <div className="flex-shrink-0 bg-white p-2 rounded-lg text-blue-600 shadow-sm group-hover:scale-110 transition-transform">
                                    <ShieldCheck size={24} />
                                    </div>
                                <div className="ml-4">
                                    <h4 className="text-base font-bold text-slate-900">Eficiencia y Seguridad</h4>
                                    <p className="text-sm text-slate-500 mt-1">Reducción de costos operativos con garantía de cumplimiento normativo.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Columna Visual (Gráfico de Valor) */}
                    <div className="relative">
                        {/* Fondos decorativos abstractos */}
                        <div className="absolute top-10 right-10 -mr-20 -mt-20 w-72 h-72 bg-blue-600/5 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-10 left-10 -ml-20 -mb-20 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl"></div>

                        <div className="relative grid grid-cols-2 gap-6">
                            {/* Tarjeta 1: Experiencia */}
                            <div className="bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col justify-between h-48 transform lg:translate-y-8 transition hover:-translate-y-1 lg:hover:translate-y-7 duration-300">
                                <div className="p-3 bg-indigo-50 w-fit rounded-xl text-indigo-600">
                                    <Users size={28} />
                                </div>
                                <div>
                                    <span className="text-4xl font-bold text-slate-900 block mb-1 tracking-tight">20+</span>
                                    <span className="text-sm text-slate-500 font-medium leading-snug block">Años de Experiencia Interdisciplinaria</span>
                                </div>
                            </div>

                            {/* Tarjeta 2: Certificación (Color de acento) */}
                            <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-6 rounded-2xl shadow-xl shadow-blue-600/20 flex flex-col justify-between h-48 text-white transition hover:-translate-y-1 duration-300 relative overflow-hidden">
                                {/* Decoración sutil */}
                                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-bl-full -mr-4 -mt-4"></div>
                                
                                <div className="p-3 bg-white/20 w-fit rounded-xl text-white backdrop-blur-sm">
                                    <Award size={28} />
                                </div>
                                <div className="relative z-10">
                                    <span className="text-xl font-bold block mb-2">Calidad IRAM</span>
                                    <p className="text-blue-100 text-xs leading-relaxed opacity-90">
                                        Empresa asociada al Instituto Argentino de Normalización y Certificación.
                                    </p>
                                </div>
                            </div>

                            {/* Tarjeta 3: Enfoque Integral */}
                            <div className="col-span-2 bg-slate-50 p-6 rounded-2xl border border-slate-100 flex items-center gap-6">
                                <div className="hidden sm:flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-sm text-slate-400 shrink-0">
                                    <Layers size={24} />
                                </div>
                                <div>
                                    <h5 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-1">Enfoque 360°</h5>
                                    <p className="text-sm text-slate-500">
                                        Desde la consultoría de procesos hasta el desarrollo de software a medida.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- SECCIÓN 2: LIDERAZGO --- */}
                <div className="border-t border-slate-100 pt-20 relative">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <h3 className="text-3xl font-bold text-slate-900 mb-4">Liderazgo & Visión</h3>
                        <p className="text-slate-500 text-lg leading-relaxed">
                            Somos la <span className="text-blue-600 font-bold">segunda generación</span> liderando X Project. Honramos el legado de nuestros fundadores innovando en nuevas fronteras tecnológicas y metodologías ágiles.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        
                        {/* Socia 1: Carolina C. Castro */}
                        <div className="group relative bg-white rounded-2xl border border-slate-200 hover:border-indigo-300 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-bl-full -mr-8 -mt-8 z-0 transition-transform group-hover:scale-110"></div>
                            
                            <div className="p-8 relative z-10">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="w-20 h-20 rounded-full bg-slate-100 border-4 border-white shadow-md flex items-center justify-center text-slate-400 overflow-hidden group-hover:border-indigo-50 transition-colors">
                                        <User size={36} strokeWidth={1.5} />
                                        {/* <img src="/path-to-photo-carolina-cc.jpg" alt="Carolina C. Castro" className="w-full h-full object-cover" /> */}
                                    </div>
                                    <a 
                                        href="https://www.linkedin.com/in/carolina-cristina-castro" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="p-2 bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-600 hover:text-white transition-colors"
                                        title="Ver Perfil de LinkedIn"
                                    >
                                        <Linkedin size={20} />
                                    </a>
                                </div>

                                <div>
                                    <div className="flex flex-wrap items-center gap-2 mb-2">
                                        <h4 className="text-xl font-bold text-slate-900">Carolina C. Castro</h4>
                                        <span className="px-2 py-0.5 bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-wider rounded border border-slate-200">Socia</span>
                                    </div>
                                    <p className="text-indigo-600 font-semibold text-sm mb-4 flex items-center">
                                        Actuaria
                                    </p>
                                    <p className="text-slate-500 text-sm leading-relaxed mb-6">
                                        Especialista en gestión de riesgos, modelos matemáticos y cumplimiento normativo. Aporta la visión analítica crítica para entornos financieros complejos.
                                    </p>

                                    {/* Expertise Tags */}
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-medium rounded-full">Risk Management</span>
                                        <span className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-medium rounded-full">Modelos Actuariales</span>
                                        <span className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-medium rounded-full">Compliance</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Socia 2: Carolina Di Matteo */}
                        <div className="group relative bg-white rounded-2xl border border-slate-200 hover:border-blue-300 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-8 -mt-8 z-0 transition-transform group-hover:scale-110"></div>
                            
                            <div className="p-8 relative z-10">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="w-20 h-20 rounded-full bg-slate-100 border-4 border-white shadow-md flex items-center justify-center text-slate-400 overflow-hidden group-hover:border-blue-50 transition-colors">
                                        <User size={36} strokeWidth={1.5} />
                                        {/* <img src="/path-to-photo-carolina-dm.jpg" alt="Carolina Di Matteo" className="w-full h-full object-cover" /> */}
                                    </div>
                                    <a 
                                        href="https://www.linkedin.com/in/carolina-di-matteo" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
                                        title="Ver Perfil de LinkedIn"
                                    >
                                        <Linkedin size={20} />
                                    </a>
                                </div>

                                <div>
                                    <div className="flex flex-wrap items-center gap-2 mb-2">
                                        <h4 className="text-xl font-bold text-slate-900">Carolina Di Matteo</h4>
                                        <span className="px-2 py-0.5 bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-wider rounded border border-slate-200">Socia</span>
                                    </div>
                                    <p className="text-blue-600 font-semibold text-sm mb-4 flex items-center">
                                        Ingeniera en Informática
                                    </p>
                                    <p className="text-slate-500 text-sm leading-relaxed mb-6">
                                        Lidera la transformación digital y la arquitectura de soluciones. Su enfoque combina la ingeniería de software con la estrategia de negocios para crear sistemas escalables.
                                    </p>
                                    
                                    {/* Expertise Tags */}
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">Innovación IT</span>
                                        <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">Cloud Architecture</span>
                                        <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">Gestión de Proyectos</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;