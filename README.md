# SPA con JS Vanilla

Este proyecto es una Single Page Application (SPA) construida con JavaScript Vanilla, Webpack y Babel. Permite consultar personajes de la API de Rick and Morty y navegar entre vistas sin recargar la página.

## Estructura del proyecto

```
SPAconJSVanilla/
├── public/
│   └── index.html
├── src/
│   ├── index.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Character.js
│   │   └── Error404.js
│   ├── routes/
│   │   └── index.js
│   ├── styles/
│   │   └── styles.css
│   ├── templates/
│   │   └── Header.js
│   └── utils/
│       ├── getData.js
│       ├── getHash.js
│       └── resolveRoutes.js
├── dist/
├── package.json
├── webpack.config.js
├── babel.config.js
└── .travis.yml
```

## Instalación y uso local

1. Clona el repositorio:
   ```
   git clone https://github.com/tuusuario/SPAconJSVanilla.git
   cd SPAconJSVanilla
   ```
2. Instala las dependencias:
   ```
   npm install
   ```
3. Ejecuta el servidor de desarrollo:
   ```
   npm start
   ```
4. Para generar el build de producción:
   ```
   npm run build
   ```

## Despliegue automático con Travis CI

Este proyecto incluye integración continua con Travis CI para automatizar el build y el despliegue.

### Pasos para configurar Travis CI

1. Crea una cuenta en [Travis CI](https://travis-ci.com/) y vincula tu repositorio de GitHub.
2. Asegúrate de tener el archivo `.travis.yml` en la raíz del proyecto con el siguiente contenido básico:

   ```yaml
   language: node_js
   node_js:
     - "18"
   install:
     - npm install
   script:
     - npm run build
   # Despliegue automático (ejemplo para GitHub Pages)
   deploy:
     provider: pages
     skip_cleanup: true
     github_token: $GITHUB_TOKEN  # Define este token en las settings de Travis
     local_dir: dist
     on:
       branch: main
   ```

3. En las settings de tu repositorio en Travis CI, agrega la variable de entorno `GITHUB_TOKEN` con un token personal de GitHub que tenga permisos de push.
4. Haz commit y push de todos los cambios a tu rama principal (`main` o `master`).
5. Travis CI ejecutará el build y desplegará automáticamente el contenido de la carpeta `dist` a GitHub Pages.

## Notas
- Puedes modificar la sección `deploy` en `.travis.yml` para desplegar en otros servicios (Heroku, Firebase, etc.).
- Asegúrate de que tu archivo `index.html` y los recursos estén correctamente referenciados para producción.

---

**Autor:** Carla Mendía Díaz
