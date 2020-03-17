import React from "react"
import { Link } from "react-router-dom";
import styles from "./LinkRoundComponent.module.css"

const LinkRoundComponent = (props) => {
    return (
    <Link className={styles.link} to={props.date}>{props.date}</Link>
    )
}

export default LinkRoundComponent;