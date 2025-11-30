import React from 'react';
import { GraduationCap, ArrowRight, BookOpen, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const TrainingSummary = () => {
    return (
        <section id="academia" className="py-24 bg-slate-900 text-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                            <GraduationCap size={16} className="mr-2" />
                            X Project Academy
                        </div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 leading-tight">
                            Formación de Alto Nivel para <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Profesionales IT</span>
                        </h2>
                        <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                            Capacitación especializada en tecnologías de vanguardia, metodologías ágiles y gestión de proyectos. Diseñada para equipos que buscan la excelencia técnica.
                        </p>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                            <div className="flex flex-col">
                                <div className="flex items-center mb-2 text-white font-semibold">
                                    <BookOpen size={20} className="text-blue-400 mr-2" />
                                    +20 Cursos
                                </div>
                                <p className="text-sm text-slate-500">Catálogo actualizado constantemente.</p>
                            </div>
                            <div className="flex flex-col">
                                <div className="flex items-center mb-2 text-white font-semibold">
                                    <Users size={20} className="text-blue-400 mr-2" />
                                    Mentores Expertos
                                </div>
                                <p className="text-sm text-slate-500">Profesionales activos en la industria.</p>
                            </div>
                            <div className="flex flex-col">
                                <div className="flex items-center mb-2 text-white font-semibold">
                                    <Award size={20} className="text-blue-400 mr-2" />
                                    Certificación
                                </div>
                                <p className="text-sm text-slate-500">Reconocimiento curricular.</p>
                            </div>
                        </div>

                        <Link to="/academia" className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-all shadow-lg shadow-blue-900/20 hover:shadow-blue-900/40 transform hover:-translate-y-1">
                            Ver Catálogo de Cursos <ArrowRight size={18} className="ml-2" />
                        </Link>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl transform rotate-3"></div>
                        <div className="relative bg-slate-800 border border-slate-700 rounded-2xl p-8 shadow-2xl">
                            <h3 className="text-xl font-bold text-white mb-6 border-b border-slate-700 pb-4">Áreas de Conocimiento</h3>
                            <ul className="space-y-4">
                                {[
                                    "Desarrollo Full Stack (Java, .NET, React, Angular)",
                                    "DevOps & Cloud Computing (Azure, AWS, Docker)",
                                    "Base de Datos (SQL Server, Oracle, Mongo)",
                                    "Metodologías Ágiles (Scrum, Kanban)",
                                    "QA & Testing Automatizado"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start">
                                        <div className="mt-1 min-w-[20px] h-5 flex items-center justify-center rounded-full bg-blue-500/20 text-blue-400 mr-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                                        </div>
                                        <span className="text-slate-300">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrainingSummary;
