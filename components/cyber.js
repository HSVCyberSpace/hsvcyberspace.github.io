class Cyber extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
			<header>
        		<img src="/assets/Mascot1.png"/>
			</header>
        `;
    }
}

customElements.define('cyber-pal', Cyber);