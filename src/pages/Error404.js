const Error404 = () => {
    const view = `
        <div class="Error404">
            <div class="Error404-icon">🚫</div>
            <h2>404 - Página no encontrada</h2>
            <p>Lo sentimos, la página que buscas no existe o fue movida.</p>
            <a class="Error404-btn" href="#/">Volver al inicio</a>
        </div>
    `;
    return view;
};
export default Error404;