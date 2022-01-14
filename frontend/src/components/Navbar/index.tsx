import { ReactComponent as GithubIcon } from 'assets/img/GitHub.svg';
import './styles.css'
//para evitar de usar ../../ que faz voltar uma pasta usar o comando abaixo
//no arquivo tsconfig.json: "baseUrl": "./src" (reinicie o app)
//container é uma classe do bootstrap deixa de forma responsiva
function Navbar() {
    return (
        <header>            
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <h1>DSMovie</h1>
                    <a href="https://github.com/ThainaraOrneles">
                        <div className="dsmovie-contact-container">
                            <GithubIcon />
                            <p className="dsmovie-contact-link">/devsuperior</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}
export default Navbar;