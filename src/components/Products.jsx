import React from 'react';
import { 
    Shield, AlertTriangle, Lock, Landmark, Check, 
    Server, TrendingUp, Search, FileText, 
    Users, PieChart, RefreshCw, Globe, Scale,
    BarChart3, BrainCircuit, ClipboardCheck,
    LayoutDashboard, BookOpenCheck, Activity,
    ScanFace, Network, Zap,
    Coins, Briefcase, ScrollText, FileCheck2,
    ArrowRight,
    ListChecks,
    FolderOpenDot // Icono para Papeles de Trabajo
} from 'lucide-react';

const Products = () => {
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
                    
                    {/* ========================================= */}
                    {/* 1. e-ACM: AUDITORÍA (Verde/Lime) */}
                    {/* ========================================= */}
                    <div className="relative">
                        <div className="flex flex-col md:flex-row items-baseline gap-4 mb-8 border-b border-slate-800 pb-4">
                            <h3 className="text-3xl font-bold text-white flex items-center gap-3">
                                <span className="p-2 rounded-lg bg-lime-500/10 text-lime-400"><Shield size={32} /></span>
                                e-ACM.core <span className="text-slate-500 text-2xl font-normal">| Audit Control Manager</span>
                            </h3>
                            <p className="text-lime-400 font-medium ml-auto">Líder en Auditoría Continua</p>
                        </div>
                        
                        {/* Storytelling */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
                            <div className="lg:col-span-4 flex flex-col justify-center">
                                <h4 className="text-2xl font-bold text-white mb-4">
                                    Evolución tecnológica para la Auditoría Interna.
                                </h4>
                                <p className="text-slate-400 mb-8 leading-relaxed">
                                    Diseñada para la excelencia operativa, <strong>e-ACM.core</strong> digitaliza el proceso de auditoría de punta a punta. Facilita la planificación basada en riesgos, la ejecución estandarizada y el seguimiento automático de hallazgos.
                                </p>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 text-sm text-slate-300">
                                        <div className="w-8 h-8 rounded-full bg-lime-500/10 flex items-center justify-center text-lime-400 shrink-0"><Activity size={16}/></div>
                                        <span>Auditoría Continua (No Presencial)</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-slate-300">
                                        <div className="w-8 h-8 rounded-full bg-lime-500/10 flex items-center justify-center text-lime-400 shrink-0"><FolderOpenDot size={16}/></div>
                                        <span>Papeles de Trabajo Digitales</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-slate-300">
                                        <div className="w-8 h-8 rounded-full bg-lime-500/10 flex items-center justify-center text-lime-400 shrink-0"><ListChecks size={16}/></div>
                                        <span>Gestión Integral del Ciclo de Vida</span>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:col-span-8 space-y-4">
                                <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 flex flex-col sm:flex-row gap-6 hover:border-lime-500/30 transition group">
                                    <div className="bg-lime-500/10 p-4 rounded-lg flex items-center justify-center text-lime-400 w-16 h-16 shrink-0 group-hover:scale-110 transition-transform">
                                        <ClipboardCheck size={28} />
                                    </div>
                                    <div>
                                        <h5 className="text-lg font-bold text-white mb-2">Estandarización Metodológica</h5>
                                        <p className="text-slate-400 text-sm mb-3">
                                            Centralice todo el proceso: desde la Planificación Anual y asignación de recursos, hasta la ejecución de programas de trabajo, documentación de evidencias y emisión de informes.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 flex flex-col sm:flex-row gap-6 hover:border-lime-500/30 transition group">
                                    <div className="bg-lime-500/10 p-4 rounded-lg flex items-center justify-center text-lime-400 w-16 h-16 shrink-0 group-hover:scale-110 transition-transform">
                                        <BarChart3 size={28} />
                                    </div>
                                    <div>
                                        <h5 className="text-lg font-bold text-white mb-2">Análisis de Datos & Control</h5>
                                        <p className="text-slate-400 text-sm mb-3">
                                            Herramientas de monitoreo dinámico para detectar anomalías y excepciones en tiempo real. Auditoría basada en datos (Data-Driven) para superar las limitaciones del muestreo tradicional.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 flex flex-col sm:flex-row gap-6 hover:border-lime-500/30 transition group">
                                    <div className="bg-lime-500/10 p-4 rounded-lg flex items-center justify-center text-lime-400 w-16 h-16 shrink-0 group-hover:scale-110 transition-transform">
                                        <TrendingUp size={28} />
                                    </div>
                                    <div>
                                        <h5 className="text-lg font-bold text-white mb-2">Trazabilidad & Seguimiento</h5>
                                        <p className="text-slate-400 text-sm mb-3">
                                            Registro inalterable de la actividad del auditor. Workflow automatizado para el seguimiento de observaciones, planes de acción y compromisos con los auditados.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Planes Cards e-ACM */}
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                            {[
                                { name: 'Básico Pro', features: ['Auditoría y seguimiento', 'Muestreo básico', 'Respuestas de auditados', 'Soporte Mesa de Ayuda (48hs)'] },
                                { name: 'Avanzado', features: ['Todo lo de Básico Pro', 'Planificación Estándar', 'Matriz de Riesgo & Time Reports', '3 Reportes Customizados', 'Soporte + 10hs/mes'], highlight: true },
                                { name: 'Premium', features: ['Todo lo de Avanzado', 'Matriz de Riesgos Dinámica', 'Muestreo Avanzado', 'Autoevaluación de Auditados', '5 Reportes Custom', 'Soporte + 20hs/mes'] },
                                { name: 'Auditoría 360', features: ['Todo lo de Premium', 'Inteligencia Artificial', 'Data Analytics', '10 Reportes Customizados', 'Soporte + 40hs/mes'] }
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
                                    <div className="mt-6 pt-4 border-t border-slate-800/50 flex justify-end">
                                        <a href="#contacto" className="flex items-center gap-1 text-slate-500 text-xs hover:text-white transition group">
                                            Consultar valor <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform"/>
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ========================================= */}
                    {/* 2. e-ACR: RIESGOS (Naranja/Amber) */}
                    {/* ========================================= */}
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
                                    <strong>e-ACR.core</strong> integra las verticales críticas de riesgo (Operacional, Tecnológico y Crediticio) bajo un mismo estándar de control, alineando su organización con normativas internacionales.
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

                        {/* Planes Cards e-ACR */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { name: 'Risk Essentials', features: ['Foco: Riesgo Operativo (e-ACM.rsk)', 'Matriz de Calor & Mapa de Riesgos', 'Reporte de Incidentes', 'Soporte Estándar (48hs)'] },
                                { name: 'Risk Professional', features: ['Todo lo de Essentials', 'Foco: Riesgo Tecnológico (e-ACM.rit)', 'Inventario de Activos IT & Vulnerabilidades', 'Normativa ISO 27005', 'Soporte + 10hs Consultoría'], highlight: true },
                                { name: 'Integral Suite', features: ['Todo lo de Professional', 'Foco: Riesgo Crediticio (e-CLM.net)', 'Scoring Crediticio & Mora', 'Tablero Integral 360°', 'Soporte + 20hs Consultoría'] }
                            ].map((plan, idx) => (
                                <div key={idx} className={`relative p-6 rounded-2xl border flex flex-col hover:transform hover:-translate-y-1 transition duration-300 ${plan.highlight ? 'border-amber-500 bg-amber-500/5 shadow-[0_0_30px_rgba(245,158,11,0.15)]' : 'border-slate-800 bg-slate-900/50'} hover:border-amber-500/50`}>
                                    {plan.highlight && <div className="absolute top-0 right-0 bg-amber-600 text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg rounded-tr-2xl">RECOMENDADO</div>}
                                    <h4 className="text-xl font-bold text-white mb-4">{plan.name}</h4>
                                    <ul className="space-y-3 flex-grow">
                                        {plan.features.map((f, i) => (
                                            <li key={i} className="flex items-start text-sm text-slate-300">
                                                <Check size={16} className="text-amber-500 mr-2 mt-0.5 shrink-0" />
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mt-6 pt-4 border-t border-slate-800/50 flex justify-end">
                                        <a href="#contacto" className="flex items-center gap-1 text-slate-500 text-xs hover:text-white transition group">
                                            Consultar valor <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform"/>
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ========================================= */}
                    {/* 3. e-CML: LAVADO DE ACTIVOS (Cian/Cyan) */}
                    {/* ========================================= */}
                    <div className="relative">
                        <div className="flex flex-col md:flex-row items-baseline gap-4 mb-10 border-b border-slate-800 pb-4">
                            <h3 className="text-3xl font-bold text-white flex items-center gap-3">
                                <span className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400"><Lock size={32} /></span>
                                e-CML.core <span className="text-slate-500 text-2xl font-normal">| Control Money Laundry</span>
                            </h3>
                            <p className="text-cyan-400 font-medium ml-auto">Cumplimiento Normativo (PLA/FT)</p>
                        </div>

                        {/* Storytelling e-CML */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
                            <div className="lg:col-span-4 flex flex-col justify-center">
                                <h4 className="text-2xl font-bold text-white mb-4">
                                    Inteligencia aplicada a la prevención de delitos financieros.
                                </h4>
                                <p className="text-slate-400 mb-8 leading-relaxed">
                                    Cumpla con las normativas de la UIF y estándares internacionales. <strong>e-CML.core</strong> integra monitoreo transaccional, calificación de riesgo y listas restrictivas en un solo ecosistema.
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
                                        <span>Monitoreo Transaccional</span>
                                    </div>
                                </div>
                            </div>

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

                        {/* Planes Cards e-CML */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { name: 'Client Compliance', features: ['Cruce individual/masivo de clientes', 'Legajo Digital de Cliente', 'Importación Masiva de Datos', 'Listas PFT: RePET y ONU'] },
                                { name: 'Due Diligence', features: ['Todo lo de Client Compliance', 'Importación Masiva de Operaciones', 'Alertas Tempranas Estándar', 'Matriz de Riesgo Estándar'], highlight: true },
                                { name: 'Full Compliance', features: ['Todo lo de Due Diligence', 'Seguimiento de Casos', 'Actualización Automática de Listas', 'Modelos Predictivos', 'Actualización Normativa'] }
                            ].map((plan, idx) => (
                                <div key={idx} className={`relative p-6 rounded-2xl border flex flex-col hover:transform hover:-translate-y-1 transition duration-300 ${plan.highlight ? 'border-cyan-500 bg-cyan-500/5 shadow-[0_0_30px_rgba(6,182,212,0.15)]' : 'border-slate-800 bg-slate-900/50'} hover:border-cyan-500/50`}>
                                    {plan.highlight && <div className="absolute top-0 right-0 bg-cyan-600 text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg rounded-tr-2xl">RECOMENDADO</div>}
                                    <h4 className="text-xl font-bold text-white mb-4">{plan.name}</h4>
                                    <ul className="space-y-3 flex-grow">
                                        {plan.features.map((f, i) => (
                                            <li key={i} className="flex items-start text-sm text-slate-300">
                                                <Check size={16} className="text-cyan-500 mr-2 mt-0.5 shrink-0" />
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mt-6 pt-4 border-t border-slate-800/50 flex justify-end">
                                        <a href="#contacto" className="flex items-center gap-1 text-slate-500 text-xs hover:text-white transition group">
                                            Consultar valor <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform"/>
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ========================================= */}
                    {/* 4. e-FIDUCIA: FIDUCIARIO (Púrpura/Purple) */}
                    {/* ========================================= */}
                    <div className="relative">
                        <div className="flex flex-col md:flex-row items-baseline gap-4 mb-10 border-b border-slate-800 pb-4 relative z-10">
                            <h3 className="text-3xl font-bold text-white flex items-center gap-3">
                                <span className="p-2 rounded-lg bg-purple-500/10 text-purple-400"><Landmark size={32} /></span>
                                e-FIDUCIA.core <span className="text-slate-500 text-2xl font-normal">| Sistema Core Fiduciario</span>
                            </h3>
                            <p className="text-purple-400 font-medium ml-auto">Administración End-to-End</p>
                        </div>

                        {/* Storytelling e-FIDUCIA */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
                            <div className="lg:col-span-4 flex flex-col justify-center">
                                <h4 className="text-2xl font-bold text-white mb-4">
                                    Potencia y flexibilidad para el Administrador Fiduciario.
                                </h4>
                                <p className="text-slate-400 mb-8 leading-relaxed">
                                    <strong>e-FIDUCIA.core</strong> no es solo un sistema de registro; es una plataforma de gestión integral que automatiza la operación diaria, desde la estructuración financiera hasta la rendición de cuentas.
                                </p>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 text-sm text-slate-300">
                                        <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 shrink-0"><ScanFace size={16}/></div>
                                        <span>Gestión de Prospects (Originación)</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-slate-300">
                                        <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 shrink-0"><Coins size={16}/></div>
                                        <span>Emisión de Deuda</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-slate-300">
                                        <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 shrink-0"><FileCheck2 size={16}/></div>
                                        <span>Motor Contable Automático</span>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:col-span-8 space-y-4">
                                <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 flex flex-col sm:flex-row gap-6 hover:border-purple-500/30 transition group">
                                    <div className="bg-purple-500/10 p-4 rounded-lg flex items-center justify-center text-purple-400 w-16 h-16 shrink-0 group-hover:scale-110 transition-transform">
                                        <Briefcase size={28} />
                                    </div>
                                    <div>
                                        <h5 className="text-lg font-bold text-white mb-2">Administración del Ciclo de Vida</h5>
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
                                        <h5 className="text-lg font-bold text-white mb-2">Ingeniería Financiera y Deuda</h5>
                                        <p className="text-slate-400 text-sm mb-3">
                                            Soporte nativo para Fideicomisos Financieros: emisión de deuda, gestión de títulos, cálculo automático de amortizaciones (Francés, Alemán, Americano) y gestión de inversiones.
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

                        {/* Planes Cards e-FIDUCIA */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                            {[
                                { name: 'Fides Lite', features: ['Hasta 5 Fideicomisos', 'Administración de Activos', 'Gestión de Pagos (sin impuestos)', 'Contabilidad Básica', '1 Reporte Customizado', 'Soporte vía Email (48hs)'] },
                                { name: 'Fiducia Plus', features: ['Fideicomisos Ilimitados', 'e-Fiducia.core Completo', 'Gestión Financiera Avanzada', 'Hasta 5 Reportes Custom', 'Soporte Prioritario'], highlight: true }
                            ].map((plan, idx) => (
                                <div key={idx} className={`relative p-6 rounded-2xl border flex flex-col hover:transform hover:-translate-y-1 transition duration-300 ${plan.highlight ? 'border-purple-500 bg-purple-500/5 shadow-[0_0_30px_rgba(168,85,247,0.15)]' : 'border-slate-800 bg-slate-900/50'} hover:border-purple-500/50`}>
                                    {plan.highlight && <div className="absolute top-0 right-0 bg-purple-600 text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg rounded-tr-2xl">RECOMENDADO</div>}
                                    <h4 className="text-xl font-bold text-white mb-4">{plan.name}</h4>
                                    <ul className="space-y-3 flex-grow">
                                        {plan.features.map((f, i) => (
                                            <li key={i} className="flex items-start text-sm text-slate-300">
                                                <Check size={16} className="text-purple-500 mr-2 mt-0.5 shrink-0" />
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mt-6 pt-4 border-t border-slate-800/50 flex justify-end">
                                        <a href="#contacto" className="flex items-center gap-1 text-slate-500 text-xs hover:text-white transition group">
                                            Consultar valor <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform"/>
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        <div className="bg-purple-900/20 border-t border-purple-500/20 p-4 text-center mt-8 rounded-2xl">
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