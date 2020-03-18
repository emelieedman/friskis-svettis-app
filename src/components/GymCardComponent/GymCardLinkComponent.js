import React from "react";
import styles from "./GymCardComponent.module.css"
import { Link } from "react-router-dom"

const GymCardLinkComponent = (props) => {
    return (
        <Link to={props.gym} className={styles.gymCard} id={styles.gymCardLink}>{props.gym}</Link>
    )
}


export default GymCardLinkComponent;