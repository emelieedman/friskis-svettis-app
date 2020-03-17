import React from "react"
import styles from "./ButtonLargeComponent.module.css"
import { Link } from "react-router-dom"

const ButtonLargeComponent = (props) => {
    return (
        <Link to={props.path}><button className={styles.buttonLarge}>{props.text}</button></Link>
    )
}

export default ButtonLargeComponent;
