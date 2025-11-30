import React, { useState } from 'react';
import { Mail, Phone, MapPin, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactPage = () => {
    const [formState, setFormState] = useState({ name: '', email: '', service: 'Consultoría', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Gracias ${formState.name}, hemos recibido tu consulta sobre ${formState.service}.`);
    };

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    return (
        <section className="py-24 bg-slate-900 relative overflow-hidden min-h-screen">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
                <div className="absolute w-64 h-64 bg-blue-600 rounded-full blur-3xl -top-20 -left-20"></div>
                <div className="absolute w-96 h-96 bg-cyan-600 rounded-full blur-3xl bottom-0 right-0"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-8">
                <div className="mb-8">
                    <Link to="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                        <ArrowLeft size={20} className="mr-2" />
                        Volver al Inicio
                    </Link>
                </div>

                <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                    <div className="mb-12 lg:mb-0 text-white">
                        <h2 className="text-3xl font-extrabold sm:text-4xl mb-6">
                            Contacto
                        </h2>
                        <p className="text-xl text-slate-300 mb-10">
                            ¿Listo para llevar su empresa al siguiente nivel? Contáctenos hoy.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-white/10 flex items-center justify-center text-blue-400">
                                    <Mail size={24} />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-medium text-white">Email</h3>
                                    <p className="mt-1 text-slate-400">info@x-project.com.ar</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-white/10 flex items-center justify-center text-blue-400">
                                    <Phone size={24} />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-medium text-white">Teléfono</h3>
                                    <p className="mt-1 text-slate-400">(54 11) 5239-8216 al 8219</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-white/10 flex items-center justify-center text-blue-400">
                                    <MapPin size={24} />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-medium text-white">Ubicación</h3>
                                    <p className="mt-1 text-slate-400">Buenos Aires, Argentina</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-700">Nombre Completo</label>
                                <input
                                    type="text" name="name" id="name" required
                                    value={formState.name} onChange={handleChange}
                                    className="mt-1 block w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-700">Correo Electrónico</label>
                                <input
                                    type="email" name="email" id="email" required
                                    value={formState.email} onChange={handleChange}
                                    className="mt-1 block w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                                />
                            </div>
                            <div>
                                <label htmlFor="service" className="block text-sm font-medium text-slate-700">Asunto</label>
                                <select
                                    id="service" name="service"
                                    value={formState.service} onChange={handleChange}
                                    className="mt-1 block w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                                >
                                    <option>Gestión de Auditorías</option>
                                    <option>Gestión de Riesgos</option>
                                    <option>Gestión Fiduciaria</option>
                                    <option>Prevención de Lavado de Dinero</option>
                                    <option>Capacitaciones</option>
                                    <option>Consultoría</option>
                                    <option>Recursos Humanos</option>
                                    <option>Otro</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-700">Mensaje</label>
                                <textarea
                                    id="message" name="message" rows="4" required
                                    value={formState.message} onChange={handleChange}
                                    className="mt-1 block w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-4 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition"
                            >
                                Enviar Mensaje
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactPage;
