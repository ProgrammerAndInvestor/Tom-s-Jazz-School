import Drums from "../../assets/svg/drums.svg"
import styles from "./Drums.module.css"

export function DrumsIcon() {
    return(
        <img className={styles.icon} src={Drums} alt="" />
    )
}