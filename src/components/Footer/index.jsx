import styles from "./Footer.module.css"
import { Logo } from "../Logo";
import { Button } from "../global/Button";
import { Text } from "../global/Text";

export function Footer() {
    return (
        <footer>
            <header>
                <Logo />

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </header>

            <nav>
                <ul>
                    <li><a href="#">Início</a></li>
                    <li><a href="#">Cursos</a></li>
                    <li><a href="#">Eventos</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>
            </nav>

            <div>
                <label for="User">Receba materiais gratuitos no seu email</label>
                <input type="text" />

                <Button>
                    Quero Receber
                </Button>
            </div>
        </footer>
    )
}           