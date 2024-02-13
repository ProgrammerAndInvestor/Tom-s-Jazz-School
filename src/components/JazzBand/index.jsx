import styles from "./JazzBand.module.css"
import Band from "../../assets/svg/jazz-band.svg"

export function JazzBand() {
    return (
            <img className={styles.jazzBand} src={Band} alt="Jazz Band" />
    )
}