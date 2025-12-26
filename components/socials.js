class Socials extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
			<div>
        		<h1>Find us here!</h1>
				<ul>
					<li><a href="https://discord.gg/tSTEm5U2Eb"><img src="/assets/socials-discord.png">		<p>Discord</p></a></li>
					<li><a href=""><img src="/assets/socials-meetup.png">		<p>Meetup</p></a></li>
					<li><a href=""><img src="/assets/socials-facebook.png">		<p>Facebook</p></a></li>
					<li><a href=""><img src="/assets/socials-web.png">			<p>Web</p></a></li>
				</ul>
			</div>
        `;
    }
}

customElements.define('socials-element', Socials);