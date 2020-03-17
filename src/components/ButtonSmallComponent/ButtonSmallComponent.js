import React from "react"
import styles from "./ButtonSmallComponent.module.css"
import { Link } from "react-router-dom"

const ButtonSmallComponent = (props) => {
    return (
        <Link to={props.path} className={styles.buttonSmall}>{props.text}</Link>
    )
}

export default ButtonSmallComponent;
