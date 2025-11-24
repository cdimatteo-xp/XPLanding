import React, { useState } from 'react';
import { 
    Shield, AlertTriangle, Lock, Landmark, Check, CheckCircle,
    Server, TrendingUp, Search, FileText, 
    Users, PieChart, RefreshCw, Globe, Scale,
    BarChart3, BrainCircuit, ClipboardCheck,
    LayoutDashboard, BookOpenCheck, Activity,
    ScanFace, Network, Zap,
    Coins, Briefcase, ScrollText, Database // Nuevos iconos para Fiducia
} from 'lucide-react';

const Products = () => {
    const [activeSystem, setActiveSystem] = useState('e-ACM');

    return (
        <section id="sistemas" className="py-24 bg-slate-950 text-white relative overflow-hidden">
            {/* Background Noise/Texture */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-base text-blue-500 font-semibold tracking-wide uppercase">Software Corporativo</h2>
                    <p className="mt-2 text-4xl font-extrabold text-white sm:text-5xl tracking-tight">
                        Ecosistema de Gestión Crítica
                    </p>
                    <p className="mt-4 text-slate-400 text-xl max-w-3xl mx-auto">
                        Soluciones robustas, auditables y escalables para entidades financieras y grandes corporaciones.
                    </p>
                </div>

                <div className="space-y-32">
                    
                    {/* 1. e-ACM: AUDITORÍA (Verde/Lime) */}
                    <div className="relative">
                        <div className="flex flex-col md:flex-row items-baseline gap-4 mb-8 border-b border-slate-800 pb-4">
                            <h3 className="text-3xl font-bold text-white flex items-center gap-3">
                                <span className="p-2 rounded-lg bg-lime-500/10 text-lime-400"><Shield size={32} /></span>
                                e-ACM.core <span className="text-slate-500 text-2xl font-normal">| Audit Control Manager</span>
                            </h3>
                            <p className="text-lime-400 font-medium ml-auto">Líder en Auditoría Continua</p>
                        </div>
                        
                        {/* Storytelling e-ACM */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
                            {/* Columna Izquierda */}
                            <div className="lg:col-span-4 flex flex-col justify-center">
                                <h4 className="text-2xl font-bold text-white mb-4">
                                    Evolución tecnológica para la Auditoría Interna.
                                </h4>
                                <p className="text-slate-400 mb-8 leading-relaxed">
                                    Potenciada por modelos estadísticos y de Inteligencia Artificial, e-ACM.core permite no solo estandarizar metodologías, sino automatizar tareas de control en forma continua y remota.
                                </p>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 text-sm text-slate-300">
                                        <div className="w-8 h-8 rounded-full bg-lime-500/10 flex items-center justify-center text-lime-400 shrink-0"><Server size={16}/></div>
                                        <span>Web Nativa & Cloud Ready</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-slate-300">
                                        <div className="w-8 h-8 rounded-full bg-lime-500/10 flex items-center justify-center text-lime-400 shrink-0"><Scale size={16}/></div>
                                        <span>Estandarización Metodológica</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-slate-300">
                                        <div className="w-8 h-8 rounded-full bg-lime-500/10 flex items-center justify-center text-lime-400 shrink-0"><BarChart3 size={16}/></div>
                                        <span>Reporting Dinámico</span>
                                    </div>
                                </div>
                            </div>

                            {/* Columna Derecha */}
                            <div className="lg:col-span-8 space-y-4">
                                <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 flex flex-col sm:flex-row gap-6 hover:border-lime-500/30 transition group">
                                    <div className="bg-lime-500/10 p-4 rounded-lg flex items-center justify-center text-lime-400 w-16 h-16 shrink-0 group-hover:scale-110 transition-transform">
                                        <ClipboardCheck size={28} />
                                    </div>
                                    <div>
                                        <h5 className="text-lg font-bold text-white mb-2">Ciclo de Vida Integral</h5>
                                        <p className="text-slate-400 text-sm mb-3">
                                            Gestión total desde la Planificación Anual y asignación de recursos, hasta la ejecución de programas de trabajo, emisión automática de informes y seguimiento de observaciones.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 flex flex-col sm:flex-row gap-6 hover:border-lime-500/30 transition group">
                                    <div className="bg-lime-500/10 p-4 rounded-lg flex items-center justify-center text-lime-400 w-16 h-16 shrink-0 group-hover:scale-110 transition-transform">
                                        <BrainCircuit size={28} />
                                    </div>
                                    <div>
                                        <h5 className="text-lg font-bold text-white mb-2">Inteligencia & Automatización</h5>
                                        <p className="text-slate-400 text-sm mb-3">
                                            Módulos de modelización predictiva y monitoreo dinámico para detectar anomalías en tiempo real. Auditoría basada en datos (Data-Driven Audit) y no solo en muestras.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 flex flex-col sm:flex-row gap-6 hover:border-lime-500/30 transition group">
                                    <div className="bg-lime-500/10 p-4 rounded-lg flex items-center justify-center text-lime-400 w-16 h-16 shrink-0 group-hover:scale-110 transition-transform">
                                        <TrendingUp size={28} />
                                    </div>
                                    <div>
                                        <h5 className="text-lg font-bold text-white mb-2">Valor Agregado & KPIs</h5>
                                        <p className="text-slate-400 text-sm mb-3">
                                            Registro del valor patrimonial/financiero aportado por auditoría. Tableros de control gerenciales para visualizar el estado de riesgos y el cumplimiento de objetivos.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Planes Cards */}
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                            {[
                                { name: 'Básico Pro', features: ['Gestión de auditorías', 'Seguimiento de observaciones', 'Interacción con auditados'] },
                                { name: 'Avanzado', features: ['Planificación anual', 'Reporting customizado', 'Soporte especializado'], highlight: true },
                                { name: 'Premium', features: ['Matriz de riesgos dinámica', 'Muestreo estadístico', 'Base de conocimiento'] },
                                { name: 'Auditoría 360', features: ['Monitoreo continuo', 'Data Analytics & IA', 'Prioridad de soporte'] }
                            ].map((plan, idx) => (
                                <div key={idx} className={`relative p-6 rounded-2xl border flex flex-col hover:transform hover:-translate-y-1 transition duration-300 ${plan.highlight ? 'border-lime-500 bg-lime-500/5 shadow-[0_0_30px_rgba(132,204,22,0.15)]' : 'border-slate-800 bg-slate-900/50'} hover:border-lime-500/50`}>
                                    {plan.highlight && <div className="absolute top-0 right-0 bg-lime-600 text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg rounded-tr-2xl">RECOMENDADO</div>}
                                    <h4 className="text-xl font-bold text-white mb-4">{plan.name}</h4>
                                    <ul className="space-y-3 flex-grow">
                                        {plan.features.map((f, i) => (
                                            <li key={i} className="flex items-start text-sm text-slate-300">
                                                <Check size={16} className="text-lime-500 mr-2 mt-0.5 shrink-0" />
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 2. e-ACR: RIESGOS (Naranja/Amber) */}
                    <div className="relative">
                        <div className="absolute -left-4 -top-4 w-20 h-20 bg-amber-500/20 blur-3xl rounded-full"></div>
                        <div className="flex flex-col md:flex-row items-baseline gap-4 mb-8 border-b border-slate-800 pb-4 relative z-10">
                            <h3 className="text-3xl font-bold text-white flex items-center gap-3">
                                <span className="p-2 rounded-lg bg-amber-500/10 text-amber-400"><AlertTriangle size={32} /></span>
                                e-ACR.core <span className="text-slate-500 text-2xl font-normal">| Suite de Riesgos</span>
                            </h3>
                            <p className="text-amber-400 font-medium ml-auto">Gestión Integral de Riesgos</p>
                        </div>

                        {/* Storytelling e-ACR */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 relative z-10">
                            <div className="lg:col-span-4 flex flex-col justify-center">
                                <h4 className="text-2xl font-bold text-white mb-4">
                                    Visión unificada para la Gestión de Riesgos Corporativos.
                                </h4>
                                <p className="text-slate-400 mb-8 leading-relaxed">
                                    e-ACR.core integra las verticales críticas de riesgo (Operacional, Tecnológico y Crediticio) bajo un mismo estándar de control, alineando su organización con normativas internacionales.
                                </p>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 text-sm text-slate-300">
                                        <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0"><Globe size={16}/></div>
                                        <span>Basilea II / III & ISO 27005</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-slate-300">
                                        <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0"><AlertTriangle size={16}/></div>
                                        <span>Matrices de Riesgo Dinámicas</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-slate-300">
                                        <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0"><Activity size={16}/></div>
                                        <span>Monitoreo de Incidentes</span>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:col-span-8 space-y-4">
                                <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 flex flex-col sm:flex-row gap-6 hover:border-amber-500/30 transition group">
                                    <div className="bg-amber-500/10 p-4 rounded-lg flex items-center justify-center text-amber-400 w-16 h-16 shrink-0 group-hover:scale-110 transition-transform">
                                        <LayoutDashboard size={28} />
                                    </div>
                                    <div>
                                        <h5 className="text-lg font-bold text-white mb-2">Mapa de Riesgos Unificado</h5>
                                        <p className="text-slate-400 text-sm mb-3">
                                            Centralice la identificación y evaluación de riesgos en una sola plataforma. Visualice mapas de calor (Heatmaps) y matrices de impacto/probabilidad para priorizar la toma de decisiones.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 flex flex-col sm:flex-row gap-6 hover:border-amber-500/30 transition group">
                                    <div className="bg-amber-500/10 p-4 rounded-lg flex items-center justify-center text-amber-400 w-16 h-16 shrink-0 group-hover:scale-110 transition-transform">
                                        <BookOpenCheck size={28} />
                                    </div>
                                    <div>
                                        <h5 className="text-lg font-bold text-white mb-2">Cumplimiento Normativo</h5>
                                        <p className="text-slate-400 text-sm mb-3">
                                            Diseñado específicamente para cumplir con los lineamientos de Bancos Centrales para Riesgo Operacional y Crediticio, y estándares como Magerit para Riesgo Tecnológico.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 flex flex-col sm:flex-row gap-6 hover:border-amber-500/30 transition group">
                                    <div className="bg-amber-500/10 p-4 rounded-lg flex items-center justify-center text-amber-400 w-16 h-16 shrink-0 group-hover:scale-110 transition-transform">
                                        <Shield size={28} />
                                    </div>
                                    <div>
                                        <h5 className="text-lg font-bold text-white mb-2">Mitigación y Continuidad</h5>
                                        <p className="text-slate-400 text-sm mb-3">
                                            Gestión activa de incidentes y planes de acción. Seguimiento de eventos de pérdida y diseño de controles para asegurar la continuidad del negocio ante amenazas.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Módulos Específicos (Cards Verticales) */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { title: 'Riesgo Operacional', code: 'e-ACM.rsk', icon: <TrendingUp />, desc: 'Gestión integral de riesgos operativos y procesos. Alineado a normas de Entidades Financieras.' },
                                { title: 'Riesgo Tecnológico', code: 'e-ACM.rit', icon: <Server />, desc: 'Gestión de Activos de Información (IT), vulnerabilidades y amenazas basada en ISO 27005.' },
                                { title: 'Riesgo Crediticio', code: 'e-CLM.net', icon: <PieChart />, desc: 'Sistema experto para análisis de carteras, scoring de clientes y seguimiento de garantías y mora.' }
                            ].map((mod, idx) => (
                                <div key={idx} className="group relative bg-slate-900 rounded-2xl p-8 border border-slate-800 hover:border-amber-500/50 transition-all duration-300">
                                    <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                                    <div className="relative z-10">
                                        <div className="flex justify-between items-start mb-6">
                                            <div className="p-3 rounded-xl bg-amber-900/30 text-amber-400 group-hover:scale-110 transition-transform">
                                                {mod.icon}
                                            </div>
                                            <span className="text-xs font-mono text-slate-500 border border-slate-700 px-2 py-1 rounded">{mod.code}</span>
                                        </div>
                                        <h4 className="text-xl font-bold text-white mb-3">{mod.title}</h4>
                                        <p className="text-slate-400 text-sm leading-relaxed">{mod.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 3. e-CML: LAVADO DE ACTIVOS (Cian/Cyan) */}
                    <div className="relative">
                        <div className="flex flex-col md:flex-row items-baseline gap-4 mb-10 border-b border-slate-800 pb-4">
                            <h3 className="text-3xl font-bold text-white flex items-center gap-3">
                                <span className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400"><Lock size={32} /></span>
                                e-CML.core <span className="text-slate-500 text-2xl font-normal">| Control Money Laundry</span>
                            </h3>
                            <p className="text-cyan-400 font-medium ml-auto">Cumplimiento Normativo (PLA/FT)</p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                            {/* Columna Izquierda: Descripción y Valor */}
                            <div className="lg:col-span-4 flex flex-col justify-center">
                                <h4 className="text-2xl font-bold text-white mb-4">
                                    Inteligencia aplicada a la prevención de delitos financieros.
                                </h4>
                                <p className="text-slate-400 mb-8 leading-relaxed">
                                    Cumpla con las normativas de la UIF y estándares internacionales. Nuestra solución integra monitoreo transaccional, calificación de riesgo y listas restrictivas en un solo ecosistema.
                                </p>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 text-sm text-slate-300">
                                        <div className="w-8 h-8 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0"><Globe size={16}/></div>
                                        <span>Normativa GAFI & UIF</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-slate-300">
                                        <div className="w-8 h-8 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0"><ScanFace size={16}/></div>
                                        <span>KYC Aumentado (360°)</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-slate-300">
                                        <div className="w-8 h-8 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0"><Activity size={16}/></div>
                                        <span>Modelos Estadísticos</span>
                                    </div>
                                </div>
                            </div>

                            {/* Columna Derecha: Módulos Detallados */}
                            <div className="lg:col-span-8 space-y-4">
                                <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 flex flex-col sm:flex-row gap-6 hover:border-cyan-500/30 transition group">
                                    <div className="bg-cyan-500/10 p-4 rounded-lg flex items-center justify-center text-cyan-400 w-16 h-16 shrink-0 group-hover:scale-110 transition-transform">
                                        <BrainCircuit size={28} />
                                    </div>
                                    <div>
                                        <h5 className="text-lg font-bold text-white mb-2">Monitoreo Conductual (Behavioral)</h5>
                                        <p className="text-slate-400 text-sm mb-3">
                                            Detección de desvíos sobre patrones "normales" modelizados estadísticamente para cada cliente. Alertas inmediatas ante cambios de comportamiento financiero, superando las reglas estáticas tradicionales.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 flex flex-col sm:flex-row gap-6 hover:border-cyan-500/30 transition group">
                                    <div className="bg-cyan-500/10 p-4 rounded-lg flex items-center justify-center text-cyan-400 w-16 h-16 shrink-0 group-hover:scale-110 transition-transform">
                                        <Network size={28} />
                                    </div>
                                    <div>
                                        <h5 className="text-lg font-bold text-white mb-2">Gestión de Grupos Económicos</h5>
                                        <p className="text-slate-400 text-sm mb-3">
                                            Análisis de relaciones complejas entre personas y organizaciones. Seguimiento unificado de grupos formales e informales que operan en conjunto con el Sujeto Obligado.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 flex flex-col sm:flex-row gap-6 hover:border-cyan-500/30 transition group">
                                    <div className="bg-cyan-500/10 p-4 rounded-lg flex items-center justify-center text-cyan-400 w-16 h-16 shrink-0 group-hover:scale-110 transition-transform">
                                        <Zap size={28} />
                                    </div>
                                    <div>
                                        <h5 className="text-lg font-bold text-white mb-2">Screening & Automatización</h5>
                                        <p className="text-slate-400 text-sm mb-3">
                                            Cruce automático contra bases de Terroristas (ONU, OFAC, RePET) y PEPs. Enriquecimiento con fuentes abiertas (OSINT) para un Due Diligence exhaustivo sin carga operativa manual.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 4. e-FIDUCIA: FIDUCIARIO (Púrpura/Purple) */}
                    <div className="relative">
                        <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-purple-500/10 blur-3xl rounded-full"></div>
                        <div className="flex flex-col md:flex-row items-baseline gap-4 mb-10 border-b border-slate-800 pb-4 relative z-10">
                            <h3 className="text-3xl font-bold text-white flex items-center gap-3">
                                <span className="p-2 rounded-lg bg-purple-500/10 text-purple-400"><Landmark size={32} /></span>
                                e-FIDUCIA.core <span className="text-slate-500 text-2xl font-normal">| Sistema Core Fiduciario</span>
                            </h3>
                            <p className="text-purple-400 font-medium ml-auto">Administración Fiduciaria End-to-End</p>
                        </div>

                        {/* Storytelling e-FIDUCIA (Mejorado) */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                            {/* Columna Izquierda: Storytelling */}
                            <div className="lg:col-span-4 flex flex-col justify-center">
                                <h4 className="text-2xl font-bold text-white mb-4">
                                    Potencia y flexibilidad para el Administrador Fiduciario.
                                </h4>
                                <p className="text-slate-400 mb-8 leading-relaxed">
                                    e-FIDUCIA.core no es solo un sistema de registro; es una plataforma de gestión integral que automatiza la operación diaria, desde la estructuración financiera hasta la rendición de cuentas.
                                </p>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 text-sm text-slate-300">
                                        <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 shrink-0"><Server size={16}/></div>
                                        <span>Web Nativa & Cloud Ready</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-slate-300">
                                        <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 shrink-0"><Database size={16}/></div>
                                        <span>Multi-Base de Datos</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-slate-300">
                                        <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 shrink-0"><Shield size={16}/></div>
                                        <span>Seguridad basada en Roles</span>
                                    </div>
                                </div>
                            </div>

                            {/* Columna Derecha: Módulos Detallados */}
                            <div className="lg:col-span-8 space-y-4">
                                <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 flex flex-col sm:flex-row gap-6 hover:border-purple-500/30 transition group">
                                    <div className="bg-purple-500/10 p-4 rounded-lg flex items-center justify-center text-purple-400 w-16 h-16 shrink-0 group-hover:scale-110 transition-transform">
                                        <Briefcase size={28} />
                                    </div>
                                    <div>
                                        <h5 className="text-lg font-bold text-white mb-2">Originación y Administración</h5>
                                        <p className="text-slate-400 text-sm mb-3">
                                            Gestión de "prospects" y eventos previos al inicio. Administración centralizada de contratos, seguros, garantías y trazabilidad total de participantes (Fiduciantes, Beneficiarios, Clientes).
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 flex flex-col sm:flex-row gap-6 hover:border-purple-500/30 transition group">
                                    <div className="bg-purple-500/10 p-4 rounded-lg flex items-center justify-center text-purple-400 w-16 h-16 shrink-0 group-hover:scale-110 transition-transform">
                                        <Coins size={28} />
                                    </div>
                                    <div>
                                        <h5 className="text-lg font-bold text-white mb-2">Ingeniería Financiera</h5>
                                        <p className="text-slate-400 text-sm mb-3">
                                            Soporte total para Fideicomisos Financieros: emisión de deuda, gestión de títulos y cálculo automático de amortizaciones (Francés, Alemán, Americano) e inversiones.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 flex flex-col sm:flex-row gap-6 hover:border-purple-500/30 transition group">
                                    <div className="bg-purple-500/10 p-4 rounded-lg flex items-center justify-center text-purple-400 w-16 h-16 shrink-0 group-hover:scale-110 transition-transform">
                                        <ScrollText size={28} />
                                    </div>
                                    <div>
                                        <h5 className="text-lg font-bold text-white mb-2">Contabilidad Automática</h5>
                                        <p className="text-slate-400 text-sm mb-3">
                                            Motor contable inteligente que genera asientos automáticos a partir de la operación. Libros diarios, mayores y balances multimoneda en tiempo real sin carga manual.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-purple-900/20 border-t border-purple-500/20 p-4 text-center mt-8 rounded-b-2xl">
                            <p className="text-purple-300 text-sm font-medium">
                                Utilizado para administrar el ciclo de vida completo de fideicomisos públicos y privados de alta complejidad.
                            </p>
                        </div>
                    </div>

                </div>

                <div className="mt-24 text-center">
                    <a href="#contacto" className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-full text-slate-900 bg-white hover:bg-gray-100 transition shadow-2xl hover:shadow-white/20 transform hover:-translate-y-1">
                        Solicitar Demo Técnica
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Products;