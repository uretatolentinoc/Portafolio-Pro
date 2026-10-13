# Portafolio Profesional

Portafolio web personal orientado a presentar mi perfil profesional, experiencia, proyectos y trabajos de desarrollo web mediante una interfaz clara, responsive y de fácil navegación.

El proyecto parte de una plantilla existente y ha sido depurado y adaptado de forma incremental para convertirla en una base propia, mantenible y extensible, sin introducir frameworks ni dependencias innecesarias.

## Estado del proyecto

**V0 implementada, con pendientes de cierre y validación manual.**

La base funcional del portafolio está construida. Antes de considerar la V0 completamente cerrada quedan pendientes la sustitución de contenidos provisionales, la conexión de destinos reales en proyectos y publicaciones, la implementación del envío real del formulario de contacto y una última revisión visual/responsive.

## Objetivo

Construir un portafolio profesional que permita:

- presentar de forma clara mi perfil y trayectoria;
- organizar experiencia, formación y competencias;
- mostrar proyectos mediante una sección filtrable;
- publicar o enlazar contenido técnico desde la sección de blog;
- ofrecer un canal de contacto desde la propia interfaz;
- mantener una base de código simple, comprensible y preparada para crecer.

## Secciones principales

- **Sobre mí:** presentación personal, información de contacto y perfil profesional.
- **Currículum:** experiencia, formación y competencias.
- **Portafolio:** proyectos organizados mediante filtros de categoría.
- **Blog:** tarjetas de publicaciones y contenido técnico.
- **Contacto:** información de contacto y formulario desde la interfaz.

## Funcionalidades de la V0

- Navegación interna entre vistas del portafolio.
- Sidebar con información personal y datos de contacto.
- Filtrado de proyectos por categoría.
- Diseño responsive para escritorio, tablet y dispositivos móviles.
- Interacciones desarrolladas con JavaScript nativo.
- Estructura preparada para sustituir contenido provisional por proyectos y publicaciones reales.
- Mejoras de semántica, accesibilidad y desacoplamiento entre navegación, filtros y contenido mediante atributos `data-*`.

## Tecnologías

- **HTML5** para la estructura y semántica del contenido.
- **CSS3** para estilos, layout y comportamiento responsive.
- **JavaScript Vanilla** para navegación, filtros e interacciones.
- **Ionicons** para iconografía.
- **Google Fonts / Poppins** para tipografía.

No se utilizan React, TypeScript, npm, Vite ni otros frameworks o herramientas de build en esta versión.

## Arquitectura

```text
Portafolio_Pro/
├── index.html
├── assets/
│   ├── css/
│   │   ├── style.css
│   │   └── v0-fixes.css
│   ├── js/
│   │   └── script.js
│   └── images/
├── README.md
├── LICENSE
└── PROJECT_SPEC_*.md
```

La arquitectura conserva la base simple del proyecto original y aplica cambios incrementales sobre los componentes existentes. `v0-fixes.css` concentra ajustes de la V0 sin forzar una reescritura completa de `style.css`.

## Ejecución local

El proyecto no requiere instalación de dependencias ni proceso de compilación.

1. Clona o descarga el repositorio.
2. Abre la carpeta del proyecto.
3. Ejecuta `index.html` en el navegador.

Para desarrollo local puede utilizarse cualquier servidor estático, por ejemplo la extensión **Live Server** de Visual Studio Code.

## Responsive y QA

La interfaz mantiene el enfoque responsive de la base original y debe validarse desde anchos móviles pequeños hasta escritorio. La revisión de la V0 considera especialmente:

- ausencia de scroll horizontal accidental;
- navegación utilizable en diferentes tamaños de pantalla;
- adaptación de tarjetas, textos e imágenes;
- comportamiento correcto de filtros e interacciones;
- jerarquía semántica y estados de foco;
- estabilidad con contenido de distinta longitud.

## Limitaciones actuales

La V0 no incorpora todavía:

- backend propio;
- envío real del formulario de contacto mediante `/api/contact`;
- CMS;
- autenticación;
- routing SPA mediante framework;
- páginas internas completas para cada proyecto o publicación;
- automatización de pruebas.

Los enlaces y contenidos provisionales deben sustituirse por información real antes del cierre definitivo de la versión pública.

## Próximos pasos

- Completar textos, imágenes y datos definitivos.
- Conectar cada proyecto con su caso de estudio o repositorio correspondiente.
- Definir destinos reales para las publicaciones del blog.
- Implementar el mecanismo de envío del formulario de contacto cuando exista un backend o servicio definido.
- Ejecutar la validación visual final en los breakpoints previstos y tamaños intermedios.
- Revisar accesibilidad y contenido antes del despliegue público.

## Origen del proyecto

Este proyecto fue iniciado a partir de **vCard - Personal Portfolio**, de **codewithsadee**, y posteriormente adaptado y depurado para construir un portafolio personal propio.

Repositorio original:

https://github.com/codewithsadee/vcard-personal-portfolio

## Licencia

La plantilla original se distribuye bajo licencia **MIT**. El archivo `LICENSE` debe conservarse y revisarse junto con cualquier condición aplicable al código derivado.
