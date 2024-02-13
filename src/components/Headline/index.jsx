import styles from "./Headline.module.css"

export function Headline({ children }) {
    return (
        <h1 className={styles.headline}>{children}</h1>
    )
}