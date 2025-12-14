
const Header = () => {
        const view = `
        <nav class="Navbar" role="navigation" aria-label="Navegación principal">
            <div class="Navbar-container">
                <div class="Navbar-logo">
                    <a href="/" aria-label="Ir a la página principal">100tifi.co</a>
                </div>
                <input type="checkbox" id="navbar-toggle" class="Navbar-toggle" aria-label="Abrir menú de navegación" />
                <label for="navbar-toggle" class="Navbar-burger" aria-label="Abrir menú de navegación" tabindex="0">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
                <div class="Navbar-links" role="menubar">
                    <a href="#/" role="menuitem" aria-label="Inicio">Home</a>
                    <a href="#/about" role="menuitem" aria-label="Acerca de">About</a>
                    <button id="darkModeToggle" class="DarkMode-btn" title="Alternar modo oscuro" aria-label="Alternar modo oscuro">🌙</button>
                </div>
            </div>
        </nav>
        `;
        return view;
};

export default Header;