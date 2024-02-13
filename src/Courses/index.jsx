import styles from "./Courses.module.css"

export function Courses({ children }) {
    return (
        <div className={styles.courses}>
            {children}
        </div>
    )
}