# Patrones PDF

> This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).



## Ejecutar aplicación

> Tener instalado `NodeJS` es necesario



En el directorio raiz, ejecutar:

```powershell
npm install
```

>Solo la primera vez, para instalar las dependencias, se creará la carpeta `node_modules`



```powershell
npm start
```

> Runs the app in the development mode.
> Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
>
> The page will reload if you make edits.
> You will also see any lint errors in the console.



## Estructura del proyecto

- public
- src
  - assets
    - css
    - icons
  - components
  - helpers
  - lang
  - pages
  - routers
  - App.js
  - index.css
  - index.js

### html

- public
  - index.html

El documento html para toda la aplicación, contiene las etiquetas html, head, meta, link, body, #root

Aqui se importa la libreria animate de css

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
```

> Se utiliza en el componente `src/components/Alert.js` para animar la entrada



### css

- src/index.css

- src/assets/css
  - spacing
    - margins.css
    - paddings.css
  - App.css
  - classes.css
  - flexbox.css
  - root.css
  - tags.css

#### index.css

El punto de partida que importa todos los archivos de css del proyecto en orden de lo general a lo particular por el efecto cascada, primero se importa root.css y al final App.css

#### spacing (margins.css y paddings.css)

Contiene estilos de margen y relleno de proposito general para modelar el layout similar a bootstrap

#### App.css

Contiene estilos especificos para elementos de la aplicación que probablemente solo se usaran una vez o en una pagina

#### classes.css

Contiene estilos para elementos que pueden repetirse mas de una vez o en varias paginas

#### flexbox.css

Contiene estilos de flexbox para modelar el layout similar a bootstrap

#### root.css

Contiene variables de colores, tamaños y estilos de scroll general

#### tags.css

Contiene estilos para las etiquetas de html
h1, p, label, inputs, buttons, header y main son algunos ejemplos



### javascript

- src
  - components
    - Alert.js
    - Drawing.js
    - Dropdown.js
    - Header.js
    - IntlMessages.js
    - Loader.js
    - LoadingWrapper.js
    - Preview.js
  - helpers
    - AuthContext.js
    - firebase.js
    - firebaseConfig.js
    - LangContext.js
    - useAuth.js
    - useLang.js
    - utils.js
  - lang
    - en.js
    - es.js
    - fr.js
  - pages
    - AuthPage
    - PanelPage.js
  - routers
    - AppRouter.js
    - PrivateRoute.js
    - PublicRoute.js
  - App.js
  - index.js

#### index.js

El punto de partida de la aplicación, renderiza `src/App.js` en el body



#### App.js

Empieza la aplicación con `React` 
Retorna el enrutador de la aplicación `src/routers/AppRouter.js` 

`AuthContext` y `LangContext` envuelven `AppRouter` para que todas las rutas tengan acceso al contexto del usuario y el idioma, que definen si el usuario esta logueado y el idioma actual.



#### AppRouter.js

Define las rutas con la libreria `react-router-dom`
Para todas las rutas se retorna el mismo componente `src/components/Header.js`
Y las dos rutas posibles son "/" y "/auth", cualquier otra ruta que no exista sera redireccionada a "/auth" por el componente `Redirect`

Para la ruta privada "/" se creo el componente `PrivateRoute`

Para la ruta publica "/auth" se creo el componente `PublicRoute`



#### PrivateRoute.js

Un `Route` de `react-router-dom` personalizado para proteger rutas que requieran autenticación

Si esta logueado entra a la ruta, sino se redirecciona a "/auth"



#### PublicRoute.js

Un `Route` de `react-router-dom` personalizado para proteger rutas que solo puedan ser vistas por alguien que aun no esta autenticado

Si no esta logueado entra a la ruta, sino se redirecciona a "/"



#### IntlMessages.js

Recibe el id del mensaje y retorna el string con el mensaje internacional correspondiente



**Ejemplo de traducción:**

Se quiere traducir el boton de cerrar sesión

```react
<button>Logout</button>
```



Paso 1:

Se debe agregar un `key: value` con el id y el mensaje traducido en todos los archivos de `src/lang/`

Que hasta ahora son `en.js`, `es.js` y `fr.js`

> La clave debe ser única y es útil que su definición sea explicita en cuanto a en qué parte de la pagina o en qué componente se encuentra este texto
>
> Por ejemplo:
> 'authpage-login-title': 'Bienvenido, inicia sesión',

```javascript
// src/lang/en.js

const en = {
	// ...
	'header-logout': 'Logout',
	// ...
};

export default en;

```

```javascript
// src/lang/es.js

const es = {
	// ...
	'header-logout': 'Cerrar sesión',
	// ...
};

export default es;

```

```react
// src/lang/fr.js

const fr = {
	// ...
	'header-logout': 'Se déconnecter',
	// ...
};

export default fr;

```



Paso 2:

Se debe importar el componente `src/components/IntlMessages` y sustituir el texto por dicho componente

```react
import IntlMessages from 'path/to/IntlMessages';

// ...

<button>
	<IntlMessages id="header-logout" />
</button>
```

> Un id que no existe en el archivo de idioma actual puede resultar en un error de la aplicación



**Probar traducciones**

La detección, persistencia y el switch entre idiomas del header aun no funciona, pero por ahora las traducciones pueden probarse modificando el archivo `src/helpers/useLang.js` manualmente

```react
// src/helpers/useLang.js
import { useState } from 'react';

const useLang = () => {
  const [langLoading] = useState(false);
  const [lang] = useState('es'); // Cambiar por 'en', 'es' o 'fr'

  return [langLoading, lang];
};

export default useLang;

```



**Agregar un nuevo idioma**

Se debe crear un nuevo archivo de javascript dentro de `src/lang` con todas las `key: value` correspondientes y se debe importar en el componente `IntlMessages` asi:

```react
// src/components/IntlMessages.js
// ...
import italiano from '../lang/italiano';
// ...
case 'italiano':
	return <>{italiano[id]}</>;
// ...

```



#### Drawing.js

Define los dibujos, el que se imprime en PDF y el que se muestra en vivo a escala



**`getDrawingPDF`**

Calcula el número de vistas o páginas que tendrá el dibujo con `getViews()`

Y devuelve un array de strings con el svg que se renderizará en cada página del pdf

Es el mismo svg para cada página, solo cambia el atributo viewBox dinamicamente

> Este svg debe escribirse como html
>
> Ejemplo:
> <rect width="50" height="50" stroke-width="2" />



**`DrawingHTML`**

Devuelve el svg que se dibuja a escala

> Este svg debe escribirse como jsx
>
> Ejemplo:
>
> <rect width="50" height="50" transform={`scale(${scale})`} strokeWidth="2" />



**Editar el dibujo**

Las variables se pueden cambiar en `src/components/Preview.js`

```react
// src/components/Preview.js
const scale = 0.6; // Escala de la vista de una página en la aplicación
const marginTop = 10; // Margen superior
const marginBottom = 10; // Margen inferior
const marginLeft = 10; // // Margen izquierdo
const marginRight = 10; // // Margen derecho
const pageWidth = 612 - marginLeft - marginRight; // Ancho disponible para dibujar de la página en pdf
const pageHeight = 791 - marginTop - marginBottom; // Alto disponible para dibujar de la página en pdf
const drawWidth = getRealNumber(largo); // Ancho del dibujo, el que el usuario escribe como largo
const drawHeight = getRealNumber(ancho); // Alto del dibujo, el que el usuario escribe como ancho
```

> Solo se recomendaria cambiar margenes si es necesario o la escala si se quiere visualizar mas grande o pequeño



En `getDrawingPDF` y `DrawingHTML` 

Mantener las etiquetas svg con sus atributos

Para `getDrawingPDF` escribir html

Para `DrawingHTML` siempre incluir el atributo **transform={`scale(${scale})`}** en todos los elementos hijos del svg: path, rect, circle, etc.