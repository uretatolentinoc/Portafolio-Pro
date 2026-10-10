# PROJECT_SPEC_PORTAFOLIO_PRO_V0

## IDENTIDAD DEL PROYECTO
- Proyecto: PORTAFOLIO_PRO
- Base: `codewithsadee/vcard-personal-portfolio`
- Rama de referencia: `master`
- Commit de referencia revisado: `927f09a`
- Modo ejecutado: `BUILD_V0`

## FUENTES
- Repositorio base aprobado.
- `PROMPT_MASTER_WEB_V0.md` v0.1.0.
- `TRIPLETEN_CORE_V0.md` v0.1.0.
- Decisiones aprobadas en `DISCOVERY + REVIEW_V0`.

## STACK
- HTML5.
- CSS3.
- JavaScript vanilla.
- Sin framework, package manager ni build tool.
- Arquitectura single-page conservada.

## ARQUITECTURA
- `index.html`
- `assets/css/style.css` — sin reescritura.
- `assets/css/v0-fixes.css` — correcciones incrementales.
- `assets/js/script.js` — lógica desacoplada y robustecida.
- `assets/images/` — sin cambios en esta entrega.

## DECISIONES APROBADAS IMPLEMENTADAS
1. Proyectos: destino previsto en páginas propias de case study; no se crean enlaces ficticios. Se dejaron comentarios de integración manual.
2. Blog: solo tarjetas; cuando exista URL externa, el enlace debe estar asociado a la imagen.
3. Contacto: contrato de frontend para backend propio en `POST /api/contact`.
4. Secciones del template: contenido ficticio conservado temporalmente y traducido al español; se añadieron comentarios de sustitución manual.
5. Idioma visible: español desde `<html lang="es">`.
6. Navegación: texto visible desacoplado de identificadores lógicos mediante `data-nav-target` / `data-page`.
7. Filtros: texto visible desacoplado mediante `data-filter-key`, `data-select-key` y `data-category`.
8. Enlace real / acción / información: eliminados `href="#"` ficticios en los puntos revisados; botones siguen siendo acciones; contenidos sin destino quedan informativos.

## ACCESIBILIDAD
- Botones con `type="button"` cuando no envían formularios.
- `aria-expanded` en controles desplegables.
- `aria-current` en navegación activa.
- Modal con `role="dialog"`, `aria-modal`, cierre por Escape y retorno de foco.
- Testimonios accesibles por teclado.
- Labels reales en formulario mediante clase `sr-only`.
- `title` en iframe del mapa.
- Foco visible reforzado.

## RESPONSIVE
- Se conserva el responsive original del template y sus breakpoints observados: 450, 580, 768, 1024 y 1250 px.
- No se reestructura layout ni se añaden breakpoints nuevos en V0.
- `v0-fixes.css` no modifica composición responsive base.

## BLOQUEOS / NO VERIFICABLE
- El backend propio de contacto no existe en el repositorio base y GitHub Pages no ejecuta backend. El formulario queda preparado para `POST /api/contact`, pero el envío real exige desplegar ese endpoint o reemplazar `action` por la URL real del backend.
- Los case studies no existen todavía; por eso las tarjetas de proyecto no reciben `href` inventados.
- No existen URLs externas definitivas para las tarjetas de blog; por eso las imágenes permanecen sin `href` hasta completar contenido.

## PENDIENTES MANUALES
- Sustituir nombre, avatar, cargo y contacto.
- Sustituir servicios, testimonios, clientes, formación, experiencia y habilidades.
- Crear páginas reales de case study y añadir `href`.
- Añadir URLs externas reales en imágenes del blog.
- Sustituir/eliminar mapa ficticio.
- Implementar y desplegar backend propio de contacto.

## SUGERENCIAS V1 NO IMPLEMENTADAS
- Certificaciones y licencias profesionales.
- Resultados/impacto medible por proyecto.
- Metodología de trabajo.
- Descarga de CV o dossier PDF.

## ESTADO DE VALIDACIÓN
- Estructura revisada estáticamente.
- JavaScript preparado para revisión sintáctica.
- QA visual/responsive final requiere abrir el proyecto completo con sus assets en navegador/DevTools.

## ESTADO
**V0 IMPLEMENTADA CON BLOQUEO PENDIENTE:** backend propio del formulario de contacto y destinos reales todavía no creados.
