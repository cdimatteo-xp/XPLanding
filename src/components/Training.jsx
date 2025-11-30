import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
    GraduationCap, Users, Video, Award, 
    ArrowRight, FileBadge, X, CheckCircle2,
    CalendarRange, MapPin, Laptop, MonitorPlay,
    BarChart3, ShieldCheck, Calculator, Search,
    BookOpen, AlertOctagon, Gavel, Fingerprint,
    ShieldAlert, Landmark, ScanFace,
    ArrowLeft
} from 'lucide-react';

const Training = () => {
    const [activeTab, setActiveTab] = useState('presencial');
    const [selectedCourse, setSelectedCourse] = useState(null);

    const categories = [
        { id: 'presencial', label: 'Formación Especializada', icon: <Users size={18} /> },
        { id: 'online', label: 'Capacitación Remota', icon: <Video size={18} /> },
        { id: 'product', label: 'Software Academy', icon: <Award size={18} /> }
    ];

    const courses = {
        presencial: [
            {
                title: "Fraud Risk Management",
                mode: "Presencial",
                status: "Inscripción Abierta",
                statusColor: "text-green-700 bg-green-50 border-green-100",
                category: "Riesgos",
                categoryIcon: <ShieldAlert size={14} />,
                desc: "Estrategias integrales para la identificación, evaluación y mitigación del riesgo de fraude corporativo y diseño de programas antifraude.",
                tags: ["Riesgos", "Fraude"],
                content: [
                    "Definición y tipologías de fraude corporativo.",
                    "El triángulo del fraude y factores de riesgo.",
                    "Diseño de programas antifraude y controles preventivos.",
                    "Investigación de fraude: técnicas y herramientas.",
                    "Rol de la auditoría interna y el oficial de cumplimiento."
                ]
            },
            {
                title: "Investigación de Operaciones Sospechosas",
                mode: "Presencial",
                status: "Cupos Limitados",
                statusColor: "text-amber-700 bg-amber-50 border-amber-100",
                category: "PLD/FT",
                categoryIcon: <Search size={14} />,
                desc: "Metodología práctica para el análisis, investigación y resolución de casos de lavado de dinero y confección de reportes (ROS).",
                tags: ["PLD/FT", "Operativo"],
                content: [
                    "Detección de señales de alerta y patrones inusuales.",
                    "Proceso de debida diligencia reforzada.",
                    "Técnicas de investigación y recolección de evidencia.",
                    "Confección y fundamentación de Reportes de Operaciones Sospechosas (ROS).",
                    "Casos prácticos y jurisprudencia reciente."
                ]
            },
            {
                title: "Práctica del Principio 'Conozca su Cliente' (KYC)",
                mode: "Presencial",
                status: "Próxima Fecha: Octubre",
                statusColor: "text-blue-700 bg-blue-50 border-blue-100",
                category: "Compliance",
                categoryIcon: <ScanFace size={14} />,
                desc: "Aplicación práctica operativa y comercial de las políticas de identificación y conocimiento del cliente según normativas vigentes.",
                tags: ["KYC", "Onboarding"],
                content: [
                    "El proceso de vinculación de clientes y la matriz de riesgo.",
                    "Identificación del Beneficiario Final.",
                    "Monitoreo transaccional basado en el perfil del cliente.",
                    "Tratamiento de Personas Expuestas Políticamente (PEPs).",
                    "Actualización de legajos y debida diligencia continua."
                ]
            },
            {
                title: "Auditoría del Proceso de PLD",
                mode: "Presencial",
                status: "Inscripción Abierta",
                statusColor: "text-green-700 bg-green-50 border-green-100",
                category: "Auditoría",
                categoryIcon: <FileBadge size={14} />,
                desc: "Herramientas y técnicas de control para que auditores internos revisen eficazmente el sistema de prevención de lavado.",
                tags: ["Auditoría", "Control Interno"],
                content: [
                    "Planificación de la auditoría de cumplimiento PLD/FT.",
                    "Evaluación del enfoque basado en riesgos del sujeto obligado.",
                    "Pruebas de controles y validación de sistemas de monitoreo.",
                    "Revisión de legajos y matriz de riesgo.",
                    "Informe del Revisor Externo Independiente."
                ]
            },
            {
                title: "Fraude Bancario y Financiero",
                mode: "Presencial",
                status: "A Confirmar",
                statusColor: "text-slate-600 bg-slate-50 border-slate-200",
                category: "Seguridad",
                categoryIcon: <Landmark size={14} />,
                desc: "Análisis de las modalidades de fraude específicas del sector financiero y estrategias de ciberseguridad y prevención.",
                tags: ["Banca", "Ciberdelito"],
                content: [
                    "Tipologías de fraude en medios de pago electrónicos.",
                    "Ingeniería social, phishing y vishing.",
                    "Fraude en el otorgamiento de créditos.",
                    "Seguridad en canales digitales y home banking.",
                    "Protocolos de respuesta ante incidentes de fraude externo."
                ]
            },
            {
                title: "Responsabilidad Penal y Civil",
                mode: "Presencial",
                status: "Cupos Limitados",
                statusColor: "text-amber-700 bg-amber-50 border-amber-100",
                category: "Legal",
                categoryIcon: <AlertOctagon size={14} />,
                desc: "Marco legal y prevención de riesgos jurídicos para oficiales de cumplimiento, directores y síndicos frente al lavado de dinero.",
                tags: ["Legal", "Directivos"],
                content: [
                    "Régimen penal administrativo de la Ley 25.246.",
                    "Responsabilidad solidaria de directores y oficiales de cumplimiento.",
                    "Sanciones de la UIF y precedentes judiciales.",
                    "El deber de colaboración y el deber de reserva.",
                    "Estrategias de defensa y mitigación de responsabilidad."
                ]
            },
            {
                title: "Prevención de Daños y Perjuicios",
                mode: "Presencial",
                status: "Inscripción Abierta",
                statusColor: "text-green-700 bg-green-50 border-green-100",
                category: "Legal",
                categoryIcon: <AlertOctagon size={14} />,
                desc: "Gestión de riesgos legales y reputacionales derivados de denuncias de operaciones sospechosas y cierres de cuentas.",
                tags: ["Reputacional", "Litigios"],
                content: [
                    "Confidencialidad del reporte de operación sospechosa.",
                    "Defensa ante reclamos de clientes reportados.",
                    "Jurisprudencia sobre daños y perjuicios por reportes erróneos.",
                    "El derecho de admisión vs. obligación de contratar.",
                    "Protección legal del sujeto obligado."
                ]
            },
            {
                title: "Investigación del Fraude Interno",
                mode: "Presencial",
                status: "Próxima Fecha: Noviembre",
                statusColor: "text-blue-700 bg-blue-50 border-blue-100",
                category: "Forense",
                categoryIcon: <Fingerprint size={14} />,
                desc: "Metodología para la detección e investigación de ilícitos cometidos por empleados o directivos dentro de la organización.",
                tags: ["Fraude Interno", "RRHH"],
                content: [
                    "Perfiles del defraudador interno y señales de alerta.",
                    "Esquemas de apropiación indebida de activos.",
                    "Corrupción y conflicto de intereses.",
                    "Técnicas de entrevista y recolección de evidencia interna.",
                    "Aspectos legales de la desvinculación laboral con causa."
                ]
            },
            {
                title: "Usurpación de Identidad y Fraudes Crediticios",
                mode: "Presencial",
                status: "Inscripción Abierta",
                statusColor: "text-green-700 bg-green-50 border-green-100",
                category: "Riesgos",
                categoryIcon: <ShieldAlert size={14} />,
                desc: "Prevención y detección de administración fraudulenta, infidelidad defraudatoria y robo de identidad en procesos de crédito.",
                tags: ["Fraude", "Créditos"],
                content: [
                    "Modalidades de usurpación de identidad (física y digital).",
                    "Validación de identidad y biometría.",
                    "Carpeta de crédito apócrifa: detección documental.",
                    "La figura de administración fraudulenta e infidelidad.",
                    "Tecnologías para la prevención del fraude de identidad."
                ]
            }
        ],
        online: [
            {
                title: "Audit Data Analytics",
                mode: "Online (Asincrónico)",
                status: "Inicio Inmediato",
                statusColor: "text-green-700 bg-green-50 border-green-100",
                category: "Tecnología",
                categoryIcon: <BarChart3 size={14} />,
                desc: "Uso de técnicas de análisis de datos masivos para modernizar la función de auditoría y detectar patrones ocultos.",
                tags: ["Big Data", "Tecnología"],
                content: [
                    "Introducción al análisis de datos en auditoría.",
                    "Herramientas de CAATs (Computer Assisted Audit Techniques).",
                    "Identificación de anomalías y outliers en bases de datos.",
                    "Muestreo vs. Auditoría de población completa.",
                    "Visualización de datos para informes de auditoría."
                ]
            },
            {
                title: "Muestreo Estadístico para Auditoría",
                mode: "Online (Asincrónico)",
                status: "Inicio Inmediato",
                statusColor: "text-green-700 bg-green-50 border-green-100",
                category: "Metodología",
                categoryIcon: <Calculator size={14} />,
                desc: "Fundamentos matemáticos y aplicación práctica de técnicas de muestreo para validación de controles y pruebas sustantivas.",
                tags: ["Estadística", "Metodología"],
                content: [
                    "Muestreo estadístico vs. no estadístico.",
                    "Determinación del tamaño de la muestra: nivel de confianza y precisión.",
                    "Selección de la muestra: aleatoria, sistemática, estratificada.",
                    "Evaluación de resultados y proyección de errores a la población.",
                    "Documentación de la evidencia de muestreo."
                ]
            },
            {
                title: "Pérdida Esperada Crediticia",
                mode: "Online (Asincrónico)",
                status: "Inicio Inmediato",
                statusColor: "text-green-700 bg-green-50 border-green-100",
                category: "Riesgos",
                categoryIcon: <BarChart3 size={14} />,
                desc: "Modelado y cálculo de previsiones bajo normativas internacionales (IFRS 9) y locales para entidades financieras.",
                tags: ["Riesgo Crédito", "Finanzas"],
                content: [
                    "Conceptos clave de IFRS 9 y normas BCRA sobre previsiones.",
                    "Modelos de Probabilidad de Default (PD), LGD y EAD.",
                    "Segmentación de cartera y stages de riesgo (1, 2 y 3).",
                    "Validación de modelos de pérdida esperada.",
                    "Impacto contable y gestión de capital."
                ]
            }
        ],
        product: [
            {
                title: "Gestión de Alertas PLD",
                mode: "In-Company / Remoto",
                status: "A Demanda",
                statusColor: "text-purple-700 bg-purple-50 border-purple-100",
                category: "e-CML.core",
                categoryIcon: <ShieldCheck size={14} />,
                desc: "Capacitación técnica para analistas de monitoreo. Aprenda a configurar reglas, gestionar falsos positivos y documentar casos en e-CML.core.",
                tags: ["Gestión de Alertas", "Matriz de Riesgo"],
                content: [
                    "Parametrización de reglas de monitoreo y umbrales de riesgo.",
                    "Gestión del flujo de trabajo de alertas: análisis y cierre.",
                    "Configuración de la Matriz de Riesgo y ponderación de factores.",
                    "Uso del módulo de Screening contra listas (Terroristas/PEPs).",
                    "Generación de reportes para la UIF y auditoría interna."
                ]
            },
            {
                title: "Planificación y Papeles de Trabajo ",
                mode: "In-Company / Remoto",
                status: "A Demanda",
                statusColor: "text-purple-700 bg-purple-50 border-purple-100",
                category: "e-ACM.core",
                categoryIcon: <BarChart3 size={14} />,
                desc: "Domine el ciclo completo de auditoría en e-ACM.core. Desde la planificación basada en riesgos hasta la gestión de hallazgos y seguimiento.",
                tags: ["Planificación", "Muestreo"],
                content: [
                    "Configuración del universo auditable y mapa de riesgos.",
                    "Creación y asignación del Plan Anual de Auditoría.",
                    "Ejecución de programas de trabajo y carga de evidencias digitales.",
                    "Gestión de observaciones, informes y seguimiento de planes de acción.",
                    "Uso de tableros de control para la gestión del área."
                ]
            },
            {
                title: "Administración Fiduciaria",
                mode: "In-Company / Remoto",
                status: "A Demanda",
                statusColor: "text-purple-700 bg-purple-50 border-purple-100",
                category: "e-FIDUCIA.core",
                categoryIcon: <Calculator size={14} />,
                desc: "Operación integral del sistema fiduciario. Configuración de negocios, gestión de cobranzas, pagos y motor contable automático con e-FIDUCIA.core.",
                tags: ["Contabilidad", "Reporting"],
                content: [
                    "Alta de prospectos y configuración de nuevos fideicomisos.",
                    "Gestión de participantes (Fiduciantes, Beneficiarios) y contratos.",
                    "Operaciones de tesorería, conciliación bancaria y pagos.",
                    "Configuración del motor contable y generación automática de asientos.",
                    "Liquidación de fideicomisos y reportes de rendición de cuentas."
                ]
            }
        ]
    };

    return (
        <section id="capacitacion" className="py-24 bg-slate-50 relative overflow-hidden min-h-screen">
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-8">
                <div className="mb-8">
                    <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                        <ArrowLeft size={20} className="mr-2" />
                        Volver al Inicio
                    </Link>
                </div>

                {/* Header Académico */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-sm font-bold uppercase tracking-wide mb-6 border border-indigo-100">
                        <GraduationCap size={20} />
                        X Project Academy
                    </div>
                    <h2 className="text-3xl font-extrabold text-slate-900 sm:text-5xl mb-6">
                        Formación Ejecutiva y Técnica
                    </h2>
                    <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
                        No solo implementamos tecnología; transferimos el <strong>know-how</strong> necesario para que su equipo domine las metodologías de gestión de riesgos, fraude y auditoría.
                    </p>
                </div>

                {/* Selector de Categorías (Tabs) */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveTab(cat.id)}
                            className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 border ${
                                activeTab === cat.id
                                    ? 'bg-slate-900 text-white border-slate-900 shadow-lg scale-105'
                                    : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                            }`}
                        >
                            {cat.icon}
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Grid de Cursos */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up">
                    {courses[activeTab].map((course, idx) => (
                        <div 
                            key={idx} 
                            className="group bg-white rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 flex flex-col h-full relative overflow-hidden cursor-pointer"
                            onClick={() => setSelectedCourse(course)}
                        >
                            {/* Top Gradient Line on Hover */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

                            <div className="p-6 flex flex-col h-full">
                                
                                {/* Header de la Card: Categoría + Modalidad */}
                                <div className="flex justify-between items-start mb-4">
                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                                        {course.categoryIcon}
                                        {course.category}
                                    </span>
                                    
                                    {/* Badge de Modalidad (Icono + Texto) */}
                                    <div className="flex items-center gap-1.5 text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-lg border border-blue-100">
                                        {course.mode.includes('Presencial') && <MapPin size={12} />}
                                        {course.mode.includes('Online') && <Laptop size={12} />}
                                        {course.mode.includes('In-Company') && <Users size={12} />}
                                        <span>{course.mode.split(' ')[0]}</span>
                                    </div>
                                </div>

                                <h3 className="text-lg font-bold text-slate-900 mb-3 leading-snug group-hover:text-blue-700 transition-colors min-h-[3.5rem]">
                                    {course.title}
                                </h3>
                                
                                <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                                    {course.desc}
                                </p>

                                {/* Footer de la Card: Estado + CTA */}
                                <div className="mt-auto pt-4 border-t border-slate-100 space-y-3">
                                    
                                    {/* Status Bar */}
                                    <div className="flex justify-between items-center">
                                        <div className={`inline-flex items-center gap-1.5 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wide border ${course.statusColor}`}>
                                            <CalendarRange size={12} />
                                            {course.status}
                                        </div>
                                    </div>

                                    <button 
                                        onClick={() => setSelectedCourse(course)}
                                        className="flex items-center justify-between w-full px-4 py-2 bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-blue-700 rounded-lg text-sm font-bold transition-colors group/btn"
                                    >
                                        <span>Ver Temario</span>
                                        <ArrowRight size={16} className="text-slate-400 group-hover/btn:text-blue-600 group-hover/btn:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            {/* --- MODAL DE CURSO --- */}
            {selectedCourse && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
                    <div 
                        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
                        onClick={() => setSelectedCourse(null)}
                    ></div>

                    <div className="bg-white rounded-2xl w-full max-w-2xl shadow-2xl overflow-hidden relative z-10 animate-fade-in-up flex flex-col max-h-[90vh]">
                        {/* Modal Header */}
                        <div className="bg-slate-50 px-8 py-6 border-b border-slate-100 flex justify-between items-start shrink-0">
                            <div className="pr-8">
                                <div className={`inline-flex items-center gap-2 px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wide mb-3 border ${selectedCourse.statusColor}`}>
                                    <CalendarRange size={12} />
                                    {selectedCourse.status}
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 leading-tight">{selectedCourse.title}</h3>
                            </div>
                            <button 
                                onClick={() => setSelectedCourse(null)}
                                className="p-2 -mr-2 text-slate-400 hover:text-slate-600 hover:bg-slate-200/50 rounded-full transition-colors"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Modal Body */}
                        <div className="p-8 overflow-y-auto">
                            <div className="mb-8">
                                <p className="text-lg text-slate-600 leading-relaxed">
                                    {selectedCourse.desc}
                                </p>
                            </div>

                            <div>
                                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-4 flex items-center gap-2">
                                    <FileBadge size={18} className="text-blue-500"/> 
                                    Temario del Programa
                                </h4>
                                <ul className="grid gap-3">
                                    {selectedCourse.content.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 border border-slate-100 text-slate-700 text-sm">
                                            <CheckCircle2 size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Modal Footer */}
                        <div className="px-8 py-5 bg-white border-t border-slate-100 flex justify-between items-center shrink-0">
                            <div className="hidden sm:flex items-center gap-2 text-xs text-slate-500 font-medium">
                                <MapPin size={14} className="text-blue-500" />
                                Modalidad: {selectedCourse.mode}
                            </div>
                            <div className="flex gap-3 w-full sm:w-auto">
                                <button 
                                    onClick={() => setSelectedCourse(null)}
                                    className="flex-1 sm:flex-none px-5 py-2.5 text-slate-600 font-bold hover:bg-slate-50 rounded-lg transition-colors border border-transparent hover:border-slate-200"
                                >
                                    Cerrar
                                </button>
                                <Link 
                                    to="/contacto"
                                    onClick={() => setSelectedCourse(null)}
                                    className="flex-1 sm:flex-none px-6 py-2.5 bg-slate-900 text-white font-bold rounded-lg hover:bg-blue-600 transition-colors shadow-lg hover:shadow-blue-600/20 flex items-center justify-center gap-2"
                                >
                                    Solicitar Inscripción
                                    <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Training;