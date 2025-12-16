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


## Despliegue automático con GitHub Actions y GitHub Pages

Este proyecto utiliza **GitHub Actions** para automatizar el build y el despliegue a **GitHub Pages**. Así, cada vez que haces push a la rama principal (`main`), tu sitio se construye y publica automáticamente.

### ¿Cómo funciona el flujo?

1. Al hacer push a la rama `main`, se activa un workflow de GitHub Actions definido en `.github/workflows/deploy.yml`.
2. El workflow instala dependencias, construye el proyecto (Webpack/Babel) y publica el contenido de la carpeta `dist` en la rama `gh-pages`.
3. GitHub Pages sirve automáticamente el contenido de la rama `gh-pages` como sitio estático.

### Pasos para el despliegue automático

1. Asegúrate de tener el archivo `.github/workflows/deploy.yml` con el siguiente contenido:

    ```yaml
    name: Deploy to GitHub Pages
    on:
       push:
          branches:
             - main
    jobs:
       build-and-deploy:
          runs-on: ubuntu-latest
          steps:
             - name: Checkout repository
                uses: actions/checkout@v4
             - name: Setup Node.js
                uses: actions/setup-node@v4
                with:
                   node-version: 18
             - name: Install dependencies
                run: npm install
             - name: Build project
                run: npm run build
             - name: Deploy to GitHub Pages
                uses: peaceiris/actions-gh-pages@v4
                with:
                   github_token: ${{ secrets.GITHUB_TOKEN }}
                   publish_dir: ./dist
    ```

2. Haz commit y push de todos los cambios a tu rama principal (`main`).
3. Ve a la pestaña **Actions** de tu repositorio en GitHub para ver el progreso del workflow.
4. Una vez finalizado, tu sitio estará disponible en GitHub Pages (usualmente en `https://<tuusuario>.github.io/<nombre-repo>/`).

## Notas
- Puedes modificar el workflow para desplegar en otros servicios si lo necesitas.
- Asegúrate de que tu archivo `index.html` y los recursos estén correctamente referenciados para producción.

---

**Autor:** Carla Mendía Díaz
