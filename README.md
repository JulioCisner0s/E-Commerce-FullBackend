<h1 align="center" id="title">Proyecto final - BackEnd</h1>

El proyecto es el backend de una aplicación de ecommerce, que permite a los usuarios gestionar productos, carritos de compras y realizar pagos mediante stripe. La aplicación también cuenta con autenticación mediante Google y GitHub, y un sistema de roles que controla el acceso a diferentes funcionalidades.

Características
Autenticación y autorización: Soporte para autenticación mediante Google y GitHub.
Gestión de productos: Los administradores pueden agregar, editar y eliminar productos.
Carrito de compras: Los usuarios pueden agregar productos a su carrito, modificar cantidades y proceder al pago.
Pasarelas de pago: Integración con Stripe y Mercado Pago para realizar compras.
Sistema de roles: Roles de administrador, usuario premium y usuario estándar.
Gestión de usuarios: Los administradores pueden ver, modificar roles y eliminar usuarios.
Sistema de valoraciones y comentarios: Los usuarios pueden valorar productos y dejar comentarios.
Soporte para vistas dinámicas: Uso de Handlebars para renderizar las vistas.


## Instalación

DOCKER-HUB: https://hub.docker.com/repository/docker/jcisnerosr24/e-commerce-fullbackend/tags/latest/sha256:b327ae2ed76378e89c28350d07692dab4664799bca968ab3bb4a81bf048e61e6

1. Clona este repositorio: `git clone https://github.com/JulioCisner0s/E-Commerce-FullBackend.git`

2. Instala las dependencias: `npm install`

3. Configura las variables de entorno. Puedes usar el archivo .env.example como referencia: `cp .env.example .env`

4. Inicia la aplicación: `npm start`

- Admin: Username: juliocesarcisnerosrosales@gmail.com, Password: Julio240300

- Premium:Username: daniel.villajuan@gmail.com, Password: CoderHouse1234

- Premium:Username: julio.rosales@gmail.com, Password: 12345678

- Usuario:Username: julio.cisneros@gmail.com, Password: 12345678

---

## Tabla de Contenido

- [Objetivos Generales](#objetivosgenerales)
- [Objetivos Específicos](#objetivosespecificos)
- [Usos](#usos)
- [Vistas](#vistas)
- [Tecnologías utilizadas](#tecnologías)
- [Dependencias](#dependencias)
- [Contribuciones](#contribuciones)

## Objetivos Generales

- Profesionalizar el servidor del ecommerce: Implementar una arquitectura escalable y modular que siga las mejores prácticas de desarrollo.
- Completar el flujo de compra: Integrar todas las vistas y funcionalidades necesarias para que un usuario pueda realizar una compra completa, desde la selección de productos hasta el pago y confirmación.
- Asegurar la seguridad y gestión de usuarios: Implementar roles y permisos para asegurar que solo usuarios autorizados puedan realizar acciones sensibles como la creación y eliminación de productos, mientras se protege la información sensible de los usuarios.
- Optimizar la experiencia de usuario: Proporcionar funcionalidades clave como recuperación de contraseñas, manejo de sesiones y actualizaciones de roles para mejorar la interacción del usuario con la plataforma.
- Realizar despliegue en un entorno de producción: Configurar y asegurar que el ecommerce esté completamente operativo en un entorno de producción, preferiblemente en Railway, con una correcta separación de variables sensibles en archivos de entorno.

## Objetivos Específicos

- #### Modelo de usuario y autenticación:

Crear el modelo de usuario con los campos necesarios y roles.
Implementar autenticación con JWT o sesiones usando Passport, con estrategias para proteger los endpoints y extraer el token de las cookies.
Añadir roles "user" y "premium", limitando las acciones según el rol.
Agregar funcionalidad de carga de documentos para usuarios que buscan cambiar su rol a "premium".

- #### Modularización del servidor:

Separar el servidor en capas: routing, controladores, DAOs y servicios.
Usar variables de entorno para gestionar datos sensibles como las credenciales de administrador y conexión a la base de datos.

- #### DAO y Patrón Repository:

Implementar DAOs para manejar la persistencia de datos, incluyendo opciones de archivos y MongoDB.
Aplicar el patrón Repository para que la lógica de negocio no dependa directamente de la implementación del DAO.

- #### Flujo de compra y tickets:

Implementar la ruta /carts/:cid/purchase para procesar la compra.
Comprobar el stock al momento de la compra y ajustar el carrito con los productos que no puedan procesarse.
Generar un ticket con los detalles de la compra (monto, productos, comprador) y guardar la fecha y hora de la transacción.

- #### Manejo de productos y permisos:

Permitir que los usuarios premium creen y gestionen sus propios productos.
Restringir que los usuarios premium puedan agregar a su carrito productos de su propiedad.
Asegurar que solo el administrador pueda eliminar productos de otros usuarios.
Notificar a los usuarios premium cuando sus productos sean eliminados.

- #### Recuperación de contraseñas:

Implementar un sistema de recuperación de contraseñas mediante un correo con un link temporal de 1 hora.
Prevenir que los usuarios reestablezcan su contraseña con la misma.

- #### Logger y manejo de errores:

Implementar un logger con niveles de prioridad (debug, info, error) usando Winston.
Configurar el logger para guardar en archivo los errores a partir de un nivel determinado en entorno de producción.
Integrar un sistema de mocking para generar 100 productos simulados en un endpoint /mockingproducts.

- #### Testing y documentación:

Escribir tests para los routers de productos, carritos y sesiones usando Mocha, Chai y Supertest.
Documentar la API del ecommerce con Swagger, centrando la documentación en los módulos de productos y carritos.

- #### Despliegue:

Realizar el despliegue final del ecommerce en Railway o una plataforma similar.
Corroborar que el flujo de compra completo funcione correctamente en producción.

---

## Usos

Endpoints principales:

- #### Usuarios

- `GET /api/users`: Obtener la lista de usuarios.
- `POST /api/users`: Crear un nuevo usuario.
- `PUT /api/users/:id`: Actualizar el rol de un usuario.
- `DELETE /api/users/:id`: Eliminar un usuario.

- #### Productos

- `GET /api/products`: Obtener la lista de productos.
- `POST /api/products`: Crear un nuevo producto.
- `PUT /api/products/:id`: Actualizar un producto existente.
- `DELETE /api/products/:id`: Eliminar un producto.

- #### Carritos

- `GET /api/carts`: Obtener los carritos de compras.
- `POST /api/carts`: Crear un nuevo carrito.
- `PUT /api/carts/:id`: Agregar productos al carrito.
- `DELETE /api/carts/:id`: Eliminar un carrito.

- #### Autenticación

- `GET /auth/google`: Iniciar sesión con Google.
- `GET /auth/github`: Iniciar sesión con GitHub.

## Tecnologías

- **Node.js**: Entorno de ejecución para el backend.
- **Express.js**: Framework para crear el servidor.
- **MongoDB**: Base de datos NoSQL para almacenar la información.
- **Passport.js**: Middleware de autenticación para gestionar las sesiones de usuario.
- **Stripe**: Pasarela de pago para realizar transacciones.
- **Handlebars**: Motor de plantillas para las vistas.
- **Bootstrap**: Framework de CSS para el diseño responsivo.
- **Jest**: Framework para pruebas unitarias.

---

## Dependencias

| Dependencias            | Versión      |
| ----------------------- | ------------ |
| @faker-js/faker         | ^8.4.1       |
| bcryptjs                | ^2.4.3       |
| body-parser             | ^1.20.2      |
| connect-mongo           | ^5.1.0       |
| dotenv                  | ^16.4.5      |
| express                 | ^4.19.2      |
| expres s-handlebars     | ^7.1.2       |
| express-session         | ^1.18.0      |
| jsonwebtoken            | ^9.0.2       |
| method-override         | ^3.0.0       |
| mongoose                | ^8.4.0       |
| mongoose-paginate-v2    | ^1 .8.1      |
| morgan                  | ^1.10.0      |
| multer                  | ^1.4.5-lts.1 |
| nodemailer              | ^6.9.14      |
| passport                | ^0.7.0       |
| passport-github2        | ^0.1.12      |
| passport-google-oauth20 | ^2.0.0       |
| passport-local          | ^1.0.0       |
| stripe                  | ^16.12.0     |
| supert                  | ^6.3.3       |
| swagger-jsdoc           | ^6.2.8       |
| swagger-ui-express      | ^5.0.1       |
| sweetalert2             | ^11.11.0     |
| twilio                  | ^5.2.2       |
| uuid                    | ^10.0.0      |
| winston                 | ^3.13.1      |

---

## Contribuciones

Si deseas contribuir al proyecto:
Haz un fork del repositorio.
Crea una rama con tu nueva funcionalidad: `git checkout -b nueva-funcionalidad`.
Realiza los cambios necesarios y haz un commit: `git commit -m 'Añadir nueva funcionalidad'`.
Envía tus cambios: `git push origin nueva-funcionalidad`.
Crea una Pull Request.
