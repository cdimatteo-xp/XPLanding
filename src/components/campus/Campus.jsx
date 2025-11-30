import React, { useState } from 'react';
import { 
    LayoutDashboard, BookOpen, Video, Download, 
    Award, Bell, Settings, LogOut, Menu, X,
    PlayCircle, Calendar, Clock, CheckCircle2,
    FileText, ChevronRight, Star, ShieldCheck, Laptop,
    Users, ExternalLink, CreditCard
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Campus = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('dashboard');

    // Mock Data
    const user = {
        name: "Juan Pérez",
        role: "Compliance Officer",
        avatar: "JP",
        company: "Banco Finanzas S.A."
    };

    const myCourses = [
        {
            id: 1,
            title: "Prevención de Lavado de Activos (Nivel Avanzado)",
            progress: 75,
            lastModule: "Módulo 4: Matriz de Riesgo",
            totalModules: 6,
            image: "bg-gradient-to-br from-blue-600 to-indigo-700"
        },
        {
            id: 2,
            title: "Auditoría Forense y Detección de Fraude",
            progress: 30,
            lastModule: "Módulo 2: Recolección de Evidencia",
            totalModules: 8,
            image: "bg-gradient-to-br from-purple-600 to-fuchsia-700"
        }
    ];

    const upcomingLive = [
        {
            id: 1,
            title: "Masterclass: Nuevas Tipologías 2025",
            date: "05 Dic 2024",
            time: "10:00 AM",
            instructor: "Dr. Carlos M.",
            status: "Confirmado"
        },
        {
            id: 2,
            title: "Taller Práctico: Configuración de Alertas",
            date: "12 Dic 2024",
            time: "14:30 PM",
            instructor: "Ing. Ana R.",
            status: "Pendiente"
        }
    ];

    const softwareCapsules = [
        {
            id: 1,
            title: "Script de Validación de CUITs",
            type: "Python Script",
            version: "v2.1",
            description: "Automatiza la verificación de CUITs en bases de datos masivas contra padrón AFIP."
        },
        {
            id: 2,
            title: "Reporte de Operaciones Sospechosas (Template)",
            type: "Reporte .RPT",
            version: "v1.0",
            description: "Plantilla estándar para exportación de ROS compatible con el nuevo sistema de la UIF."
        },
        {
            id: 3,
            title: "Add-on de Monitoreo Transaccional",
            type: "Plugin",
            version: "v3.0.5",
            description: "Extensión para visualizar grafos de relaciones entre clientes."
        }
    ];

    const renderContent = () => {
        switch(activeSection) {
            case 'dashboard':
                return (
                    <div className="space-y-8 animate-fade-in-up">
                        {/* Welcome Banner */}
                        <div className="bg-slate-900 rounded-2xl p-8 text-white relative overflow-hidden shadow-xl">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
                            <div className="relative z-10">
                                <h2 className="text-3xl font-bold mb-2">Hola, {user.name}</h2>
                                <p className="text-slate-300">Tienes 2 cursos en progreso y 1 clase en vivo esta semana.</p>
                            </div>
                        </div>

                        {/* Progress Section */}
                        <div>
                            <h3 className="text-xl font-bold text-slate-800 mb-4">Continuar Aprendiendo</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                {myCourses.map(course => (
                                    <div key={course.id} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                                        <div className="flex items-start justify-between mb-4">
                                            <div className={`w-12 h-12 rounded-lg ${course.image} flex items-center justify-center text-white shadow-lg`}>
                                                <BookOpen size={24} />
                                            </div>
                                            <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded border border-slate-200">
                                                En Progreso
                                            </span>
                                        </div>
                                        <h4 className="text-lg font-bold text-slate-900 mb-2">{course.title}</h4>
                                        <p className="text-sm text-slate-500 mb-4">Próximo: {course.lastModule}</p>
                                        
                                        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden mb-2">
                                            <div 
                                                className="bg-blue-600 h-full rounded-full transition-all duration-500" 
                                                style={{ width: `${course.progress}%` }}
                                            ></div>
                                        </div>
                                        <div className="flex justify-between text-xs text-slate-500 font-medium">
                                            <span>{course.progress}% Completado</span>
                                            <span>{course.totalModules} Módulos</span>
                                        </div>
                                        <button className="w-full mt-4 py-2 bg-slate-50 text-blue-600 font-bold text-sm rounded-lg hover:bg-blue-50 hover:text-blue-700 transition-colors border border-slate-200">
                                            Continuar
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Dashboard Grid */}
                        <div className="grid lg:grid-cols-3 gap-8">
                            {/* Live Classes Widget */}
                            <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-lg font-bold text-slate-800">Próximas Clases en Vivo</h3>
                                    <button 
                                        onClick={() => setActiveSection('live')}
                                        className="text-blue-600 text-sm font-bold hover:underline"
                                    >
                                        Ver Calendario
                                    </button>
                                </div>
                                <div className="space-y-4">
                                    {upcomingLive.map(evt => (
                                        <div key={evt.id} className="flex items-center gap-4 p-4 rounded-lg bg-slate-50 border border-slate-100 hover:border-blue-200 transition-colors">
                                            <div className="flex-shrink-0 w-14 h-14 bg-white rounded-lg border border-slate-200 flex flex-col items-center justify-center text-slate-700 font-bold shadow-sm">
                                                <span className="text-xs text-red-500 uppercase">Dic</span>
                                                <span className="text-xl">{evt.date.split(' ')[0]}</span>
                                            </div>
                                            <div className="flex-grow">
                                                <h4 className="font-bold text-slate-900">{evt.title}</h4>
                                                <div className="flex items-center gap-4 text-sm text-slate-500 mt-1">
                                                    <span className="flex items-center gap-1"><Clock size={14}/> {evt.time}</span>
                                                    <span className="flex items-center gap-1"><Users size={14}/> {evt.instructor}</span>
                                                </div>
                                            </div>
                                            <button className="px-4 py-2 bg-blue-600 text-white text-sm font-bold rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-blue-600/20">
                                                Unirse
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Quick Stats / Certificates */}
                            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col">
                                <h3 className="text-lg font-bold text-slate-800 mb-6">Mis Logros</h3>
                                <div className="space-y-4 mb-6">
                                    <div className="flex items-center gap-3 p-3 rounded-lg bg-green-50 text-green-800 border border-green-100">
                                        <Award size={20} />
                                        <div>
                                            <p className="text-sm font-bold">Compliance Officer</p>
                                            <p className="text-xs opacity-80">Certificado Emitido</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 p-3 rounded-lg bg-amber-50 text-amber-800 border border-amber-100">
                                        <Star size={20} />
                                        <div>
                                            <p className="text-sm font-bold">Especialista PLD</p>
                                            <p className="text-xs opacity-80">En curso</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-auto pt-6 border-t border-slate-100">
                                    <div className="flex items-center justify-between mb-3">
                                        <h4 className="text-sm font-bold text-slate-700">Cápsulas Recientes</h4>
                                        <button onClick={() => setActiveSection('software')} className="text-xs text-blue-600 font-bold hover:underline">Ver todas</button>
                                    </div>
                                    <ul className="space-y-2">
                                        {softwareCapsules.slice(0, 2).map(cap => (
                                            <li key={cap.id} className="flex items-center justify-between text-sm text-slate-600 hover:text-blue-600 cursor-pointer group p-2 hover:bg-slate-50 rounded transition-colors">
                                                <span className="truncate max-w-[180px] font-medium">{cap.title}</span>
                                                <Download size={14} className="text-slate-400 group-hover:text-blue-600 transition-colors" />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            
            case 'courses':
                return (
                    <div className="space-y-8 animate-fade-in-up">
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900">Mis Cursos</h2>
                                <p className="text-slate-500">Gestiona tu aprendizaje y continúa donde lo dejaste.</p>
                            </div>
                            <div className="flex gap-2">
                                <button className="px-4 py-2 bg-white border border-slate-200 text-slate-600 text-sm font-bold rounded-lg hover:bg-slate-50 transition-colors">
                                    Completados
                                </button>
                                <button className="px-4 py-2 bg-slate-900 text-white text-sm font-bold rounded-lg hover:bg-slate-800 transition-colors">
                                    En Progreso
                                </button>
                            </div>
                        </div>

                        <div className="grid gap-6">
                            {myCourses.map(course => (
                                <div key={course.id} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row gap-6 items-start md:items-center">
                                    {/* Course Image/Icon */}
                                    <div className={`w-full md:w-48 h-32 rounded-lg ${course.image} flex items-center justify-center text-white shadow-lg shrink-0`}>
                                        <BookOpen size={40} />
                                    </div>

                                    {/* Course Info */}
                                    <div className="flex-grow space-y-3 w-full">
                                        <div className="flex items-start justify-between">
                                            <div>
                                                <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded border border-blue-100 mb-2 inline-block">
                                                    Certificación Profesional
                                                </span>
                                                <h3 className="text-xl font-bold text-slate-900">{course.title}</h3>
                                            </div>
                                            <button className="text-slate-400 hover:text-slate-600">
                                                <Settings size={20} />
                                            </button>
                                        </div>

                                        <div className="flex items-center gap-6 text-sm text-slate-500">
                                            <span className="flex items-center gap-1">
                                                <FileText size={16} />
                                                {course.totalModules} Módulos
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Clock size={16} />
                                                24hs Totales
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Award size={16} />
                                                Certificado Incluido
                                            </span>
                                        </div>

                                        <div className="space-y-2">
                                            <div className="flex justify-between text-sm font-bold">
                                                <span className="text-slate-700">Progreso General</span>
                                                <span className="text-blue-600">{course.progress}%</span>
                                            </div>
                                            <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                                                <div 
                                                    className="bg-blue-600 h-full rounded-full transition-all duration-500 relative" 
                                                    style={{ width: `${course.progress}%` }}
                                                >
                                                    <div className="absolute top-0 right-0 bottom-0 w-full bg-gradient-to-r from-transparent to-white/30"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Action Button */}
                                    <div className="w-full md:w-auto flex flex-col gap-3 shrink-0">
                                        <button className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2 whitespace-nowrap">
                                            <PlayCircle size={20} />
                                            Continuar
                                        </button>
                                        <div className="text-center">
                                            <p className="text-xs text-slate-400 font-medium mb-1">Siguiente Lección:</p>
                                            <p className="text-xs font-bold text-slate-600 max-w-[180px] truncate">{course.lastModule}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            
            case 'software':
                return (
                    <div className="space-y-8 animate-fade-in-up">
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900">Cápsulas de Software</h2>
                                <p className="text-slate-500">Herramientas, scripts y reportes para potenciar tu sistema.</p>
                            </div>
                            <div className="bg-indigo-50 text-indigo-700 px-4 py-2 rounded-lg text-sm font-bold border border-indigo-100 flex items-center gap-2">
                                <Laptop size={16} />
                                Licencia Enterprise Activa
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {softwareCapsules.map(cap => (
                                <div key={cap.id} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all group">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="p-3 bg-slate-100 rounded-lg text-slate-600 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                                            <Download size={24} />
                                        </div>
                                        <span className="text-xs font-bold text-slate-500 bg-slate-50 px-2 py-1 rounded border border-slate-100">
                                            {cap.type}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">{cap.title}</h3>
                                    <p className="text-sm text-slate-500 mb-4 min-h-[3rem]">{cap.description}</p>
                                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                                        <span className="text-xs font-mono text-slate-400">{cap.version}</span>
                                        <button className="flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors">
                                            Descargar
                                            <Download size={14} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );

            case 'live':
                return (
                    <div className="space-y-8 animate-fade-in-up">
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900">Clases en Vivo</h2>
                                <p className="text-slate-500">Inscríbete a las próximas sesiones o mira las grabaciones.</p>
                            </div>
                            <button className="px-4 py-2 bg-white border border-slate-200 text-slate-600 text-sm font-bold rounded-lg hover:bg-slate-50 transition-colors flex items-center gap-2">
                                <Calendar size={16} />
                                Ver Calendario Completo
                            </button>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-8">
                            <div className="lg:col-span-2 space-y-6">
                                <h3 className="text-lg font-bold text-slate-800">Próximos Eventos</h3>
                                {upcomingLive.map(evt => (
                                    <div key={evt.id} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                                        <div className="flex-shrink-0 w-20 h-20 bg-slate-50 rounded-xl border border-slate-200 flex flex-col items-center justify-center text-slate-700 font-bold shadow-inner">
                                            <span className="text-xs text-red-500 uppercase tracking-wider">Dic</span>
                                            <span className="text-3xl">{evt.date.split(' ')[0]}</span>
                                        </div>
                                        <div className="flex-grow">
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase border ${evt.status === 'Confirmado' ? 'bg-green-50 text-green-700 border-green-100' : 'bg-amber-50 text-amber-700 border-amber-100'}`}>
                                                    {evt.status}
                                                </span>
                                                <span className="text-xs text-slate-400 font-medium">Webinar Exclusivo</span>
                                            </div>
                                            <h4 className="text-xl font-bold text-slate-900 mb-2">{evt.title}</h4>
                                            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
                                                <span className="flex items-center gap-1.5"><Clock size={16} className="text-blue-500"/> {evt.time}</span>
                                                <span className="flex items-center gap-1.5"><Users size={16} className="text-purple-500"/> {evt.instructor}</span>
                                                <span className="flex items-center gap-1.5"><Video size={16} className="text-slate-400"/> Zoom Live</span>
                                            </div>
                                        </div>
                                        <button className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20 whitespace-nowrap">
                                            Reservar Lugar
                                        </button>
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-6">
                                <h3 className="text-lg font-bold text-slate-800">Grabaciones Recientes</h3>
                                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-4">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="group cursor-pointer">
                                            <div className="relative rounded-lg overflow-hidden mb-3 aspect-video bg-slate-900">
                                                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                                                    <PlayCircle size={32} className="text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                                                </div>
                                            </div>
                                            <h5 className="font-bold text-slate-900 text-sm leading-tight group-hover:text-blue-600 transition-colors">
                                                Análisis de Casos Reales: Estafas Piramidales
                                            </h5>
                                            <p className="text-xs text-slate-400 mt-1">Hace 2 semanas • 45 min</p>
                                        </div>
                                    ))}
                                    <button className="w-full py-2 text-sm font-bold text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                                        Ver Biblioteca Completa
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 'certificates':
                return (
                    <div className="space-y-8 animate-fade-in-up">
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900">Mis Certificaciones</h2>
                                <p className="text-slate-500">Descarga y comparte tus logros académicos.</p>
                            </div>
                            <button className="px-4 py-2 bg-slate-900 text-white text-sm font-bold rounded-lg hover:bg-slate-800 transition-colors flex items-center gap-2">
                                <Award size={16} />
                                Verificar Credencial
                            </button>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {[
                                {
                                    id: 1,
                                    title: "Compliance Officer Certificado",
                                    date: "15 Nov 2024",
                                    code: "XP-2024-8892",
                                    image: "bg-gradient-to-br from-green-600 to-emerald-700"
                                },
                                {
                                    id: 2,
                                    title: "Analista de Riesgos Financieros",
                                    date: "22 Ago 2023",
                                    code: "XP-2023-4421",
                                    image: "bg-gradient-to-br from-blue-600 to-cyan-700"
                                }
                            ].map(cert => (
                                <div key={cert.id} className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
                                    <div className={`h-48 ${cert.image} p-8 relative flex items-center justify-center text-center`}>
                                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                                        <div className="relative z-10 text-white">
                                            <Award size={48} className="mx-auto mb-4 opacity-90" />
                                            <h3 className="text-2xl font-serif font-bold tracking-wide mb-1">{cert.title}</h3>
                                            <p className="text-white/80 text-sm">Otorgado a {user.name}</p>
                                        </div>
                                    </div>
                                    <div className="p-6 flex flex-col gap-4">
                                        <div className="flex justify-between items-center text-sm text-slate-500 border-b border-slate-100 pb-4">
                                            <span>Fecha de Emisión: <strong>{cert.date}</strong></span>
                                            <span>ID: <strong>{cert.code}</strong></span>
                                        </div>
                                        <div className="flex gap-3">
                                            <button className="flex-1 py-2.5 bg-slate-50 text-slate-700 font-bold text-sm rounded-lg hover:bg-slate-100 border border-slate-200 transition-colors flex items-center justify-center gap-2">
                                                <Download size={16} />
                                                PDF
                                            </button>
                                            <button className="flex-1 py-2.5 bg-blue-600 text-white font-bold text-sm rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2">
                                                <ExternalLink size={16} />
                                                LinkedIn
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );

            default:
                return (
                    <div className="flex flex-col items-center justify-center h-96 text-center animate-fade-in-up">
                        <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center text-slate-300 mb-6">
                            <Settings size={40} />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-2">Sección en Construcción</h2>
                        <p className="text-slate-500 max-w-md">
                            Estamos preparando contenido exclusivo para esta sección. Vuelve pronto para ver las novedades.
                        </p>
                        <button 
                            onClick={() => setActiveSection('dashboard')}
                            className="mt-6 px-6 py-2 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors"
                        >
                            Volver al Dashboard
                        </button>
                    </div>
                );
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 flex font-sans">
            {/* Sidebar */}
            <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 text-white transform transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:relative lg:translate-x-0 flex flex-col`}>
                <div className="p-6 flex items-center justify-between shrink-0">
                    <div className="flex items-center gap-3 font-bold text-xl tracking-tight">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/30">XP</div>
                        <span>Campus</span>
                    </div>
                    <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-slate-400 hover:text-white">
                        <X size={24} />
                    </button>
                </div>

                <nav className="px-4 space-y-1 mt-4 flex-1 overflow-y-auto">
                    {[
                        { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
                        { id: 'courses', label: 'Mis Cursos', icon: <BookOpen size={20} /> },
                        { id: 'live', label: 'Clases en Vivo', icon: <Video size={20} /> },
                        { id: 'software', label: 'Cápsulas Software', icon: <Laptop size={20} /> },
                        { id: 'certificates', label: 'Certificados', icon: <Award size={20} /> },
                    ].map(item => (
                        <button
                            key={item.id}
                            onClick={() => { setActiveSection(item.id); setSidebarOpen(false); }}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                                activeSection === item.id 
                                ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/50 font-bold' 
                                : 'text-slate-400 hover:bg-slate-800 hover:text-white font-medium'
                            }`}
                        >
                            {item.icon}
                            <span>{item.label}</span>
                        </button>
                    ))}
                </nav>

                <div className="p-4 shrink-0 border-t border-slate-800">
                    <div className="bg-slate-800/50 rounded-xl p-4 flex items-center gap-3 mb-4 border border-slate-700/50">
                        <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center font-bold text-sm text-white shadow-md">
                            {user.avatar}
                        </div>
                        <div className="overflow-hidden">
                            <p className="text-sm font-bold truncate text-white">{user.name}</p>
                            <p className="text-xs text-slate-400 truncate">{user.role}</p>
                        </div>
                    </div>
                    <Link to="/suscripcion" className="flex items-center gap-2 text-slate-400 hover:text-white text-sm px-2 mb-3 transition-colors font-medium">
                        <CreditCard size={16} />
                        Mi Suscripción
                    </Link>
                    <Link to="/" className="flex items-center gap-2 text-slate-400 hover:text-white text-sm px-2 transition-colors font-medium">
                        <LogOut size={16} />
                        Cerrar Sesión
                    </Link>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col h-screen overflow-hidden">
                {/* Header */}
                <header className="bg-white border-b border-slate-200 h-16 flex items-center justify-between px-4 sm:px-8 shrink-0 z-10">
                    <button onClick={() => setSidebarOpen(true)} className="lg:hidden text-slate-500 hover:text-slate-700">
                        <Menu size={24} />
                    </button>
                    
                    <div className="flex items-center gap-4 ml-auto">
                        <button className="relative p-2 text-slate-400 hover:text-slate-600 transition-colors">
                            <Bell size={20} />
                            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
                        </button>
                        <div className="h-8 w-px bg-slate-200 mx-2"></div>
                        <div className="text-right hidden sm:block">
                            <p className="text-xs font-bold text-slate-900">{user.company}</p>
                            <p className="text-[10px] text-slate-500 uppercase tracking-wide font-bold text-blue-600">Plan Enterprise</p>
                        </div>
                    </div>
                </header>

                {/* Scrollable Content */}
                <main className="flex-1 overflow-y-auto p-4 sm:p-8 bg-slate-50">
                    <div className="max-w-6xl mx-auto">
                        {renderContent()}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Campus;