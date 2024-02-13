import styles from "./Card.module.css"

import { ArrowRight } from "../ArrowRight"
import { DrumsIcon } from "../DrumsIcon"
import { PianoIcon } from "../PianoIcon"
import { SaxIcon } from "../SaxIcon"
import { ClefSheetIcon } from "../ClefSheetIcon"

export function Card({ title }) {
        let icon = null

        if (title === "Piano") {
            icon = <PianoIcon />
        } else if (title === "Bateria") {
            icon = <DrumsIcon />
        } else if (title === "Sax alto") {
            icon = <SaxIcon />
        } else if (title === "Teoria Musical") {
            icon = <ClefSheetIcon />
        }

    return (
        <div className={styles.card}>
            {icon}
            <h2>{title}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, dolore magna aliqua.</p>
            <ArrowRight />
        </div>
    )
}