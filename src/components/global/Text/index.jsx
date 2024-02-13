import styles from "./Text.module.css"

export function Text({ children }) {
    return (
        <p className={styles.text}>
            {children}
        </p>
    )
}