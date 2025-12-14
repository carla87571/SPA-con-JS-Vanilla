import Header from "../templates/Header.js";
import Home from "../pages/Home.js";
import Character from "../pages/Character.js";
import Error404 from "../pages/Error404.js";
import getHash from "../utils/getHash.js";
import resolveRoutes from "../utils/resolveRoutes.js";


const routes = {
    '/': Home,
    '/character/:id': Character,
    '/contact': 'Contact',
    '/404': Error404,
}

const router = async () => {
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');

    header.innerHTML = await Header();
    // Animación de transición suave
    content.classList.remove('view-active');
    // Espera un frame para que la transición se aplique correctamente
    setTimeout(async () => {
        let hash = getHash();
        let route = await resolveRoutes(hash);
        let render = routes[route] ? routes[route] : Error404;
        content.innerHTML = await render();
        // Forzar reflow y activar animación
        void content.offsetWidth;
        content.classList.add('view-active');
    }, 20);
};
export default router;