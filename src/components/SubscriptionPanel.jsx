import React, { useState } from 'react';
import { 
    CreditCard, Clock, FileText, Download, Upload, 
    AlertTriangle, CheckCircle2, History, LogOut,
    LayoutDashboard, HelpCircle, ChevronDown, Filter
} from 'lucide-react';
import { Link } from 'react-router-dom';

const SubscriptionPanel = () => {
    // Mock Data
    const client = {
        name: "Banco Finanzas S.A.",
        plan: "Enterprise Gold",
        status: "warning", // active, warning, suspended
        nextPayment: "10 Dic 2024",
        amountDue: "$ 450.000,00"
    };

    const credits = {
        total: 20,
        used: 12.5,
        available: 7.5,
        resetDate: "01 Ene 2025"
    };

    const transactions = [
        { id: 1, date: "01/11/2024", desc: "Abono Mensual Software - Noviembre", amount: 450000, type: "debit", status: "paid", invoice: "FC-A-0001234" },
        { id: 2, date: "05/11/2024", desc: "Bonificación por Pago Adelantado", amount: 22500, type: "credit", status: "applied", invoice: "NC-A-0000567" },
        { id: 3, date: "15/11/2024", desc: "Pack Horas Soporte Extra (5hs)", amount: 150000, type: "debit", status: "paid", invoice: "FC-A-0001289" },
        { id: 4, date: "01/12/2024", desc: "Abono Mensual Software - Diciembre", amount: 450000, type: "debit", status: "pending", invoice: "FC-A-0001345" },
    ];

    const handleExportCSV = () => {
        const headers = ["Fecha", "Descripción", "Monto", "Tipo", "Estado", "Comprobante"];
        const rows = transactions.map(t => [
            t.date, 
            t.desc, 
            t.amount, 
            t.type, 
            t.status, 
            t.invoice
        ]);
        
        const csvContent = [
            headers.join(","),
            ...rows.map(r => r.join(","))
        ].join("\n");

        const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.setAttribute("href", url);
        link.setAttribute("download", "cuenta_corriente_regidoft.csv");
        document.body.appendChild(link);
        link.click();
    };

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-700">
            
            {/* Top Navigation Bar */}
            <nav className="bg-slate-900 text-white px-6 py-4 flex justify-between items-center shadow-md">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center font-bold text-xl shadow-lg">XP</div>
                    <div>
                        <h1 className="font-bold text-lg leading-tight">Portal de Clientes</h1>
                        <p className="text-xs text-slate-400">Gestión de Suscripción</p>
                    </div>
                </div>
                <div className="flex items-center gap-6">
                    <div className="hidden md:block text-right">
                        <p className="text-sm font-bold">{client.name}</p>
                        <p className="text-xs text-slate-400">{client.plan}</p>
                    </div>
                    <Link to="/" className="p-2 hover:bg-slate-800 rounded-full transition-colors text-slate-400 hover:text-white">
                        <LogOut size={20} />
                    </Link>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto p-6 space-y-8">
                
                {/* Alert Banner */}
                {client.status === 'warning' && (
                    <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg shadow-sm flex items-start gap-4 animate-fade-in-down">
                        <div className="p-2 bg-amber-100 rounded-full text-amber-600 shrink-0">
                            <AlertTriangle size={24} />
                        </div>
                        <div className="flex-grow">
                            <h3 className="font-bold text-amber-800 text-lg">Atención: Suscripción próxima a vencer</h3>
                            <p className="text-amber-700">
                                Su factura del período actual vence el <strong>{client.nextPayment}</strong> y aún no registra pago. 
                                Por favor regularice su situación para evitar la suspensión del servicio.
                            </p>
                        </div>
                        <button className="px-4 py-2 bg-amber-600 text-white font-bold rounded-lg hover:bg-amber-700 transition-colors shadow-sm">
                            Informar Pago
                        </button>
                    </div>
                )}

                {/* KPI Cards */}
                <div className="grid md:grid-cols-3 gap-6">
                    
                    {/* Credits Card */}
                    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mr-10 -mt-10 z-0"></div>
                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                                    <Clock size={24} />
                                </div>
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">Mensual</span>
                            </div>
                            <h3 className="text-slate-500 font-medium mb-1">Créditos de Horas</h3>
                            <div className="flex items-baseline gap-2 mb-2">
                                <span className="text-4xl font-extrabold text-slate-900">{credits.available}h</span>
                                <span className="text-sm text-slate-400">/ {credits.total}h</span>
                            </div>
                            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden mb-2">
                                <div 
                                    className="bg-blue-600 h-full rounded-full" 
                                    style={{ width: `${(credits.used / credits.total) * 100}%` }}
                                ></div>
                            </div>
                            <p className="text-xs text-slate-400">
                                Se renuevan el {credits.resetDate}. Úselas para soporte o capacitación.
                            </p>
                        </div>
                    </div>

                    {/* Balance Card */}
                    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-full -mr-10 -mt-10 z-0"></div>
                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-3 bg-green-50 text-green-600 rounded-lg">
                                    <CreditCard size={24} />
                                </div>
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">Estado</span>
                            </div>
                            <h3 className="text-slate-500 font-medium mb-1">Saldo Pendiente</h3>
                            <div className="flex items-baseline gap-2 mb-4">
                                <span className="text-4xl font-extrabold text-slate-900">{client.amountDue}</span>
                            </div>
                            <div className="flex gap-2">
                                <button className="flex-1 py-2 bg-slate-900 text-white text-sm font-bold rounded-lg hover:bg-slate-800 transition-colors">
                                    Pagar Ahora
                                </button>
                                <button className="p-2 border border-slate-200 rounded-lg hover:bg-slate-50 text-slate-600">
                                    <Upload size={20} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Plan Info */}
                    <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl shadow-lg text-white flex flex-col relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -mr-10 -mt-10"></div>
                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-6">
                                <div className="p-3 bg-white/10 rounded-lg">
                                    <LayoutDashboard size={24} />
                                </div>
                                <span className="px-2 py-1 bg-green-500/20 text-green-400 border border-green-500/30 rounded text-xs font-bold uppercase">
                                    Activo
                                </span>
                            </div>
                            <h3 className="text-slate-400 font-medium mb-1">Plan Actual</h3>
                            <p className="text-2xl font-bold mb-4">{client.plan}</p>
                            <ul className="space-y-2 text-sm text-slate-300 mb-6">
                                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-400"/> 5 Usuarios Admin</li>
                                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-400"/> Soporte Prioritario</li>
                                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-400"/> API Access</li>
                            </ul>
                            <button className="mt-auto w-full py-2 bg-white/10 hover:bg-white/20 text-white text-sm font-bold rounded-lg transition-colors border border-white/10">
                                Gestionar Plan
                            </button>
                        </div>
                    </div>
                </div>

                {/* Current Account Table */}
                <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                    <div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div>
                            <h2 className="text-xl font-bold text-slate-900">Cuenta Corriente</h2>
                            <p className="text-slate-500 text-sm">Historial de movimientos, facturas y pagos.</p>
                        </div>
                        <div className="flex gap-3">
                            <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 text-slate-600 font-bold text-sm rounded-lg hover:bg-slate-50 transition-colors">
                                <Upload size={16} />
                                Subir Comprobante
                            </button>
                            <button 
                                onClick={handleExportCSV}
                                className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white font-bold text-sm rounded-lg hover:bg-green-700 transition-colors shadow-sm"
                            >
                                <Download size={16} />
                                Exportar CSV
                            </button>
                        </div>
                    </div>
                    
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-slate-50 text-slate-500 font-bold uppercase tracking-wider border-b border-slate-200">
                                <tr>
                                    <th className="px-6 py-4">Fecha</th>
                                    <th className="px-6 py-4">Descripción</th>
                                    <th className="px-6 py-4">Comprobante</th>
                                    <th className="px-6 py-4 text-right">Monto</th>
                                    <th className="px-6 py-4 text-center">Estado</th>
                                    <th className="px-6 py-4 text-center">Acciones</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {transactions.map((t) => (
                                    <tr key={t.id} className="hover:bg-slate-50 transition-colors">
                                        <td className="px-6 py-4 font-medium text-slate-900">{t.date}</td>
                                        <td className="px-6 py-4 text-slate-600">
                                            <div className="flex items-center gap-2">
                                                {t.type === 'credit' ? (
                                                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                                                ) : (
                                                    <span className="w-2 h-2 rounded-full bg-slate-300"></span>
                                                )}
                                                {t.desc}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 font-mono text-xs text-slate-500">{t.invoice}</td>
                                        <td className={`px-6 py-4 text-right font-bold ${t.type === 'credit' ? 'text-green-600' : 'text-slate-900'}`}>
                                            {t.type === 'credit' ? '+' : ''} $ {t.amount.toLocaleString('es-AR')}
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold capitalize
                                                ${t.status === 'paid' ? 'bg-green-100 text-green-800' : 
                                                  t.status === 'pending' ? 'bg-amber-100 text-amber-800' : 
                                                  'bg-blue-100 text-blue-800'}`}>
                                                {t.status === 'paid' ? 'Pagado' : t.status === 'pending' ? 'Pendiente' : 'Aplicado'}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <button className="text-blue-600 hover:text-blue-800 font-bold text-xs flex items-center justify-center gap-1 mx-auto">
                                                <FileText size={14} />
                                                Ver
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="p-4 border-t border-slate-200 bg-slate-50 text-center text-xs text-slate-400">
                        Mostrando últimos 4 movimientos. <a href="#" className="text-blue-600 hover:underline">Ver historial completo</a>
                    </div>
                </div>

            </main>
        </div>
    );
};

export default SubscriptionPanel;