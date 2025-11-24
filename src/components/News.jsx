import React from 'react';
import { Calendar, ArrowRight, ExternalLink } from 'lucide-react';

const News = () => {
    const posts = [
        {
            date: 'Hace 2 semanas',
            title: 'Lanzamiento: e-ACM.rit (Gestión de Riesgos)',
            content: 'Presentamos el nuevo módulo para administrar riesgos de Activos de Información. Permite identificación, análisis y evaluación integrada con e-ACM.core.',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
        },
        {
            date: 'Hace 1 mes',
            title: 'Actualización en Prevención de Lavado',
            content: 'Nuevas normativas de la UIF impactan en los reportes de operaciones sospechosas. Nuestro sistema e-CML ya se encuentra actualizado.',
            image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
        },
        {
            date: 'Hace 2 meses',
            title: 'Alianza estratégica para Banca Digital',
            content: 'Seguimos expandiendo nuestras soluciones para el sector financiero con nuevas integraciones de seguridad.',
            image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
        }
    ];

    return (
        <section id="novedades" className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl font-extrabold text-slate-900">Novedades</h2>
                        <p className="mt-2 text-slate-500">Últimas actualizaciones de la industria y la empresa.</p>
                    </div>
                    <a href="https://ar.linkedin.com/company/x-project-sa" target="_blank" rel="noopener noreferrer" className="hidden sm:flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700">
                        Ver Linkedin <ExternalLink size={18} />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group">
                            <div className="h-48 overflow-hidden">
                                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="p-6">
                                <div className="flex items-center text-xs text-slate-400 mb-3">
                                    <Calendar size={14} className="mr-1" /> {post.date}
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2 leading-tight group-hover:text-blue-600 transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                                    {post.content}
                                </p>
                                <a href="#" className="text-sm font-semibold text-blue-500 hover:text-blue-700 flex items-center gap-1">
                                    Leer más <ArrowRight size={14} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 text-center sm:hidden">
                    <a href="https://ar.linkedin.com/company/x-project-sa" className="inline-flex items-center gap-2 text-blue-600 font-bold">
                        Ver todo en Linkedin <ExternalLink size={18} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default News;
