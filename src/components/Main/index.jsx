import styles from "./Main.module.css"

import { Hero } from "../Hero"
import { Card } from "../Card"
import { Courses } from "../../Courses"
import { Headline } from "../Headline"
import { Highlight } from "../Headline/Highlight"
import { Button } from "../global/Button"
import { Text } from "../global/Text"

export function Main() {
    return (
        <main className={styles.main}>
            <Hero />

            <Courses>
                <Card title="Piano" />
                <Card title="Teoria Musical" />
                <Card title="Sax alto" />
                <Card title="Bateria" />
            </Courses>

            <div className={styles.bottom}>
                <h1>E <span>vários</span> outros</h1>

                <Button>
                    Conhecer Cursos
                </Button>
            </div>
        </main>
    )
}