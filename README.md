# X Project S.A. - Landing Page

Landing page corporativa de X Project S.A., empresa especializada en soluciones de software de gestión de riesgos, auditoría y cumplimiento normativo.

## 🚀 Tecnologías

- **React 18** - Biblioteca de JavaScript para interfaces de usuario
- **Vite** - Build tool y servidor de desarrollo ultrarrápido
- **Tailwind CSS** - Framework de CSS utilitario
- **Lucide React** - Iconos modernos y optimizados

## 📋 Prerequisitos

Antes de comenzar, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (versión 16 o superior)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)

## 🔧 Instalación

1. **Clona el repositorio** (si aplica) o navega a la carpeta del proyecto:

```bash
cd XPLanding
```

2. **Instala las dependencias**:

```bash
npm install
```

## 🏃 Ejecución

### Modo Desarrollo

Inicia el servidor de desarrollo con hot-reload:

```bash
npm run dev
```

La aplicación se abrirá automáticamente en [http://localhost:3000](http://localhost:3000)

### Build de Producción

Genera la versión optimizada para producción:

```bash
npm run build
```

Los archivos optimizados se generarán en la carpeta `dist/`

### Preview de Producción

Previsualiza el build de producción localmente:

```bash
npm run preview
```

## 📁 Estructura del Proyecto

```
XPLanding/
├── public/
│   └── index.js              # Archivo original (legacy)
├── src/
│   ├── components/
│   │   ├── About.jsx         # Sección "Nosotros"
│   │   ├── Careers.jsx       # Sección "Trabaja con Nosotros"
│   │   ├── Contact.jsx       # Formulario de contacto
│   │   ├── Footer.jsx        # Pie de página
│   │   ├── Hero.jsx          # Banner principal
│   │   ├── Navbar.jsx        # Barra de navegación
│   │   ├── News.jsx          # Sección de novedades
│   │   ├── Partners.jsx      # Alianzas estratégicas
│   │   ├── Products.jsx      # Sistemas/Productos
│   │   ├── Services.jsx      # Servicios
│   │   └── Training.jsx      # X Project Academy
│   ├── App.jsx               # Componente principal
│   ├── main.jsx              # Punto de entrada
│   └── index.css             # Estilos globales + Tailwind
├── index.html                # HTML base
├── package.json              # Dependencias y scripts
├── vite.config.js            # Configuración de Vite
├── tailwind.config.js        # Configuración de Tailwind
├── postcss.config.js         # Configuración de PostCSS
└── README.md                 # Este archivo
```

## 🧩 Componentes

### Navbar
Barra de navegación fija con menú responsive y logo de la empresa.

### Hero
Banner principal con llamados a la acción y animaciones.

### Partners
Muestra alianzas estratégicas y certificaciones (IRAM, ADVANTUR, GLI).

### Services
Grid de servicios principales: Consultoría, Outsourcing, Gestión Documental.

### Products
Sistema de tabs para mostrar los diferentes productos:
- **e-ACM**: Audit Control Manager (4 planes)
- **e-ACR**: Suite de Gestión de Riesgos (3 módulos)
- **e-CML**: Prevención de Lavado de Activos
- **e-FIDUCIA**: Administración Fiduciaria

### Training
Sección de X Project Academy con programas de capacitación.

### News
Grid de noticias y actualizaciones de la empresa.

### About
Información corporativa y valores de la empresa.

### Careers
Sección de recursos humanos con llamado a la acción.

### Contact
Formulario de contacto con validación y información de contacto.

### Footer
Pie de página con links, redes sociales e información legal.

## 🎨 Personalización

### Colores

Los colores principales están definidos en `tailwind.config.js`. Para cambiarlos:

```javascript
theme: {
  extend: {
    colors: {
      primary: { ... }
    }
  }
}
```

### Contenido

Para modificar el contenido de las secciones, edita los archivos de componentes en `src/components/`.

### Imágenes

Las imágenes actuales provienen de Unsplash. Reemplázalas con:
- Imágenes propias en `/public/images/`
- Actualiza las rutas en los componentes correspondientes

## 🔍 SEO

El archivo `index.html` incluye meta tags básicos. Para mejorar el SEO:

1. Actualiza las meta descriptions
2. Agrega Open Graph tags para redes sociales
3. Incluye structured data (JSON-LD)
4. Configura un `sitemap.xml` y `robots.txt`

## 📱 Responsive Design

El sitio es completamente responsive usando las utilidades de Tailwind:
- `sm:` - 640px+
- `md:` - 768px+
- `lg:` - 1024px+
- `xl:` - 1280px+

## 🚢 Deployment

### Vercel (Recomendado)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Arrastra la carpeta dist/ a Netlify
```

### Servidor Tradicional

```bash
npm run build
# Sube el contenido de dist/ a tu servidor
```

## 📝 Scripts Disponibles

- `npm run dev` - Inicia servidor de desarrollo
- `npm run build` - Genera build de producción
- `npm run preview` - Previsualiza build localmente
- `npm run lint` - Ejecuta ESLint (si se configura)

## 🛠️ Solución de Problemas

### El servidor no inicia

```bash
# Limpia node_modules y reinstala
rm -rf node_modules
npm install
```

### Estilos de Tailwind no se aplican

```bash
# Verifica que el archivo index.css tenga las directivas de Tailwind
# Asegúrate de que está importado en main.jsx
```

### Errores de build

```bash
# Limpia la caché de Vite
rm -rf node_modules/.vite
npm run build
```

## 🤝 Contribución

Si deseas contribuir al proyecto:

1. Crea una rama con tu feature (`git checkout -b feature/AmazingFeature`)
2. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
3. Push a la rama (`git push origin feature/AmazingFeature`)
4. Abre un Pull Request

## 📄 Licencia

MIT License - ver el archivo LICENSE para más detalles.

## 📞 Contacto

**X Project S.A.**
- Email: info@x-project.com.ar
- Teléfono: (54 11) 5239-8216 al 8219
- LinkedIn: [X Project SA](https://ar.linkedin.com/company/x-project-sa)
- Ubicación: Buenos Aires, Argentina

---

Desarrollado con ❤️ por X Project S.A.
