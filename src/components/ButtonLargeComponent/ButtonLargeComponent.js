import React from "react"
import styles from "./ButtonLargeComponent.module.css"
import { Link } from "react-router-dom"

const ButtonLargeComponent = (props) => {
    return (
        <Link to={props.path} className={styles.buttonLarge}>{props.text}</Link>
    )
}

export default ButtonLargeComponent;
