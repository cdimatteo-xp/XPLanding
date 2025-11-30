import React from 'react';
import { Shield, AlertTriangle, Lock, Landmark, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductsSummary = () => {
    const products = [
        {
            name: 'e-ACM.core',
            desc: 'Audit Control Manager. La plataforma líder para la gestión de Auditoría Interna Continua.',
            icon: <Shield size={32} />,
            color: 'text-lime-400',
            bg: 'bg-lime-500/10',
            border: 'hover:border-lime-500/50'
        },
        {
            name: 'e-ACR.core',
            desc: 'Audit Control Risk. Suite integral para la gestión de Riesgo Operacional, Tecnológico y Crediticio.',
            icon: <AlertTriangle size={32} />,
            color: 'text-amber-400',
            bg: 'bg-amber-500/10',
            border: 'hover:border-amber-500/50'
        },
        {
            name: 'e-CML.core',
            desc: 'Control Money Laundry. Prevención de Lavado de Activos y Financiamiento del Terrorismo.',
            icon: <Lock size={32} />,
            color: 'text-cyan-400',
            bg: 'bg-cyan-500/10',
            border: 'hover:border-cyan-500/50'
        },
        {
            name: 'e-FIDUCIA.core',
            desc: 'Sistema Core Fiduciario. Administración integral de Fideicomisos y Fondos de Inversión.',
            icon: <Landmark size={32} />,
            color: 'text-purple-400',
            bg: 'bg-purple-500/10',
            border: 'hover:border-purple-500/50'
        }
    ];

    return (
        <section id="sistemas" className="py-24 bg-slate-950 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-base text-blue-500 font-semibold tracking-wide uppercase">Software Corporativo</h2>
                    <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl tracking-tight">
                        Ecosistema de Gestión Crítica
                    </p>
                    <p className="mt-4 text-slate-400 text-lg max-w-2xl mx-auto">
                        Soluciones robustas para entidades financieras y grandes corporaciones.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {products.map((product, index) => (
                        <div key={index} className={`p-6 rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm transition-all duration-300 group ${product.border}`}>
                            <div className={`w-14 h-14 rounded-xl ${product.bg} ${product.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                {product.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed mb-4">
                                {product.desc}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <Link to="/productos" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold rounded-full text-slate-900 bg-white hover:bg-blue-50 transition shadow-lg hover:shadow-white/20 transform hover:-translate-y-1">
                        Explorar todos los productos <ArrowRight size={18} className="ml-2" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ProductsSummary;
