class Card extends HTMLElement {
    shadowRoot = this.attachShadow({mode: 'open'});

    constructor() {
        super();
        this.src = ""
    }

    connectedCallback() {
        console.log('Card connected');
        this.src = this.getAttribute("src")
        this.render()
    }

    disconnectedCallback() {
        console.log('Card disconnected');
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log('Card attribute changed', name, oldValue, newValue);
    }

    adoptedCallback() {
        console.log('Card adopted');
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>  
                .card {
                    max-width: 30rem;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 1rem;
                    padding-bottom: 2rem;
                    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.10);

                }

                .card img {
                    height: 20rem;
                }

                .card h2 {
                    font-size: 1.6rem;
                }

                .card p {
                    font-size: 1.6rem;
                }
            </style>

            <section class="card">
                <img src="${this.src}" alt="">
                <h2>Apple</h2>
                <p>Rs 100000</p>
            </section>
        `;
    }
}

customElements.define('my-card', Card);