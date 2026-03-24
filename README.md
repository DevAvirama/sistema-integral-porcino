# SIGEP - Sistema Integral de Gestión Porcina 🐷

**SIGEP** es una plataforma web moderna diseñada para la administración, control técnico y monitoreo de granjas porcinas. Este proyecto nace como una solución integral para optimizar procesos críticos como la vacunación, alimentación, registro de peso y reproducción en entornos de producción porcina.

Este sistema es el resultado de la evolución de un proyecto formativo desarrollado en el programa **Tecnólogo en Análisis y Desarrollo de Software (ADSO)** del **SENA**, migrado de una arquitectura estática a una Single Page Application (SPA) de alto rendimiento.

## 🚀 Tecnologías Utilizadas

* **React 18**: Biblioteca principal para la construcción de interfaces de usuario.
* **Vite**: Herramienta de construcción (build tool) para un desarrollo ultra rápido.
* **Tailwind CSS**: Framework de CSS utilitario para un diseño responsivo y personalizado.
* **React Router**: Gestión de navegación y rutas dinámicas.
* **Lucide React / Emojis**: Iconografía para una mejor experiencia de usuario.

## 🏗️ Arquitectura del Proyecto

El proyecto sigue una **Arquitectura Modular (Feature-based)**, lo que permite una escalabilidad limpia y un mantenimiento sencillo:


    src/
      ├── assets/         # Imágenes, logos e iconos de porcinos.
      ├── components/     # Componentes globales reutilizables (Botones, Sidebar, UI).
      ├── features/       # Lógica de negocio dividida por módulos (Vacunación, Pesaje, etc.).
      ├── hooks/          # Hooks personalizados para lógica repetitiva.
      ├── pages/          # Vistas principales que orquestan los componentes.
      ├── services/       # Comunicación con APIs o persistencia de datos.
      └── utils/          # Funciones de ayuda (cálculos técnicos, formateo).

✨ Módulos Principales

    Dashboard: Resumen visual del estado de la granja en tiempo real.

    Vacunación: Control detallado de planes sanitarios y dosis aplicadas.

    Alimentación: Gestión de inventario de insumos y raciones diarias.

    Registro de Peso: Monitoreo de la curva de crecimiento de los ejemplares.

    Reproducción: Seguimiento de etapas de celo, monta y partos.

🛠️ Instalación y Configuración

Para ejecutar este proyecto localmente, sigue estos pasos:

✨ Clonar el repositorio:

git clone [https://github.com/tu-usuario/nombre-del-repo.git](https://github.com/tu-usuario/nombre-del-repo.git)

✨ Instalar las dependencias:

    npm install

✨ Iniciar el servidor de desarrollo:

    npm run dev

✨ Abrir en el navegador:

    http://localhost:5173 para ver la aplicación funcionando.

📝 Roadmap / Próximos Pasos

    [ ] Componentización: Dividir la interfaz en piezas pequeñas y reutilizables (Botones, inputs, tarjetas).
    
    [ ] Manejo de Props: Aprender a pasar información de un componente padre a un hijo.
    
    [ ] Persistencia Local: Guardar los datos en el localStorage del navegador para que no se borren al refrescar.
    
    [ ] Consumo de JSON: Simular una base de datos usando un archivo .json local para practicar cómo se reciben datos.

Desarrollado  por Santiago, Camilo, Mariana, Yuliana y Emile - Aprendices ADSO SENA CTPI.
