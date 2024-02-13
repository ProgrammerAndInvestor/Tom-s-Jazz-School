import ClefSheet from "../../assets/svg/clef-sheet.svg"
import styles from "./ClefSheet.module.css"

export function ClefSheetIcon() {
    return(
        <img className={styles.icon} src={ClefSheet} alt="" />
    )
}