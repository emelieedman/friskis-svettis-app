import React from "react";
import styles from "./LinkSmallComponent.module.css"

const LinkSmallComponent = (props) => {
    return (
        <a className={styles.link} href="/city">{props.gym}</a>
    )
}


export default LinkSmallComponent;