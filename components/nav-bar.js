class Navbar extends HTMLElement {
    shadowRoot = this.attachShadow({mode: 'open'});

    constructor() {
        super();
    }

    connectedCallback() {
        console.log('Navbar connected');
        this.render()
    }

    render() {
        this.shadowRoot.innerHTML = `
        <style>
            .nav {
                padding: 2rem 0;
                box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.10);
                margin-bottom: 4rem;
            }

            .container {
                width: 95%;
                margin: 0 auto;
            }

            .nav .container {
                display: flex;
                justify-content: space-between;
                font-size: 1.6rem;
                align-items: center;
                
            }

            .nav img {
                height: 3.5rem;
            }

            .nav ul {
                display: flex;
                flex-direction: row;
                list-style-type: none;
            }

            .nav ul li:not(:last-child) {
                margin-right: 3rem;
            }

            .nav ul li a {
                text-decoration: none;
                color: black;
            }
        </style>
        <nav class="nav">
            <div class="container">
                <img src="./assets/images/logo1.png" alt="" srcset="">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Cart</a></li>
                    <li><a href="#">Orders</a></li>
                </ul>
            </div>
        </nav>
        `;
    }
}

customElements.define('nav-bar', Navbar);