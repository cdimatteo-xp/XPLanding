import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
    X, Play, BarChart2, Users, Shield, 
    Settings, Bell, Search, Menu, 
    CheckCircle2, AlertTriangle, ArrowLeft
} from 'lucide-react';

const ProductDemo = () => {
    const [activeModule, setActiveModule] = useState('dashboard');

    return (
        <div className="min-h-screen bg-slate-100 font-sans flex flex-col">
            
            {/* Demo Header */}
            <div className="bg-slate-900 text-white px-4 py-3 flex items-center justify-between shadow-md z-50">
                <div className="flex items-center gap-4">
                    <Link to="/productos" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium">
                        <ArrowLeft size={16} />
                        Salir de la Demo
                    </Link>
                    <div className="h-6 w-px bg-slate-700"></div>
                    <span className="font-mono text-emerald-400 text-xs border border-emerald-500/50 px-2 py-0.5 rounded bg-emerald-500/10">
                        MODO DEMO INTERACTIVO
                    </span>
                </div>
                <div className="font-bold text-lg tracking-tight">e-ACM.core <span className="font-normal text-slate-400">| v4.2</span></div>
            </div>

            <div className="flex flex-1 overflow-hidden">
                {/* Fake Sidebar */}
                <div className="w-64 bg-white border-r border-slate-200 flex flex-col hidden md:flex">
                    <div className="p-4 border-b border-slate-100">
                        <div className="flex items-center gap-3 px-2 py-2 bg-slate-50 rounded-lg border border-slate-200">
                            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold">A</div>
                            <div>
                                <div className="text-xs font-bold text-slate-900">Audit Corp</div>
                                <div className="text-[10px] text-slate-500">Entorno de Prueba</div>
                            </div>
                        </div>
                    </div>
                    <nav className="flex-1 p-4 space-y-1">
                        <button 
                            onClick={() => setActiveModule('dashboard')}
                            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${activeModule === 'dashboard' ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-slate-50'}`}
                        >
                            <BarChart2 size={18} /> Dashboard
                        </button>
                        <button 
                            onClick={() => setActiveModule('risks')}
                            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${activeModule === 'risks' ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-slate-50'}`}
                        >
                            <Shield size={18} /> Matriz de Riesgos
                        </button>
                        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50">
                            <Users size={18} /> Papeles de Trabajo
                        </button>
                        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50">
                            <Settings size={18} /> Configuración
                        </button>
                    </nav>
                </div>

                {/* Fake Content */}
                <div className="flex-1 overflow-y-auto p-8 bg-slate-50/50">
                    
                    {activeModule === 'dashboard' && (
                        <div className="max-w-5xl mx-auto space-y-6 animate-fade-in">
                            <div className="flex justify-between items-end">
                                <div>
                                    <h1 className="text-2xl font-bold text-slate-900">Tablero de Control</h1>
                                    <p className="text-slate-500">Visión general del estado de auditoría.</p>
                                </div>
                                <button className="px-4 py-2 bg-blue-600 text-white text-sm font-bold rounded-lg shadow-sm hover:bg-blue-700">
                                    Generar Reporte
                                </button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                                    <div className="text-slate-500 text-sm font-medium mb-2">Hallazgos Abiertos</div>
                                    <div className="text-3xl font-bold text-slate-900">24</div>
                                    <div className="mt-2 text-xs text-red-500 flex items-center gap-1">
                                        <AlertTriangle size={12} /> 3 de Alto Riesgo
                                    </div>
                                </div>
                                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                                    <div className="text-slate-500 text-sm font-medium mb-2">Plan Anual</div>
                                    <div className="text-3xl font-bold text-slate-900">68%</div>
                                    <div className="mt-2 text-xs text-green-600 flex items-center gap-1">
                                        <CheckCircle2 size={12} /> En cronograma
                                    </div>
                                </div>
                                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                                    <div className="text-slate-500 text-sm font-medium mb-2">Horas Insumidas</div>
                                    <div className="text-3xl font-bold text-slate-900">1,240</div>
                                    <div className="mt-2 text-xs text-slate-400">
                                        de 1,800 presupuestadas
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                                <div className="px-6 py-4 border-b border-slate-100 font-bold text-slate-900">
                                    Auditorías Recientes
                                </div>
                                <div className="divide-y divide-slate-100">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="px-6 py-4 flex items-center justify-between hover:bg-slate-50 cursor-pointer">
                                            <div className="flex items-center gap-4">
                                                <div className={`w-2 h-2 rounded-full ${i === 1 ? 'bg-red-500' : 'bg-green-500'}`}></div>
                                                <div>
                                                    <div className="font-medium text-slate-900">Revisión de Procesos de Crédito {2024+i}</div>
                                                    <div className="text-xs text-slate-500">Responsable: Juan Pérez</div>
                                                </div>
                                            </div>
                                            <div className="text-sm text-slate-400">Hace 2 días</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {activeModule === 'risks' && (
                        <div className="max-w-5xl mx-auto space-y-6 animate-fade-in">
                            <h1 className="text-2xl font-bold text-slate-900">Matriz de Riesgos</h1>
                            <div className="bg-white p-12 rounded-xl border border-slate-200 shadow-sm text-center">
                                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
                                    <Shield size={32} />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900">Funcionalidad Limitada en Demo</h3>
                                <p className="text-slate-500 max-w-md mx-auto mt-2">
                                    Para acceder a la configuración avanzada de matrices de riesgo y mapas de calor, contacte a nuestro equipo de ventas.
                                </p>
                                <button className="mt-6 px-6 py-2 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800">
                                    Solicitar Acceso Completo
                                </button>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
};

export default ProductDemo;