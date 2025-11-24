import React from 'react';
import { PieChart, Users, FileText } from 'lucide-react';

const Services = () => {
    const services = [
        {
            title: 'Consultoría de Negocios',
            desc: 'Optimización de procesos y reingeniería para maximizar la eficiencia operativa.',
            icon: <PieChart size={24} />,
            color: 'blue'
        },
        {
            title: 'Servicios Tercerizados',
            desc: 'Outsourcing operativo y soporte especializado para cargas de trabajo críticas.',
            icon: <Users size={24} />,
            color: 'indigo'
        },
        {
            title: 'Gestión Documental',
            desc: 'Digitalización inteligente y workflow documental para eliminar el papel.',
            icon: <FileText size={24} />,
            color: 'emerald'
        }
    ];

    return (
        <section id="servicios" className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Nuestros Servicios</h2>
                    <p className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
                        Soluciones Corporativas
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition border border-slate-100 group">
                            <div className={`w-12 h-12 rounded-lg bg-${service.color}-50 text-${service.color}-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
