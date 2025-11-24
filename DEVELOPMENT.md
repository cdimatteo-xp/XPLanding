# Guía de Desarrollo - X Project Landing

## 📚 Tabla de Contenidos

1. [Arquitectura del Proyecto](#arquitectura)
2. [Convenciones de Código](#convenciones)
3. [Estado y Props](#estado-y-props)
4. [Estilos y Tailwind](#estilos)
5. [Optimización](#optimización)
6. [Testing](#testing)

## Arquitectura

### Componentes

El proyecto sigue una arquitectura basada en componentes funcionales de React:

```
App (Container)
├── Navbar (Navigation)
├── Hero (Presentational)
├── Partners (Presentational)
├── Services (Presentational)
├── Products (Stateful)
├── Training (Presentational)
├── News (Presentational)
├── About (Presentational)
├── Careers (Presentational)
├── Contact (Stateful)
└── Footer (Presentational)
```

### Tipos de Componentes

**Componentes Presentacionales:**
- Solo reciben props y muestran UI
- No manejan estado complejo
- Ejemplos: Hero, Partners, Services

**Componentes Stateful:**
- Manejan estado local con useState
- Incluyen lógica de negocio
- Ejemplos: Products (tabs), Contact (formulario)

## Convenciones

### Nomenclatura

```javascript
// Componentes: PascalCase
const Navbar = () => { ... }

// Variables y funciones: camelCase
const isOpen = false;
const handleClick = () => { ... }

// Constantes: UPPER_SNAKE_CASE
const MAX_ITEMS = 10;
```

### Estructura de Archivos

Cada componente debe seguir esta estructura:

```javascript
import React, { useState, useEffect } from 'react';
import { Icon1, Icon2 } from 'lucide-react';

// 1. Componente principal
const ComponentName = () => {
    // 2. Estado
    const [state, setState] = useState(initialValue);
    
    // 3. Efectos
    useEffect(() => {
        // ...
    }, []);
    
    // 4. Handlers
    const handleAction = () => {
        // ...
    };
    
    // 5. Datos locales
    const data = [
        // ...
    ];
    
    // 6. Render
    return (
        <section>
            {/* ... */}
        </section>
    );
};

// 7. Export
export default ComponentName;
```

## Estado y Props

### Gestión de Estado

**Estado Local (useState):**
```javascript
// Para UI state simple
const [isOpen, setIsOpen] = useState(false);
const [activeTab, setActiveTab] = useState('tab1');
```

**Formularios:**
```javascript
const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
});

const handleChange = (e) => {
    setFormState({
        ...formState,
        [e.target.name]: e.target.value
    });
};
```

### Props

```javascript
// Destructuring en parámetros
const Button = ({ label, onClick, variant = 'primary' }) => {
    return (
        <button onClick={onClick} className={`btn-${variant}`}>
            {label}
        </button>
    );
};

// PropTypes (opcional)
Button.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    variant: PropTypes.oneOf(['primary', 'secondary'])
};
```

## Estilos

### Tailwind CSS

**Clases Utilitarias:**
```javascript
// Spacing
<div className="p-4 m-2 space-y-4">

// Typography
<h1 className="text-3xl font-bold text-slate-900">

// Responsive
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

// Hover y States
<button className="bg-blue-600 hover:bg-blue-700 focus:ring-2">
```

**Componentes Reutilizables:**
```javascript
// Crear clases base en index.css
@layer components {
  .btn-primary {
    @apply px-6 py-3 bg-blue-600 text-white rounded-lg;
    @apply hover:bg-blue-700 transition-colors;
  }
}
```

### Responsive Design

```javascript
// Mobile first approach
<div className="
    text-sm          // base (mobile)
    sm:text-base     // 640px+
    md:text-lg       // 768px+
    lg:text-xl       // 1024px+
">
```

## Optimización

### Performance

**1. Lazy Loading de Componentes:**
```javascript
import { lazy, Suspense } from 'react';

const Products = lazy(() => import('./components/Products'));

<Suspense fallback={<Loading />}>
    <Products />
</Suspense>
```

**2. Memoización:**
```javascript
import { memo, useMemo, useCallback } from 'react';

// Memoizar componentes
const ExpensiveComponent = memo(({ data }) => {
    // ...
});

// Memoizar valores calculados
const filteredData = useMemo(() => {
    return data.filter(item => item.active);
}, [data]);

// Memoizar callbacks
const handleClick = useCallback(() => {
    doSomething(id);
}, [id]);
```

**3. Optimización de Imágenes:**
```javascript
// Usar formato moderno
<img src="image.webp" alt="..." />

// Lazy loading nativo
<img src="..." loading="lazy" alt="..." />

// Responsive images
<img 
    srcSet="small.jpg 400w, medium.jpg 800w, large.jpg 1200w"
    sizes="(max-width: 600px) 400px, (max-width: 900px) 800px, 1200px"
/>
```

### Build Optimization

**Vite Configuration:**
```javascript
// vite.config.js
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'ui-vendor': ['lucide-react']
        }
      }
    }
  }
});
```

## Testing

### Unit Tests (Recomendado: Vitest)

```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom
```

```javascript
// Navbar.test.jsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Navbar from './Navbar';

describe('Navbar', () => {
    it('renders logo', () => {
        render(<Navbar />);
        expect(screen.getByText('PROJECT')).toBeInTheDocument();
    });
    
    it('toggles mobile menu', () => {
        render(<Navbar />);
        const menuButton = screen.getByRole('button');
        fireEvent.click(menuButton);
        expect(screen.getByText('Inicio')).toBeVisible();
    });
});
```

### E2E Tests (Recomendado: Playwright)

```bash
npm install -D @playwright/test
```

```javascript
// tests/e2e/navigation.spec.js
import { test, expect } from '@playwright/test';

test('can navigate through sections', async ({ page }) => {
    await page.goto('http://localhost:3000');
    
    await page.click('a[href="#servicios"]');
    await expect(page.locator('#servicios')).toBeVisible();
    
    await page.click('a[href="#contacto"]');
    await expect(page.locator('#contacto')).toBeVisible();
});
```

## Mejores Prácticas

### Accesibilidad

```javascript
// Usar HTML semántico
<nav>, <main>, <section>, <article>, <footer>

// ARIA labels cuando sea necesario
<button aria-label="Cerrar menú" onClick={close}>
    <X />
</button>

// Alt text en imágenes
<img src="..." alt="Descripción significativa" />

// Navegación con teclado
<button onKeyDown={handleKeyDown} tabIndex={0}>
```

### Seguridad

```javascript
// Sanitizar input de usuario
import DOMPurify from 'dompurify';
const clean = DOMPurify.sanitize(userInput);

// Validar formularios
const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

// Prevenir XSS
// React ya escapa por defecto, pero evita dangerouslySetInnerHTML
```

### Git Workflow

```bash
# Feature branch
git checkout -b feature/new-section

# Commits descriptivos
git commit -m "feat: add testimonials section"
git commit -m "fix: navbar mobile menu alignment"
git commit -m "docs: update README with deployment info"

# Convención de commits:
# feat: nueva funcionalidad
# fix: corrección de bug
# docs: documentación
# style: formateo, sin cambios de código
# refactor: refactorización
# test: añadir tests
# chore: tareas de mantenimiento
```

## Recursos Adicionales

- [React Documentation](https://react.dev/)
- [Vite Guide](https://vitejs.dev/guide/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev/)
- [Web.dev - Performance](https://web.dev/performance/)

---

¿Preguntas? Contacta al equipo de desarrollo.
