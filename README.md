# smile-Up

Este proyecto consiste en el desarrollo de una plataforma para gestionar listas de deseos permitiendo a un usuario guardar en listas todo aquello que desea para en un furturo comprarlo o recibirlo como regalo.

 [Documentación con JsDoc](http://127.0.0.1:800/server/jsondocs/listsController.js.html)

[Ir al repo](https://github.com/Gromarant/smile_Up)

<br>

La aplicación cuenta con un frontend(interfaz gráfica), desarrollada principalmente en React.js y Sass.
Consta de un Banckend, desarrollado con node.js y express (Api rest) y una base de datos relacional con postgreSql.

## 

### Diseño inicial de la app:
![smile_up](/client/public/assets/Wish_Wireframes%201.png "Aplicación fullstack con React.js")

<br>

Surge de la idea de brindar una herramienta el la que una persona como cualquiera de nosotros pueda guardar productos que desean comprar o recibir como regalo.

<br>

## Modelado de la base de datos:

La base de datos es de postgreSQL (relacional), está constituida por 3 tablas:

1. Tabla Listas ( *lists* ): con el list_id y el nombre de la lista(name)
2. Tabla productos ( *products* ): con el product_id y el nombre de la lista(name)
3. Tabla lists_products ( *intermedia* ): con el list_id y el product_id, para relacionar las dos tablas anteriores.


![Modelo de base de datos](/client/public/assets/basesDeDatos.png "Modelo de base de datos")
<br>

## Server/ API REST:

Desarrollada con Node.js, usando Express.js, para brindar a la aplicación de front la información que requere en cada operación (interacción).

### Diagrama de flujo de la api:

![Diagrama de flujo de la api](/client/public/assets/diagramaFlujoFullProject.png "Diagrama de flujo de la api")

Desarrollada con Node.js, usando Express.js, para brindar a la aplicación de front la información que requere en cada operación (interacción).

<br>

### Lenguajes de programación y librerías usados:

![Lenguajes de programación usados y librerias](/client/public/assets/languages.png "Lenguajes de programación usados y librerias")
<br>
<br>

## Funcionalidades desarrolladas:

Buscador de productos por:
* Categoría 
* nombre
* Por todos los productos

* Creación 
* eliminacion 
* actualuzacion y lectura de datos.
* Actualización en base de datos.

<br>

## Pantallas maquetadas:

![diseño final](/client/public/assets/finalStyle.png "App de lista de deseos")

<br>


### Proximos pasos, fase 2:

For the next steps, the following improvements could be considered:

- Implementar pruebas unitarias y de integración para asegurar la calidad del código.
- Agreguar más funcionalidades, autenticación de usuarios, nuevas tablas en base de datos y relaciones para poder compartir listas entre usuarios.
- Mejorar la interfaz de usuario con estilos y diseños más atractivos.

<br>

## License

Este proyecto se distribuye bajo la **Licencia MIT**. Puede consultar el archivo [LICENCIA](https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt) para obtener más detalles.

<br>


---
[<img align="left"  height="64" src="./client/public/assets/logo2023.png">](https://www.gromarant.com/)

<br>

[© 2023 Mariangelica Rodriguez.](https://www.linkedin.com/in/mariangelica-rodr%C3%ADguez-p%C3%A9rez/) All rights reserved.

<br>
<br>

***