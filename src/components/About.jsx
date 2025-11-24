import React from 'react';
import { CheckCircle } from 'lucide-react';

const About = () => {
    return (
        <section id="nosotros" className="py-24 bg-white border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                    <div className="mb-12 lg:mb-0">
                        <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl mb-6">
                            Más que proveedores, somos <span className="text-blue-600">socios estratégicos</span>.
                        </h2>
                        <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                            X Project S.A. es una compañía conformada por un grupo interdisciplinario de profesionales especializados en Consultoría, Comercialización, Marketing y Tecnología.
                        </p>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            Nuestra misión es asistir a nuestros clientes en el desempeño estratégico de sus actividades, implementando procesos y tecnologías acordes a las exigencias actuales.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="flex items-start">
                                <CheckCircle className="flex-shrink-0 text-blue-500 mt-1" />
                                <div className="ml-4">
                                    <h4 className="text-lg font-medium text-slate-900">Soluciones Rápidas</h4>
                                    <p className="text-sm text-slate-500">Respuestas ágiles ante cambios.</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <CheckCircle className="flex-shrink-0 text-blue-500 mt-1" />
                                <div className="ml-4">
                                    <h4 className="text-lg font-medium text-slate-900">Reducción de Costos</h4>
                                    <p className="text-sm text-slate-500">Eficiencia operativa garantizada.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-blue-100 transform translate-x-3 translate-y-3 rounded-2xl"></div>
                        <img
                            className="relative rounded-2xl shadow-xl w-full object-cover h-96 lg:h-auto grayscale hover:grayscale-0 transition duration-700"
                            src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            alt="Equipo de trabajo"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
