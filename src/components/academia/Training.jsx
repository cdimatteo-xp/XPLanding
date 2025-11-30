import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
    Video, FileText, BookOpen, Lock, 
    ArrowRight, Download, PlayCircle, 
    GraduationCap, Users, Laptop, 
    ShieldCheck, ArrowLeft, LogIn,
    CheckCircle2, Search, ExternalLink
} from 'lucide-react';

const Training = () => {
    const [activeTab, setActiveTab] = useState('webinars');

    // Mock Data for Public Resources
    const resources = {
        webinars: [
            {
                title: "Novedades Normativas 2025",
                description: "Análisis profundo de las nuevas regulaciones UIF y su impacto en el sector financiero.",
                duration: "45 min",
                date: "28 Nov 2024",
                tags: ["Normativa", "Compliance"],
                image: "from-blue-600 to-indigo-700"
            },
            {
                title: "Prevención de Fraude con IA",
                description: "Cómo utilizar herramientas de inteligencia artificial para detectar patrones anómalos.",
                duration: "60 min",
                date: "15 Oct 2024",
                tags: ["Tecnología", "Fraude"],
                image: "from-purple-600 to-fuchsia-700"
            },
            {
                title: "Debida Diligencia en Criptoactivos",
                description: "Estrategias para el monitoreo de operaciones con activos virtuales.",
                duration: "50 min",
                date: "02 Sep 2024",
                tags: ["Cripto", "Riesgos"],
                image: "from-emerald-600 to-teal-700"
            }
        ],
        capsules: [
            {
                title: "Configuración de Matriz de Riesgo",
                description: "Guía rápida para ponderar factores de riesgo en su manual de procedimientos.",
                readTime: "5 min",
                category: "Metodología"
            },
            {
                title: "Identificación de Beneficiario Final",
                description: "Checklist operativo para cumplir con la Resolución 112/2021.",
                readTime: "3 min",
                category: "Operativo"
            },
            {
                title: "Señales de Alerta en Comercio Exterior",
                description: "Indicadores clave para detectar lavado de activos en importaciones/exportaciones.",
                readTime: "7 min",
                category: "Casos Prácticos"
            },
            {
                title: "Tratamiento de PEPs Extranjeros",
                description: "Diferencias normativas en el tratamiento de personas expuestas políticamente del exterior.",
                readTime: "4 min",
                category: "Compliance"
            }
        ],
        papers: [
            {
                title: "Estado del Arte en PLD/FT 2024",
                description: "Informe anual sobre tendencias globales en prevención de lavado de dinero.",
                size: "2.4 MB",
                format: "PDF"
            },
            {
                title: "Guía de Implementación ISO 37301",
                description: "Manual técnico para la adopción de sistemas de gestión de compliance.",
                size: "1.8 MB",
                format: "PDF"
            },
            {
                title: "Tipologías de Fraude Corporativo",
                description: "Compendio de casos reales y mecanismos de prevención.",
                size: "3.1 MB",
                format: "PDF"
            }
        ]
    };

    return (
        <section className="min-h-screen bg-slate-50 font-sans">
            
            {/* Hero Section */}
            <div className="bg-slate-900 text-white pt-32 pb-20 relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/20 to-transparent pointer-events-none"></div>
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <Link to="/" className="inline-flex items-center text-slate-400 hover:text-white mb-8 transition-colors group">
                        <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                        Volver al Inicio
                    </Link>
                    
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/50 border border-blue-700/50 text-blue-300 text-sm font-bold mb-6 backdrop-blur-sm">
                            <BookOpen size={16} />
                            X Project Academy
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
                            Base de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Conocimiento</span>
                        </h1>
                        <p className="text-xl text-slate-300 leading-relaxed">
                            Acceda a nuestra biblioteca de recursos especializados. Webinars, investigaciones y herramientas prácticas para potenciar su gestión de riesgos.
                        </p>
                    </div>
                </div>
            </div>

            {/* Public Resources Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-10 relative z-20">
                
                {/* Tabs Navigation */}
                <div className="bg-white p-2 rounded-2xl shadow-xl border border-slate-100 inline-flex flex-wrap gap-2 mb-12">
                    {[
                        { id: 'webinars', label: 'Webinars', icon: <Video size={18} /> },
                        { id: 'capsules', label: 'Cápsulas', icon: <BookOpen size={18} /> },
                        { id: 'papers', label: 'Papers', icon: <FileText size={18} /> }
                    ].map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
                                activeTab === tab.id 
                                ? 'bg-slate-900 text-white shadow-md' 
                                : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                            }`}
                        >
                            {tab.icon}
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Content Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up">
                    
                    {/* WEBINARS VIEW */}
                    {activeTab === 'webinars' && resources.webinars.map((item, idx) => (
                        <div key={idx} className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 flex flex-col">
                            <div className={`h-48 bg-gradient-to-br ${item.image} relative p-6 flex flex-col justify-between`}>
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                                <div className="relative z-10 flex justify-between items-start">
                                    <span className="px-2 py-1 bg-black/30 backdrop-blur-md rounded text-xs font-bold text-white border border-white/10">
                                        Webinar
                                    </span>
                                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                                        <PlayCircle size={24} fill="currentColor" className="opacity-90" />
                                    </div>
                                </div>
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex gap-2 mb-3">
                                    {item.tags.map(tag => (
                                        <span key={tag} className="text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-1 rounded">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-slate-500 text-sm mb-4 line-clamp-2 flex-grow">
                                    {item.description}
                                </p>
                                <div className="flex items-center justify-between text-xs text-slate-400 pt-4 border-t border-slate-100">
                                    <span>{item.date}</span>
                                    <span>{item.duration}</span>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* CAPSULES VIEW */}
                    {activeTab === 'capsules' && resources.capsules.map((item, idx) => (
                        <div key={idx} className="group bg-white p-6 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 flex flex-col h-full">
                            <div className="flex items-start justify-between mb-4">
                                <div className="p-3 bg-amber-50 text-amber-600 rounded-xl group-hover:bg-amber-100 transition-colors">
                                    <BookOpen size={24} />
                                </div>
                                <span className="text-xs font-bold text-slate-400 bg-slate-50 px-2 py-1 rounded border border-slate-100">
                                    {item.readTime}
                                </span>
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-slate-500 text-sm mb-6 flex-grow">
                                {item.description}
                            </p>
                            <div className="flex items-center justify-between mt-auto">
                                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                                    {item.category}
                                </span>
                                <button className="text-blue-600 font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                                    Leer más <ArrowRight size={16} />
                                </button>
                            </div>
                        </div>
                    ))}

                    {/* PAPERS VIEW */}
                    {activeTab === 'papers' && resources.papers.map((item, idx) => (
                        <div key={idx} className="group bg-white p-6 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 flex flex-col h-full">
                            <div className="flex items-start justify-between mb-4">
                                <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl group-hover:bg-emerald-100 transition-colors">
                                    <FileText size={24} />
                                </div>
                                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded border border-emerald-100">
                                    {item.format}
                                </span>
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-slate-500 text-sm mb-6 flex-grow">
                                {item.description}
                            </p>
                            <button className="w-full py-2.5 rounded-lg border border-slate-200 text-slate-600 font-bold text-sm hover:bg-slate-50 hover:text-slate-900 hover:border-slate-300 transition-all flex items-center justify-center gap-2">
                                <Download size={16} />
                                Descargar ({item.size})
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Campus Section */}
            <div className="bg-slate-900 py-24 relative overflow-hidden">
                {/* Decorative Background */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/90 to-slate-900/50"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        
                        {/* Text Content */}
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-sm font-bold mb-6">
                                <Lock size={14} />
                                Acceso Exclusivo Clientes
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                                Campus Virtual <br/>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">X Project</span>
                            </h2>
                            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                                Una plataforma integral diseñada para potenciar a su equipo. Acceda a formación certificada, recursos técnicos y herramientas exclusivas para usuarios de nuestra suite.
                            </p>
                            
                            <div className="space-y-6 mb-10">
                                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                    <div className="p-3 bg-indigo-500/20 text-indigo-400 rounded-lg">
                                        <GraduationCap size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-lg">Cursos Asincrónicos</h4>
                                        <p className="text-slate-400 text-sm mt-1">Capacitación a su propio ritmo con emisión automática de certificados.</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                    <div className="p-3 bg-purple-500/20 text-purple-400 rounded-lg">
                                        <Users size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-lg">Cursos Sincrónicos</h4>
                                        <p className="text-slate-400 text-sm mt-1">Inscripción a masterclasses en vivo y talleres prácticos con expertos.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                    <div className="p-3 bg-emerald-500/20 text-emerald-400 rounded-lg">
                                        <Laptop size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-lg">Cápsulas de Software</h4>
                                        <p className="text-slate-400 text-sm mt-1">Descarga de add-ons, reportes personalizados y scripts de automatización.</p>
                                    </div>
                                </div>
                            </div>

                            <Link to="/campus" className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-white text-slate-900 rounded-xl font-bold hover:bg-blue-50 transition-all shadow-lg hover:shadow-blue-500/20 group">
                                <div className="w-5 h-5 relative">
                                    <img src="https://www.google.com/favicon.ico" alt="Google" className="w-full h-full object-contain" />
                                </div>
                                Acceder con Google
                                <ArrowRight size={18} className="text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <p className="mt-4 text-xs text-slate-500 text-center sm:text-left">
                                * Acceso restringido a dominios corporativos autorizados.
                            </p>
                        </div>

                        {/* Visual Representation */}
                        <div className="relative hidden lg:block">
                            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-[2rem] blur-2xl opacity-20 animate-pulse"></div>
                            <div className="relative bg-slate-800 border border-slate-700 rounded-[2rem] p-8 shadow-2xl">
                                {/* Mock Interface of the Campus */}
                                <div className="flex items-center gap-4 mb-8 border-b border-slate-700 pb-6">
                                    <div className="w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold text-xl">JP</div>
                                    <div>
                                        <div className="text-white font-bold text-lg">Juan Pérez</div>
                                        <div className="text-slate-400 text-xs">Compliance Officer</div>
                                    </div>
                                </div>
                                
                                <div className="mb-6">
                                    <h5 className="text-slate-400 text-xs font-bold uppercase mb-3">Mis Cursos Activos</h5>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-slate-700/50 p-4 rounded-xl border border-slate-600/50">
                                            <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center mb-3">
                                                <ShieldCheck size={16} />
                                            </div>
                                            <div className="text-white font-bold text-sm mb-1">Prevención de Lavado</div>
                                            <div className="w-full bg-slate-600 h-1.5 rounded-full overflow-hidden">
                                                <div className="bg-blue-500 h-full w-3/4"></div>
                                            </div>
                                            <div className="text-right text-[10px] text-slate-400 mt-1">75%</div>
                                        </div>
                                        <div className="bg-slate-700/50 p-4 rounded-xl border border-slate-600/50">
                                            <div className="w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center mb-3">
                                                <Laptop size={16} />
                                            </div>
                                            <div className="text-white font-bold text-sm mb-1">Auditoría Forense</div>
                                            <div className="w-full bg-slate-600 h-1.5 rounded-full overflow-hidden">
                                                <div className="bg-purple-500 h-full w-1/3"></div>
                                            </div>
                                            <div className="text-right text-[10px] text-slate-400 mt-1">30%</div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h5 className="text-slate-400 text-xs font-bold uppercase mb-3">Próximas Lecciones</h5>
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-700/30 border border-slate-700">
                                            <div className="w-6 h-6 rounded-full border-2 border-slate-500 flex items-center justify-center"></div>
                                            <div className="text-slate-300 text-sm">Módulo 4: Matriz de Riesgo</div>
                                        </div>
                                        <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-700/30 border border-slate-700">
                                            <div className="w-6 h-6 rounded-full border-2 border-slate-500 flex items-center justify-center"></div>
                                            <div className="text-slate-300 text-sm">Caso Práctico: Operaciones Inusuales</div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Floating Badge */}
                                <div className="absolute -right-6 top-10 bg-white text-slate-900 p-4 rounded-xl shadow-xl flex items-center gap-3 animate-bounce-slow">
                                    <div className="bg-green-100 text-green-600 p-2 rounded-lg">
                                        <CheckCircle2 size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-slate-500 uppercase">Certificado Emitido</p>
                                        <p className="font-bold">Compliance Officer</p>
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

export default Training;