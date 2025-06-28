# 📨 Invitaciones Digitales - Angular

**Proyecto para crear invitaciones digitales elegantes y personalizables**

## 🌐 Estructura detallada del proyecto

El proyecto sigue la estructura estándar de Angular con estos componentes clave:

### 📂 Directorio principal (`src/app`)
- **`/components`** - Componentes reutilizables:
  - `boda-invitacion/` - Componente para bodas:
    - `boda-invitacion.component.ts` - Lógica del componente
    - `boda-invitacion.component.html` - Template HTML
    - `boda-invitacion.component.scss` - Estilos SCSS
  - `cumple-invitacion/` - Componente para cumpleaños (estructura similar)

- **`/pages`** - Vistas principales:
  - `invitacion/` - Página contenedora:
    - `invitacion.component.ts` - Lógica principal
    - `invitacion.component.html` - Estructura base
    - `invitacion.component.scss` - Estilos globales

- **`/services`** - Lógica de negocio:
  - `invitacion.service.ts` - Manejo de datos de invitaciones

### 🧩 Archivos core
- `app.module.ts` - Módulo principal
- `app-routing.module.ts` - Configuración de rutas
- `app.component.*` - Componente raíz

### 🖼️ Assets y estilos
- `assets/images/` - Imágenes y multimedia
- `styles/` - Estilos globales y variables SCSS

## 🚀 Cómo comenzar

```bash
# 1. Clonar repositorio
git clone https://github.com/tuusuario/invitaciones.git

# 2. Instalar dependencias
npm install

# 3. Servidor de desarrollo
ng serve
