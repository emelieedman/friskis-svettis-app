import React from "react";
import styles from "./GymCardComponent.module.css"

const GymCardComponent = (props) => {
    return (
        <p to={props.gym} className={styles.gymCard}>{props.gym}</p>
    )
}


export default GymCardComponent;