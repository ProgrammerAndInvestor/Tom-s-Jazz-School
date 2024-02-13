import { DecorativeBright } from "./DecorativeBright"
import styles from "./Highlight.module.css"

export function Highlight({ children }) {
    return (
        <h1 className={styles.highlight}>
            {children}
            <DecorativeBright />
        </h1>
    )
}