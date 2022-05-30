# Alkemy - Proyecto "Go Scrum"

## **Situación inicial 📍**

Perteneces a un equipo de desarrollo que se dedica a realizar proyectos web para diferentes clientes. Paula, project manager de tu equipo, te comparte el pedido de GoScrum, una startup IT que se especializa en brindar capacitaciones a equipos interesados en trabajar bajo el marco scrum.

#### _El pedido de la empresa consiste en.._

Desarrollar su propia aplicación de seguimiento de proyectos, que se adapte a su método de enseñanza, con el fin de evitar los excesivos costos que significa comprar licencias de las plataformas disponibles en el mercado.
Durante sus capacitaciones, GoScrum divide a los participantes en equipos de trabajo y les asigna pequeños proyectos para que aprendan a trabajar bajo el marco scrum a través de la práctica. Por esa razón, la startup necesita que la aplicación pueda manejar autenticación, distintos roles y permisos en la creación, edición y eliminación de tareas asignadas por diferentes equipos. También es importante que la aplicación pueda ser visualizada correctamente en dispositivos móviles dado que los profesores no disponen de una computadora todo el tiempo.
Además, con esta herramienta se busca que GoScrum reduzca sus costos operativos al disminuir los tiempos muertos que se utilizan al intentar adaptarse a las herramientas disponibles en el mercado.

#### _Tu objetivo 📋..._

Como parte del equipo de desarrollo, deberás crear la aplicación solicitada por GoScrum teniendo en cuenta los requerimientos mencionados debajo.

### **_¡Ten en cuenta que esta aplicación podría transformarse en una nueva línea de negocio de la empresa!_**

## **Requerimientos Funcionales 🔧**

La aplicación debe contar con:

    ● Una página de registro de usuarios
     -->> El username no debe contener números
     -->> La contraseña debe tener una extensión mínima de 6 caracteres, incluyendo mínimo una letra mayúscula y un número.
    ● Una página de inicio de sesión.
    ● Un rol de usuario “Tech Leader” para la gestión y corrección del contenido de los miembros del equipo.
    ● Un rol de usuario del equipo “Team member” que permita crear, editar y eliminar las tareas propias.
    ● Diseño responsive.
    ● Diseño funcional y limpio.

## **Assets 🎨**

Ellos enviaron un diseño UI representativo que nos sugieren seguir para el desarrollo de la aplicación. Haz [click aqui](https://www.figma.com/file/wSmFpIbc3uk60Qy0IsMvtt/GOSCRUM?node-id=0%3A1) para verlo.

#### **_Vista de escritorio..._**

[![Desktop view](https://raw.githubusercontent.com/LuisGerezM/GoScrum/master/src/assets/design/GoScrum-DesktopView.png)](https://github.com/LuisGerezM/GoScrum/blob/master/src/assets/design/GoScrum-DesktopView.png)

#### **_Vista de tablet..._**

[![Tablet view](https://raw.githubusercontent.com/LuisGerezM/GoScrum/master/src/assets/design/GoScrum-TabletView.png)](https://github.com/LuisGerezM/GoScrum/blob/master/src/assets/design/GoScrum-TabletView.png)

#### **_Vista de teléfono móvil..._**

[![Mobile view](https://raw.githubusercontent.com/LuisGerezM/GoScrum/master/src/assets/design/GoScrum-MobileView.png)](https://github.com/LuisGerezM/GoScrum/blob/master/src/assets/design/GoScrum-MobileView.png)

# Resolución

## **_Proyecto "Go Scrum" - Estructura_**

[![GoScrum-structure](https://raw.githubusercontent.com/LuisGerezM/GoScrum/master/src/assets/design/GoScrum-Estructura.png)](https://github.com/LuisGerezM/GoScrum/blob/master/src/assets/design/GoScrum-Estructura.png)

### **_Herramientas utilizadas:_**

#### [React](https://es.reactjs.org/), [React Router Dom v6](https://reactrouter.com/docs/en/v6/getting-started/overview), [Redux](https://es.redux.js.org/), [Redux Thunk](https://github.com/reduxjs/redux-thunk), [Formik](https://formik.org/), [Yup](https://www.npmjs.com/package/yup), [UUID](https://www.npmjs.com/package/uuid), [Framer Motion](https://www.framer.com/docs/), [Material UI](https://mui.com/), [SweetAlert2](https://sweetalert2.github.io/), [React Toastify](https://fkhadra.github.io/react-toastify/introduction/), [React Loading Skeleton](hthttps://www.npmjs.com/package/react-loading-skeleton)
