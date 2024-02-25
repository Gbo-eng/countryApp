# countryApp
**Introducción**

Este proyecto CountryApp está desarrollado en Angular, su función principal es proporcionar información sobre los distintos países del mundo. Este proyecto utiliza enrutamiento para mostrar diferentes partes de la aplicación según las necesidades del usuario y lazy loading para cargar solo los componentes activos.

## Funcionamiento
- **Configuración Inicial**: Iniciamos un nuevo proyecto Angular llamado countryApp y añadimos Bootstrap para estilos globales. Organizamos la estructura del proyecto en carpetas específicas para componentes, servicios y páginas, lo que facilita el desarrollo y mantenimiento del código.
- **Enrutamiento Dinámico**: Utilizamos el enrutamiento de Angular para cargar los componentes correspondientes según la URL que el usuario visite. Con lazy loading, cargamos los módulos de manera eficiente, reduciendo así el tiempo de carga inicial de la aplicación.
- **Navegación Intuitiva**: Implementamos una barra lateral con enlaces a las diferentes secciones de la aplicación, como la página de inicio, acerca de y contacto. Esto permite una navegación intuitiva para el usuario.
- **Búsqueda de Países**: Desarrollamos un componente de búsqueda de países que se conecta con el servicio de conexión a una API-Rest. Este componente permite al usuario buscar países por capital, región o nombre, mostrando los resultados de manera dinámica.
- **Integración con Backend**: Configuramos un servicio de conexión a una API-Rest que proporciona información detallada sobre países del mundo. Este servicio maneja las solicitudes HTTP para buscar países por criterios específicos y devuelve los resultados al componente correspondiente para su visualización.
- **Vista Detallada de Países**: Implementamos la funcionalidad para ver detalles de un país específico al hacer clic en un enlace. Utilizamos parámetros de URL para pasar el código del país y consultamos la API-Rest para obtener información detallada, como la población y las traducciones del nombre del país.

## Uso
1. **Navegación por la Aplicación**: La barra lateral ubicada en la interfaz permite acceder a las diferentes secciones de la aplicación. Haciendo clic en los enlaces correspondientes, se redirige a la página de inicio, la página "Acerca de" o la página de contacto.
2. **Búsqueda de Países**: Para la propia búsqueda de los paises los usuarios pueden buscar países de tres formas diferentes:
    - _Por Región_: Seleccionando una región específica desde el menú desplegable de búsqueda.
    - _Por Nombre del País_: Escribiendo el nombre completo o parcial del país en el campo de búsqueda.
    - _Por Capital_: Ingresando el nombre de la capital en el campo de búsqueda correspondiente.
3. **Exploración Detallada de Países**: Al hacer clic en el enlace "Ver más" en la lista de resultados de búsqueda, se redigirá a una página con información detallada sobre el país seleccionado. Aquí, puede encontrar datos como la población, la bandera y las traducciones del nombre del país, entre otros datos más, proporcionando una experiencia informativa completa.
