import styles from "./Hero.module.css"

import { JazzBand } from "../JazzBand"
import { Headline } from "../Headline"
import { Highlight } from "../Headline/Highlight"
import { Text } from "../global/Text"
import { DecorativeArrow } from "../DecorativeArrow"
import { Button } from "../global/Button"

export function Hero() {
    return (
        <div className={styles.hero}>
            <div>
                <JazzBand />
            </div>
            <div className={styles.marginSpacing}>
                <Headline>Crie algo <Highlight>impactante</Highlight> com música</Headline>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>

                <Button>
                    Comece Agora
                    <DecorativeArrow />
                </Button>
            </div>

        </div>
    )
}