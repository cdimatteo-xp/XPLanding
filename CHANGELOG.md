# Changelog

Todos los cambios notables de este proyecto serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/),
y este proyecto adhiere a [Versionado Semántico](https://semver.org/lang/es/).

## [1.1.0] - 2025-11-24

### Añadido
- Sección "Nosotros" completamente rediseñada con información de las socias fundadoras
- Perfiles detallados de Carolina Di Matteo (Ingeniera en Informática) y Carolina C. Castro (Actuaria)
- Integración de links a LinkedIn para ambas socias con botones interactivos
- Áreas de expertise específicas para cada socia
- Diseño de tarjetas mejorado con gradientes diferenciados (azul/índigo)
- Historia del legado familiar (segunda generación)
- Sección ADN Corporativo con métricas visuales (20+ años de experiencia, certificación IRAM)
- Tarjetas visuales con iconos y estadísticas de la empresa
- GitHub Actions workflow para deployment automático en GitHub Pages
- Configuración completa de CI/CD

### Modificado
- Actualizado Tailwind CSS de v3.4.0 a v4.1.0
- Migrado configuración de Tailwind a TypeScript (tailwind.config.ts)
- Actualizado sintaxis de importación de Tailwind CSS (@import "tailwindcss")
- Reemplazado `tailwindcss` plugin por `@tailwindcss/postcss` en PostCSS
- Componente Products: eliminadas interpolaciones dinámicas de colores
- Implementado mapeo estático de colores para compatibilidad con Tailwind v4
- Mejorada UX/UI del componente About con efectos hover y transiciones
- Añadidos colores completos (blue, indigo, cyan, emerald, slate, lime, amber, purple) en Tailwind config
- Configurado `base: '/XPLanding/'` en vite.config.js para GitHub Pages

### Corregido
- Fix de importación faltante `CheckCircle` en componente Products
- Sincronización de package-lock.json con package.json
- Corrección de workflow de GitHub Actions (npm ci → npm install)
- Problemas de renderizado de estilos en producción
- Errores de compilación de Tailwind CSS v4

### Tecnologías Actualizadas
- Tailwind CSS: 3.4.0 → 4.1.0
- @tailwindcss/postcss: 4.1.0 (nuevo)
- Vite: 5.0.8 → 5.4.21

### Infraestructura
- GitHub Actions configurado para deployment automático
- Optimización de build para producción
- Configuración de GitHub Pages con workflow personalizado

## [1.0.0] - 2025-11-23

### Añadido
- Landing page completa con todas las secciones
- Sistema de navegación responsive con menú móvil
- Sección Hero con llamados a la acción
- Componente Partners mostrando alianzas estratégicas
- Sección Services con 3 servicios principales
- Sistema de productos con 4 soluciones:
  - e-ACM: Audit Control Manager (4 planes)
  - e-ACR: Suite de Gestión de Riesgos (3 módulos)
  - e-CML: Prevención de Lavado de Activos
  - e-FIDUCIA: Administración Fiduciaria
- Sección Training (X Project Academy)
- Blog de novedades con 3 artículos
- Sección About con información corporativa
- Sección Careers para reclutamiento
- Formulario de contacto funcional
- Footer con redes sociales y links
- Configuración completa de Vite + React
- Integración de Tailwind CSS
- Documentación completa (README.md, DEVELOPMENT.md)
- Estructura de componentes modular
- Diseño responsive mobile-first
- Animaciones y transiciones suaves

### Tecnologías
- React 18.2.0
- Vite 5.0.8
- Tailwind CSS 3.4.0
- Lucide React 0.294.0 (iconos)
- PostCSS + Autoprefixer

### Características
- 100% responsive
- Performance optimizado
- SEO básico implementado
- Accesibilidad mejorada
- Cross-browser compatible

## [0.1.0] - Pre-release

### Inicial
- Archivo único index.js con todos los componentes

---

## Guía de Versiones

### MAYOR.MENOR.PARCHE

- **MAYOR**: Cambios incompatibles con versiones anteriores
- **MENOR**: Nueva funcionalidad compatible con versiones anteriores
- **PARCHE**: Correcciones de bugs compatibles

### Tipos de Cambios

- **Añadido** - para nuevas características
- **Cambiado** - para cambios en funcionalidad existente
- **Deprecado** - para características que se eliminarán pronto
- **Eliminado** - para características eliminadas
- **Corregido** - para corrección de bugs
- **Seguridad** - para vulnerabilidades
