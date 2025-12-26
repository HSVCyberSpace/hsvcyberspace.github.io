class Navbar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div style="display:flex;justify-content:center;">
            <img src="/assets/Icon.png" alt="Logo"/>
            <H1>Huntsville Cyberspace</H1>
            </div>
            <header>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about.html">About Us</a></li>
                        <li><a href="/meetings.html">Meetings</a></li>
                    </ul>
                </nav>
            </header>
        `;
    }
}

customElements.define('nav-bar', Navbar);