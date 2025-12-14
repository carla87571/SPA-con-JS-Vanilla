
const Header = () => {
        const view = `
        <nav class="Navbar">
            <div class="Navbar-container">
                <div class="Navbar-logo">
                    <a href="/">100tifi.co</a>
                </div>
                <input type="checkbox" id="navbar-toggle" class="Navbar-toggle" />
                <label for="navbar-toggle" class="Navbar-burger">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
                <div class="Navbar-links">
                    <a href="#/">Home</a>
                    <a href="#/about">About</a>
                </div>
            </div>
        </nav>
        `;
        return view;
};

export default Header;