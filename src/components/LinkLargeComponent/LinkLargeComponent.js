import React from "react";
import styles from "./LinkLargeComponent.module.css"
import { Link } from "react-router-dom"

const LinkLargeComponent = (props) => {
    return (
        <Link to={props.activity} className={styles.link}>
            <p className={styles.gridItem1}>
                {props.clock} time: {props.time}
            </p>
            <h3 className={styles.gridItem2}>{props.activity}</h3>
            <p className={styles.gridItem3}>{props.num} Slots Left</p>
            <p className={styles.gridItem4}>F&S {props.gym}</p>
        </Link>
    )
}


export default LinkLargeComponent;