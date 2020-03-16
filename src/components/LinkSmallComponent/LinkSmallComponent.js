import React from "react";
import styles from "./LinkSmallComponent.module.css"
import { Link } from "react-router-dom"

const LinkSmallComponent = (props) => {
    return (
        <Link to={props.gym} className={styles.link}>{props.gym}</Link>
    )
}


export default LinkSmallComponent;