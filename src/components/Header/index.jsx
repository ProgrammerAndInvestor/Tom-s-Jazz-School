import styles from "./Header.module.css"
import { Button } from "../global/Button"
import { Logo } from "../Logo"

export function Header() {
    return (
        <header className={styles.header}>
            <Logo />
            
            <nav>
                <ul>
                    <li><a href="#" target="_self">Início</a></li>
                    <li><a href="#" target="_self">Cursos</a></li>
                    <li><a href="#" target="_self">Eventos</a></li>
                    <li><a href="#" target="_self">Contato</a></li>
                </ul>
            </nav>

            <Button>
                Inscreva-se
            </Button>
        </header>
    )
}