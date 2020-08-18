
import React from "react";
import styles from "./ActivityCardComponent.module.css"

const ActivityCardComponent = (props) => {
    return (
        <div to={props.activity} className={styles.activityCard}>
            <p className={styles.gridItem1}>
                {props.clock} time: {props.time}
            </p>
            <h3 className={styles.gridItem2}>{props.activity}</h3>
            <p className={styles.gridItem3}>{props.num} Slots Left</p>
            <p className={styles.gridItem4}>F&S {props.gym}</p>
        </div>
    )
}


export default ActivityCardComponent;