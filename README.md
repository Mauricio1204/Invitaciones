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


# Invitaciones

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.11.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
