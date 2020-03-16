import React from "react";
import styles from "./LinkSmallComponent.module.css"

const LinkSmallComponent = (props) => {
    return (
        <div className={styles.link}>{props.gym}</div>
    )
}


export default LinkSmallComponent;