import React, { useState } from 'react';
import { Shield, AlertTriangle, Lock, Landmark, Check, CheckCircle, Server, TrendingUp } from 'lucide-react';

const Products = () => {
    const [activeSystem, setActiveSystem] = useState('e-ACM');

    const systems = {
        'e-ACM': {
            name: 'Audit Control Manager',
            subtitle: 'Gestión de Auditoría Interna',
            desc: 'La plataforma líder potenciada por IA para estandarizar procesos de control, automatizar tareas de auditoría en forma no presencial (continua) y gestionar equipos de trabajo.',
            color: 'lime',
            plans: [
                {
                    name: 'Básico Pro',
                    features: ['Gestión de auditorías', 'Seguimiento de observaciones', 'Interacción con auditados', 'UX/UI intuitiva']
                },
                {
                    name: 'Avanzado',
                    isPopular: true,
                    features: ['Plan Básico Pro', 'Planificación anual', 'Reporting customizado', 'Soporte especializado']
                },
                {
                    name: 'Premium',
                    features: ['Plan Avanzado', 'Matriz de riesgos dinámica', 'Muestreo estadístico', 'Base de conocimiento', 'Asesoramiento avanzado']
                },
                {
                    name: 'Auditoría 360',
                    features: ['Plan Premium', 'Monitoreo continuo', 'Data Analytics & IA', 'Asesoramiento Premium', 'Prioridad de soporte']
                }
            ]
        },
        'e-ACR': {
            name: 'Audit Control Risk',
            subtitle: 'Suite de Gestión de Riesgos',
            desc: 'Solución integral que unifica la gestión de riesgos operacionales, tecnológicos y crediticios bajo un mismo estándar de control y monitoreo.',
            color: 'amber',
            modules: [
                {
                    name: 'e-ACM.rsk',
                    type: 'Riesgo Operacional',
                    desc: 'Gestión del riesgo operativo y mapas de riesgo alineados a normativas del BCRA.',
                    features: ['Matriz de Riesgo Operativo', 'Identificación de eventos', 'Planes de mitigación']
                },
                {
                    name: 'e-ACM.rit',
                    type: 'Riesgo Tecnológico',
                    desc: 'Gestión de riesgos de Activos de Información (IT) basada en normas ISO 27005 y Magerit.',
                    features: ['Inventario de Activos IT', 'Análisis de vulnerabilidades', 'Gestión de incidentes de seguridad']
                },
                {
                    name: 'e-CLM.net',
                    type: 'Riesgo Crediticio',
                    desc: 'Control Loan Manager: Sistema experto para el análisis y seguimiento de carteras de crédito.',
                    features: ['Scoring de clientes', 'Seguimiento de mora', 'Análisis de garantías']
                }
            ]
        },
        'e-CML': {
            name: 'Control Money Laundry',
            subtitle: 'Prevención de Lavado de Activos',
            desc: 'Cumpla con las normativas de la UIF y estándares internacionales con una solución robusta para la prevención del lavado de dinero y financiamiento del terrorismo.',
            color: 'cyan',
            features: [
                'Monitoreo de transacciones en tiempo real',
                'Perfilamiento de clientes (KYC)',
                'Reportes regulatorios automáticos',
                'Integración con listas restrictivas',
                'Scoring de riesgo por cliente'
            ]
        },
        'e-FIDUCIA': {
            name: 'Fiduciary System',
            subtitle: 'Administración Fiduciaria',
            desc: 'Administre el ciclo de vida completo de los fideicomisos: desde la creación y seguimiento de participantes hasta la liquidación final.',
            color: 'purple',
            features: [
                'Administración integral de contratos y participantes',
                'Gestión de emisiones de deuda y pagos',
                'Contabilidad fiduciaria automática multimoneda',
                'Módulo de Inversiones y control de fondos',
                'Liquidación y rendición de cuentas automática'
            ]
        }
    };

    return (
        <section id="sistemas" className="py-24 bg-slate-900 text-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-900/10 skew-x-12 transform origin-top-right" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-base text-blue-400 font-semibold tracking-wide uppercase">Ecosistema de Software</h2>
                    <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
                        Plataformas de Gestión Crítica
                    </p>
                    <p className="mt-4 text-slate-400 text-lg max-w-2xl mx-auto">
                        Seleccione una de nuestras soluciones para conocer sus módulos y capacidades técnicas.
                    </p>
                </div>

                {/* System Selector Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {Object.entries(systems).map(([key, system]) => (
                        <button
                            key={key}
                            onClick={() => setActiveSystem(key)}
                            className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 flex items-center gap-2 border ${activeSystem === key
                                ? `bg-${system.color}-600 border-${system.color}-500 text-white shadow-[0_0_20px_rgba(37,99,235,0.5)]`
                                : 'bg-slate-800 border-slate-700 text-slate-400 hover:bg-slate-700'
                                }`}
                        >
                            {key === 'e-ACM' && <Shield size={18} />}
                            {key === 'e-ACR' && <AlertTriangle size={18} />}
                            {key === 'e-CML' && <Lock size={18} />}
                            {key === 'e-FIDUCIA' && <Landmark size={18} />}
                            {system.name}
                        </button>
                    ))}
                </div>

                {/* Active System Content */}
                <div className="animate-fade-in-up">
                    <div className="text-center mb-12">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">
                            {systems[activeSystem].name} <span className={`text-${systems[activeSystem].color}-400`}>| {systems[activeSystem].subtitle}</span>
                        </h3>
                        <p className="text-slate-300 max-w-3xl mx-auto text-lg leading-relaxed">
                            {systems[activeSystem].desc}
                        </p>
                    </div>

                    {/* RENDER LOGIC BASED ON SYSTEM TYPE */}

                    {/* CASE 1: e-ACM (Plans) */}
                    {systems[activeSystem].plans && (
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                            {systems[activeSystem].plans.map((plan, index) => (
                                <div key={index} className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-2xl p-6 flex flex-col hover:transform hover:-translate-y-1 transition duration-300 ${plan.isPopular ? 'border-blue-500 shadow-lg shadow-blue-500/20' : 'border-slate-700'}`}>
                                    {plan.isPopular && (
                                        <div className={`absolute top-0 right-0 bg-${systems[activeSystem].color}-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg`}>
                                            RECOMENDADO
                                        </div>
                                    )}
                                    <div className="mb-4">
                                        <h4 className="text-xl font-bold text-white">{plan.name}</h4>
                                        <p className="text-slate-400 text-sm mt-1">Suscripción anual</p>
                                    </div>
                                    <ul className="space-y-3 mb-8 flex-grow">
                                        {plan.features.map((feat, i) => (
                                            <li key={i} className="flex items-start text-sm text-slate-300">
                                                <Check size={16} className="text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                                                <span>{feat}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <a href="#contacto" className={`w-full py-3 rounded-lg font-bold text-sm transition text-center ${plan.isPopular ? `bg-${systems[activeSystem].color}-600 text-white hover:bg-${systems[activeSystem].color}-500` : 'bg-slate-700 text-slate-300 hover:bg-slate-600'}`}>
                                        Consultar Plan
                                    </a>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* CASE 2: e-ACR (Modules) */}
                    {systems[activeSystem].modules && (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {systems[activeSystem].modules.map((mod, index) => (
                                <div key={index} className={`bg-slate-800 rounded-2xl p-1 border-t-4 border-${systems[activeSystem].color}-500 shadow-xl`}>
                                    <div className="bg-slate-900/90 rounded-xl p-6 h-full flex flex-col">
                                        <div className="flex items-center justify-between mb-4">
                                            <span className={`text-xs font-bold text-${systems[activeSystem].color}-400 uppercase tracking-widest`}>{mod.type}</span>
                                            <div className={`w-8 h-8 bg-${systems[activeSystem].color}-500/20 rounded-lg flex items-center justify-center text-${systems[activeSystem].color}-400`}>
                                                {index === 0 && <AlertTriangle size={18} />}
                                                {index === 1 && <Server size={18} />}
                                                {index === 2 && <TrendingUp size={18} />}
                                            </div>
                                        </div>
                                        <h4 className="text-xl font-bold text-white mb-2">{mod.name}</h4>
                                        <p className="text-slate-400 text-sm mb-6 flex-grow">{mod.desc}</p>
                                        <ul className="space-y-2 pt-4 border-t border-slate-800">
                                            {mod.features.map((feat, i) => (
                                                <li key={i} className="flex items-start text-sm text-slate-300">
                                                    <div className={`w-1.5 h-1.5 bg-${systems[activeSystem].color}-500 rounded-full mr-2 mt-1.5`} />
                                                    {feat}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* CASE 3: Standard Feature List (e-CML, e-FIDUCIA) */}
                    {systems[activeSystem].features && !systems[activeSystem].plans && (
                        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 max-w-5xl mx-auto">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                        {activeSystem === 'e-FIDUCIA' ? <Landmark className={`text-${systems[activeSystem].color}-500`} /> : <Lock className="text-cyan-500" />}
                                        Funcionalidades Clave
                                    </h4>
                                    <ul className="space-y-4">
                                        {systems[activeSystem].features.map((feat, i) => (
                                            <li key={i} className="flex items-center text-slate-300 p-3 bg-slate-900/50 rounded-lg border border-slate-800/50">
                                                <CheckCircle size={18} className={`mr-3 text-${systems[activeSystem].color}-500`} />
                                                {feat}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex flex-col gap-6">
                                    <div className="bg-slate-900 rounded-xl p-6 border border-slate-700">
                                        <h5 className="font-bold text-white mb-2">Especificaciones Técnicas</h5>
                                        <div className="grid grid-cols-2 gap-4 text-sm text-slate-400">
                                            <div>• Desarrollo Robusto y Modular</div>
                                            <div>• Soporte Multi-Base de Datos</div>
                                            <div>• Complementos WEB de Consulta</div>
                                            <div>• Reporting Dinámico</div>
                                        </div>
                                    </div>

                                    <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-slate-700 text-center">
                                        <p className="text-slate-300 mb-4 text-sm">
                                            Esta solución es utilizada por las principales entidades financieras y fiduciarias de la región.
                                        </p>
                                        <a href="#contacto" className={`inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-${systems[activeSystem].color}-600 hover:bg-${systems[activeSystem].color}-700 transition w-full shadow-lg`}>
                                            Solicitar Presentación
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Products;
