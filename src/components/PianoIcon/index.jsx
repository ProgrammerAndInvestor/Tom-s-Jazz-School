import Piano from "../../assets/svg/piano.svg"
import styles from "./Piano.module.css"

export function PianoIcon() {
    return(
        <img className={styles.icon} src={Piano} alt="" />
    )
}