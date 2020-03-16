import React from "react"
import styles from "./ButtonLargeComponent.module.css"

const ButtonLargeComponent = (props) => {
    return (
        <button className={styles.buttonLarge}>{props.text}</button>
    )
}

export default ButtonLargeComponent;
