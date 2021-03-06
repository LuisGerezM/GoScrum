# Alkemy - Proyecto "Go Scrum"

## **Situaci贸n inicial 馃搷**

Perteneces a un equipo de desarrollo que se dedica a realizar proyectos web para diferentes clientes. Paula, project manager de tu equipo, te comparte el pedido de GoScrum, una startup IT que se especializa en brindar capacitaciones a equipos interesados en trabajar bajo el marco scrum.

#### _El pedido de la empresa consiste en.._

Desarrollar su propia aplicaci贸n de seguimiento de proyectos, que se adapte a su m茅todo de ense帽anza, con el fin de evitar los excesivos costos que significa comprar licencias de las plataformas disponibles en el mercado.
Durante sus capacitaciones, GoScrum divide a los participantes en equipos de trabajo y les asigna peque帽os proyectos para que aprendan a trabajar bajo el marco scrum a trav茅s de la pr谩ctica. Por esa raz贸n, la startup necesita que la aplicaci贸n pueda manejar autenticaci贸n, distintos roles y permisos en la creaci贸n, edici贸n y eliminaci贸n de tareas asignadas por diferentes equipos. Tambi茅n es importante que la aplicaci贸n pueda ser visualizada correctamente en dispositivos m贸viles dado que los profesores no disponen de una computadora todo el tiempo.
Adem谩s, con esta herramienta se busca que GoScrum reduzca sus costos operativos al disminuir los tiempos muertos que se utilizan al intentar adaptarse a las herramientas disponibles en el mercado.

#### _Tu objetivo 馃搵..._

Como parte del equipo de desarrollo, deber谩s crear la aplicaci贸n solicitada por GoScrum teniendo en cuenta los requerimientos mencionados debajo.

### **_隆Ten en cuenta que esta aplicaci贸n podr铆a transformarse en una nueva l铆nea de negocio de la empresa!_**

## **Requerimientos Funcionales 馃敡**

La aplicaci贸n debe contar con:

    鈼? Una p谩gina de registro de usuarios
     -->> El username no debe contener n煤meros
     -->> La contrase帽a debe tener una extensi贸n m铆nima de 6 caracteres, incluyendo m铆nimo una letra may煤scula y un n煤mero.
    鈼? Una p谩gina de inicio de sesi贸n.
    鈼? Un rol de usuario 鈥淭ech Leader鈥? para la gesti贸n y correcci贸n del contenido de los miembros del equipo.
    鈼? Un rol de usuario del equipo 鈥淭eam member鈥? que permita crear, editar y eliminar las tareas propias.
    鈼? Dise帽o responsive.
    鈼? Dise帽o funcional y limpio.

## **Assets 馃帹**

Ellos enviaron un dise帽o UI representativo que nos sugieren seguir para el desarrollo de la aplicaci贸n. Haz [click aqui](https://www.figma.com/file/wSmFpIbc3uk60Qy0IsMvtt/GOSCRUM?node-id=0%3A1) para verlo.

#### **_Vista de escritorio..._**

[![Desktop view](https://raw.githubusercontent.com/LuisGerezM/GoScrum/master/src/assets/design/GoScrum-DesktopView.png)](https://github.com/LuisGerezM/GoScrum/blob/master/src/assets/design/GoScrum-DesktopView.png)

#### **_Vista de tablet..._**

[![Tablet view](https://raw.githubusercontent.com/LuisGerezM/GoScrum/master/src/assets/design/GoScrum-TabletView.png)](https://github.com/LuisGerezM/GoScrum/blob/master/src/assets/design/GoScrum-TabletView.png)

#### **_Vista de tel茅fono m贸vil..._**

[![Mobile view](https://raw.githubusercontent.com/LuisGerezM/GoScrum/master/src/assets/design/GoScrum-MobileView.png)](https://github.com/LuisGerezM/GoScrum/blob/master/src/assets/design/GoScrum-MobileView.png)

# Resoluci贸n

## **_Proyecto "Go Scrum" - Estructura_**

[![GoScrum-structure](https://raw.githubusercontent.com/LuisGerezM/GoScrum/master/src/assets/design/GoScrum-Estructura.png)](https://github.com/LuisGerezM/GoScrum/blob/master/src/assets/design/GoScrum-Estructura.png)

### **_Prueba:_**
Puedes crear tus usuarios para probar, o bien usar:
- _LIDERES_:
        
        userName: tLeaderLG
        password: 12345A

- _MIEMBROS_:
    
        miembro_1: (con tareas)
        "userName":"tMemberLG_a", 
        "password": "12345A"

        miembro_2: (sin tareas)
        "userName":"tMemberLG_d",
        "password": "12345A"

### **_Herramientas utilizadas:_**

#### [React](https://es.reactjs.org/), [React Router Dom v6](https://reactrouter.com/docs/en/v6/getting-started/overview), [Redux](https://es.redux.js.org/), [Redux Thunk](https://github.com/reduxjs/redux-thunk), [Formik](https://formik.org/), [Yup](https://www.npmjs.com/package/yup), [UUID](https://www.npmjs.com/package/uuid), [Framer Motion](https://www.framer.com/docs/), [Material UI](https://mui.com/), [SweetAlert2](https://sweetalert2.github.io/), [React Toastify](https://fkhadra.github.io/react-toastify/introduction/), [React Loading Skeleton](https://www.npmjs.com/package/react-loading-skeleton)
