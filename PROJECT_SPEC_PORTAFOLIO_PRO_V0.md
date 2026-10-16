# PROJECT_SPEC_PORTAFOLIO_PRO_V0

> **Proyecto:** PORTAFOLIO_PRO  
> **Documento:** Especificación técnica, decisiones aprobadas y registro de continuidad de la V0  
> **Revisión documental:** 0.2.0 — 16/10/2026  
> **Estado del producto:** **V0 IMPLEMENTADA CON BLOQUEOS PENDIENTES**  
> **Repositorio vigente:** https://github.com/uretatolentinoc/Portafolio-Pro  
> **Rama de trabajo observada:** `main`  
> **Instantánea consultada:** `1a777b964fd3529db8693f24c0c06437b42c7920` (referencia devuelta por GitHub en esta revisión)  
> **Naturaleza de esta revisión:** **solo documentación**. No modifica HTML, CSS, JavaScript, assets, configuración ni archivos en GitHub.

---

## 1. Finalidad y criterios de autoridad

Este archivo es el **registro del estado particular de PORTAFOLIO_PRO**, de las decisiones vigentes y de los pendientes que deben trasladarse sin pérdidas a otros chats y a la etapa V1. No sustituye el brief, el repositorio ni los estándares generales; tampoco implica que se haya completado la validación funcional o visual de la aplicación.

### 1.1. Fuentes y prioridad

1. Requisitos explícitos y decisiones aprobadas por el titular del proyecto.
2. Brief, diseño o referencia específica aplicable, cuando exista.
3. Código y recursos **vigentes** en `uretatolentinoc/Portafolio-Pro`, rama `main`.
4. `PROMPT_MASTER_WEB_V0.md`, versión **0.1.0** (metodología y protocolo).
5. `TRIPLETEN_CORE_V0.md`, versión **0.1.0** (estándar técnico).
6. Criterio técnico razonado para vacíos no cubiertos.

**Reglas obligatorias de continuidad:** preservar la arquitectura aprobada y los componentes operativos; no reinterpretar silenciosamente requisitos explícitos; no incorporar herramientas ni frameworks sin necesidad; clasificar hallazgos como **OBSERVADO**, **INFERIDO**, **PROPUESTO** o **BLOQUEADO / NO VERIFICABLE**. Las propuestas **no** pasan a estar aprobadas por aparecer en este documento.

### 1.2. Fuente histórica

- Template de partida: https://github.com/codewithsadee/vcard-personal-portfolio
- Rama original registrada en la primera especificación: `master`.
- Commit original de referencia registrado en la primera especificación: `927f09a` (abreviado).
- Secuencia del proyecto: `DISCOVERY + REVIEW_V0` → `BUILD_V0` → primera depuración → segunda depuración → actualización documental de V0.
- No confundir el repositorio de origen con el repositorio **propio y vigente** del proyecto.

---

## 2. Identidad y objetivo de producto

**OBSERVADO:** portafolio personal de orientación profesional y técnica, con contenido de ingeniería civil y desarrollo web, en español. El HTML vigente muestra el título `Portafolio Personal | Cristian W. Ureta Tolentino` y un perfil de ingeniero/desarrollador.

**Objetivo aprobado:** presentar identidad, perfil, servicios, educación, experiencia, habilidades, referencias profesionales, clientes, proyectos, publicaciones y medios de contacto, conservando la interfaz ya aprobada y permitiendo reemplazos incrementales de contenido.

**Restricción:** no rediseñar la base visual ni convertir la web en un framework, CMS o sistema multipágina general solo por consideraciones de estilo. Las páginas propias de proyectos se incorporarán cuando existan contenidos y destinos reales.

---

## 3. Stack, dependencias y arquitectura existente

### 3.1. Tecnologías OBSERVADAS

- **HTML5**: estructura, semántica, vistas y contenido.
- **CSS3**: estilos, layout, responsive y estados visuales.
- **JavaScript vanilla**: sidebar, navegación, filtros, modal de referencias y habilitación del formulario mediante validación HTML.
- **Ionicons 5.5.2**: scripts externos de iconografía cargados por CDN.
- **Google Fonts / Poppins**: tipografía externa.
- Sin React, Vite, TypeScript, npm, bundler ni servidor backend **dentro del repositorio inspeccionado**.

La interfaz es **single-page con vistas internas mostradas/ocultadas mediante JS**. Esto no equivale a un enrutador multipágina o a un SPA implementado con framework.

### 3.2. Árbol operativo OBSERVADO en `main`

```text
Portafolio-Pro/
├── index.html
├── README_PORTAFOLIO_PRO.md
├── PROJECT_SPEC_PORTAFOLIO_PRO_V0.md
├── LICENSE
└── assets/
    ├── css/
    │   ├── style.css
    │   └── v0-fixes.css
    ├── js/
    │   └── script.js
    └── images/
        └── [35 archivos de imágenes e iconos]
```

**Importante:** `README.md` **no figura actualmente** en el árbol de la rama `main` consultada el 16/10/2026. Su coexistencia con el README especializado está aprobada, pero su presencia en el repositorio queda **PENDIENTE DE MATERIALIZACIÓN**. No atribuir al árbol un archivo que no existe.

### 3.3. Contrato documental APROBADO — conservar ambos README

| Documento | Responsabilidad acordada | Situación observada |
|---|---|---|
| `README.md` | Portada y guía breve convencional de GitHub: propósito, acceso, arranque, estado y enlaces a documentación | **Aprobado; ausente en `main`; pendiente de incorporar** |
| `README_PORTAFOLIO_PRO.md` | Descripción ampliada del producto, características, secciones, instalación, tecnologías y limitaciones | **Existe; conservar** |
| `PROJECT_SPEC_PORTAFOLIO_PRO_V0.md` | Fuente de continuidad técnica: decisiones, arquitectura, evidencia, pendientes, QA e historial | **Existe; actualizar mediante este documento** |
| `LICENSE` | Atribución y condiciones de la licencia del template original | **Existe; conservar** |

**No fusionar ni eliminar los README por duplicidad aparente:** son dos niveles de documentación con funciones diferentes. Cuando se incorpore `README.md`, debe referenciar al README ampliado y a este PROJECT_SPEC sin duplicarlos íntegramente. El diagrama del README especializado es una representación documental y deberá reflejar ambos archivos cuando el README general haya sido agregado.

### 3.4. Responsabilidad de archivos técnicos

| Archivo | Responsabilidad vigente | Política |
|---|---|---|
| `index.html` | Contenido, estructura, atributos semánticos y puntos de integración manual | Modificar solo por requerimientos expresos y mínimos |
| `assets/css/style.css` | Base visual y breakpoints heredados del template | No reescribir ni fusionar sin causa técnica |
| `assets/css/v0-fixes.css` | Ajustes incrementales V0 de accesibilidad, placeholders y móvil | Mantener separado y revisar sus dependencias al cambiar HTML |
| `assets/js/script.js` | Comportamiento ya integrado | Mantener los contratos `data-*`; no reestructurar sin necesidad |
| `assets/images/` | Avatar, iconos, marcas, imágenes de proyectos y blog | Borrar solo recursos cuyo no uso esté verificado y cuya reserva futura se descarte |

---

## 4. Modelo visual, componentes y responsive

### 4.1. Componentes existentes

- Sidebar con imagen de perfil, contacto y marcadores informativos de redes sociales.
- Barra de navegación con cinco vistas: **Sobre mí, Currículum, Portafolio, Blog y Contacto**.
- Bloques de servicios, referencias profesionales/modal y clientes.
- Educación, experiencia y habilidades.
- Cuadrícula de proyectos con filtros de escritorio y selector móvil.
- Seis tarjetas de blog.
- Mapa incrustado y formulario de contacto.

**Sistema visual:** conservar la estética, tipografía, espaciados, colores, tarjetas, transiciones y organización visual heredados de `style.css` y sus correcciones incrementales aprobadas. No se registró una orden de rediseño.

### 4.2. Contratos lógicos de navegación y filtros — APROBADOS

Separar en todo momento **texto visible** de **identificador lógico**:

- `data-nav-target` (controles) ↔ `data-page` (vistas).
- `data-filter-key` (filtro de escritorio).
- `data-select-key` (selector móvil).
- `data-category` (categoría interna de cada proyecto).

El cambio de títulos, etiquetas o idioma **no debe** obligar a cambiar las claves funcionales ni romper la navegación. Mantener la concordancia entre claves, controles y vistas.

### 4.3. Responsive — CORRECCIÓN DE TRAZABILIDAD

- **OBSERVADO en la especificación original:** breakpoints de la base señalados en `450`, `580`, `768`, `1024` y `1250 px`.
- **OBSERVADO ahora en `v0-fixes.css`:** además **sí existe** `@media (max-width: 449px)` con ajustes de `.navbar-list` y `.navbar-link`, concebidos para evitar la segunda fila de navegación en español.
- **Rectificación documental:** es incorrecto afirmar que «no se añadieron breakpoints nuevos en V0». Se añadió el ajuste puntual de **449 px** sin sustituir el sistema responsive original.
- **BLOQUEADO / NO VERIFICABLE:** no se cuenta con una prueba visual completada y documentada para `320`, `375`, `425`, `768`, `1024`, `1440 px`, tamaños intermedios, teclado y orientación horizontal. La inspección estática **no** equivale a QA visual aprobado.

---

## 5. Decisiones explícitas aprobadas — registro de control

| ID | Decisión vigente | Estado / implicación |
|---|---|---|
| `DEC-001` | **Proyectos:** páginas propias de case study como destino principal; URL externa real admitida cuando corresponda | Arquitectura prevista, páginas/destinos **pendientes** |
| `DEC-002` | **Blog:** conservar únicamente tarjetas; al tener URL externa real, enlazar solo **la imagen** | Tarjetas existentes, URLs **pendientes** |
| `DEC-003` | **Contacto:** formulario que envíe realmente, con **backend propio** | Contrato `POST /api/contact` preparado, backend **no implementado** |
| `DEC-004` | **Contenido de plantilla:** conservar material provisional donde todavía no se haya reemplazado y permitir sustitución manual | Actualmente limitado sobre todo a proyectos y blog; no generalizar a referencias verificadas |
| `DEC-005` | Idioma de la web **español**, iniciando en `<html lang="es">` | **Observado en HTML** |
| `DEC-006` | No utilizar texto visible como clave funcional; usar `data-*` explícitos | **Observado en JS/HTML** |
| `DEC-007` | Distinguir enlace real, acción y elemento informativo; no inventar `href` | Aplicado parcialmente; revisar semántica residual de `<a>` sin `href` |
| `DEC-008` | Mantener el template, el responsive existente y el stack HTML/CSS/JS; cambios mínimos | **Vigente** |
| `DEC-009` | Comentar en el HTML puntos que requieran sustitución manual | **Implementado**, algunos comentarios quedaron obsoletos tras la personalización |
| `DEC-010` | Referencias profesionales, clientes, formación, experiencia y habilidades revisados manualmente por el titular | **Aceptados como verificados por el titular**, no describirlos como ficticios |
| `DEC-011` | **Conservar los dos documentos:** `README.md` y `README_PORTAFOLIO_PRO.md` | **Aprobado el 16/10/2026**; `README.md` pendiente de estar presente en `main` |
| `DEC-012` | Actualizar PROJECT_SPEC con trazabilidad, sin modificar el código ni el repositorio durante esta entrega | **Aplicado al archivo entregable; no se publica automáticamente en GitHub** |

Estas decisiones prevalecen sobre recomendaciones de auditorías anteriores que hayan quedado desactualizadas. No alterar el alcance para encajarlo en una regla genérica del CORE.

---

## 6. Estado editorial y funcional por sección

| Sección | Evidencia de código | Estado aprobado por el titular | Pendientes reales |
|---|---|---|---|
| **Sobre mí** | Presentación e identidad personalizadas | **Verificado manualmente** | Retirar/reformular comentario de sustitución ya cumplida, cuando se autorice |
| **Servicios** | Cuatro servicios personalizados | **Verificado manualmente** | Pulido puntual de contenido si procede |
| **Referencias profesionales** | Cuatro referencias nominativas, no las del template original | **Todas declaradas reales por el titular** | Corregir textos `alt` genéricos/erratas y revisar la fecha fija del modal; no cuestionar su autenticidad sin evidencia |
| **Clientes** | Seis recursos gráficos `cliente-01` a `cliente-06` | **Verificados manualmente** | Mejorar `alt` genéricos si están identificados, sin cambiar recursos aprobados |
| **Educación** | Cuatro registros personalizados | **Verificado manualmente** | Errores editoriales residuales, si existen |
| **Experiencia** | Cuatro registros personalizados | **Verificado manualmente** | Errores editoriales residuales, si existen |
| **Habilidades** | Siete indicadores | **Verificado manualmente** | No sustituir valores ni porcentajes sin instrucción |
| **Portafolio** | Nueve proyectos con información heredada y filtros | **Por realizar** | Contenidos propios, páginas de caso y URLs reales |
| **Blog** | Seis tarjetas con contenido provisional | **Por realizar** | Contenido/URLs externos definitivos en imágenes |
| **Contacto** | Enlace de correo, teléfono y fecha coherentes; mapa general; formulario `POST` | **Correcciones básicas observadas; función de envío pendiente** | Backend propio, prueba de entrega y decisión sobre ubicación del mapa |

**Rectificación importante:** las cuatro referencias profesionales no se consideran ficticias. La permanencia de clases CSS/JS denominadas `testimonials-*` **no convierte** su contenido en inventado; su posible renombrado es una decisión técnica distinta, no necesaria para esta V0.

---

## 7. Evidencia clasificada — segunda depuración y estado más reciente

### 7.1. OBSERVADO en GitHub (16/10/2026)

- Repositorio vigente: `uretatolentinoc/Portafolio-Pro`, rama `main`.
- `index.html` incluye `<html lang="es">`, título de perfil personalizado y hojas `style.css` + `v0-fixes.css`.
- Correo con `href="mailto:..."`, teléfono con `href="tel:..."` y fecha de nacimiento con `datetime` congruente al texto visible. **No conservar como bloqueo la corrección anterior de `mailto:`**: fue resuelta antes de esta actualización documental.
- El formulario apunta a `action="/api/contact" method="POST"`, pero el repositorio inspeccionado no contiene un servidor o endpoint operativo.
- `script.js` controla navegación, sidebar, modal, filtros y habilitación del botón según `checkValidity()`; **no contiene implementación del backend de envío**.
- Proyectos y blog todavía contienen elementos tipo enlace sin `href` real, marcados como pendientes; no afirmar que esos destinos funcionan.
- El modal contiene una fecha fija `2025-01-14` que el JS consultado no sustituye al abrir una referencia diferente.
- El mapa es un iframe genérico de **Lima, Perú**; no corresponde afirmar que localiza el domicilio o dirección exacta del perfil.
- Hay comentarios `CAMBIO MANUAL` para secciones ya personalizadas.
- Directorio `assets/images/`: **35 archivos** en la instantánea inspeccionada.
- `README_PORTAFOLIO_PRO.md` existe; `README.md` **no existe aún** en `main`.
- `README_PORTAFOLIO_PRO.md` todavía muestra un árbol con `README.md`: deberá reconciliarse cuando se incorpore el README general.
- `LICENSE` se conserva.

### 7.2. Verificado manualmente por el titular — fuente explícita

- Perfil/Sobre mí, servicios, clientes, educación, experiencia y habilidades: revisados y validados por el titular.
- Referencias profesionales: ninguna es ficticia; no revertir la personalización realizada.
- El titular marca portafolio, blog, backend de contacto y QA visual como **pendientes**.
- El titular aprueba conservar **ambos README** aunque el nombre convencional aún no esté materializado en GitHub.

### 7.3. INFERIDO — no confundir con certeza

- No se necesitan frameworks ni una nueva arquitectura para añadir contenido definitivo a los módulos actuales.
- El conjunto de comentarios manuales y documentación arrastra indicaciones de la primera V0 que se han vuelto obsoletas después de la personalización.
- Las pruebas estáticas de rutas y contratos de filtros son positivas, pero no demuestran ausencia de defectos visuales o errores en interacciones reales.

### 7.4. PROPUESTO — NO APROBADO / NO EJECUTADO

- Crear `README.md` breve como portada de GitHub y mantener `README_PORTAFOLIO_PRO.md` como explicación extendida, conservando ambos sin duplicación completa.
- Revisar solamente erratas residuales, los `alt` genéricos y los comentarios de reemplazo ya cumplidos.
- Revisar el elemento `time` fijo del modal para que no atribuya a todas las referencias una fecha sin confirmación.
- Agregar metadescripción y metadatos sociales en una etapa autorizada de pulido SEO.
- Identificar si imágenes no referenciadas están reservadas para contenido próximo antes de eliminarlas.

### 7.5. BLOQUEADO / NO VERIFICABLE

- Envío real, seguridad y recepción de mensajes por `/api/contact`: **backend ausente/no probado**.
- Case studies y URLs definitivas de blog: **no disponibles**.
- QA responsive y de teclado en navegador: **pendiente de ejecución y evidencia**.
- Publicación/infraestructura final y comportamiento de rutas en ese entorno: **sin verificación en esta revisión**.

---

## 8. Depuración documental y de assets — trazabilidad

### 8.1. Elementos retirados después de la primera depuración

- `.github/FUNDING.yml`: archivo de patrocinio del autor original.
- `index.txt`: duplicado de contenido de demostración original.
- `README_BUILD_V0.md`: instrucciones históricas de entrega inicial.
- `README.md` heredado: **fue retirado**, pero su **reincorporación como README propio está ahora APROBADA**; no confundir con conservar el original.
- `website-demo-image/`: capturas del template original.
- `logo-1-color.png` a `logo-6-color.png`: alternativas gráficas del template.

Estos cambios se constataron comparando las auditorías y el árbol vigente. No recrear documentos descartados salvo decisión expresa; el futuro `README.md` será nuevo y específico del proyecto.

### 8.2. Recursos gráficos no referenciados detectados

Se identificaron como **candidatos de depuración, no aprobados para eliminación**:

- `assets/images/avatar-2.png`
- `assets/images/avatar-3.png`
- `assets/images/icon-app.svg`
- `assets/images/icon-photo.svg`
- `assets/images/logo.svg`

Antes de retirar alguno, comprobar referencias en HTML/CSS/JS, uso previsto, historial de personalización y necesidad de branding futuro. `logo.ico` **sí** se utiliza como favicon y debe conservarse. Conservar `LICENSE` y atribución original conforme a la licencia MIT.

---

## 9. QA y calidad: qué está comprobado y qué no

### 9.1. Evidencia estática disponible

- Cinco destinos `data-nav-target` y cinco vistas `data-page` coherentes en el código consultado.
- Filtros separados del texto visible por claves `data-*`.
- Enlace de correo y teléfono con esquemas URI correctos en la versión reciente.
- Referencias locales de imágenes/CSS/JS auditadas en la segunda depuración sin rutas locales inexistentes reportadas.
- Mejoras de accesibilidad: `type="button"`, `aria-expanded`, `aria-current`, diálogo/modal, labels del formulario, `:focus-visible` y soporte de Escape/teclado para las referencias.
- Foco y navegación lógica **inspeccionados en código**, no certificados mediante prueba end-to-end.

### 9.2. Matriz de verificación pendiente de cierre

| Prueba | Estado | Criterio de aceptación |
|---|---|---|
| Navegación: cinco vistas | Pendiente de QA en navegador | Funcionamiento ratón/teclado y selección correcta |
| Filtros escritorio y móvil | Pendiente de QA en navegador | Todas las categorías muestran los proyectos esperados |
| Modal de referencias | Pendiente de QA en navegador | Apertura/cierre, foco, Escape, contenido/fecha coherentes |
| Sidebar | Pendiente de QA en navegador | Despliegue y estado `aria-expanded` correctos |
| Responsive `320/375/425/768/1024/1440 px` | **Pendiente** | Sin scroll horizontal accidental, superposiciones ni pérdida de interacción |
| Tamaños intermedios / landscape / texto largo | **Pendiente** | Componentes flexibles y navegación utilizable |
| Contraste y accesibilidad práctica | **Pendiente** | Navegación de teclado y foco visible |
| Formulario: validación local | Pendiente de prueba en navegador | Inputs, labels, `required`, habilitación del botón |
| Formulario: envío real y seguridad | **BLOQUEADO** | Endpoint desplegado, respuestas, recepción y medidas antiabuso verificadas |
| Enlaces de proyectos y blog | **BLOQUEADO** | URLs reales y destinos existentes |
| SEO / vista previa social | No incorporado | Definir metadatos cuando se autorice |

**Criterio de cierre:** seguir CORE §§20–22, 29–34 y Definition of Done (§37); no declarar «V0 completa» mientras el alcance acordado tenga bloqueos de envío o destinos reales.

---

## 10. Pendientes priorizados sin modificar la arquitectura

| ID | Prioridad | Pendiente | Archivo(s) involucrado(s) | Naturaleza |
|---|---|---|---|---|
| `P-01` | Alta | Backend propio para `POST /api/contact`, validación de servidor, protección antiabuso y confirmación de recepción | Backend por definir, `index.html` | **Bloqueo funcional; requiere diseño y autorización V1** |
| `P-02` | Alta | Contenidos y páginas propias de los nueve proyectos; enlaces reales | `index.html`, páginas nuevas cuando se aprueben | **Pendiente de contenido/V1** |
| `P-03` | Media | URLs externas definitivas para las seis imágenes del blog | `index.html` | **Pendiente de contenido/V1** |
| `P-04` | Alta | QA visual, responsive, teclado, filtros, modal y formulario | Web en navegador | **Pendiente de prueba** |
| `P-05` | Media | Crear `README.md` propio **sin eliminar** `README_PORTAFOLIO_PRO.md` | `README.md` (ausente), README especializado | **Decisión documental aprobada, no ejecutada** |
| `P-06` | Media | Eliminar/reformular comentarios `CAMBIO MANUAL` obsoletos | `index.html` | **Pulido editorial pendiente de autorización** |
| `P-07` | Media | Corregir erratas puntuales, `alt` genéricos y fecha fija del modal | `index.html` (y JS solo si se confirma necesidad) | **Pulido editorial/funcional** |
| `P-08` | Baja | Decidir reserva o baja de cinco assets sin referencia directa | `assets/images/` | **Inventario pendiente de confirmación** |
| `P-09` | Media | Confirmar publicación/ubicación del mapa general de Lima | `index.html` | **Decisión de contenido pendiente** |
| `P-10` | Media | SEO básico y metadatos sociales, sin rediseño | `index.html` | **Mejora V1 propuesta** |

**No volver a abrir como pendiente** la corrección de `mailto:`, del enlace telefónico, la existencia de las cuatro referencias reales ni la personalización de las secciones que el titular marcó como verificadas, salvo nueva evidencia específica.

---

## 11. Extensión y backlog V1 (no implementado)

**Decisiones ya aprobadas para V1:**

1. Conectar formulario a **backend propio funcional**, compatible con el despliegue elegido. La existencia de `action="/api/contact"` por sí sola **no** entrega mensajes. Si la web se aloja en GitHub Pages, el backend debe ejecutarse en infraestructura aparte o mediante una configuración de enrutamiento compatible: GitHub Pages no lo ejecuta.
2. Crear casos de estudio propios y vincular cada proyecto a su página real (y URL externa cuando corresponda).
3. Completar tarjetas de blog, con enlaces externos **solo en la imagen**.
4. Ejecutar y documentar QA visual/responsive y de accesibilidad sobre una versión ejecutable.

**Sugerencias anteriores, aún no aprobadas como alcance de implementación:**

- Certificaciones y licencias profesionales.
- Resultados o impacto medible por proyecto.
- Metodología de trabajo.
- Descarga de CV/dossier PDF.
- Optimización básica SEO y metadatos para compartir enlaces.

No agregar estas secciones ni nuevas dependencias sin decisión expresa. Ninguna de estas sugerencias justifica reconstruir el template.

---

## 12. Historial de cambios y rectificaciones

| Hito | Fuente / periodo | Cambio de estado | Decisión de continuidad |
|---|---|---|---|
| `H-00` | Template `codewithsadee/vcard-personal-portfolio`; referencia `927f09a` | Base original HTML/CSS/JS | Conservar arquitectura visual y técnica aprobada |
| `H-01` | `DISCOVERY + REVIEW_V0` | Identificados desacoplamiento, semántica, accesibilidad, enlaces y formulario | BUILD incremental, sin rediseño |
| `H-02` | `BUILD_V0` | Español, `data-*`, estilos `v0-fixes.css`, contrato `POST /api/contact` | V0 implementada con bloqueo de envío y contenido pendiente |
| `H-03` | Primera depuración del repositorio propio | Detectados README original, archivos de demo, datos/editorial y assets heredados | Retirar residuos, conservar archivos operativos y LICENSE |
| `H-04` | Segunda depuración, 16/10/2026; instantánea anterior `4e56aabb976e…` | Confirmada limpieza documental, referencias personalizadas, contenido de proyectos/blog pendiente | Aceptar revisión manual del titular; continuar sin cambios de arquitectura |
| `H-05` | Revisión actual de `main`, instantánea `1a777b964fd…` | **Correo `mailto:` ya corregido**, `README.md` aún ausente; CSS confirma breakpoint `449px` | Rectificar los bloqueos y especificación antiguos |
| `H-06` | Decisión explícita del titular, 16/10/2026 | Mantener **`README_PORTAFOLIO_PRO.md` y `README.md`** con responsabilidades separadas | Actualizar PROJECT_SPEC y dejar pendiente la incorporación del README general |
| `H-07` | `PROJECT_SPEC` revisión `0.2.0`, 16/10/2026 | Registro de decisiones/QA/evidencia actualizado | Documento entregado fuera del repositorio; aún requiere incorporación manual o autorización para publicarlo |

### Rectificaciones concretas frente a `PROJECT_SPEC` anterior

1. **No afirmar** que perfil, servicios, referencias, clientes, educación, experiencia y habilidades siguen siendo ficticios: el titular los verificó.
2. **No afirmar** que no se agregaron breakpoints: existe `449px` en `v0-fixes.css`.
3. **No afirmar** que el correo carece de `mailto:`: el HTML vigente lo incorpora.
4. **No afirmar** que hay dos referencias ficticias: el titular confirma cuatro referencias reales.
5. **No afirmar** que `README.md` ya existe: está aprobado, pero ausente en la rama consultada.
6. **No afirmar** que V0 pasó QA visual o que el formulario envía correctamente: todavía no están verificados/implementados.

---

## 13. Protocolo de continuidad y aceptación

Antes de la siguiente modificación:

1. Comprobar la rama y **HEAD** actuales del repositorio. Este documento captura el estado a 16/10/2026; no sustituye una lectura del código vigente.
2. Leer esta especificación y las decisiones más recientes del titular.
3. Identificar el archivo mínimo afectado y el objetivo verificable del cambio.
4. Separar hallazgos observados, inferencias y propuestas antes de implementar.
5. Mantener las decisiones `DEC-001` a `DEC-012` salvo aprobación explícita que las sustituya.
6. Tras cada cambio funcional, validar navegación, accesibilidad y responsive; documentar el resultado real, no una presunción.
7. Actualizar la tabla de pendientes y agregar una entrada de historial cuando cambie una decisión o bloqueo material.
8. No actualizar de oficio GitHub: un archivo `.md` entregado localmente **no** equivale a un commit publicado.

### Condición de handoff a V1

- **Arquitectura aprobada:** se mantiene.
- **Requisitos explícitos:** documentados; no se modifican por criterios genéricos.
- **Contenido verificado por el titular:** se conserva.
- **Bloqueos vigentes:** backend real, destinos de proyectos/blog y QA práctico, más los detalles editoriales/documentales señalados.
- **Estado formal:** **V0 IMPLEMENTADA CON BLOQUEOS PENDIENTES**.

> **Nota de control:** esta revisión 0.2.0 actualiza la documentación del proyecto; **no constituye** una V1, no implementa funcionalidades ni certifica las pruebas pendientes.

---

**FIN — PROJECT_SPEC_PORTAFOLIO_PRO_V0 (revisión documental 0.2.0)**
